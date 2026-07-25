import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';

// ==================== CONSTANTS ====================
const FLOOR_H = 4;       // floor height in meters
const ROOM_W = 24;       // room width (building width)
const ROOM_D = 16;       // room depth (building depth)
const WALL_THICK = 0.25;
const SPANDREL_H = 1.2;  // opaque band height (bottom of front wall)
const GLASS_H = 2.5;     // transparent glass height (above spandrel)

// ==================== OFFICE FLOOR ====================
// Realistic office floor. isSelected = cutaway (transparent glass, full interior)
// !isSelected = solid shell (opaque glass, minimal interior)

interface OfficeFloorProps {
  floorId: number;
  isSelected: boolean;
  themeColor: string;
  onClick?: () => void;
}

export const OfficeFloor: React.FC<OfficeFloorProps> = ({ floorId, isSelected, themeColor, onClick }) => {
  const usableH = FLOOR_H - 0.3; // 3.7m usable wall height
  const spandrelY = SPANDREL_H / 2 + 0.15;
  const glassY = SPANDREL_H + GLASS_H / 2 + 0.15;
  const frontZ = ROOM_D / 2;

  // Glass opacity: selected = transparent (cutaway), non-selected = opaque (solid building)
  const glassOpacity = isSelected ? 0.35 : 0.85;
  const glassTransmission = isSelected ? 0.65 : 0.15;
  const glassColor = isSelected ? '#7ab8e0' : '#1a2a3a'; // bright when cutaway, dark when solid

  return (
    <group onClick={onClick}>
      {/* ======== FLOOR SEPARATOR (thin steel band) ======== */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[ROOM_W + 0.6, 0.08, ROOM_D + 0.6]} />
        <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ======== CARPET FLOOR ======== */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[ROOM_W, 0.3, ROOM_D]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.95} metalness={0.05} />
      </mesh>

      {/* ======== BACK WALL (solid) ======== */}
      <mesh position={[0, usableH / 2 + 0.15, -ROOM_D / 2]}>
        <boxGeometry args={[ROOM_W, usableH, WALL_THICK]} />
        <meshStandardMaterial color="#333344" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== SIDE WALLS (solid) ======== */}
      <mesh position={[-ROOM_W / 2, usableH / 2 + 0.15, 0]}>
        <boxGeometry args={[WALL_THICK, usableH, ROOM_D]} />
        <meshStandardMaterial color="#333344" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[ROOM_W / 2, usableH / 2 + 0.15, 0]}>
        <boxGeometry args={[WALL_THICK, usableH, ROOM_D]} />
        <meshStandardMaterial color="#333344" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== FRONT SPANDREL (ALWAYS opaque — the key anti-tunnel element) ======== */}
      <mesh position={[0, spandrelY, frontZ]}>
        <boxGeometry args={[ROOM_W, SPANDREL_H, 0.15]} />
        <meshStandardMaterial color="#1a2a3a" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* ======== FRONT VISION GLASS ======== */}
      {/* Selected floor: transparent (cutaway, can see inside) */}
      {/* Other floors: opaque (solid building exterior) */}
      <mesh position={[0, glassY, frontZ]}>
        <boxGeometry args={[ROOM_W, GLASS_H, 0.06]} />
        <meshPhysicalMaterial
          color={glassColor}
          transparent
          opacity={glassOpacity}
          roughness={0.05}
          metalness={0.9}
          transmission={glassTransmission}
          ior={1.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ======== MULLIONS (steel dividers on front glass) ======== */}
      {[-9, -5, 0, 5, 9].map((mx, i) => (
        <mesh key={`vm-${i}`} position={[mx, glassY, frontZ + 0.04]}>
          <boxGeometry args={[0.08, GLASS_H, 0.08]} />
          <meshStandardMaterial color="#667788" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      {/* Horizontal mullion */}
      <mesh position={[0, glassY, frontZ + 0.04]}>
        <boxGeometry args={[ROOM_W, 0.08, 0.08]} />
        <meshStandardMaterial color="#667788" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ======== CUTAWAY GLOW (selected floor gets glowing edge) ======== */}
      {isSelected && (
        <>
          {/* Glowing edge around the cutaway opening */}
          <mesh position={[0, glassY - GLASS_H/2 - 0.04, frontZ + 0.08]}>
            <boxGeometry args={[ROOM_W, 0.03, 0.03]} />
            <meshBasicMaterial color={themeColor} transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, glassY + GLASS_H/2 + 0.04, frontZ + 0.08]}>
            <boxGeometry args={[ROOM_W, 0.03, 0.03]} />
            <meshBasicMaterial color={themeColor} transparent opacity={0.8} />
          </mesh>
          {/* Vertical glow edges */}
          {[-ROOM_W/2, ROOM_W/2].map((vx, i) => (
            <mesh key={`vg-${i}`} position={[vx, glassY, frontZ + 0.08]}>
              <boxGeometry args={[0.03, GLASS_H, 0.03]} />
              <meshBasicMaterial color={themeColor} transparent opacity={0.8} />
            </mesh>
          ))}
        </>
      )}

      {/* ======== CEILING ======== */}
      {isSelected && (
        <mesh position={[0, FLOOR_H - 0.05, 0]}>
          <boxGeometry args={[ROOM_W, 0.1, ROOM_D]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
        </mesh>
      )}

      {/* ======== CEILING LIGHTS (selected floor only) ======== */}
      {isSelected && [0, 1, 2].map((li) => (
        <mesh key={`cl-${li}`} position={[-7 + li * 7, FLOOR_H - 0.12, 0]}>
          <boxGeometry args={[4, 0.05, 1.5]} />
          <meshBasicMaterial color="#fffde0" />
        </mesh>
      ))}
      {/* Point light for interior illumination */}
      {isSelected && (
        <pointLight position={[0, FLOOR_H - 0.2, 0]} intensity={3} distance={10} color="#fffde0" />
      )}

      {/* ======== INTERIOR FURNITURE (ONLY selected floor) ======== */}
      {isSelected && (
        <>
          {/* ---- 4 Workstations ---- */}
          {[
            { x: -8, z: -5 },
            { x: -3, z: -5 },
            { x: 3, z: -5 },
            { x: 8, z: -5 },
          ].map((d, i) => (
            <group key={`desk-${i}`} position={[d.x, 0.15, d.z]}>
              {/* Desk surface */}
              <mesh position={[0, 0.4, 0]}>
                <boxGeometry args={[2.0, 0.05, 1.0]} />
                <meshStandardMaterial color="#3d3d4d" roughness={0.6} metalness={0.1} />
              </mesh>
              {/* Desk legs */}
              {[[-0.9, 0, -0.4], [0.9, 0, -0.4], [-0.9, 0, 0.4], [0.9, 0, 0.4]].map((leg, j) => (
                <mesh key={j} position={[leg[0], 0.2, leg[2]]}>
                  <boxGeometry args={[0.04, 0.4, 0.04]} />
                  <meshStandardMaterial color="#555" metalness={0.8} roughness={0.3} />
                </mesh>
              ))}
              {/* Monitor */}
              <mesh position={[0, 0.7, -0.3]}>
                <boxGeometry args={[0.85, 0.5, 0.03]} />
                <meshBasicMaterial color="#0ea5e9" />
              </mesh>
              {/* Monitor stand */}
              <mesh position={[0, 0.47, -0.3]}>
                <boxGeometry args={[0.04, 0.24, 0.04]} />
                <meshStandardMaterial color="#555" metalness={0.8} />
              </mesh>
              {/* Keyboard */}
              <mesh position={[0, 0.43, 0.1]}>
                <boxGeometry args={[0.55, 0.02, 0.2]} />
                <meshStandardMaterial color="#222" roughness={0.8} />
              </mesh>
              {/* Office Chair */}
              <group position={[0, 0, 0.5]}>
                {/* Seat */}
                <mesh position={[0, 0.43, 0]}>
                  <boxGeometry args={[0.45, 0.05, 0.45]} />
                  <meshStandardMaterial color="#1e293b" roughness={0.7} />
                </mesh>
                {/* Back */}
                <mesh position={[0, 0.65, -0.2]}>
                  <boxGeometry args={[0.45, 0.4, 0.05]} />
                  <meshStandardMaterial color="#1e293b" roughness={0.7} />
                </mesh>
                {/* Pole */}
                <mesh position={[0, 0.32, 0]}>
                  <cylinderGeometry args={[0.02, 0.02, 0.22, 6]} />
                  <meshStandardMaterial color="#444" metalness={0.8} />
                </mesh>
                {/* Base */}
                <mesh position={[0, 0.2, 0]} rotation={[0, 0, 0]}>
                  <cylinderGeometry args={[0.15, 0.15, 0.04, 8]} />
                  <meshStandardMaterial color="#444" metalness={0.8} />
                </mesh>
              </group>
            </group>
          ))}

          {/* ---- Conference Table ---- */}
          <mesh position={[0, 0.4, -9.5]}>
            <cylinderGeometry args={[1.8, 1.8, 0.06, 16]} />
            <meshStandardMaterial color="#2a2a3a" roughness={0.4} metalness={0.6} />
          </mesh>
          {/* Conference chairs */}
          {[0, 1, 2, 3, 4, 5].map((ci) => {
            const angle = ci * Math.PI / 3;
            return (
              <group key={`cc-${ci}`} position={[Math.cos(angle) * 2.3, 0.15, -9.5 + Math.sin(angle) * 2.3]} rotation={[0, -angle, 0]}>
                <mesh position={[0, 0.28, 0]}>
                  <boxGeometry args={[0.4, 0.04, 0.4]} />
                  <meshStandardMaterial color="#1e293b" roughness={0.7} />
                </mesh>
                <mesh position={[0, 0.5, -0.18]}>
                  <boxGeometry args={[0.4, 0.35, 0.04]} />
                  <meshStandardMaterial color="#1e293b" roughness={0.7} />
                </mesh>
              </group>
            );
          })}

          {/* ---- Sofa ---- */}
          <mesh position={[8, 0.45, 4]}>
            <boxGeometry args={[2.5, 0.6, 0.8]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.7} />
          </mesh>
          <mesh position={[8, 0.85, 4.35]}>
            <boxGeometry args={[2.5, 0.4, 0.1]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.7} />
          </mesh>

          {/* ---- Coffee Table ---- */}
          <mesh position={[8, 0.35, 5.5]}>
            <boxGeometry args={[0.8, 0.03, 0.5]} />
            <meshStandardMaterial color="#445" metalness={0.5} roughness={0.4} />
          </mesh>

          {/* ---- Plants ---- */}
          {[
            { pos: [-11, 0.15, 5], color: '#22c55e' },
            { pos: [11, 0.15, 5], color: '#16a34a' },
          ].map((p, i) => (
            <group key={`plant-${i}`} position={p.pos}>
              <mesh position={[0, -0.1, 0]}>
                <cylinderGeometry args={[0.2, 0.15, 0.35, 8]} />
                <meshStandardMaterial color="#654321" roughness={0.9} />
              </mesh>
              <mesh position={[0, 0.35, 0]}>
                <sphereGeometry args={[0.28, 8, 6]} />
                <meshStandardMaterial color={p.color} roughness={0.8} />
              </mesh>
            </group>
          ))}

          {/* ---- Whiteboard ---- */}
          <mesh position={[0, 2.5, -ROOM_D / 2 + 0.14]}>
            <boxGeometry args={[4, 1.5, 0.02]} />
            <meshStandardMaterial color="#e8e8e8" roughness={0.9} />
          </mesh>
          <mesh position={[0, 2.5, -ROOM_D / 2 + 0.13]}>
            <boxGeometry args={[4.1, 1.6, 0.03]} />
            <meshStandardMaterial color="#667788" metalness={0.7} />
          </mesh>

          {/* ---- Elevator Shafts ---- */}
          {[-1.5, 1.5].map((xo, i) => (
            <mesh key={`shaft-${i}`} position={[xo, usableH / 2 + 0.15, 2]}>
              <boxGeometry args={[2.4, usableH, 2.4]} />
              <meshPhysicalMaterial
                color="#06b6d4"
                transparent
                opacity={0.12}
                roughness={0.1}
                metalness={0.9}
                transmission={0.7}
                side={THREE.DoubleSide}
              />
            </mesh>
          ))}
        </>
      )}

      {/* ======== SELECTION HIGHLIGHT ======== */}
      {isSelected && (
        <mesh position={[0, usableH / 2 + 0.15, 0]}>
          <boxGeometry args={[ROOM_W + 0.5, FLOOR_H + 0.5, ROOM_D + 0.5]} />
          <meshBasicMaterial color={themeColor} wireframe transparent opacity={0.35} />
        </mesh>
      )}
    </group>
  );
};

// ==================== HUMAN FIGURE (better proportions) ====================
// Uses capsule torso, cylinder limbs, sphere head with face

interface HumanFigureProps {
  position: [number, number, number];
  color: string;
  name: string;
  status: 'working_at_desk' | 'in_meeting' | 'coffee_break' | 'walking' | 'thinking' | 'conversing' | 'in_elevator' | 'error';
  onClick?: () => void;
  onPointerOver?: (e: any) => void;
  onPointerOut?: () => void;
}

export const HumanFigure: React.FC<HumanFigureProps> = ({ position, color, name, status, onClick, onPointerOver, onPointerOut }) => {
  const isSitting = status === 'working_at_desk' || status === 'thinking';
  const bodyY = isSitting ? 0.55 : 0.85;
  const headY = isSitting ? 1.15 : 1.55;
  const legLen = isSitting ? 0.25 : 0.4;

  const statusColor =
    status === 'working_at_desk' ? '#10b981' :
    status === 'in_meeting' ? '#a855f7' :
    status === 'coffee_break' ? '#f59e0b' :
    '#38bdf8';

  return (
    <group position={position} onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      {/* HEAD (sphere with face features) */}
      <mesh position={[0, headY, 0]}>
        <sphereGeometry args={[0.17, 12, 8]} />
        <meshStandardMaterial color="#e8c8a0" roughness={0.7} />
      </mesh>
      {/* Eyes (two small spheres) */}
      <mesh position={[-0.05, headY + 0.02, 0.14]}>
        <sphereGeometry args={[0.03, 6, 4]} />
        <meshBasicMaterial color="#222" />
      </mesh>
      <mesh position={[0.05, headY + 0.02, 0.14]}>
        <sphereGeometry args={[0.03, 6, 4]} />
        <meshBasicMaterial color="#222" />
      </mesh>
      {/* Hair */}
      <mesh position={[0, headY + 0.06, -0.04]}>
        <sphereGeometry args={[0.16, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#333" roughness={0.9} />
      </mesh>

      {/* BODY (capsule torso — much more realistic than box) */}
      <mesh position={[0, bodyY, 0]}>
        <capsuleGeometry args={[0.14, 0.25, 4, 12]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.15} emissive={color} emissiveIntensity={0.08} />
      </mesh>

      {/* LEGS (cylinders — smoother than boxes) */}
      <mesh position={[-0.08, bodyY - legLen - 0.15, 0]}>
        <cylinderGeometry args={[0.05, 0.05, legLen, 6]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.8} />
      </mesh>
      <mesh position={[0.08, bodyY - legLen - 0.15, 0]}>
        <cylinderGeometry args={[0.05, 0.05, legLen, 6]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.8} />
      </mesh>

      {/* FEET (when standing) */}
      {!isSitting && (
        <>
          <mesh position={[-0.08, bodyY - legLen * 2 - 0.27, 0.03]}>
            <boxGeometry args={[0.08, 0.04, 0.14]} />
            <meshStandardMaterial color="#333" roughness={0.8} />
          </mesh>
          <mesh position={[0.08, bodyY - legLen * 2 - 0.27, 0.03]}>
            <boxGeometry args={[0.08, 0.04, 0.14]} />
            <meshStandardMaterial color="#333" roughness={0.8} />
          </mesh>
        </>
      )}

      {/* ARMS (cylinders) */}
      <mesh position={[-0.22, bodyY + 0.05, 0]} rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.04, 0.04, 0.35, 6]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
      <mesh position={[0.22, bodyY + 0.05, 0]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.04, 0.04, 0.35, 6]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>

      {/* HANDS */}
      <mesh position={[-0.26, bodyY - 0.1, 0]}>
        <sphereGeometry args={[0.04, 6, 4]} />
        <meshStandardMaterial color="#e8c8a0" roughness={0.7} />
      </mesh>
      <mesh position={[0.26, bodyY - 0.1, 0]}>
        <sphereGeometry args={[0.04, 6, 4]} />
        <meshStandardMaterial color="#e8c8a0" roughness={0.7} />
      </mesh>

      {/* STATUS INDICATOR (floating dot + ring) */}
      <mesh position={[0, headY + 0.28, 0]}>
        <sphereGeometry args={[0.06, 8, 4]} />
        <meshBasicMaterial color={statusColor} />
      </mesh>
      <mesh position={[0, headY + 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.12, 0.015, 4, 16]} />
        <meshBasicMaterial color={statusColor} transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

// ==================== CEO AVATAR ====================
interface CEOAvatarProps {
  position: [number, number, number];
}

export const CEOAvatar: React.FC<CEOAvatarProps> = ({ position }) => {
  return (
    <group position={position}>
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
      {/* Hair (slick CEO hair) */}
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

      {/* CEO glow label */}
      <mesh position={[0, 2.05, 0]}>
        <sphereGeometry args={[0.05, 6, 4]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      <pointLight position={[0, 2.5, 0]} color="#fbbf24" intensity={2} distance={6} />
    </group>
  );
};

// ==================== BUILDING EXTERIOR SHELL ====================
// Solid skyscraper exterior — looks like a REAL building from outside

interface BuildingShellProps {
  totalFloors: number;
  selectedFloorId: number;
}

export const BuildingShell: React.FC<BuildingShellProps> = ({ totalFloors, selectedFloorId }) => {
  const totalH = totalFloors * FLOOR_H; // 400m
  const midY = totalH / 2; // 200m
  const W = ROOM_W + 0.5; // 24.5 (slightly larger than interior)
  const D = ROOM_D + 0.5; // 16.5

  return (
    <group>
      {/* ======== CORNER COLUMNS (4 structural pillars) ======== */}
      {[
        [-W/2, -D/2], [W/2, -D/2],
        [-W/2, D/2], [W/2, D/2],
      ].map(([cx, cz], i) => (
        <mesh key={`col-${i}`} position={[cx, midY, cz]}>
          <boxGeometry args={[0.5, totalH, 0.5]} />
          <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}

      {/* ======== INTERMEDIATE COLUMNS (mid-side, front) ======== */}
      {[-W/2, W/2].map((x, i) => (
        <mesh key={`mcol-${i}`} position={[x, midY, 0]}>
          <boxGeometry args={[0.3, totalH, 0.3]} />
          <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}

      {/* ======== VERTICAL MULLION STRIPS (front face, full height) ======== */}
      {[-9, -5, 0, 5, 9].map((mx, i) => (
        <mesh key={`vmull-${i}`} position={[mx, midY, D/2 + 0.08]}>
          <boxGeometry args={[0.08, totalH, 0.08]} />
          <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}

      {/* ======== SIDE WALL PANELS (solid, full height) ======== */}
      <mesh position={[-W/2 - 0.15, midY, 0]}>
        <boxGeometry args={[0.5, totalH, D + 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[W/2 + 0.15, midY, 0]}>
        <boxGeometry args={[0.5, totalH, D + 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== BACK WALL PANEL (solid, full height) ======== */}
      <mesh position={[0, midY, -D/2 - 0.15]}>
        <boxGeometry args={[W + 0.5, totalH, 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== HORIZONTAL BEAMS at key floor levels ======== */}
      {[1, 10, 20, 40, 50, 60, 80, 95, 100].map((fn) => {
        const y = (fn - 1) * FLOOR_H + 0.04;
        return (
          <group key={`beam-${fn}`} position={[0, y, 0]}>
            <mesh position={[0, 0, D/2 + 0.08]}>
              <boxGeometry args={[W + 0.6, 0.12, 0.12]} />
              <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
            </mesh>
            <mesh position={[0, 0, -D/2 - 0.15]}>
              <boxGeometry args={[W + 0.6, 0.12, 0.12]} />
              <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
            </mesh>
          </group>
        );
      })}

      {/* ======== TOP CROWN ======== */}
      <mesh position={[0, totalH + 1, 0]}>
        <boxGeometry args={[W, 2, D]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ======== ANTENNA ======== */}
      <mesh position={[0, totalH + 4, 0]}>
        <cylinderGeometry args={[0.25, 0.7, 6, 8]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, totalH + 7.5, 0]}>
        <sphereGeometry args={[0.35, 8, 6]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <pointLight position={[0, totalH + 7.5, 0]} color="#ef4444" intensity={3} distance={15} />

      {/* ======== GROUND PODIUM ======== */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[W + 10, 2, D + 10]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>
      {/* Podium accent band */}
      <mesh position={[0, -0.1, D/2 + 5]}>
        <boxGeometry args={[W + 8, 0.12, 0.12]} />
        <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ======== ENTRANCE ======== */}
      <mesh position={[0, 2.5, D/2 + 4]}>
        <boxGeometry args={[8, 0.15, 6]} />
        <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
      </mesh>
      {[-3.5, 3.5].map((cx, i) => (
        <mesh key={`encol-${i}`} position={[cx, 1.3, D/2 + 4]}>
          <cylinderGeometry args={[0.15, 0.15, 2.4, 6]} />
          <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}
      {/* Entrance doors */}
      <mesh position={[0, 1.5, D/2 + 0.8]}>
        <boxGeometry args={[3, 3, 0.05]} />
        <meshPhysicalMaterial color="#88ccff" transparent opacity={0.45} roughness={0.05} metalness={0.9} transmission={0.6} side={THREE.DoubleSide} />
      </mesh>
      {/* Door frame */}
      <mesh position={[0, 1.5, D/2 + 0.79]}>
        <boxGeometry args={[3.2, 3.1, 0.04]} />
        <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ======== BUILDING NAME LIGHT ======== */}
      {/* Subtle glow at lobby level */}
      <pointLight position={[0, 5, D/2 + 3]} color="#06b6d4" intensity={2} distance={12} />

      {/* ======== GROUND PLANE ======== */}
      <mesh position={[0, -2.05, 0]} receiveShadow>
        <boxGeometry args={[80, 0.1, 80]} />
        <meshStandardMaterial color="#0a0a1a" roughness={0.95} />
      </mesh>
    </group>
  );
};
