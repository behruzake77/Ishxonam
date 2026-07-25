import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { 
  Floor, 
  AIAgent,
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
  onEnterCEOWalk?: (floorId: number) => void;
}

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};

// Geometry factories for agent avatar shapes
function createAgentGeometry(shape: AIAgent['avatarShape']): THREE.BufferGeometry {
  switch (shape) {
    case 'sphere': return new THREE.SphereGeometry(0.35, 12, 8);
    case 'cube': return new THREE.BoxGeometry(0.5, 0.5, 0.5);
    case 'octahedron': return new THREE.OctahedronGeometry(0.35);
    case 'torus': return new THREE.TorusGeometry(0.25, 0.1, 8, 16);
    case 'pyramid': return new THREE.ConeGeometry(0.35, 0.7, 4);
    case 'cylinder': return new THREE.CylinderGeometry(0.25, 0.25, 0.5, 8);
    default: return new THREE.SphereGeometry(0.35, 12, 8);
  }
}

export const BuildingCanvas: React.FC<BuildingCanvasProps> = ({
  floors,
  selectedFloorId,
  selectedAgentId,
  cameraPreset,
  elevators,
  graphicsQuality = 'high',
  onSelectFloor,
  onSelectAgent
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);

  // Groups
  const elevatorMeshGroupRef = useRef<THREE.Group>(new THREE.Group());
  const floorNumbersGroupRef = useRef<THREE.Group>(new THREE.Group());
  const agentMeshGroupRef = useRef<THREE.Group>(new THREE.Group());
  const interiorGroupRef = useRef<THREE.Group>(new THREE.Group()); // walls, glass, etc
  const ceoAvatarGroupRef = useRef<THREE.Group>(new THREE.Group());

  // CEO walk mode refs
  const ceoPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const ceoVelocityRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const keysPressedRef = useRef<Set<string>>(new Set());
  const joystickRef = useRef<{ x: number; z: number }>({ x: 0, z: 0 });

  // Target camera focus
  const targetCamPosRef = useRef<THREE.Vector3>(new THREE.Vector3(45, 150, 80));
  const targetCamLookRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 150, 0));

  // Highlight meshes
  const highlightFloorMeshRef = useRef<THREE.Mesh | null>(null);
  const hoverFloorMeshRef = useRef<THREE.Mesh | null>(null);

  // CEO avatar mesh ref
  const ceoMeshRef = useRef<THREE.Mesh | null>(null);

  // State refs
  const floorsRef = useRef<Floor[]>(floors);
  const elevatorsRef = useRef<ElevatorCar[]>(elevators);
  const graphicsQualityRef = useRef(graphicsQuality);
  const selectedFloorIdRef = useRef(selectedFloorId);
  const cameraPresetRef = useRef(cameraPreset);

  // InstancedMesh refs
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
  const plantsInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const wallPanelsInstancedRef = useRef<THREE.InstancedMesh | null>(null);
  const numberSpritesRef = useRef<THREE.Sprite[]>([]);

  // Tooltip state
  const [hoveredItem, setHoveredItem] = useState<{
    type: 'floor' | 'agent';
    id: number | string;
    name: string;
    roleOrDept: string;
    modelOrCapacity?: string;
    statusOrPower?: string;
  } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [webglError, setWebglError] = useState<string | null>(null);
  const [showJoystick, setShowJoystick] = useState(false);

  const [initialized, setInitialized] = useState(false);

  // Keep refs updated
  useEffect(() => { floorsRef.current = floors; }, [floors]);
  useEffect(() => { elevatorsRef.current = elevators; }, [elevators]);
  useEffect(() => { graphicsQualityRef.current = graphicsQuality; }, [graphicsQuality]);
  useEffect(() => { selectedFloorIdRef.current = selectedFloorId; }, [selectedFloorId]);
  useEffect(() => { cameraPresetRef.current = cameraPreset; }, [cameraPreset]);

  // ==================== CEO WALK MODE - Keyboard ====================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (cameraPresetRef.current === 'ceo_walk') {
        keysPressedRef.current.add(e.key.toLowerCase());
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressedRef.current.delete(e.key.toLowerCase());
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // ==================== CEO WALK MODE - Touch Joystick ====================
  const handleJoystickStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setShowJoystick(true);
  }, []);

  const handleJoystickMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (!e.touches[0]) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.touches[0].clientX - centerX) / (rect.width / 2);
    const dy = (e.touches[0].clientY - centerY) / (rect.height / 2);
    joystickRef.current = { x: Math.max(-1, Math.min(1, dx)), z: Math.max(-1, Math.min(1, -dy)) };
  }, []);

  const handleJoystickEnd = useCallback(() => {
    joystickRef.current = { x: 0, z: 0 };
    setShowJoystick(false);
  }, []);

  // ==================== LOD Update ====================
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
    const plantsInstanced = plantsInstancedRef.current;
    const wallPanelsInstanced = wallPanelsInstancedRef.current;
    const numberSprites = numberSpritesRef.current;

    if (!floorSlabsInstanced || !framesInstanced || !ledsInstanced) return;

    const startFloor = Math.max(1, selId - 8);
    const endFloor = Math.min(100, selId + 8);
    const isMob = isMobileDevice();
    const isLow = graphicsQualityRef.current === 'low';
    const closeThreshold = isLow ? 0 : (isMob ? 1 : 2);
    const tempObj = new THREE.Object3D();

    for (let f = 1; f <= 100; f++) {
      const dist = Math.abs(f - selId);
      const isVisible = f >= startFloor && f <= endFloor;
      const showFurniture = isVisible && dist <= closeThreshold;
      const showInterior = isVisible && dist <= closeThreshold + 1;

      const yPos = (f - 1) * 3.0 + 1.5;
      const floorFloorY = yPos + 0.11;

      // Floor slab
      tempObj.position.set(0, yPos, 0);
      tempObj.scale.set(isVisible ? 1 : 0, isVisible ? 1 : 0, isVisible ? 1 : 0);
      tempObj.updateMatrix();
      floorSlabsInstanced.setMatrixAt(f - 1, tempObj.matrix);

      // Frame
      tempObj.position.set(0, yPos + 0.11, 0);
      tempObj.scale.set(isVisible ? 1 : 0, isVisible ? 1 : 0, isVisible ? 1 : 0);
      tempObj.updateMatrix();
      framesInstanced.setMatrixAt(f - 1, tempObj.matrix);

      // LED strip
      tempObj.position.set(0, yPos - 0.11, 0);
      tempObj.scale.set(isVisible ? 1 : 0, isVisible ? 1 : 0, isVisible ? 1 : 0);
      tempObj.updateMatrix();
      ledsInstanced.setMatrixAt(f - 1, tempObj.matrix);

      // 4 Desks
      const deskPositions = [[-4.5, -4.5], [4.5, -4.5], [-4.5, 4.5], [4.5, 4.5]];
      const chairOffsets = [[-3.5, -4.5], [3.5, -4.5], [-3.5, 4.5], [3.5, 4.5]];
      
      deskPositions.forEach(([dx, dz], idx) => {
        const deskIdx = (f - 1) * 4 + idx;
        // Desk
        tempObj.position.set(dx, floorFloorY + 0.375, dz);
        tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
        tempObj.updateMatrix();
        desksInstanced?.setMatrixAt(deskIdx, tempObj.matrix);
        // Monitor on desk
        tempObj.position.set(dx, floorFloorY + 0.75 + 0.225, dz - 0.3);
        tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
        tempObj.updateMatrix();
        monitorsInstanced?.setMatrixAt(deskIdx, tempObj.matrix);
        // Monitor glow screen (emissive blue)
        // Chair
        const [cx, cz] = chairOffsets[idx];
        tempObj.position.set(cx, floorFloorY + 0.35, cz);
        tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
        tempObj.updateMatrix();
        chairsInstanced?.setMatrixAt(deskIdx, tempObj.matrix);
      });

      // Conference table & chairs
      tempObj.position.set(0, floorFloorY + 0.375, -4.5);
      tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
      tempObj.updateMatrix();
      confTablesInstanced?.setMatrixAt(f - 1, tempObj.matrix);

      const confChairOffsets = [[-1.2, -4.5], [1.2, -4.5], [0, -3.3], [0, -5.7]];
      confChairOffsets.forEach(([cx, cz], idx) => {
        tempObj.position.set(cx, floorFloorY + 0.35, cz);
        tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
        tempObj.updateMatrix();
        confChairsInstanced?.setMatrixAt(((f - 1) * 4) + idx, tempObj.matrix);
      });

      // Sofas & Coffee table
      for (let sIdx = 0; sIdx < 2; sIdx++) {
        tempObj.position.set(-4.5, floorFloorY + 0.25, sIdx === 0 ? 1.2 : -1.2);
        tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
        tempObj.updateMatrix();
        sofasInstanced?.setMatrixAt((f - 1) * 2 + sIdx, tempObj.matrix);
      }
      tempObj.position.set(-4.5, floorFloorY + 0.2, 0);
      tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
      tempObj.updateMatrix();
      coffeeTablesInstanced?.setMatrixAt(f - 1, tempObj.matrix);

      // Elevator entrance frames
      for (let eIdx = 0; eIdx < 2; eIdx++) {
        tempObj.position.set(eIdx === 0 ? -1.5 : 1.5, floorFloorY + 1.25, 1.26);
        tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
        tempObj.updateMatrix();
        entrancesInstanced?.setMatrixAt((f - 1) * 2 + eIdx, tempObj.matrix);
      }

      // Plants (2 per floor near lounge)
      for (let pIdx = 0; pIdx < 2; pIdx++) {
        const pz = pIdx === 0 ? -1.2 : 1.2;
        tempObj.position.set(-6, floorFloorY + 0.3, pz);
        tempObj.scale.set(showFurniture ? 1 : 0, showFurniture ? 1 : 0, showFurniture ? 1 : 0);
        tempObj.updateMatrix();
        plantsInstanced?.setMatrixAt((f - 1) * 2 + pIdx, tempObj.matrix);
      }

      // Wall panels (4 walls per floor - glass partitions)
      // North wall (behind conference area)
      tempObj.position.set(0, floorFloorY + 1.25, -6.5);
      tempObj.scale.set(showInterior ? 1 : 0, showInterior ? 1 : 0, showInterior ? 1 : 0);
      tempObj.updateMatrix();
      wallPanelsInstanced?.setMatrixAt((f - 1) * 4 + 0, tempObj.matrix);
      // South wall (entrance side)
      tempObj.position.set(0, floorFloorY + 1.25, 6.5);
      tempObj.scale.set(showInterior ? 1 : 0, showInterior ? 1 : 0, showInterior ? 1 : 0);
      tempObj.updateMatrix();
      wallPanelsInstanced?.setMatrixAt((f - 1) * 4 + 1, tempObj.matrix);
      // West wall (lounge side)
      tempObj.position.set(-7, floorFloorY + 1.25, 0);
      tempObj.scale.set(showInterior ? 0.1 : 0, showInterior ? 2.5 : 0, showInterior ? 13 : 0);
      tempObj.updateMatrix();
      wallPanelsInstanced?.setMatrixAt((f - 1) * 4 + 2, tempObj.matrix);
      // East wall (opposite lounge)
      tempObj.position.set(7, floorFloorY + 1.25, 0);
      tempObj.scale.set(showInterior ? 0.1 : 0, showInterior ? 2.5 : 0, showInterior ? 13 : 0);
      tempObj.updateMatrix();
      wallPanelsInstanced?.setMatrixAt((f - 1) * 4 + 3, tempObj.matrix);

      // Sprites
      if (numberSprites[f - 1]) {
        numberSprites[f - 1].visible = isVisible && dist <= 5;
      }
    }

    // Mark all matrices as needing update
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
    if (plantsInstanced) plantsInstanced.instanceMatrix.needsUpdate = true;
    if (wallPanelsInstanced) wallPanelsInstanced.instanceMatrix.needsUpdate = true;
  }, []);

  // Update on floor change
  useEffect(() => {
    if (initialized) updateInstancedMeshes(selectedFloorId);
  }, [selectedFloorId, initialized, updateInstancedMeshes]);

  // ==================== Update Agent 3D Meshes ====================
  const updateAgentMeshes = useCallback(() => {
    // Clear old agent meshes
    while (agentMeshGroupRef.current.children.length > 0) {
      const child = agentMeshGroupRef.current.children[0];
      agentMeshGroupRef.current.remove(child);
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (child.material instanceof THREE.Material) child.material.dispose();
      }
    }

    const selId = selectedFloorIdRef.current;
    const isMob = isMobileDevice();
    const startFloor = Math.max(1, selId - (isMob ? 1 : 2));
    const endFloor = Math.min(100, selId + (isMob ? 1 : 2));

    for (let f = startFloor; f <= endFloor; f++) {
      const floorObj = floorsRef.current.find(fl => fl.id === f);
      if (!floorObj) continue;

      for (const agent of floorObj.agents) {
        const geo = createAgentGeometry(agent.avatarShape);
        const mat = new THREE.MeshStandardMaterial({
          color: agent.avatarColor,
          emissive: agent.avatarColor,
          emissiveIntensity: 0.3,
          roughness: 0.4,
          metalness: 0.6
        });

        const mesh = new THREE.Mesh(geo, mat);
        // Position agent at their pos (which is updated by simulation)
        mesh.position.set(agent.pos.x, agent.pos.y, agent.pos.z);
        mesh.scale.set(0.6, 0.6, 0.6);
        
        // Add label sprite above agent
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = 'rgba(0,0,0,0)';
          ctx.fillRect(0, 0, 256, 64);
          ctx.font = 'bold 22px Rajdhani, sans-serif';
          ctx.fillStyle = agent.avatarColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(agent.name.split(' ')[0], 128, 32);
        }
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.set(1.5, 0.4, 1);
        sprite.position.set(0, 0.6, 0);
        mesh.add(sprite);

        // Status indicator ring
        const ringGeo = new THREE.RingGeometry(0.3, 0.35, 16);
        const ringMat = new THREE.MeshBasicMaterial({
          color: agent.status === 'working_at_desk' ? '#10b981' :
                 agent.status === 'in_meeting' ? '#a855f7' :
                 agent.status === 'coffee_break' ? '#f59e0b' :
                 '#38bdf8',
          side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(0, -0.35, 0);
        ring.rotation.x = Math.PI / 2;
        mesh.add(ring);

        agentMeshGroupRef.current.add(mesh);
      }
    }
  }, []);

  // Update agent meshes when floors data changes
  useEffect(() => {
    if (initialized) updateAgentMeshes();
  }, [floors, initialized, selectedFloorId, updateAgentMeshes]);

  // ==================== Initialize Scene ====================
  useEffect(() => {
    if (!mountRef.current) return;

    // WebGL check
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
    if (!gl) {
      setWebglError('Your device does not support WebGL.');
      return;
    }
    testCanvas.remove();

    const isMob = isMobileDevice();
    const width = mountRef.current.clientWidth || 300;
    const height = mountRef.current.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#020617');
    scene.fog = new THREE.FogExp2('#020617', 0.0025);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 1000);
    camera.position.set(45, 150, 80);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMob && graphicsQualityRef.current !== 'low',
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(isMob ? 1.3 : 2.0, Math.max(isMob ? 0.8 : 1.0, window.devicePixelRatio)));
    if (isMob) {
      renderer.toneMapping = THREE.NoToneMapping;
    } else {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
    }
    renderer.shadowMap.enabled = !isMob && graphicsQualityRef.current !== 'low';
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controls.minDistance = 12.0;
    controls.maxDistance = 400;
    controls.target.set(0, 150, 0);
    controlsRef.current = controls;

    // ==================== Lighting ====================
    const ambientLight = new THREE.AmbientLight('#1e293b', 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#fffbeb', 3.5);
    sunLight.position.set(100, 250, 100);
    sunLight.castShadow = !isMob && graphicsQualityRef.current !== 'low';
    sunLight.shadow.mapSize.width = isMob ? 512 : 2048;
    sunLight.shadow.mapSize.height = isMob ? 512 : 2048;
    scene.add(sunLight);

    // Core blue light
    const coreLight = new THREE.PointLight('#06b6d4', 4, 150);
    coreLight.position.set(0, 150, 0);
    scene.add(coreLight);

    // Interior lighting - warm ceiling lights per floor (visible nearby)
    for (let f = 90; f <= 100; f++) {
      const yFloor = (f - 1) * 3 + 1.5 + 0.22;
      const ceilLight = new THREE.PointLight('#fef3c7', 2, 12);
      ceilLight.position.set(0, yFloor + 2.3, 0);
      scene.add(ceilLight);
    }

    // ==================== Groups ====================
    scene.add(elevatorMeshGroupRef.current);
    scene.add(floorNumbersGroupRef.current);
    scene.add(agentMeshGroupRef.current);
    scene.add(interiorGroupRef.current);
    scene.add(ceoAvatarGroupRef.current);
    floorNumbersGroupRef.current.visible = graphicsQualityRef.current !== 'low';

    // ==================== InstancedMeshes - Floor Structure ====================
    // Glass floor slabs
    const floorSlabGeo = new THREE.BoxGeometry(16, 0.22, 16);
    const floorSlabMat = isMob 
      ? new THREE.MeshStandardMaterial({ color: '#0284c7', transparent: true, opacity: 0.55, roughness: 0.8, metalness: 0.1 })
      : new THREE.MeshPhysicalMaterial({ color: '#0284c7', transparent: true, opacity: 0.35, roughness: 0.1, metalness: 0.9, transmission: 0.7, ior: 1.5, side: THREE.DoubleSide });
    const floorSlabsInstanced = new THREE.InstancedMesh(floorSlabGeo, floorSlabMat, 100);
    scene.add(floorSlabsInstanced);
    floorSlabsInstancedRef.current = floorSlabsInstanced;

    // Steel frames
    const frameGeo = new THREE.BoxGeometry(16.15, 0.1, 16.15);
    const frameMat = new THREE.MeshStandardMaterial({ color: '#475569', metalness: isMob ? 0.2 : 0.85, roughness: isMob ? 0.8 : 0.2 });
    const framesInstanced = new THREE.InstancedMesh(frameGeo, frameMat, 100);
    scene.add(framesInstanced);
    framesInstancedRef.current = framesInstanced;

    // LED strips
    const ledGeo = new THREE.BoxGeometry(16.22, 0.05, 16.22);
    const ledMat = new THREE.MeshBasicMaterial({ color: '#38bdf8' });
    const ledsInstanced = new THREE.InstancedMesh(ledGeo, ledMat, 100);
    scene.add(ledsInstanced);
    ledsInstancedRef.current = ledsInstanced;

    // ==================== InstancedMeshes - Furniture ====================
    // Office desks (4 per floor = 400)
    const deskGeo = new THREE.BoxGeometry(2.0, 0.75, 1.0);
    const deskMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.7, metalness: 0.1 });
    const desksInstanced = new THREE.InstancedMesh(deskGeo, deskMat, 400);
    scene.add(desksInstanced);
    desksInstancedRef.current = desksInstanced;

    // Monitors (4 per floor = 400) - glowing cyan screens
    const monitorGeo = new THREE.BoxGeometry(0.8, 0.45, 0.05);
    const monitorMat = new THREE.MeshBasicMaterial({ color: '#06b6d4' });
    const monitorsInstanced = new THREE.InstancedMesh(monitorGeo, monitorMat, 400);
    scene.add(monitorsInstanced);
    monitorsInstancedRef.current = monitorsInstanced;

    // Chairs (4 per floor = 400)
    const chairGeo = new THREE.BoxGeometry(0.5, 0.7, 0.5);
    const chairMat = new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.8 });
    const chairsInstanced = new THREE.InstancedMesh(chairGeo, chairMat, 400);
    scene.add(chairsInstanced);
    chairsInstancedRef.current = chairsInstanced;

    // Conference tables (1 per floor = 100)
    const confTableGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.75, 8);
    const confTableMat = new THREE.MeshStandardMaterial({ color: '#0f172a', metalness: isMob ? 0.2 : 0.8, roughness: 0.4 });
    const confTablesInstanced = new THREE.InstancedMesh(confTableGeo, confTableMat, 100);
    scene.add(confTablesInstanced);
    confTablesInstancedRef.current = confTablesInstanced;

    // Conference chairs (4 per floor = 400)
    const confChairsInstanced = new THREE.InstancedMesh(chairGeo, chairMat, 400);
    scene.add(confChairsInstanced);
    confChairsInstancedRef.current = confChairsInstanced;

    // Sofas (2 per floor = 200)
    const sofaGeo = new THREE.BoxGeometry(1.6, 0.5, 0.7);
    const sofaMat = new THREE.MeshStandardMaterial({ color: '#1e3a8a', roughness: 0.7 });
    const sofasInstanced = new THREE.InstancedMesh(sofaGeo, sofaMat, 200);
    scene.add(sofasInstanced);
    sofasInstancedRef.current = sofasInstanced;

    // Coffee tables (1 per floor = 100)
    const coffeeTableGeo = new THREE.BoxGeometry(0.9, 0.4, 0.6);
    const coffeeTableMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.6, metalness: 0.2 });
    const coffeeTablesInstanced = new THREE.InstancedMesh(coffeeTableGeo, coffeeTableMat, 100);
    scene.add(coffeeTablesInstanced);
    coffeeTablesInstancedRef.current = coffeeTablesInstanced;

    // Elevator entrances (2 per floor = 200)
    const entranceGeo = new THREE.BoxGeometry(2.4, 2.5, 0.1);
    const entranceMat = new THREE.MeshStandardMaterial({ color: '#06b6d4', transparent: true, opacity: 0.35, metalness: 0.2, roughness: 0.6 });
    const entrancesInstanced = new THREE.InstancedMesh(entranceGeo, entranceMat, 200);
    scene.add(entrancesInstanced);
    entrancesInstancedRef.current = entrancesInstanced;

    // ==================== NEW: Plants ====================
    const plantGeo = new THREE.CylinderGeometry(0.15, 0.2, 0.6, 6);
    const plantMat = new THREE.MeshStandardMaterial({ color: '#22c55e', roughness: 0.8 });
    const plantsInstanced = new THREE.InstancedMesh(plantGeo, plantMat, 200);
    scene.add(plantsInstanced);
    plantsInstancedRef.current = plantsInstanced;

    // ==================== NEW: Glass Wall Panels ====================
    const wallGeo = new THREE.BoxGeometry(13, 2.5, 0.08);
    const wallMat = isMob
      ? new THREE.MeshStandardMaterial({ color: '#38bdf8', transparent: true, opacity: 0.15, roughness: 0.8 })
      : new THREE.MeshPhysicalMaterial({ color: '#38bdf8', transparent: true, opacity: 0.12, roughness: 0.1, metalness: 0.9, transmission: 0.8, ior: 1.5, side: THREE.DoubleSide });
    const wallPanelsInstanced = new THREE.InstancedMesh(wallGeo, wallMat, 400); // 4 walls * 100 floors
    scene.add(wallPanelsInstanced);
    wallPanelsInstancedRef.current = wallPanelsInstanced;

    // ==================== Building Structure ====================
    // Corner pillars
    const cornerPositions = [[-8.1, -8.1], [8.1, -8.1], [-8.1, 8.1], [8.1, 8.1]];
    cornerPositions.forEach(([cx, cz]) => {
      const colGeo = new THREE.CylinderGeometry(0.18, 0.18, 300, 6);
      const colMat = new THREE.MeshStandardMaterial({ color: '#1e293b', metalness: isMob ? 0.1 : 0.8, roughness: 0.5 });
      const colMesh = new THREE.Mesh(colGeo, colMat);
      colMesh.position.set(cx, 150, cz);
      scene.add(colMesh);
    });

    // Elevator shafts
    const shaftGeo = new THREE.BoxGeometry(2.5, 300, 2.5);
    const shaftMat = isMob 
      ? new THREE.MeshStandardMaterial({ color: '#06b6d4', transparent: true, opacity: 0.15, roughness: 0.8 })
      : new THREE.MeshPhysicalMaterial({ color: '#06b6d4', transparent: true, opacity: 0.12, roughness: 0.1, metalness: 0.9, transmission: 0.85, ior: 1.5, side: THREE.DoubleSide });
    const shaftA = new THREE.Mesh(shaftGeo, shaftMat);
    shaftA.position.set(-1.5, 150, 0);
    scene.add(shaftA);
    const shaftB = new THREE.Mesh(shaftGeo, shaftMat);
    shaftB.position.set(1.5, 150, 0);
    scene.add(shaftB);

    // Elevator cars
    const carGeo = new THREE.BoxGeometry(2.2, 2.5, 2.2);
    const carMat = isMob
      ? new THREE.MeshStandardMaterial({ color: '#06b6d4', transparent: true, opacity: 0.7, roughness: 0.8 })
      : new THREE.MeshPhysicalMaterial({ color: '#06b6d4', transparent: true, opacity: 0.65, roughness: 0.1, metalness: 0.8, emissive: '#0891b2', emissiveIntensity: 0.5 });
    const carMeshA = new THREE.Mesh(carGeo, carMat);
    carMeshA.name = 'elevator_car_A';
    carMeshA.position.set(-1.5, 10, 0);
    elevatorMeshGroupRef.current.add(carMeshA);
    const carMeshB = new THREE.Mesh(carGeo, carMat);
    carMeshB.name = 'elevator_car_B';
    carMeshB.position.set(1.5, 150, 0);
    elevatorMeshGroupRef.current.add(carMeshB);

    // ==================== NEW: CEO Avatar ====================
    const ceoGeo = new THREE.SphereGeometry(0.4, 16, 12);
    const ceoMat = new THREE.MeshStandardMaterial({
      color: '#fbbf24',
      emissive: '#f59e0b',
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.7
    });
    const ceoMesh = new THREE.Mesh(ceoGeo, ceoMat);
    ceoMesh.name = 'ceo_avatar';
    // CEO name label
    const ceoCanvas = document.createElement('canvas');
    ceoCanvas.width = 256;
    ceoCanvas.height = 64;
    const ceoCtx = ceoCanvas.getContext('2d');
    if (ceoCtx) {
      ceoCtx.fillStyle = 'rgba(0,0,0,0)';
      ceoCtx.fillRect(0, 0, 256, 64);
      ceoCtx.font = 'bold 24px Rajdhani, sans-serif';
      ceoCtx.fillStyle = '#fbbf24';
      ceoCtx.textAlign = 'center';
      ceoCtx.textBaseline = 'middle';
      ceoCtx.fillText('CEO', 128, 32);
    }
    const ceoTexture = new THREE.CanvasTexture(ceoCanvas);
    const ceoSpriteMat = new THREE.SpriteMaterial({ map: ceoTexture, transparent: true });
    const ceoSprite = new THREE.Sprite(ceoSpriteMat);
    ceoSprite.scale.set(1.2, 0.3, 1);
    ceoSprite.position.set(0, 0.7, 0);
    ceoMesh.add(ceoSprite);
    // CEO golden ring
    const ceoRingGeo = new THREE.RingGeometry(0.35, 0.4, 16);
    const ceoRingMat = new THREE.MeshBasicMaterial({ color: '#fbbf24', side: THREE.DoubleSide });
    const ceoRing = new THREE.Mesh(ceoRingGeo, ceoRingMat);
    ceoRing.position.set(0, -0.4, 0);
    ceoRing.rotation.x = Math.PI / 2;
    ceoMesh.add(ceoRing);

    ceoMesh.visible = false; // Hidden initially, shown in ceo_walk mode
    ceoAvatarGroupRef.current.add(ceoMesh);
    ceoMeshRef.current = ceoMesh;

    // Floor number sprites
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
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(3, 1.5, 1);
      sprite.position.set(9.5, (i - 1) * 3 + 1.5, 0);
      floorNumbersGroupRef.current.add(sprite);
      numberSprites.push(sprite);
    }
    numberSpritesRef.current = numberSprites;

    // Highlight meshes
    const hlGeo = new THREE.BoxGeometry(16.5, 0.4, 16.5);
    const hlMat = new THREE.MeshBasicMaterial({ color: '#f59e0b', wireframe: true });
    const hlMesh = new THREE.Mesh(hlGeo, hlMat);
    hlMesh.visible = false;
    scene.add(hlMesh);
    highlightFloorMeshRef.current = hlMesh;

    const hoverGeo = new THREE.BoxGeometry(16.4, 0.35, 16.4);
    const hoverMat = new THREE.MeshBasicMaterial({ color: '#38bdf8', wireframe: true, transparent: true, opacity: 0.8 });
    const hoverMesh = new THREE.Mesh(hoverGeo, hoverMat);
    hoverMesh.visible = false;
    scene.add(hoverMesh);
    hoverFloorMeshRef.current = hoverMesh;

    // ==================== Post-Processing ====================
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), isMob ? 0.39 : 1.3, 0.45, 0.85);
    composer.addPass(bloomPass);
    composerRef.current = composer;

    // ==================== Raycasting ====================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current) return;
      if (cameraPresetRef.current === 'ceo_walk') return; // No floor selection in walk mode
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, cameraRef.current);
      // Check agent hits first
      const agentHits = raycaster.intersectObjects(agentMeshGroupRef.current.children, false);
      if (agentHits.length > 0) {
        // Find agent by position match
        const hitMesh = agentHits[0].object;
        const hitFloor = floorsRef.current.find(f => {
          return f.agents.some(a => 
            Math.abs(a.pos.x - hitMesh.position.x) < 0.5 &&
            Math.abs(a.pos.z - hitMesh.position.z) < 0.5
          );
        });
        if (hitFloor) {
          const hitAgent = hitFloor.agents.find(a =>
            Math.abs(a.pos.x - hitMesh.position.x) < 0.5 &&
            Math.abs(a.pos.z - hitMesh.position.z) < 0.5
          );
          if (hitAgent) {
            onSelectAgent(hitAgent.id);
            return;
          }
        }
      }
      // Floor hit fallback
      const floorHits = raycaster.intersectObject(floorSlabsInstanced);
      if (floorHits.length > 0 && floorHits[0].instanceId !== undefined) {
        onSelectFloor(floorHits[0].instanceId + 1);
      }
    };

    const handlePointerMove = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current) return;
      if (cameraPresetRef.current === 'ceo_walk') return;
      const rect = mountRef.current.getBoundingClientRect();
      const mX = event.clientX - rect.left;
      const mY = event.clientY - rect.top;
      setTooltipPos({ x: mX + 15, y: mY + 15 });
      mouse.x = (mX / rect.width) * 2 - 1;
      mouse.y = -(mY / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, cameraRef.current);

      // Check agent hover
      const agentHits = raycaster.intersectObjects(agentMeshGroupRef.current.children, false);
      if (agentHits.length > 0) {
        const hitMesh = agentHits[0].object;
        const hitFloor = floorsRef.current.find(f => {
          return f.agents.some(a => Math.abs(a.pos.x - hitMesh.position.x) < 0.5 && Math.abs(a.pos.z - hitMesh.position.z) < 0.5);
        });
        if (hitFloor) {
          const hitAgent = hitFloor.agents.find(a => Math.abs(a.pos.x - hitMesh.position.x) < 0.5 && Math.abs(a.pos.z - hitMesh.position.z) < 0.5);
          if (hitAgent) {
            setHoveredItem({
              type: 'agent',
              id: hitAgent.id,
              name: hitAgent.name,
              roleOrDept: hitAgent.role,
              modelOrCapacity: hitAgent.aiModel,
              statusOrPower: hitAgent.status.replace('_', ' ')
            });
            if (hoverFloorMeshRef.current) hoverFloorMeshRef.current.visible = false;
            return;
          }
        }
      }

      // Floor hover fallback
      const floorHits = raycaster.intersectObject(floorSlabsInstanced);
      if (floorHits.length > 0 && floorHits[0].instanceId !== undefined) {
        const floorId = floorHits[0].instanceId + 1;
        const floorObj = floorsRef.current.find(f => f.id === floorId);
        if (floorObj) {
          setHoveredItem({
            type: 'floor', id: floorId, name: `Floor ${floorId}`,
            roleOrDept: floorObj.departmentName,
            modelOrCapacity: `${floorObj.agents.length} Active Nodes`,
            statusOrPower: `${floorObj.energyUsageKW} kW`
          });
          if (hoverFloorMeshRef.current) {
            hoverFloorMeshRef.current.position.set(0, (floorId - 1) * 3 + 1.5, 0);
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

    // Resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current || !composerRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      if (w === 0 || h === 0) return;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
      composerRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    setInitialized(true);

    // ==================== Animation Loop ====================
    let animFrameId: number;
    let frameIdleCount = 0;
    const lastCamPos = new THREE.Vector3();
    const lastCamLook = new THREE.Vector3();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      let needsRender = false;

      const currentPreset = cameraPresetRef.current;

      // ==================== CEO Walk Mode Movement ====================
      if (currentPreset === 'ceo_walk' && ceoMeshRef.current && cameraRef.current) {
        const ceoMesh = ceoMeshRef.current;
        const floorY = (selectedFloorIdRef.current - 1) * 3 + 1.5 + 0.11 + 0.5;
        
        // Keyboard input
        const keys = keysPressedRef.current;
        let moveX = 0, moveZ = 0;
        const speed = 0.15;
        
        if (keys.has('w') || keys.has('arrowup')) moveZ -= speed;
        if (keys.has('s') || keys.has('arrowdown')) moveZ += speed;
        if (keys.has('a') || keys.has('arrowleft')) moveX -= speed;
        if (keys.has('d') || keys.has('arrowright')) moveX += speed;

        // Touch joystick input
        moveX += joystickRef.current.x * speed;
        moveZ += joystickRef.current.z * speed;

        // Apply movement with boundary constraints
        const newX = Math.max(-7, Math.min(7, ceoMesh.position.x + moveX));
        const newZ = Math.max(-7, Math.min(7, ceoMesh.position.z + moveZ));
        ceoMesh.position.set(newX, floorY, newZ);
        ceoPositionRef.current.copy(ceoMesh.position);

        // Camera follows CEO from behind and above (third-person follow)
        const camOffsetX = ceoMesh.position.x + 3;
        const camOffsetZ = ceoMesh.position.z + 5;
        const camY = floorY + 3;
        
        cameraRef.current.position.lerp(new THREE.Vector3(camOffsetX, camY, camOffsetZ), 0.1);
        controlsRef.current!.target.lerp(ceoMesh.position, 0.1);
        needsRender = true;

        // Disable orbit controls in walk mode
        if (controlsRef.current) controlsRef.current.enabled = false;
      } else {
        // ==================== Normal Camera Mode ====================
        if (controlsRef.current) controlsRef.current.enabled = true;

        if (cameraRef.current && controlsRef.current) {
          const distToTargetPos = cameraRef.current.position.distanceTo(targetCamPosRef.current);
          const distToTargetLook = controlsRef.current.target.distanceTo(targetCamLookRef.current);
          if (distToTargetPos > 0.005 || distToTargetLook > 0.005) {
            cameraRef.current.position.lerp(targetCamPosRef.current, 0.04);
            controlsRef.current.target.lerp(targetCamLookRef.current, 0.04);
            needsRender = true;
          }
          if (controlsRef.current.update() || controlsRef.current.state !== -1) {
            needsRender = true;
          }
        }
      }

      // Elevator animation
      const carA = elevatorMeshGroupRef.current.getObjectByName('elevator_car_A');
      const carB = elevatorMeshGroupRef.current.getObjectByName('elevator_car_B');
      if (carA && elevatorsRef.current[0]) {
        if (Math.abs(carA.position.y - elevatorsRef.current[0].posY) > 0.01) {
          carA.position.y = THREE.MathUtils.lerp(carA.position.y, elevatorsRef.current[0].posY, 0.1);
          needsRender = true;
        }
      }
      if (carB && elevatorsRef.current[1]) {
        if (Math.abs(carB.position.y - elevatorsRef.current[1].posY) > 0.01) {
          carB.position.y = THREE.MathUtils.lerp(carB.position.y, elevatorsRef.current[1].posY, 0.1);
          needsRender = true;
        }
      }

      // CEO mesh visibility based on mode
      if (ceoMeshRef.current) {
        ceoMeshRef.current.visible = currentPreset === 'ceo_walk';
      }

      // Detect camera movement
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

      if (frameIdleCount < 45) {
        if (graphicsQualityRef.current === 'high' && composerRef.current && !isMob) {
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
      // Dispose all geometries and materials
      [floorSlabGeo, frameGeo, ledGeo, deskGeo, monitorGeo, chairGeo, confTableGeo, sofaGeo, coffeeTableGeo, entranceGeo, plantGeo, wallGeo, carGeo, shaftGeo, hlGeo, hoverGeo, ceoGeo].forEach(g => g.dispose());
      [floorSlabMat, frameMat, ledMat, deskMat, monitorMat, chairMat, confTableMat, sofaMat, coffeeTableMat, entranceMat, plantMat, wallMat, carMat, shaftMat, hlMat, hoverMat, ceoMat].forEach(m => m.dispose());
      [floorSlabsInstanced, framesInstanced, ledsInstanced, desksInstanced, monitorsInstanced, chairsInstanced, confTablesInstanced, confChairsInstanced, sofasInstanced, coffeeTablesInstanced, entrancesInstanced, plantsInstanced, wallPanelsInstanced].forEach(i => i.dispose());
      numberSprites.forEach(sprite => { sprite.material.map?.dispose(); sprite.material.dispose(); });
      if (rendererRef.current?.domElement) rendererRef.current.domElement.remove();
    };
  }, []);

  // ==================== Graphics Quality ====================
  useEffect(() => {
    if (!rendererRef.current || !sceneRef.current) return;
    const isMob = isMobileDevice();
    const isLow = graphicsQuality === 'low';
    rendererRef.current.setPixelRatio(Math.min(isLow ? 1.0 : isMob ? 1.3 : 2.0, Math.max(isMob ? 0.8 : 1.0, window.devicePixelRatio)));
    rendererRef.current.shadowMap.enabled = !isLow && !isMob;
    sceneRef.current.traverse((child) => {
      if (child instanceof THREE.DirectionalLight) {
        child.castShadow = !isLow && !isMob;
        child.shadow.map?.dispose();
        child.shadow.map = null;
      }
      if (child instanceof THREE.Mesh) {
        child.castShadow = !isLow && !isMob;
        child.receiveShadow = !isLow && !isMob;
        if (child.material) {
          (Array.isArray(child.material) ? child.material : [child.material]).forEach(m => { m.needsUpdate = true; });
        }
      }
    });
    updateInstancedMeshes(selectedFloorId);
  }, [graphicsQuality, selectedFloorId, updateInstancedMeshes]);

  // ==================== Floor Highlight & Camera ====================
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
    } else if (cameraPreset === 'ceo_walk') {
      // CEO walk mode - position CEO avatar on selected floor
      const floorY = yPos + 0.11 + 0.5;
      if (ceoMeshRef.current) {
        ceoMeshRef.current.position.set(0, floorY, 0);
        ceoPositionRef.current.set(0, floorY, 0);
        ceoMeshRef.current.visible = true;
      }
      targetCamPosRef.current.set(3, floorY + 3, 5);
      targetCamLookRef.current.set(0, floorY, 0);
    }
  }, [selectedFloorId, cameraPreset]);

  // ==================== WebGL Error Fallback ====================
  if (webglError) {
    return (
      <div className="relative w-full h-full bg-gray-950 flex items-center justify-center p-6">
        <div className="max-w-sm text-center space-y-4">
          <div className="text-4xl">🏗️</div>
          <h2 className="text-lg font-bold text-cyan-300">3D Not Available</h2>
          <p className="text-xs text-blue-200/70 font-mono">{webglError}</p>
          <p className="text-[10px] text-gray-500 font-mono">Try Chrome or Firefox.</p>
        </div>
      </div>
    );
  }

  const isWalkMode = cameraPreset === 'ceo_walk';

  return (
    <div ref={mountRef} className="relative w-full h-full cursor-grab active:cursor-grabbing select-none font-sans">
      {/* Walk mode indicator */}
      {isWalkMode && (
        <div className="absolute top-4 left-4 pointer-events-none z-10">
          <div className="px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 backdrop-blur-md text-[10px] text-amber-300 font-mono flex items-center gap-2 shadow-lg animate-pulse">
            🚶 CEO WALK MODE — WASD / Arrow keys to move
          </div>
        </div>
      )}

      {!isWalkMode && (
        <div className="absolute top-4 left-4 pointer-events-none flex flex-col gap-2 z-10">
          <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-[10px] text-cyan-400 font-mono flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            NEURAL OFFICE OS — 3D ACTIVE
          </div>
        </div>
      )}

      {/* ==================== Mobile Virtual Joystick (CEO Walk Mode) ==================== */}
      {isWalkMode && isMobileDevice() && (
        <div className="absolute bottom-16 left-4 z-30">
          <div 
            className="w-28 h-28 rounded-full bg-slate-950/80 border-2 border-amber-500/40 backdrop-blur-md flex items-center justify-center shadow-lg"
            onTouchStart={handleJoystickStart}
            onTouchMove={handleJoystickMove}
            onTouchEnd={handleJoystickEnd}
          >
            {/* Inner joystick dot */}
            <div 
              className="w-10 h-10 rounded-full bg-amber-500/60 border border-amber-400 shadow-md"
              style={{
                transform: `translate(${joystickRef.current.x * 30}px, ${joystickRef.current.z * -30}px)`
              }}
            />
            {/* Direction labels */}
            <span className="absolute top-1 text-[8px] font-mono text-amber-400/60">W</span>
            <span className="absolute bottom-1 text-[8px] font-mono text-amber-400/60">S</span>
            <span className="absolute left-1 text-[8px] font-mono text-amber-400/60">A</span>
            <span className="absolute right-1 text-[8px] font-mono text-amber-400/60">D</span>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {hoveredItem && !isWalkMode && (
        <div 
          className="absolute z-20 pointer-events-none p-3 rounded-xl border border-cyan-500/40 bg-slate-950/90 backdrop-blur-md text-xs font-mono text-white shadow-[0_4px_20px_rgba(6,182,212,0.3)] animate-fadeIn"
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-1.5 h-1.5 rounded-full ${hoveredItem.type === 'agent' ? 'bg-purple-400 animate-ping' : 'bg-cyan-400 animate-ping'}`} />
            <span className="font-extrabold text-blue-100">{hoveredItem.name}</span>
            {hoveredItem.type === 'agent' && <span className="text-[8px] bg-purple-500/20 text-purple-300 px-1 rounded">AGENT</span>}
          </div>
          <div className="text-[10px] text-blue-300">{hoveredItem.roleOrDept}</div>
          {hoveredItem.modelOrCapacity && <div className="text-[9px] text-cyan-400/90">{hoveredItem.modelOrCapacity}</div>}
          {hoveredItem.statusOrPower && <div className="text-[9px] text-emerald-400/90">{hoveredItem.statusOrPower}</div>}
        </div>
      )}
    </div>
  );
};

export default BuildingCanvas;
