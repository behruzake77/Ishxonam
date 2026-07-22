import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { 
  Floor, 
  ElevatorCar, 
  CameraPreset,
  InterAgentMessage 
} from '../../types/office';

interface BuildingCanvasProps {
  floors: Floor[];
  selectedFloorId: number;
  selectedAgentId: string | null;
  cameraPreset: CameraPreset;
  elevators: ElevatorCar[];
  messages?: InterAgentMessage[];
  graphicsQuality?: 'high' | 'medium' | 'low';
  onSelectFloor: (floorId: number) => void;
  onSelectAgent: (agentId: string) => void;
}

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};

export const BuildingCanvas: React.FC<BuildingCanvasProps> = ({
  floors,
  selectedFloorId,
  cameraPreset,
  elevators,
  graphicsQuality = 'high',
  onSelectFloor
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);

  // References to 3D objects for dynamic animation
  const elevatorMeshGroupRef = useRef<THREE.Group>(new THREE.Group());
  const floorNumbersGroupRef = useRef<THREE.Group>(new THREE.Group());

  // Target camera focus position for smooth lerp transitions
  const targetCamPosRef = useRef<THREE.Vector3>(new THREE.Vector3(45, 150, 80));
  const targetCamLookRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 150, 0));

  // Highlights & Selection Meshes
  const highlightFloorMeshRef = useRef<THREE.Mesh | null>(null);
  const hoverFloorMeshRef = useRef<THREE.Mesh | null>(null);

  // Tooltip & Hover UI State
  const [hoveredItem, setHoveredItem] = useState<{
    type: 'floor';
    id: number;
    name: string;
    roleOrDept: string;
    modelOrCapacity?: string;
    statusOrPower?: string;
  } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Keep references to prevent stale closures in animation loop
  const floorsRef = useRef<Floor[]>(floors);
  const elevatorsRef = useRef<ElevatorCar[]>(elevators);
  const graphicsQualityRef = useRef(graphicsQuality);

  // Instanced Meshes references for dynamic LOD and recycling
  const floorSlabsInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const framesInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const ledsInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const desksInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const monitorsInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const chairsInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const confTablesInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const confChairsInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const sofasInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const coffeeTablesInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const entrancesInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const numberSpritesRef = useRef<THREE.Sprite[]>([]);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    floorsRef.current = floors;
  }, [floors]);

  useEffect(() => {
    elevatorsRef.current = elevators;
  }, [elevators]);

  useEffect(() => {
    graphicsQualityRef.current = graphicsQuality;
  }, [graphicsQuality]);

  // Recycling & LOD calculation function
  const updateInstancedMeshes = useCallback((selId: number) => {
    const floorSlabsInstanced = floorSlabsInstancedRef.current;
    const framesInstanced = framesInstancedRef.current;
    const ledsInstanced = ledsInstancedRef.current;
    const desksInstanced = desksInstancedRef.current;
    const monitorsInstanced = monitorsInstancedRef.current;
    const chairsInstanced = chairsInstancedRef.current;
    const confTablesInstanced = confTablesInstancedRef.current;
    const confChairsInstanced = confChairsInstancedRef.current;
    const sofasInstanced = sofasInstancedRef.current;
    const coffeeTablesInstanced = coffeeTablesInstancedRef.current;
    const entrancesInstanced = entrancesInstancedRef.current;
    const numberSprites = numberSpritesRef.current;

    if (!floorSlabsInstanced || !framesInstanced || !ledsInstanced) return;

    const startFloor = Math.max(1, selId - 8);
    const endFloor = Math.min(100, selId + 8);
    const isMobile = isMobileDevice();
    const isLow = graphicsQualityRef.current === 'low';
    const closeThreshold = isLow ? 0 : (isMobile ? 1 : 2);
    const mediumThreshold = isLow ? 2 : (isMobile ? 3 : 5);
    const tempObj = new THREE.Object3D();

    for (let f = 1; f <= 100; f++) {
      const dist = Math.abs(f - selId);
      const isVisible = f >= startFloor && f <= endFloor;
      
      const showSlab = isVisible; // Always render floor slabs on visible floors
      const showFrame = isVisible; // Always render beams/frames on visible floors
      const showLed = isVisible; // Always render LED edges on visible floors
      const showFurniture = isVisible && dist <= closeThreshold; // Hide furniture/details on distant floors

      const yPos = (f - 1) * 3.0 + 1.5;
      const floorFloorY = yPos + 0.11;

      // 1. Slab Slab InstancedMesh
      tempObj.position.set(0, yPos, 0);
      if (showSlab) {
        tempObj.scale.set(1, 1, 1);
      } else {
        tempObj.scale.set(0, 0, 0);
      }
      tempObj.updateMatrix();
      floorSlabsInstanced.setMatrixAt(f - 1, tempObj.matrix);

      // 2. Beams / Frames InstancedMesh
      tempObj.position.set(0, yPos + 0.11, 0);
      if (showFrame) {
        tempObj.scale.set(1, 1, 1);
      } else {
        tempObj.scale.set(0, 0, 0);
      }
      tempObj.updateMatrix();
      framesInstanced.setMatrixAt(f - 1, tempObj.matrix);

      // 3. LED strip InstancedMesh
      tempObj.position.set(0, yPos - 0.11, 0);
      if (showLed) {
        tempObj.scale.set(1, 1, 1);
      } else {
        tempObj.scale.set(0, 0, 0);
      }
      tempObj.updateMatrix();
      ledsInstanced.setMatrixAt(f - 1, tempObj.matrix);

      // 4. Desks, Monitors, Chairs
      const deskPositions = [
        [-4.5, -4.5], [4.5, -4.5], [-4.5, 4.5], [4.5, 4.5]
      ];
      const chairOffsets = [
        [-3.5, -4.5], [3.5, -4.5], [-3.5, 4.5], [3.5, 4.5]
      ];
      
      deskPositions.forEach(([dx, dz], idx) => {
        const deskIdx = (f - 1) * 4 + idx;
        
        // Desk
        tempObj.position.set(dx, floorFloorY + 0.375, dz);
        if (showFurniture) {
          tempObj.scale.set(1, 1, 1);
        } else {
          tempObj.scale.set(0, 0, 0);
        }
        tempObj.updateMatrix();
        desksInstanced?.setMatrixAt(deskIdx, tempObj.matrix);

        // Monitor
        tempObj.position.set(dx, floorFloorY + 0.75 + 0.225, dz - 0.3);
        if (showFurniture) {
          tempObj.scale.set(1, 1, 1);
        } else {
          tempObj.scale.set(0, 0, 0);
        }
        tempObj.updateMatrix();
        monitorsInstanced?.setMatrixAt(deskIdx, tempObj.matrix);

        // Chair
        const [cx, cz] = chairOffsets[idx];
        tempObj.position.set(cx, floorFloorY + 0.35, cz);
        if (showFurniture) {
          tempObj.scale.set(1, 1, 1);
        } else {
          tempObj.scale.set(0, 0, 0);
        }
        tempObj.updateMatrix();
        chairsInstanced?.setMatrixAt(deskIdx, tempObj.matrix);
      });

      // 5. Conference table & chairs
      tempObj.position.set(0, floorFloorY + 0.375, -4.5);
      if (showFurniture) {
        tempObj.scale.set(1, 1, 1);
      } else {
        tempObj.scale.set(0, 0, 0);
      }
      tempObj.updateMatrix();
      confTablesInstanced?.setMatrixAt(f - 1, tempObj.matrix);

      const confChairOffsets = [
        [-1.2, -4.5], [1.2, -4.5], [0, -3.3], [0, -5.7]
      ];
      confChairOffsets.forEach(([cx, cz], idx) => {
        tempObj.position.set(cx, floorFloorY + 0.35, cz);
        if (showFurniture) {
          tempObj.scale.set(1, 1, 1);
        } else {
          tempObj.scale.set(0, 0, 0);
        }
        tempObj.updateMatrix();
        confChairsInstanced?.setMatrixAt(((f - 1) * 4) + idx, tempObj.matrix);
      });

      // 6. Sofas & Coffee tables
      for (let sIdx = 0; sIdx < 2; sIdx++) {
        const sofaIdx = (f - 1) * 2 + sIdx;
        tempObj.position.set(-4.5, floorFloorY + 0.25, sIdx === 0 ? 1.2 : -1.2);
        if (showFurniture) {
          tempObj.scale.set(1, 1, 1);
        } else {
          tempObj.scale.set(0, 0, 0);
        }
        tempObj.updateMatrix();
        sofasInstanced?.setMatrixAt(sofaIdx, tempObj.matrix);
      }

      tempObj.position.set(-4.5, floorFloorY + 0.2, 0);
      if (showFurniture) {
        tempObj.scale.set(1, 1, 1);
      } else {
        tempObj.scale.set(0, 0, 0);
      }
      tempObj.updateMatrix();
      coffeeTablesInstanced?.setMatrixAt(f - 1, tempObj.matrix);

      // 7. Elevator entrance frames
      for (let eIdx = 0; eIdx < 2; eIdx++) {
        const entIdx = (f - 1) * 2 + eIdx;
        tempObj.position.set(eIdx === 0 ? -1.5 : 1.5, floorFloorY + 1.25, 1.26);
        if (showFurniture) {
          tempObj.scale.set(1, 1, 1);
        } else {
          tempObj.scale.set(0, 0, 0);
        }
        tempObj.updateMatrix();
        entrancesInstanced?.setMatrixAt(entIdx, tempObj.matrix);
      }

      // 8. Sprites
      if (numberSprites[f - 1]) {
        numberSprites[f - 1].visible = isVisible && dist <= 5;
      }
    }

    floorSlabsInstanced.instanceMatrix.needsUpdate = true;
    framesInstanced.instanceMatrix.needsUpdate = true;
    ledsInstanced.instanceMatrix.needsUpdate = true;
    if (desksInstanced) desksInstanced.instanceMatrix.needsUpdate = true;
    if (monitorsInstanced) monitorsInstanced.instanceMatrix.needsUpdate = true;
    if (chairsInstanced) chairsInstanced.instanceMatrix.needsUpdate = true;
    if (confTablesInstanced) confTablesInstanced.instanceMatrix.needsUpdate = true;
    if (confChairsInstanced) confChairsInstanced.instanceMatrix.needsUpdate = true;
    if (sofasInstanced) sofasInstanced.instanceMatrix.needsUpdate = true;
    if (coffeeTablesInstanced) coffeeTablesInstanced.instanceMatrix.needsUpdate = true;
    if (entrancesInstanced) entrancesInstanced.instanceMatrix.needsUpdate = true;
  }, []);

  // Update visible floors dynamically
  useEffect(() => {
    if (initialized) {
      updateInstancedMeshes(selectedFloorId);
    }
  }, [selectedFloorId, initialized, updateInstancedMeshes]);

  // 1. Initialize Scene & Three.js Engine
  useEffect(() => {
    if (!mountRef.current) return;

    const isMobile = isMobileDevice();
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#020617');
    scene.fog = new THREE.FogExp2('#020617', 0.0025);
    sceneRef.current = scene;

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 1000);
    camera.position.set(45, 150, 80);
    cameraRef.current = camera;

    // Renderer Setup - Disable antialias on mobile for extreme performance
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile && graphicsQualityRef.current !== 'low', 
      alpha: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    
    // Cap pixel ratio to adaptive range (0.8 - 1.3 on mobile)
    const minDPR = isMobile ? 0.8 : 1.0;
    const maxDPR = isMobile ? 1.3 : 2.0;
    renderer.setPixelRatio(Math.min(maxDPR, Math.max(minDPR, window.devicePixelRatio)));

    // Disable HDR Environment tone mapping on mobile
    if (isMobile) {
      renderer.toneMapping = THREE.NoToneMapping;
    } else {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
    }

    renderer.shadowMap.enabled = !isMobile && graphicsQualityRef.current !== 'low';
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls Setup (Zoom minDistance set to 12.0 to prevent clipping through building)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controls.minDistance = 12.0;
    controls.maxDistance = 400;
    controls.target.set(0, 150, 0);
    controlsRef.current = controls;

    // Lighting Setup - Ambient + Directional Sunlight
    const ambientLight = new THREE.AmbientLight('#1e293b', 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#fffbeb', 3.5);
    sunLight.position.set(100, 250, 100);
    // Lower shadow quality on mobile or disable shadow casting
    sunLight.castShadow = !isMobile && graphicsQualityRef.current !== 'low';
    sunLight.shadow.mapSize.width = isMobile ? 512 : (graphicsQualityRef.current === 'high' ? 2048 : 1024);
    sunLight.shadow.mapSize.height = isMobile ? 512 : (graphicsQualityRef.current === 'high' ? 2048 : 1024);
    scene.add(sunLight);

    // Dynamic blue point light from the core
    const coreLight = new THREE.PointLight('#06b6d4', 4, 150);
    coreLight.position.set(0, 150, 0);
    scene.add(coreLight);

    // Groups
    scene.add(elevatorMeshGroupRef.current);
    floorNumbersGroupRef.current.visible = graphicsQualityRef.current !== 'low';
    scene.add(floorNumbersGroupRef.current);

    // Glass Floor Slab InstancedMesh (100 floors)
    const floorSlabGeo = new THREE.BoxGeometry(16, 0.22, 16);
    // Disable expensive physical reflections/transmissions on mobile
    const floorSlabMat = isMobile 
      ? new THREE.MeshStandardMaterial({
          color: '#0284c7',
          transparent: true,
          opacity: 0.55,
          roughness: 0.8,
          metalness: 0.1
        })
      : new THREE.MeshPhysicalMaterial({
          color: '#0284c7',
          transparent: true,
          opacity: 0.35,
          roughness: 0.1,
          metalness: 0.9,
          transmission: 0.7,
          ior: 1.5,
          side: THREE.DoubleSide
        });
    const floorSlabsInstanced = new THREE.InstancedMesh(floorSlabGeo, floorSlabMat, 100);

    // Steel Horizontal Beam Frames InstancedMesh (100 floors)
    const frameGeo = new THREE.BoxGeometry(16.15, 0.1, 16.15);
    const frameMat = new THREE.MeshStandardMaterial({
      color: '#475569',
      metalness: isMobile ? 0.2 : 0.85,
      roughness: isMobile ? 0.8 : 0.2
    });
    const framesInstanced = new THREE.InstancedMesh(frameGeo, frameMat, 100);

    // Blue LED Edge Strip InstancedMesh (100 floors)
    const ledGeo = new THREE.BoxGeometry(16.22, 0.05, 16.22);
    const ledMat = new THREE.MeshBasicMaterial({
      color: '#38bdf8'
    });
    const ledsInstanced = new THREE.InstancedMesh(ledGeo, ledMat, 100);

    // 1. Office desks: 4 per floor = 400 instances
    const deskGeo = new THREE.BoxGeometry(2.0, 0.75, 1.0);
    const deskMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.7, metalness: 0.1 });
    const desksInstanced = new THREE.InstancedMesh(deskGeo, deskMat, 400);

    // 2. Office monitors: 4 per floor = 400 instances
    const monitorGeo = new THREE.BoxGeometry(0.8, 0.45, 0.05);
    const monitorMat = new THREE.MeshBasicMaterial({ color: '#06b6d4' });
    const monitorsInstanced = new THREE.InstancedMesh(monitorGeo, monitorMat, 400);

    // 3. Office chairs: 4 per floor = 400 instances
    const chairGeo = new THREE.BoxGeometry(0.5, 0.7, 0.5);
    const chairMat = new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.8 });
    const chairsInstanced = new THREE.InstancedMesh(chairGeo, chairMat, 400);

    // 4. Conference tables (Meeting Area): 1 per floor = 100 instances
    const confTableGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.75, 8); // simplified cylinder segment count to 8
    const confTableMat = new THREE.MeshStandardMaterial({ color: '#0f172a', metalness: isMobile ? 0.2 : 0.8, roughness: 0.4 });
    const confTablesInstanced = new THREE.InstancedMesh(confTableGeo, confTableMat, 100);

    // 5. Conference chairs: 4 per floor = 400 instances
    const confChairsInstanced = new THREE.InstancedMesh(chairGeo, chairMat, 400);

    // 6. Sofas (Lounge Area): 2 per floor = 200 instances
    const sofaGeo = new THREE.BoxGeometry(1.6, 0.5, 0.7);
    const sofaMat = new THREE.MeshStandardMaterial({ color: '#1e3a8a', roughness: 0.7 });
    const sofasInstanced = new THREE.InstancedMesh(sofaGeo, sofaMat, 200);

    // 7. Coffee tables: 1 per floor = 100 instances
    const coffeeTableGeo = new THREE.BoxGeometry(0.9, 0.4, 0.6);
    const coffeeTableMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.6, metalness: 0.2 });
    const coffeeTablesInstanced = new THREE.InstancedMesh(coffeeTableGeo, coffeeTableMat, 100);

    // 8. Elevator entrance frames: 2 per floor = 200 instances
    const entranceGeo = new THREE.BoxGeometry(2.4, 2.5, 0.1);
    const entranceMat = new THREE.MeshStandardMaterial({
      color: '#06b6d4',
      transparent: true,
      opacity: 0.35,
      metalness: 0.2,
      roughness: 0.6
    });
    const entrancesInstanced = new THREE.InstancedMesh(entranceGeo, entranceMat, 200);

    scene.add(floorSlabsInstanced);
    scene.add(framesInstanced);
    scene.add(ledsInstanced);
    scene.add(desksInstanced);
    scene.add(monitorsInstanced);
    scene.add(chairsInstanced);
    scene.add(confTablesInstanced);
    scene.add(confChairsInstanced);
    scene.add(sofasInstanced);
    scene.add(coffeeTablesInstanced);
    scene.add(entrancesInstanced);

    floorSlabsInstancedRef.current = floorSlabsInstanced;
    framesInstancedRef.current = framesInstanced;
    ledsInstancedRef.current = ledsInstanced;
    desksInstancedRef.current = desksInstanced;
    monitorsInstancedRef.current = monitorsInstanced;
    chairsInstancedRef.current = chairsInstanced;
    confTablesInstancedRef.current = confTablesInstanced;
    confChairsInstancedRef.current = confChairsInstanced;
    sofasInstancedRef.current = sofasInstanced;
    coffeeTablesInstancedRef.current = coffeeTablesInstanced;
    entrancesInstancedRef.current = entrancesInstanced;

    // Steel Vertical Corner Pillars (Long continuous cylinders)
    const cornerPositions = [
      [-8.1, -8.1], [8.1, -8.1], [-8.1, 8.1], [8.1, 8.1]
    ];
    cornerPositions.forEach(([cx, cz]) => {
      const colGeo = new THREE.CylinderGeometry(0.18, 0.18, 300, 6); // reduced cylinder faces to 6
      const colMat = new THREE.MeshStandardMaterial({ color: '#1e293b', metalness: isMobile ? 0.1 : 0.8, roughness: 0.5 });
      const colMesh = new THREE.Mesh(colGeo, colMat);
      colMesh.position.set(cx, 150, cz);
      scene.add(colMesh);
    });

    // Two transparent elevator shafts running full height
    const shaftGeo = new THREE.BoxGeometry(2.5, 300, 2.5);
    const shaftMat = isMobile 
      ? new THREE.MeshStandardMaterial({
          color: '#06b6d4',
          transparent: true,
          opacity: 0.15,
          roughness: 0.8
        })
      : new THREE.MeshPhysicalMaterial({
          color: '#06b6d4',
          transparent: true,
          opacity: 0.12,
          roughness: 0.1,
          metalness: 0.9,
          transmission: 0.85,
          ior: 1.5,
          side: THREE.DoubleSide
        });
    
    const shaftA = new THREE.Mesh(shaftGeo, shaftMat);
    shaftA.position.set(-1.5, 150, 0);
    scene.add(shaftA);

    const shaftB = new THREE.Mesh(shaftGeo, shaftMat);
    shaftB.position.set(1.5, 150, 0);
    scene.add(shaftB);

    // Instanced Elevator Cars Group Initial Setup
    const carGeo = new THREE.BoxGeometry(2.2, 2.5, 2.2);
    const carMat = isMobile
      ? new THREE.MeshStandardMaterial({
          color: '#06b6d4',
          transparent: true,
          opacity: 0.7,
          roughness: 0.8
        })
      : new THREE.MeshPhysicalMaterial({
          color: '#06b6d4',
          transparent: true,
          opacity: 0.65,
          roughness: 0.1,
          metalness: 0.8,
          emissive: '#0891b2',
          emissiveIntensity: 0.5
        });

    const carMeshA = new THREE.Mesh(carGeo, carMat);
    carMeshA.name = 'elevator_car_A';
    carMeshA.position.set(-1.5, 10, 0);
    elevatorMeshGroupRef.current.add(carMeshA);

    const carMeshB = new THREE.Mesh(carGeo, carMat);
    carMeshB.name = 'elevator_car_B';
    carMeshB.position.set(1.5, 150, 0);
    elevatorMeshGroupRef.current.add(carMeshB);

    // Billboarding Floor Numbers (1-100) using Sprites
    const numberSprites: THREE.Sprite[] = [];
    for (let i = 1; i <= 100; i++) {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, 128, 64);
        ctx.font = 'bold 38px Rajdhani, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`FL ${i}`, 64, 32);
      }
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(3, 1.5, 1);
      sprite.position.set(9.5, (i - 1) * 3 + 1.5, 0);
      floorNumbersGroupRef.current.add(sprite);
      numberSprites.push(sprite);
    }
    numberSpritesRef.current = numberSprites;

    // Selected Floor Highlight Mesh (wireframe box)
    const hlGeo = new THREE.BoxGeometry(16.5, 0.4, 16.5);
    const hlMat = new THREE.MeshBasicMaterial({ color: '#f59e0b', wireframe: true });
    const hlMesh = new THREE.Mesh(hlGeo, hlMat);
    hlMesh.visible = false;
    scene.add(hlMesh);
    highlightFloorMeshRef.current = hlMesh;

    // Hover Floor Highlight Mesh (wireframe box)
    const hoverGeo = new THREE.BoxGeometry(16.4, 0.35, 16.4);
    const hoverMat = new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true, transparent: true, opacity: 0.8 });
    const hoverMesh = new THREE.Mesh(hoverGeo, hoverMat);
    hoverMesh.visible = false;
    scene.add(hoverMesh);
    hoverFloorMeshRef.current = hoverMesh;

    // Post-processing Bloom Setup - Lower strength by 70% on mobile
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      isMobile ? 0.39 : 1.3,   // 70% reduction on mobile
      0.45,  // radius
      0.85   // threshold
    );
    composer.addPass(bloomPass);
    composerRef.current = composer;

    // Raycasting & Click / Hover handlers
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);

      const floorHits = raycaster.intersectObject(floorSlabsInstanced);
      if (floorHits.length > 0 && floorHits[0].instanceId !== undefined) {
        const floorId = floorHits[0].instanceId + 1;
        onSelectFloor(floorId);
      }
    };

    const handlePointerMove = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const mX = event.clientX - rect.left;
      const mY = event.clientY - rect.top;
      setTooltipPos({ x: mX + 15, y: mY + 15 });

      mouse.x = (mX / rect.width) * 2 - 1;
      mouse.y = -(mY / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);

      const floorHits = raycaster.intersectObject(floorSlabsInstanced);
      if (floorHits.length > 0 && floorHits[0].instanceId !== undefined) {
        const floorId = floorHits[0].instanceId + 1;
        const floorObj = floorsRef.current.find(f => f.id === floorId);
        if (floorObj) {
          setHoveredItem({
            type: 'floor',
            id: floorId,
            name: `Floor ${floorId}`,
            roleOrDept: floorObj.departmentName,
            modelOrCapacity: `${floorObj.agents.length} Active Nodes`,
            statusOrPower: `${floorObj.energyUsageKW} kW`
          });

          if (hoverFloorMeshRef.current) {
            const yPos = (floorId - 1) * 3 + 1.5;
            hoverFloorMeshRef.current.position.set(0, yPos, 0);
            hoverFloorMeshRef.current.visible = true;
          }
          return;
        }
      }

      setHoveredItem(null);
      if (hoverFloorMeshRef.current) hoverFloorMeshRef.current.visible = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', handlePointerDown);
    domElement.addEventListener('pointermove', handlePointerMove);

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current || !composerRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
      composerRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Tell React setup is complete to update matrices first time
    setInitialized(true);

    // Animation Loop (Adaptive Rendering - Render on Demand)
    let animFrameId: number;
    let frameIdleCount = 0;
    const lastCamPos = new THREE.Vector3();
    const lastCamLook = new THREE.Vector3();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      let needsRender = false;

      // 1. Smooth Camera target Lerp
      if (cameraRef.current && controlsRef.current) {
        const distToTargetPos = cameraRef.current.position.distanceTo(targetCamPosRef.current);
        const distToTargetLook = controlsRef.current.target.distanceTo(targetCamLookRef.current);
        
        if (distToTargetPos > 0.005 || distToTargetLook > 0.005) {
          cameraRef.current.position.lerp(targetCamPosRef.current, 0.04);
          controlsRef.current.target.lerp(targetCamLookRef.current, 0.04);
          needsRender = true;
        }
        
        // Update controls (damping forces require frames to settle)
        if (controlsRef.current.update() || controlsRef.current.state !== -1) {
          needsRender = true;
        }
      }

      // 2. Animate Elevator Cars
      const carA = elevatorMeshGroupRef.current.getObjectByName('elevator_car_A');
      const carB = elevatorMeshGroupRef.current.getObjectByName('elevator_car_B');

      if (carA && elevatorsRef.current[0]) {
        const distA = Math.abs(carA.position.y - elevatorsRef.current[0].posY);
        if (distA > 0.01) {
          carA.position.y = THREE.MathUtils.lerp(carA.position.y, elevatorsRef.current[0].posY, 0.1);
          needsRender = true;
        }
      }
      if (carB && elevatorsRef.current[1]) {
        const distB = Math.abs(carB.position.y - elevatorsRef.current[1].posY);
        if (distB > 0.01) {
          carB.position.y = THREE.MathUtils.lerp(carB.position.y, elevatorsRef.current[1].posY, 0.1);
          needsRender = true;
        }
      }

      // 3. Detect direct interactive camera manipulation (rotation, zoom)
      if (cameraRef.current) {
        if (cameraRef.current.position.distanceTo(lastCamPos) > 0.001) {
          needsRender = true;
          lastCamPos.copy(cameraRef.current.position);
        }
        if (controlsRef.current && controlsRef.current.target.distanceTo(lastCamLook) > 0.001) {
          needsRender = true;
          lastCamLook.copy(controlsRef.current.target);
        }
      }

      if (needsRender) {
        frameIdleCount = 0;
      } else {
        frameIdleCount++;
      }

      // Render only if there was active movement in the last 45 frames (allow physics/damping to settle completely)
      if (frameIdleCount < 45) {
        if (graphicsQualityRef.current === 'high' && composerRef.current && !isMobile) {
          composerRef.current.render();
        } else {
          rendererRef.current?.render(scene, camera);
        }
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('pointerdown', handlePointerDown);
      domElement.removeEventListener('pointermove', handlePointerMove);
      
      // Clean up ThreeJS meshes/textures
      floorSlabGeo.dispose();
      floorSlabMat.dispose();
      floorSlabsInstanced.dispose();
      frameGeo.dispose();
      frameMat.dispose();
      framesInstanced.dispose();
      ledGeo.dispose();
      ledMat.dispose();
      ledsInstanced.dispose();

      deskGeo.dispose();
      deskMat.dispose();
      desksInstanced.dispose();
      monitorGeo.dispose();
      monitorMat.dispose();
      monitorsInstanced.dispose();
      chairGeo.dispose();
      chairMat.dispose();
      chairsInstanced.dispose();
      confTableGeo.dispose();
      confTableMat.dispose();
      confTablesInstanced.dispose();
      confChairsInstanced.dispose();
      sofaGeo.dispose();
      sofaMat.dispose();
      sofasInstanced.dispose();
      coffeeTableGeo.dispose();
      coffeeTableMat.dispose();
      coffeeTablesInstanced.dispose();
      entranceGeo.dispose();
      entranceMat.dispose();
      entrancesInstanced.dispose();

      carGeo.dispose();
      carMat.dispose();
      shaftGeo.dispose();
      shaftMat.dispose();
      hlGeo.dispose();
      hlMat.dispose();
      hoverGeo.dispose();
      hoverMat.dispose();

      numberSprites.forEach(sprite => {
        sprite.material.map?.dispose();
        sprite.material.dispose();
      });

      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
    };
  }, []);

  // Handle Graphics Quality changes dynamically (Milestone 2C Mobile Optimization)
  useEffect(() => {
    if (!rendererRef.current || !sceneRef.current) return;

    const isMobile = isMobileDevice();
    const isLow = graphicsQuality === 'low';
    const isMedium = graphicsQuality === 'medium';
    const isHigh = graphicsQuality === 'high';

    // 1. Cap pixel ratio to save GPU power / memory
    const minDPR = isMobile ? 0.8 : 1.0;
    const maxDPR = isLow ? 1.0 : isMedium ? 1.3 : 2.0;
    rendererRef.current.setPixelRatio(Math.min(maxDPR, Math.max(minDPR, window.devicePixelRatio)));

    // 2. Toggle Shadow Maps dynamically
    const enableShadows = !isLow && !isMobile;
    rendererRef.current.shadowMap.enabled = enableShadows;

    // Traverse scene to toggle shadows & update materials
    sceneRef.current.traverse((child) => {
      if (child instanceof THREE.DirectionalLight) {
        child.castShadow = enableShadows;
        child.shadow.mapSize.width = isHigh ? 2048 : 1024;
        child.shadow.mapSize.height = isHigh ? 2048 : 1024;
        child.shadow.map?.dispose(); // Clear shadow map buffer
        child.shadow.map = null;
      }
      if (child instanceof THREE.Mesh) {
        child.castShadow = enableShadows;
        child.receiveShadow = enableShadows;
        if (child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((m) => {
            m.needsUpdate = true;
          });
        }
      }
    });

    // 3. Update visibility status (low quality hides sprites / furniture completely)
    updateInstancedMeshes(selectedFloorId);
  }, [graphicsQuality, selectedFloorId, updateInstancedMeshes]);

  // Handle Selected Floor Highlight & Camera Focus
  useEffect(() => {
    const yPos = (selectedFloorId - 1) * 3 + 1.5;

    if (highlightFloorMeshRef.current) {
      highlightFloorMeshRef.current.position.set(0, yPos, 0);
      highlightFloorMeshRef.current.visible = true;
    }

    if (cameraPreset === 'floor_focus') {
      targetCamPosRef.current.set(22, yPos + 6, 26);
      targetCamLookRef.current.set(0, yPos, 0);
    } else if (cameraPreset === 'full_skyscraper') {
      targetCamPosRef.current.set(45, 150, 80);
      targetCamLookRef.current.set(0, 150, 0);
    } else if (cameraPreset === 'sky_lounge') {
      targetCamPosRef.current.set(24, 290, 28);
      targetCamLookRef.current.set(0, 285, 0);
    } else if (cameraPreset === 'interior_cutaway') {
      targetCamPosRef.current.set(0, yPos + 18, 0.1);
      targetCamLookRef.current.set(0, yPos, 0);
    }
  }, [selectedFloorId, cameraPreset]);

  return (
    <div ref={mountRef} className="relative w-full h-full cursor-grab active:cursor-grabbing select-none font-sans">
      <div className="absolute top-4 left-4 pointer-events-none flex flex-col gap-2 z-10">
        <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-[10px] text-cyan-400 font-mono flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          SYSTEM HQ: MOBILE ADAPTIVE 3D RENDERER ACTIVE
        </div>
      </div>

      {hoveredItem && (
        <div 
          className="absolute z-20 pointer-events-none p-3 rounded-xl border border-cyan-500/40 bg-slate-950/90 backdrop-blur-md text-xs font-mono text-white shadow-[0_4px_20px_rgba(6,182,212,0.3)] animate-fadeIn transition-all"
          style={{ 
            left: `${tooltipPos.x}px`, 
            top: `${tooltipPos.y}px`,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-extrabold text-blue-100">{hoveredItem.name}</span>
          </div>
          <div className="text-[10px] text-blue-300 mb-0.5">{hoveredItem.roleOrDept}</div>
          {hoveredItem.modelOrCapacity && (
            <div className="text-[9px] text-cyan-400/90">Spec/Nodes: {hoveredItem.modelOrCapacity}</div>
          )}
          {hoveredItem.statusOrPower && (
            <div className="text-[9px] text-emerald-400/90 mt-0.5">Status/Load: {hoveredItem.statusOrPower}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BuildingCanvas;
