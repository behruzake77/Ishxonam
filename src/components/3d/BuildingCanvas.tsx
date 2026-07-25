import React, { useEffect, useRef, useState, useCallback, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Floor, ElevatorCar, CameraPreset } from '../../types/office';
import { OfficeFloor, HumanFigure, BuildingShell } from './office/OfficeComponents';

// Floor height constant — must match OfficeComponents.tsx FLOOR_H
const FLOOR_H = 4;

interface BuildingCanvasProps {
  floors: Floor[];
  selectedFloorId: number;
  selectedAgentId: string | null;
  cameraPreset: CameraPreset;
  elevators: ElevatorCar[];
  graphicsQuality?: 'high' | 'medium' | 'low';
  onSelectFloor: (floorId: number) => void;
  onSelectAgent: (agentId: string) => void;
}

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};

// ===== Camera Controller (R3F) =====
interface CameraCtrlProps {
  cameraPreset: CameraPreset;
  selectedFloorId: number;
  keysRef: React.MutableRefObject<Set<string>>;
  joystickRef: React.MutableRefObject<{ x: number; z: number }>;
  ceoPosRef: React.MutableRefObject<THREE.Vector3>;
  controlsRef: React.MutableRefObject<any>;
}

const CameraCtrl: React.FC<CameraCtrlProps> = ({
  cameraPreset, selectedFloorId, keysRef, joystickRef, ceoPosRef, controlsRef
}) => {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(50, 200, 80));
  const targetLook = useRef(new THREE.Vector3(0, 200, 0));
  const prevPreset = useRef(cameraPreset);
  const prevFloor = useRef(selectedFloorId);
  const initialized = useRef(false);

  // Set initial controls target on first frame
  if (!initialized.current && controlsRef.current) {
    controlsRef.current.target.set(0, 200, 0);
    initialized.current = true;
  }

  // Update targets when preset/floor changes
  if (prevPreset.current !== cameraPreset || prevFloor.current !== selectedFloorId) {
    const yBase = (selectedFloorId - 1) * FLOOR_H + 2;
    if (cameraPreset === 'full_skyscraper') {
      targetPos.current.set(50, 200, 80);
      targetLook.current.set(0, 200, 0);
    } else if (cameraPreset === 'floor_focus') {
      targetPos.current.set(20, yBase + 5, 25);
      targetLook.current.set(0, yBase + 1, 0);
    } else if (cameraPreset === 'agent_focus') {
      targetPos.current.set(15, yBase + 3, 20);
      targetLook.current.set(0, yBase + 1.5, 0);
    } else if (cameraPreset === 'sky_lounge') {
      targetPos.current.set(30, 385, 35);
      targetLook.current.set(0, 380, 0);
    } else if (cameraPreset === 'ceo_walk') {
      ceoPosRef.current.set(0, yBase + 0.01, 0);
    }
    prevPreset.current = cameraPreset;
    prevFloor.current = selectedFloorId;
  }

  useFrame(() => {
    if (!controlsRef.current) return;

    if (cameraPreset === 'ceo_walk') {
      controlsRef.current.enabled = false;
      const floorY = (selectedFloorId - 1) * FLOOR_H + 2 + 0.01;

      let dx = 0, dz = 0;
      const speed = 0.25;
      const keys = keysRef.current;
      if (keys.has('w') || keys.has('arrowup')) dz = -speed;
      if (keys.has('s') || keys.has('arrowdown')) dz = speed;
      if (keys.has('a') || keys.has('arrowleft')) dx = -speed;
      if (keys.has('d') || keys.has('arrowright')) dx = speed;
      dx += joystickRef.current.x * speed;
      dz += joystickRef.current.z * speed;

      ceoPosRef.current.x = Math.max(-10, Math.min(10, ceoPosRef.current.x + dx));
      ceoPosRef.current.z = Math.max(-6, Math.min(6, ceoPosRef.current.z + dz));
      ceoPosRef.current.y = floorY;

      const camOff = new THREE.Vector3(ceoPosRef.current.x + 4, floorY + 3, ceoPosRef.current.z + 6);
      camera.position.lerp(camOff, 0.08);
      controlsRef.current.target.lerp(ceoPosRef.current, 0.08);
    } else {
      controlsRef.current.enabled = true;
      const dist = camera.position.distanceTo(targetPos.current);
      const tDist = controlsRef.current.target.distanceTo(targetLook.current);
      if (dist > 0.01 || tDist > 0.01) {
        camera.position.lerp(targetPos.current, 0.04);
        controlsRef.current.target.lerp(targetLook.current, 0.04);
      }
    }
    controlsRef.current.update();
  });

  return null;
};

// ===== CEO Walker (R3F) — realistic body with capsule/cylinder =====
interface CEOWalkerProps {
  ceoPosRef: React.MutableRefObject<THREE.Vector3>;
  visible: boolean;
}

const CEOWalker: React.FC<CEOWalkerProps> = ({ ceoPosRef, visible }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.copy(ceoPosRef.current);
      groupRef.current.visible = visible;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.55, 0]}>
        <sphereGeometry args={[0.19, 14, 10]} />
        <meshStandardMaterial color="#e8c8a0" roughness={0.6} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.055, 1.57, 0.16]}>
        <sphereGeometry args={[0.03, 6, 4]} />
        <meshBasicMaterial color="#222" />
      </mesh>
      <mesh position={[0.055, 1.57, 0.16]}>
        <sphereGeometry args={[0.03, 6, 4]} />
        <meshBasicMaterial color="#222" />
      </mesh>
      {/* Hair */}
      <mesh position={[0, 1.62, -0.04]}>
        <sphereGeometry args={[0.18, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>
      {/* Body (gold suit capsule) */}
      <mesh position={[0, 0.85, 0]}>
        <capsuleGeometry args={[0.16, 0.3, 4, 12]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.25} roughness={0.35} metalness={0.5} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.1, 0.45, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.4, 6]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.8} />
      </mesh>
      <mesh position={[0.1, 0.45, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.4, 6]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.8} />
      </mesh>
      {/* Shoes */}
      <mesh position={[-0.1, 0.22, 0.04]}>
        <boxGeometry args={[0.1, 0.04, 0.16]} />
        <meshStandardMaterial color="#111" roughness={0.7} />
      </mesh>
      <mesh position={[0.1, 0.22, 0.04]}>
        <boxGeometry args={[0.1, 0.04, 0.16]} />
        <meshStandardMaterial color="#111" roughness={0.7} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.24, 0.9, 0]} rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.04, 0.04, 0.38, 6]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.35} metalness={0.5} />
      </mesh>
      <mesh position={[0.24, 0.9, 0]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.04, 0.04, 0.38, 6]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.35} metalness={0.5} />
      </mesh>
      {/* Hands */}
      <mesh position={[-0.28, 0.72, 0]}>
        <sphereGeometry args={[0.04, 6, 4]} />
        <meshStandardMaterial color="#e8c8a0" roughness={0.7} />
      </mesh>
      <mesh position={[0.28, 0.72, 0]}>
        <sphereGeometry args={[0.04, 6, 4]} />
        <meshStandardMaterial color="#e8c8a0" roughness={0.7} />
      </mesh>
      {/* Crown */}
      <mesh position={[0, 1.78, 0]}>
        <coneGeometry args={[0.1, 0.22, 5]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      {/* CEO glow */}
      <mesh position={[0, 2.05, 0]}>
        <sphereGeometry args={[0.05, 6, 4]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      <pointLight position={[0, 2.5, 0]} color="#fbbf24" intensity={2} distance={6} />
    </group>
  );
};

// ===== Elevator Animator (R3F) =====
interface ElevAnimProps {
  elevators: ElevatorCar[];
}

const ElevAnimator: React.FC<ElevAnimProps> = ({ elevators }) => {
  const carARef = useRef<THREE.Mesh>(null);
  const carBRef = useRef<THREE.Mesh>(null);
  const elevatorsRef = useRef(elevators);
  elevatorsRef.current = elevators;

  useFrame(() => {
    if (carARef.current && elevatorsRef.current[0]) {
      const tgtY = (elevatorsRef.current[0].currentFloor - 1) * FLOOR_H + 3;
      carARef.current.position.y = THREE.MathUtils.lerp(carARef.current.position.y, tgtY, 0.08);
    }
    if (carBRef.current && elevatorsRef.current[1]) {
      const tgtY = (elevatorsRef.current[1].currentFloor - 1) * FLOOR_H + 3;
      carBRef.current.position.y = THREE.MathUtils.lerp(carBRef.current.position.y, tgtY, 0.08);
    }
  });

  const initA = elevators[0]?.currentFloor ?? 1;
  const initB = elevators[1]?.currentFloor ?? 100;

  return (
    <group>
      <mesh ref={carARef} position={[-1.5, (initA - 1) * FLOOR_H + 3, 2]}>
        <boxGeometry args={[2.2, 2.5, 2.2]} />
        <meshPhysicalMaterial color="#06b6d4" transparent opacity={0.6} roughness={0.1} metalness={0.8} emissive="#0891b2" emissiveIntensity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={carBRef} position={[1.5, (initB - 1) * FLOOR_H + 3, 2]}>
        <boxGeometry args={[2.2, 2.5, 2.2]} />
        <meshPhysicalMaterial color="#06b6d4" transparent opacity={0.6} roughness={0.1} metalness={0.8} emissive="#0891b2" emissiveIntensity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// ===== Main BuildingCanvas =====
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
  const [webglError, setWebglError] = useState<string | null>(null);
  const [hoveredAgent, setHoveredAgent] = useState<any>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const keysRef = useRef<Set<string>>(new Set());
  const joystickRef = useRef<{ x: number; z: number }>({ x: 0, z: 0 });
  const ceoPosRef = useRef(new THREE.Vector3(0, (95 - 1) * FLOOR_H + 2 + 0.01, 0));
  const controlsRef = useRef<any>(null);

  // Keyboard for CEO walk
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (cameraPreset === 'ceo_walk') keysRef.current.add(e.key.toLowerCase());
    };
    const onUp = (e: KeyboardEvent) => keysRef.current.delete(e.key.toLowerCase());
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => { window.removeEventListener('keydown', onDown); window.removeEventListener('keyup', onUp); };
  }, [cameraPreset]);

  // Touch joystick
  const handleJoystickMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (!e.touches[0]) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    joystickRef.current = {
      x: Math.max(-1, Math.min(1, (e.touches[0].clientX - rect.left - rect.width / 2) / (rect.width / 2))),
      z: Math.max(-1, Math.min(1, -(e.touches[0].clientY - rect.top - rect.height / 2) / (rect.height / 2)))
    };
  }, []);
  const handleJoystickEnd = useCallback(() => { joystickRef.current = { x: 0, z: 0 }; }, []);

  // WebGL check
  useEffect(() => {
    try {
      const tc = document.createElement('canvas');
      const gl = tc.getContext('webgl2') || tc.getContext('webgl');
      if (!gl) setWebglError('WebGL not supported');
      tc.remove();
    } catch { setWebglError('WebGL init failed'); }
  }, []);

  // Mouse position for tooltip
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!mountRef.current) return;
    const rect = mountRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  // Agent hover handlers
  const handleAgentHoverIn = useCallback((agent: any) => (e: any) => {
    e.stopPropagation();
    setHoveredAgent(agent);
  }, []);
  const handleAgentHoverOut = useCallback(() => setHoveredAgent(null), []);

  // Visible floor range
  const isMob = isMobileDevice();
  const floorRange = useMemo(() => ({
    start: Math.max(1, selectedFloorId - (isMob ? 2 : 5)),
    end: Math.min(100, selectedFloorId + (isMob ? 2 : 5)),
  }), [selectedFloorId, isMob]);

  const visibleFloors = useMemo(() =>
    floors.filter(f => f.id >= floorRange.start && f.id <= floorRange.end),
    [floors, floorRange]
  );

  // Error fallback
  if (webglError) {
    return (
      <div className="relative w-full h-full bg-gray-950 flex items-center justify-center p-6">
        <div className="max-w-sm text-center">
          <div className="text-4xl">🏗️</div>
          <h2 className="text-lg font-bold text-cyan-300">3D Not Available</h2>
          <p className="text-xs text-blue-200/70 font-mono">{webglError}</p>
        </div>
      </div>
    );
  }

  const isWalkMode = cameraPreset === 'ceo_walk';

  return (
    <div ref={mountRef} className="relative w-full h-full cursor-grab active:cursor-grabbing select-none font-sans" onPointerMove={handlePointerMove}>
      <Canvas
        camera={{ position: [50, 200, 80], fov: 45, near: 0.5, far: 2000 }}
        dpr={isMob ? [1, 1.3] : [1, 2]}
        gl={{ antialias: !isMob, powerPreference: 'high-performance', alpha: true }}
        onCreated={({ gl, scene }) => {
          if (!isMob) {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.2;
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }
          scene.background = new THREE.Color('#091830');
          scene.fog = new THREE.FogExp2('#0b1e35', 0.001);
        }}
      >
        <Suspense fallback={null}>
          {/* Lights */}
          <ambientLight color="#334466" intensity={2.2} />
          <directionalLight color="#fff8e7" intensity={5} position={[100, 350, 100]} castShadow={!isMob} />
          <pointLight color="#06b6d4" intensity={12} distance={350} position={[0, 200, 0]} />

          {/* OrbitControls */}
          <OrbitControls
            ref={controlsRef}
            makeDefault
            enableDamping
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 2 + 0.05}
            minDistance={15}
            maxDistance={500}
          />

          {/* Camera Controller */}
          <CameraCtrl
            cameraPreset={cameraPreset}
            selectedFloorId={selectedFloorId}
            keysRef={keysRef}
            joystickRef={joystickRef}
            ceoPosRef={ceoPosRef}
            controlsRef={controlsRef}
          />

          {/* Building Shell — SOLID exterior */}
          <BuildingShell totalFloors={100} selectedFloorId={selectedFloorId} />

          {/* Interior Floors — CUTAWAY for selected, SOLID for others */}
          {visibleFloors.map(floor => {
            const yPos = (floor.id - 1) * FLOOR_H + 2;
            const isSelected = floor.id === selectedFloorId;
            return (
              <group key={`floor-${floor.id}`} position={[0, yPos, 0]}>
                <OfficeFloor
                  floorId={floor.id}
                  isSelected={isSelected}
                  themeColor={floor.themeColor}
                  onClick={() => {
                    if (cameraPreset !== 'ceo_walk') onSelectFloor(floor.id);
                  }}
                />

                {/* Agents — only on selected floor for performance */}
                {isSelected && floor.agents.map(agent => (
                  <group
                    key={`agent-${agent.id}`}
                    position={[agent.pos.x, 0.15, agent.pos.z]}
                    onPointerOver={handleAgentHoverIn({
                      name: agent.name,
                      role: agent.role,
                      model: agent.aiModel,
                      status: agent.status,
                    })}
                    onPointerOut={handleAgentHoverOut}
                    onClick={() => {
                      if (cameraPreset !== 'ceo_walk') onSelectAgent(agent.id);
                    }}
                  >
                    <HumanFigure
                      position={[0, 0, 0]}
                      color={agent.avatarColor}
                      name={agent.name}
                      status={agent.status}
                    />
                  </group>
                ))}
              </group>
            );
          })}

          {/* CEO Avatar */}
          <CEOWalker ceoPosRef={ceoPosRef} visible={isWalkMode} />

          {/* Elevators */}
          <ElevAnimator elevators={elevators} />
        </Suspense>
      </Canvas>

      {/* Walk HUD */}
      {isWalkMode && (
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <div className="px-3 py-2 rounded-xl bg-amber-950/80 border border-amber-500/40 backdrop-blur-md text-xs text-amber-300 font-mono flex items-center gap-2 shadow-lg animate-pulse">
            🚶 CEO WALK MODE — WASD yurish | 5 chiqish
          </div>
        </div>
      )}
      {!isWalkMode && (
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-[10px] text-cyan-400 font-mono flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            ISHXONAM — AI Office OS 3D
          </div>
        </div>
      )}

      {/* Mobile Joystick */}
      {isWalkMode && isMob && (
        <div className="absolute bottom-20 left-6 z-30">
          <div
            className="w-28 h-28 rounded-full bg-slate-950/80 border-2 border-amber-500/40 backdrop-blur-md flex items-center justify-center shadow-lg"
            onTouchMove={handleJoystickMove}
            onTouchEnd={handleJoystickEnd}
          >
            <div className="w-10 h-10 rounded-full bg-amber-500/50 border border-amber-400" />
            <span className="absolute top-1 text-[8px] font-mono text-amber-400/50">↑</span>
            <span className="absolute bottom-1 text-[8px] font-mono text-amber-400/50">↓</span>
            <span className="absolute left-1 text-[8px] font-mono text-amber-400/50">←</span>
            <span className="absolute right-1 text-[8px] font-mono text-amber-400/50">→</span>
          </div>
        </div>
      )}

      {/* Hover Tooltip */}
      {hoveredAgent && !isWalkMode && (
        <div
          className="absolute z-20 pointer-events-none p-3 rounded-xl border border-cyan-500/40 bg-slate-950/90 backdrop-blur-md text-xs font-mono text-white shadow-lg"
          style={{ left: `${mousePos.x + 15}px`, top: `${mousePos.y + 15}px` }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            <span className="font-bold text-blue-100">{hoveredAgent.name}</span>
            <span className="text-[8px] bg-purple-500/20 text-purple-300 px-1 rounded">AGENT</span>
          </div>
          <div className="text-[10px] text-blue-300">{hoveredAgent.role}</div>
          {hoveredAgent.model && <div className="text-[9px] text-cyan-400">{hoveredAgent.model}</div>}
          {hoveredAgent.status && <div className="text-[9px] text-emerald-400">{hoveredAgent.status}</div>}
        </div>
      )}
    </div>
  );
};

export default BuildingCanvas;
