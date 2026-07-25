import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';

// ==================== OFFICE FLOOR ====================
// Realistic office floor with: spandrel facade, glass windows, mullions,
// ceiling, carpet, furniture (desks+monitors+chairs), conference, plants, whiteboard

interface OfficeFloorProps {
  floorId: number;
  isSelected: boolean;
  themeColor: string;
  onClick?: () => void;
}

const FLOOR_HEIGHT = 4;
const ROOM_W = 20;
const ROOM_D = 14;

export const OfficeFloor: React.FC<OfficeFloorProps> = ({ floorId, isSelected, themeColor, onClick }) => {
  // Sitting height offsets
  const wallH = FLOOR_HEIGHT - 0.3; // 3.7m usable wall height
  const spandrelH = 1.2; // opaque band at bottom
  const glassH = wallH - spandrelH; // 2.5m glass above
  const spandrelY = spandrelH / 2 + 0.15; // center of spandrel panel
  const glassY = spandrelH + glassH / 2 + 0.15; // center of glass panel
  const frontZ = ROOM_D / 2; // 7

  return (
    <group onClick={onClick}>
      {/* ======== CEILING ======== */}
      <mesh position={[0, FLOOR_HEIGHT - 0.05, 0]}>
        <boxGeometry args={[ROOM_W, 0.1, ROOM_D]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>

      {/* ======== FLOOR / CARPET ======== */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[ROOM_W, 0.3, ROOM_D]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.95} metalness={0.05} />
      </mesh>

      {/* ======== BACK WALL (solid) ======== */}
      <mesh position={[0, wallH / 2 + 0.15, -ROOM_D / 2]}>
        <boxGeometry args={[ROOM_W, wallH, 0.25]} />
        <meshStandardMaterial color="#333344" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== SIDE WALLS (solid) ======== */}
      <mesh position={[-ROOM_W / 2, wallH / 2 + 0.15, 0]}>
        <boxGeometry args={[0.25, wallH, ROOM_D]} />
        <meshStandardMaterial color="#333344" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[ROOM_W / 2, wallH / 2 + 0.15, 0]}>
        <boxGeometry args={[0.25, wallH, ROOM_D]} />
        <meshStandardMaterial color="#333344" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== FRONT WALL — SPANDREL (opaque band) ======== */}
      {/* This is the key fix for the "tunnel" effect: opaque bottom band */}
      <mesh position={[0, spandrelY, frontZ]}>
        <boxGeometry args={[ROOM_W, spandrelH, 0.15]} />
        <meshStandardMaterial color="#1e293b" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* ======== FRONT WALL — VISION GLASS (semi-transparent) ======== */}
      <mesh position={[0, glassY, frontZ]}>
        <boxGeometry args={[ROOM_W, glassH, 0.06]} />
        <meshPhysicalMaterial
          color="#7ab8e0"
          transparent
          opacity={0.35}
          roughness={0.05}
          metalness={0.9}
          transmission={0.65}
          ior={1.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ======== MULLIONS (vertical steel dividers on front glass) ======== */}
      {[-8, -4, 0, 4, 8].map((mx, i) => (
        <mesh key={`vm-${i}`} position={[mx, glassY, frontZ + 0.04]}>
          <boxGeometry args={[0.08, glassH, 0.08]} />
          <meshStandardMaterial color="#667788" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      {/* Horizontal mullion strip */}
      <mesh position={[0, glassY, frontZ + 0.04]}>
        <boxGeometry args={[ROOM_W, 0.08, 0.08]} />
        <meshStandardMaterial color="#667788" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ======== CEILING LIGHTS (3 fluorescent panels) ======== */}
      {[0, 1, 2].map((li) => (
        <mesh key={`cl-${li}`} position={[-6 + li * 6, FLOOR_HEIGHT - 0.12, 0]}>
          <boxGeometry args={[4, 0.05, 1.5]} />
          <meshBasicMaterial color="#fffde0" />
        </mesh>
      ))}
      {/* Point light per panel for illumination */}
      <pointLight position={[0, FLOOR_HEIGHT - 0.2, 0]} intensity={2} distance={8} color="#fffde0" />

      {/* ======== WORKSTATIONS (4 desks) ======== */}
      {[
        { x: -7, z: -5 },
        { x: -3, z: -5 },
        { x: 3, z: -5 },
        { x: 7, z: -5 },
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
          {/* Monitor screen */}
          <mesh position={[0, 0.7, -0.3]}>
            <boxGeometry args={[0.85, 0.5, 0.03]} />
            <meshBasicMaterial color="#0ea5e9" />
          </mesh>
          {/* Monitor frame */}
          <mesh position={[0, 0.7, -0.32]}>
            <boxGeometry args={[0.92, 0.56, 0.02]} />
            <meshStandardMaterial color="#222" roughness={0.8} />
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
          {/* Office Chair (only on selected floor for performance) */}
          {isSelected && (
            <group position={[0, 0, 0.4]}>
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
              {/* Chair base */}
              <mesh position={[0, 0.2, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.04, 8]} />
                <meshStandardMaterial color="#444" metalness={0.8} />
              </mesh>
              {/* Chair pole */}
              <mesh position={[0, 0.32, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.22, 4]} />
                <meshStandardMaterial color="#444" metalness={0.8} />
              </mesh>
            </group>
          )}
        </group>
      ))}

      {/* ======== CONFERENCE TABLE (center) ======== */}
      <mesh position={[0, 0.4, -9.5]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.8, 1.8, 0.06, 16]} />
        <meshStandardMaterial color="#2a2a3a" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Conference chairs (selected floor only) */}
      {isSelected && [0, 1, 2, 3, 4, 5].map((ci) => {
        const angle = ci * Math.PI / 3;
        const cx = Math.cos(angle) * 2.3;
        const cz = -9.5 + Math.sin(angle) * 2.3;
        return (
          <group key={`conf-chair-${ci}`} position={[cx, 0.15, cz]} rotation={[0, -angle, 0]}>
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

      {/* ======== SOFA (right side lounge) ======== */}
      <mesh position={[8, 0.45, 4]}>
        <boxGeometry args={[2.5, 0.6, 0.8]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.7} />
      </mesh>
      {/* Sofa back */}
      <mesh position={[8, 0.85, 4.35]}>
        <boxGeometry args={[2.5, 0.4, 0.1]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.7} />
      </mesh>

      {/* ======== COFFEE TABLE ======== */}
      <mesh position={[8, 0.35, 5.5]}>
        <boxGeometry args={[0.8, 0.03, 0.5]} />
        <meshStandardMaterial color="#445" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ======== PLANTS (2 near front windows) ======== */}
      {[
        { pos: [-9.5, 0.15, 5], color: '#22c55e' },
        { pos: [9.5, 0.15, 5], color: '#16a34a' },
      ].map((p, i) => (
        <group key={`plant-${i}`} position={p.pos}>
          {/* Pot */}
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.2, 0.15, 0.35, 8]} />
            <meshStandardMaterial color="#654321" roughness={0.9} />
          </mesh>
          {/* Plant body */}
          <mesh position={[0, 0.35, 0]}>
            <sphereGeometry args={[0.28, 8, 6]} />
            <meshStandardMaterial color={p.color} roughness={0.8} />
          </mesh>
          {/* Stem */}
          <mesh position={[0, 0.05, 0]}>
            <cylinderGeometry args={[0.02, 0.03, 0.5, 4]} />
            <meshStandardMaterial color="#15803d" />
          </mesh>
        </group>
      ))}

      {/* ======== WHITEBOARD on back wall ======== */}
      <mesh position={[0, 2.5, -ROOM_D / 2 + 0.14]}>
        <boxGeometry args={[4, 1.5, 0.02]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.9} metalness={0} />
      </mesh>
      {/* Whiteboard frame */}
      <mesh position={[0, 2.5, -ROOM_D / 2 + 0.13]}>
        <boxGeometry args={[4.1, 1.6, 0.03]} />
        <meshStandardMaterial color="#667788" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ======== ELEVATOR SHAFTS (2 in center) ======== */}
      {[-1.5, 1.5].map((xo, i) => (
        <mesh key={`shaft-${i}`} position={[xo, wallH / 2 + 0.15, 2]}>
          <boxGeometry args={[2.4, wallH, 2.4]} />
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

      {/* ======== FLOOR SEPARATOR (thin opaque band at bottom) ======== */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[ROOM_W + 0.5, 0.08, ROOM_D + 0.5]} />
        <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ======== SELECTION HIGHLIGHT ======== */}
      {isSelected && (
        <mesh position={[0, wallH / 2 + 0.15, 0]}>
          <boxGeometry args={[ROOM_W + 0.5, FLOOR_HEIGHT + 0.5, ROOM_D + 0.5]} />
          <meshBasicMaterial color={themeColor} wireframe transparent opacity={0.4} />
        </mesh>
      )}
    </group>
  );
};

// ==================== HUMAN FIGURE (stylized low-poly office worker) ====================
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

  const statusColor =
    status === 'working_at_desk' ? '#10b981' :
    status === 'in_meeting' ? '#a855f7' :
    status === 'coffee_break' ? '#f59e0b' :
    '#38bdf8';

  return (
    <group position={position} onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      {/* HEAD */}
      <mesh position={[0, headY, 0]}>
        <sphereGeometry args={[0.18, 10, 8]} />
        <meshStandardMaterial color="#f5d0a9" roughness={0.8} />
      </mesh>

      {/* HAIR */}
      <mesh position={[0, headY + 0.08, -0.06]}>
        <sphereGeometry args={[0.17, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#333" roughness={0.9} />
      </mesh>

      {/* BODY (torso) */}
      <mesh position={[0, bodyY, 0]}>
        <boxGeometry args={[0.35, 0.5, 0.2]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} emissive={color} emissiveIntensity={0.1} />
      </mesh>

      {/* LEGS */}
      <mesh position={[-0.1, bodyY - 0.4, 0]}>
        <boxGeometry args={[0.12, 0.35, 0.12]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.8} />
      </mesh>
      <mesh position={[0.1, bodyY - 0.4, 0]}>
        <boxGeometry args={[0.12, 0.35, 0.12]} />
        <meshStandardMaterial color="#2d2d3d" roughness={0.8} />
      </mesh>

      {/* ARMS */}
      <mesh position={[-0.25, bodyY, 0]}>
        <boxGeometry args={[0.08, 0.4, 0.08]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      <mesh position={[0.25, bodyY, 0]}>
        <boxGeometry args={[0.08, 0.4, 0.08]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>

      {/* STATUS INDICATOR (floating dot above head) */}
      <mesh position={[0, headY + 0.3, 0]}>
        <sphereGeometry args={[0.06, 6, 4]} />
        <meshBasicMaterial color={statusColor} />
      </mesh>
      {/* Status ring */}
      <mesh position={[0, headY + 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.01, 4, 16]} />
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
        <sphereGeometry args={[0.2, 12, 8]} />
        <meshStandardMaterial color="#f5d0a9" roughness={0.7} />
      </mesh>
      {/* Body (gold suit) */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.25]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.3} roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.12, 0.45, 0]}>
        <boxGeometry args={[0.14, 0.4, 0.14]} />
        <meshStandardMaterial color="#333" roughness={0.8} />
      </mesh>
      <mesh position={[0.12, 0.45, 0]}>
        <boxGeometry args={[0.14, 0.4, 0.14]} />
        <meshStandardMaterial color="#333" roughness={0.8} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.28, 0.85, 0]}>
        <boxGeometry args={[0.1, 0.45, 0.1]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh position={[0.28, 0.85, 0]}>
        <boxGeometry args={[0.1, 0.45, 0.1]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Crown */}
      <mesh position={[0, 1.8, 0]}>
        <coneGeometry args={[0.08, 0.2, 4]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      {/* CEO label glow */}
      <mesh position={[0, 2.1, 0]}>
        <sphereGeometry args={[0.04, 4, 3]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
};

// ==================== BUILDING EXTERIOR SHELL ====================
// Glass curtain wall + steel frame + crown + antenna + podium + entrance

interface BuildingShellProps {
  totalFloors: number;
}

export const BuildingShell: React.FC<BuildingShellProps> = ({ totalFloors }) => {
  const totalH = totalFloors * 4; // 400m
  const midY = totalH / 2; // 200m
  const W = 22;
  const D = 16;
  const frontZ = D / 2 + 0.3; // Shell glass slightly outside per-floor walls

  return (
    <group>
      {/* ======== CORNER COLUMNS (4 structural pillars) ======== */}
      {[
        [-W/2 - 0.2, -D/2 - 0.2],
        [W/2 + 0.2, -D/2 - 0.2],
        [-W/2 - 0.2, D/2 + 0.2],
        [W/2 + 0.2, D/2 + 0.2],
      ].map(([cx, cz], i) => (
        <mesh key={`col-${i}`} position={[cx, midY, cz]}>
          <boxGeometry args={[0.5, totalH, 0.5]} />
          <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}

      {/* ======== VERTICAL MULLION STRIPS on front face ======== */}
      {/* These create the classic office building window grid */}
      {[-8, -4, 0, 4, 8].map((mx, i) => (
        <mesh key={`vmull-${i}`} position={[mx, midY, frontZ]}>
          <boxGeometry args={[0.1, totalH, 0.08]} />
          <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}

      {/* ======== SIDE WALL PANELS (solid, full height) ======== */}
      <mesh position={[-W/2 - 0.2, midY, 0]}>
        <boxGeometry args={[0.5, totalH, D + 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[W/2 + 0.2, midY, 0]}>
        <boxGeometry args={[0.5, totalH, D + 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== BACK WALL PANEL (solid, full height) ======== */}
      <mesh position={[0, midY, -D/2 - 0.2]}>
        <boxGeometry args={[W + 0.5, totalH, 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ======== FRONT FACADE (continuous glass curtain wall) ======== */}
      {/* Slightly transparent to break up tunnel effect, offset outside per-floor glass */}
      <mesh position={[0, midY, frontZ]}>
        <boxGeometry args={[W, totalH, 0.05]} />
        <meshPhysicalMaterial
          color="#6ab0d8"
          transparent
          opacity={0.18}
          roughness={0.05}
          metalness={0.9}
          transmission={0.75}
          ior={1.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ======== HORIZONTAL BEAMS at key floor levels ======== */}
      {[0, 20, 40, 60, 80, 95, 100].map((floorNum) => {
        const y = (floorNum - 1) * 4 + 0.04;
        return (
          <group key={`beam-${floorNum}`} position={[0, y, 0]}>
            {/* Front beam */}
            <mesh position={[0, 0, frontZ]}>
              <boxGeometry args={[W + 0.6, 0.12, 0.12]} />
              <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
            </mesh>
            {/* Back beam */}
            <mesh position={[0, 0, -D/2 - 0.2]}>
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
        <cylinderGeometry args={[0.3, 0.8, 6, 8]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Antenna tip (red blinking light) */}
      <mesh position={[0, totalH + 7.5, 0]}>
        <sphereGeometry args={[0.35, 8, 6]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      {/* Antenna tip glow */}
      <pointLight position={[0, totalH + 7.5, 0]} color="#ef4444" intensity={3} distance={15} />

      {/* ======== GROUND PODIUM ======== */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[W + 8, 2, D + 8]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} metalness={0.1} />
      </mesh>
      {/* Podium decorative band */}
      <mesh position={[0, -0.1, D/2 + 4.5]}>
        <boxGeometry args={[W + 6, 0.15, 0.15]} />
        <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ======== ENTRANCE CANOPY ======== */}
      <mesh position={[0, 2.5, D/2 + 4]}>
        <boxGeometry args={[8, 0.15, 6]} />
        <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Entrance support columns */}
      {[-3.5, 3.5].map((cx, i) => (
        <mesh key={`canopy-col-${i}`} position={[cx, 1.3, D/2 + 4]}>
          <cylinderGeometry args={[0.15, 0.15, 2.4, 6]} />
          <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}
      {/* Entrance double glass doors */}
      <mesh position={[0, 1.5, D/2 + 0.8]}>
        <boxGeometry args={[3, 3, 0.05]} />
        <meshPhysicalMaterial
          color="#88ccff"
          transparent
          opacity={0.4}
          roughness={0.05}
          metalness={0.9}
          transmission={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Door frame */}
      <mesh position={[0, 1.5, D/2 + 0.79]}>
        <boxGeometry args={[3.2, 3.1, 0.03]} />
        <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ======== GROUND PLANE ======== */}
      <mesh position={[0, -2.05, 0]} receiveShadow>
        <boxGeometry args={[80, 0.1, 80]} />
        <meshStandardMaterial color="#0a0a1a" roughness={0.95} />
      </mesh>
    </group>
  );
};
