import { 
  Floor, 
  AIAgent, 
  DepartmentCategory, 
  DepartmentTier, 
  SystemMetrics, 
  InterAgentMessage, 
  NotificationItem,
  WaypointNode,
  CEOControlSettings
} from '../types/office';

export const DEPARTMENT_TIERS: DepartmentTier[] = [
  {
    category: 'EXECUTIVE',
    name: 'Executive & C-Suite HQ',
    floorRange: [91, 100],
    color: '#fbbf24', // Gold / Amber
    lightColor: '#fef08a',
    description: 'CEO Operations, Boardroom, Autonomous Strategy Core, Vision Labs',
    iconName: 'Crown'
  },
  {
    category: 'QUANTUM',
    name: 'Quantum Computing & AI Research',
    floorRange: [81, 90],
    color: '#a855f7', // Vivid Purple
    lightColor: '#e9d5ff',
    description: 'Supercomputing clusters, Quantum Entanglement Labs, Neural Architecture',
    iconName: 'Cpu'
  },
  {
    category: 'DEEP_LEARNING',
    name: 'Deep Learning & LLM Training',
    floorRange: [71, 80],
    color: '#3b82f6', // Sapphire Blue
    lightColor: '#bfdbfe',
    description: 'Model Fine-Tuning, Multi-Modal Embeddings, Reinforcement Learning',
    iconName: 'Brain'
  },
  {
    category: 'SOFTWARE',
    name: 'Autonomous Software Engineering',
    floorRange: [61, 70],
    color: '#06b6d4', // Cyan
    lightColor: '#a5f3fc',
    description: 'Automated Refactoring, Full-Stack Generation, CI/CD Pipeline Automation',
    iconName: 'Code'
  },
  {
    category: 'CYBER_DEFENSE',
    name: 'Global Cyber Security Ops',
    floorRange: [51, 60],
    color: '#ef4444', // Crimson Red
    lightColor: '#fca5a5',
    description: 'Zero-Trust Defense, Threat Intelligence, Intrusion Prevention',
    iconName: 'ShieldAlert'
  },
  {
    category: 'FINANCE',
    name: 'Algorithmic Trading & Finance',
    floorRange: [41, 50],
    color: '#10b981', // Emerald Green
    lightColor: '#a7f3d0',
    description: 'High-Frequency Quantitative Models, Risk Hedging, Capital Allocation',
    iconName: 'TrendingUp'
  },
  {
    category: 'CREATIVE',
    name: 'Creative Studio & 3D Lab',
    floorRange: [31, 40],
    color: '#ec4899', // Neon Pink
    lightColor: '#fbcfe8',
    description: 'UI/UX Design Systems, Procedural Asset Generation, Motion Graphics',
    iconName: 'Palette'
  },
  {
    category: 'DATA_ANALYTICS',
    name: 'Big Data & Enterprise Analytics',
    floorRange: [21, 30],
    color: '#8b5cf6', // Electric Violet
    lightColor: '#ddd6fe',
    description: 'Real-Time ETL Pipelines, Predictive Business Analytics, Data Lakes',
    iconName: 'BarChart3'
  },
  {
    category: 'OPERATIONS',
    name: 'Customer Experience & Ops',
    floorRange: [11, 20],
    color: '#f97316', // Bright Orange
    lightColor: '#ffedd5',
    description: 'Global Support Automation, Logistics Routing, SLA Optimization',
    iconName: 'Headphones'
  },
  {
    category: 'LOBBY_ATRIUM',
    name: 'Innovation Atrium & Bio-Lounge',
    floorRange: [1, 10],
    color: '#14b8a6', // Teal
    lightColor: '#99f6e4',
    description: 'High-Tech Visitor Center, Central Elevator Hub, Hydroponic Bio-Lounge',
    iconName: 'Building2'
  }
];

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};

export const DEFAULT_CEO_SETTINGS: CEOControlSettings = {
  emergencyPause: false,
  modelPriority: ['Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'GPT-4o Enterprise', 'DeepSeek-V3', 'Llama 3.1 70B'],
  tokenBudgetLimit: 50000000,
  globalAutoSwitch: true,
  activeBroadcastMessage: null,
  overclockedFloors: [95, 85, 75, 45],
  graphicsQuality: isMobileDevice() ? 'low' : 'high'
};

// Generate Waypoints for a floor (Desk 1..4, Meeting, Lounge, Elevator lobby)
export function getFloorWaypoints(floorId: number): WaypointNode[] {
  const y = (floorId - 1) * 3 + 1.2;
  return [
    { id: `f${floorId}_desk1`, type: 'desk', pos: { x: -3.5, y, z: -3.5 }, label: 'Workstation A' },
    { id: `f${floorId}_desk2`, type: 'desk', pos: { x: 3.5, y, z: -3.5 }, label: 'Workstation B' },
    { id: `f${floorId}_desk3`, type: 'desk', pos: { x: -3.5, y, z: 3.5 }, label: 'Workstation C' },
    { id: `f${floorId}_desk4`, type: 'desk', pos: { x: 3.5, y, z: 3.5 }, label: 'Workstation D' },
    { id: `f${floorId}_meeting`, type: 'meeting', pos: { x: 0, y, z: -4 }, label: 'Conference Table' },
    { id: `f${floorId}_lounge`, type: 'lounge', pos: { x: -4, y, z: 0 }, label: 'Bio-Coffee Lounge' },
    { id: `f${floorId}_elevator`, type: 'elevator', pos: { x: 0, y, z: 0 }, label: 'Elevator Shaft' },
    { id: `f${floorId}_hallway`, type: 'hallway', pos: { x: 2, y, z: 0 }, label: 'Main Hallway' }
  ];
}

const FIRST_NAMES = [
  'Alex', 'Mira', 'Zed', 'Luna', 'Neo', 'Aria', 'Cipher', 'Vesper', 'Kaelen', 
  'Seraph', 'Orion', 'Lyra', 'Nyx', 'Atlas', 'Nova', 'Titan', 'Zephyr', 'Helios',
  'Aura', 'Sol', 'Ignis', 'Elysia', 'Vector', 'Nexus', 'Echo', 'Drift', 'Talon'
];

const LAST_NAMES = [
  'Quantum', 'Nexus', 'Analyzer', 'Insight', 'Dataset', 'Vanguard', 'Starlight',
  'Hyperion', 'Zero', 'Pulse', 'Matrix', 'Apex', 'Core', 'Vortex', 'Synapse',
  'Strata', 'Circuit', 'Chrono', 'Paragon', 'Spectra', 'Logic', 'Horizon'
];

const AI_MODELS: AIAgent['aiModel'][] = [
  'Claude 3.5 Sonnet',
  'Gemini 1.5 Pro',
  'GPT-4o Enterprise',
  'Llama 3.1 70B',
  'DeepSeek-V3'
];

const AGENT_SHAPES: AIAgent['avatarShape'][] = ['sphere', 'cube', 'octahedron', 'torus', 'pyramid', 'cylinder'];

// Helper to determine Department Category from Floor ID (1 to 100)
export function getDepartmentByFloor(floorId: number): DepartmentTier {
  for (const dept of DEPARTMENT_TIERS) {
    if (floorId >= dept.floorRange[0] && floorId <= dept.floorRange[1]) {
      return dept;
    }
  }
  return DEPARTMENT_TIERS[9]; // default Lobby
}

// Generate 100 Floors with Real AI Agents
export function generate100Floors(): Floor[] {
  const floors: Floor[] = [];

  for (let f = 1; f <= 100; f++) {
    const dept = getDepartmentByFloor(f);
    const waypoints = getFloorWaypoints(f);
    const agentCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 agents per floor (500 total building agents)
    const agents: AIAgent[] = [];

    for (let a = 0; a < agentCount; a++) {
      const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
      const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
      const agentId = `agent_f${f}_${a + 1}`;
      const model = AI_MODELS[Math.floor(Math.random() * AI_MODELS.length)];
      const shape = AGENT_SHAPES[Math.floor(Math.random() * AGENT_SHAPES.length)];
      const waypoint = waypoints[a % waypoints.length];

      const statuses: AIAgent['status'][] = ['working_at_desk', 'working_at_desk', 'in_meeting', 'walking', 'coffee_break', 'thinking'];
      const status = statuses[Math.floor(Math.random() * statuses.length)];

      agents.push({
        id: agentId,
        name: `${firstName} ${lastName}`,
        codeName: `AGNT-${f.toString().padStart(3, '0')}-${(a + 1).toString().padStart(2, '0')}`,
        role: `${dept.name.split(' ')[0]} Specialist`,
        departmentId: dept.category,
        departmentName: dept.name,
        floorId: f,
        roomId: `room_f${f}_main`,
        roomName: `${dept.name} Workspace ${f}`,
        status: status,
        avatarColor: dept.color,
        avatarShape: shape,
        aiModel: model,
        cpuLoad: Math.floor(Math.random() * 45) + 35,
        memoryUsage: Math.floor(Math.random() * 40) + 45,
        tokensPerSec: Math.floor(Math.random() * 1200) + 800,
        efficiencyScore: Math.floor(Math.random() * 15) + 85,
        currentTask: {
          id: `task_${f}_${a}`,
          title: `Optimizing ${dept.name} Autonomous System (L${f})`,
          progress: Math.floor(Math.random() * 70) + 20,
          status: 'in_progress',
          eta: `${Math.floor(Math.random() * 15) + 2}m`,
          priority: Math.random() > 0.8 ? 'URGENT' : 'HIGH',
          subtasks: [
            { id: 'st1', text: 'Initialize neural weights & buffers', done: true },
            { id: 'st2', text: 'Stream tensor batch payload', done: true },
            { id: 'st3', text: 'Validate output latency < 5ms', done: false }
          ]
        },
        logs: [
          {
            id: `log_${f}_1`,
            timestamp: '18:45:10',
            message: `Connected to ${model} hyper-cluster`,
            severity: 'info',
            source: 'System'
          },
          {
            id: `log_${f}_2`,
            timestamp: '18:45:22',
            message: 'Executing multi-node vector search query',
            severity: 'exec',
            source: 'AgentCore'
          }
        ],
        memory: [
          {
            id: `mem_${f}_1`,
            topic: 'System Strategy',
            details: `Optimized floor ${f} pipeline latency by 18%`,
            category: 'short_term',
            timestamp: '10m ago'
          }
        ],
        pos: { ...waypoint.pos },
        targetPos: { ...waypoint.pos },
        currentWaypointId: waypoint.id,
        speechBubble: status === 'in_meeting' ? 'Reviewing Q3 AI performance roadmap...' : undefined
      });
    }

    floors.push({
      id: f,
      name: `Floor ${f}`,
      departmentCategory: dept.category,
      departmentName: dept.name,
      code: `FLR-${f.toString().padStart(3, '0')}`,
      description: dept.description,
      themeColor: dept.color,
      lightColor: dept.lightColor,
      rooms: [
        {
          id: `room_f${f}_1`,
          name: `${dept.name} Main Lab`,
          code: `LAB-${f}`,
          description: `Primary operations center for Floor ${f}`,
          agentIds: agents.map(a => a.id),
          bounds: { x: 0, z: 0, width: 14, depth: 14 }
        }
      ],
      agents,
      capacity: agents.length,
      maxCapacity: 6,
      energyUsageKW: Math.floor(Math.random() * 150) + 120,
      activeProcesses: Math.floor(Math.random() * 25) + 10
    });
  }

  return floors;
}

export const INITIAL_FLOORS = generate100Floors();

export const INITIAL_SYSTEM_METRICS: SystemMetrics = {
  totalAgents: 420,
  activeAgents: 384,
  activeTasks: 168,
  totalTokensGenerated: 148920400,
  overallCpuLoad: 42,
  quantumClusterStatus: 'Optimal',
  securityLevel: 'MAXIMUM',
  totalEarningsSavedUSD: 845200.00,
  tokenBurnRatePerMin: 245000,
  activeFloorsCount: 100
};

export const INITIAL_INTER_AGENT_MESSAGES: InterAgentMessage[] = [
  {
    id: 'msg-1',
    timestamp: '18:44:12',
    senderId: 'agent_f95_1',
    senderName: 'Alex Quantum (Floor 95 - Executive)',
    receiverId: 'agent_f85_1',
    receiverName: 'Mira Nexus (Floor 85 - Quantum)',
    content: 'Reallocating 500 A100 GPU nodes to Deep Learning LLM training pipeline.',
    topic: 'GPU Allocation',
    tokenCount: 420,
    status: 'delivered'
  },
  {
    id: 'msg-2',
    timestamp: '18:44:45',
    senderId: 'agent_f65_2',
    senderName: 'Cipher Vanguard (Floor 65 - Software)',
    receiverId: 'agent_f55_1',
    receiverName: 'Zed Analyzer (Floor 55 - Cyber Defense)',
    content: 'Zero-day vulnerability patch auto-compiled and deployed to Floor 55 firewall.',
    topic: 'Security Patch',
    tokenCount: 890,
    status: 'delivered'
  },
  {
    id: 'msg-3',
    timestamp: '18:45:02',
    senderId: 'agent_f45_1',
    senderName: 'Luna Insight (Floor 45 - Finance)',
    receiverId: 'agent_f25_1',
    receiverName: 'Neo Dataset (Floor 25 - Big Data)',
    content: 'Arbitrage prediction model latency reduced to 1.2ms. Standby for market close sync.',
    topic: 'Market Prediction',
    tokenCount: 1250,
    status: 'processing'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    timestamp: '18:45:00',
    title: 'Floor 95 Overclock Triggered',
    message: 'CEO Command Center authorized hyper-drive speed on Floor 95 C-Suite.',
    type: 'success',
    floorId: 95
  }
];

