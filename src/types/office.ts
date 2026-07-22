export type AgentStatus = 
  | 'working_at_desk' 
  | 'walking' 
  | 'in_meeting' 
  | 'coffee_break' 
  | 'in_elevator' 
  | 'conversing' 
  | 'thinking'
  | 'error';

export type LogSeverity = 'info' | 'warn' | 'exec' | 'success' | 'system' | 'token';

export type DepartmentCategory = 
  | 'EXECUTIVE'
  | 'QUANTUM'
  | 'DEEP_LEARNING'
  | 'SOFTWARE'
  | 'CYBER_DEFENSE'
  | 'FINANCE'
  | 'CREATIVE'
  | 'DATA_ANALYTICS'
  | 'OPERATIONS'
  | 'LOBBY_ATRIUM';

export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  severity: LogSeverity;
  source: string;
}

export interface SubTask {
  id: string;
  text: string;
  done: boolean;
}

export interface TaskItem {
  id: string;
  title: string;
  progress: number; // 0 - 100
  status: 'pending' | 'in_progress' | 'completed';
  subtasks: SubTask[];
  eta: string;
  priority?: 'NORMAL' | 'HIGH' | 'URGENT' | 'CRITICAL';
}

export interface MemoryItem {
  id: string;
  topic: string;
  details: string;
  category: 'short_term' | 'long_term' | 'vector';
  timestamp: string;
}

export interface InterAgentMessage {
  id: string;
  timestamp: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  receiverName: string;
  content: string;
  topic: string;
  tokenCount: number;
  status: 'delivered' | 'processing';
}

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export type WaypointType = 'desk' | 'meeting' | 'lounge' | 'elevator' | 'hallway';

export interface WaypointNode {
  id: string;
  type: WaypointType;
  pos: Vector3D;
  label?: string;
}

export interface AIAgent {
  id: string;
  name: string;
  codeName: string;
  role: string;
  departmentId: DepartmentCategory;
  departmentName: string;
  floorId: number; // 1 to 100
  roomId: string;
  roomName: string;
  status: AgentStatus;
  avatarColor: string;
  avatarShape: 'sphere' | 'cube' | 'octahedron' | 'torus' | 'pyramid' | 'cylinder';
  aiModel: 'Claude 3.5 Sonnet' | 'Gemini 1.5 Pro' | 'GPT-4o Enterprise' | 'Llama 3.1 70B' | 'DeepSeek-V3';
  cpuLoad: number;
  memoryUsage: number;
  tokensPerSec: number;
  efficiencyScore: number;
  currentTask: TaskItem;
  logs: LogEntry[];
  memory: MemoryItem[];
  pos: Vector3D;
  targetPos: Vector3D;
  currentWaypointId: string;
  speechBubble?: string;
  speechTimer?: number;
  targetAgentId?: string; // If conversing with another agent
}

export interface Room {
  id: string;
  name: string;
  code: string;
  description: string;
  agentIds: string[];
  bounds: { x: number; z: number; width: number; depth: number };
}

export interface DepartmentTier {
  category: DepartmentCategory;
  name: string;
  floorRange: [number, number]; // e.g. [91, 100]
  color: string;
  lightColor: string;
  description: string;
  iconName: string;
}

export interface Floor {
  id: number; // 1 to 100
  name: string;
  departmentCategory: DepartmentCategory;
  departmentName: string;
  code: string;
  description: string;
  themeColor: string;
  lightColor: string;
  rooms: Room[];
  agents: AIAgent[];
  capacity: number;
  maxCapacity: number;
  energyUsageKW: number;
  activeProcesses: number;
}

export type CameraPreset = 
  | 'full_skyscraper' 
  | 'floor_focus' 
  | 'agent_focus' 
  | 'sky_lounge' 
  | 'interior_cutaway';

export interface SystemMetrics {
  totalAgents: number;
  activeAgents: number;
  activeTasks: number;
  totalTokensGenerated: number;
  overallCpuLoad: number;
  quantumClusterStatus: 'Optimal' | 'High Load' | 'Syncing' | 'Hyper-Drive';
  securityLevel: 'MAXIMUM' | 'SECURE' | 'ELEVATED';
  totalEarningsSavedUSD: number;
  tokenBurnRatePerMin: number;
  activeFloorsCount: number;
}

export interface NotificationItem {
  id: string;
  timestamp: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'critical' | 'agent_comm';
  agentId?: string;
  floorId?: number;
}

export interface ElevatorCar {
  id: string;
  currentFloor: number;
  targetFloor: number;
  posY: number;
  isMoving: boolean;
  passengerAgentIds: string[];
  speed: number;
}

export interface CEOControlSettings {
  emergencyPause: boolean;
  modelPriority: string[];
  tokenBudgetLimit: number;
  globalAutoSwitch: boolean;
  activeBroadcastMessage: string | null;
  overclockedFloors: number[];
  graphicsQuality: 'high' | 'medium' | 'low';
}
