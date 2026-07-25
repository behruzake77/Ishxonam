import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Floor, 
  AIAgent, 
  ElevatorCar, 
  CameraPreset, 
  SystemMetrics, 
  InterAgentMessage, 
  NotificationItem, 
  CEOControlSettings,
  WaypointNode
} from './types/office';
import { 
  INITIAL_FLOORS, 
  INITIAL_SYSTEM_METRICS, 
  INITIAL_INTER_AGENT_MESSAGES, 
  INITIAL_NOTIFICATIONS, 
  DEFAULT_CEO_SETTINGS,
  getFloorWaypoints
} from './data/mockOfficeData';

import { BuildingCanvas } from './components/3d/BuildingCanvas';
import { CEOHeader } from './components/ui/CEOHeader';
import { SystemHUD } from './components/ui/SystemHUD';
import { FloorOverviewPanel } from './components/ui/FloorOverviewPanel';
import { InterAgentCommPanel } from './components/ui/InterAgentCommPanel';
import { CEOControlCenterModal } from './components/ui/CEOControlCenterModal';
import { AgentDetailModal } from './components/ui/AgentDetailModal';
import { DeployAgentModal } from './components/ui/DeployAgentModal';
import { AssignTaskModal } from './components/ui/AssignTaskModal';
import { SearchModal } from './components/ui/SearchModal';
import { NotificationToastContainer } from './components/ui/NotificationToastContainer';
import { soundManager } from './utils/audio';
import { modelRouter } from './utils/modelRouter';

// Mobile breakpoint helper
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

type MobilePanel = 'overview' | 'comms' | null;

export const App: React.FC = () => {
  // Primary State
  const [floors, setFloors] = useState<Floor[]>(INITIAL_FLOORS);
  const [selectedFloorId, setSelectedFloorId] = useState<number>(95); // Default to Executive Floor 95
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('full_skyscraper');

  // Express Glass Elevator Cars State
  const [elevators, setElevators] = useState<ElevatorCar[]>([
    { id: 'car_A', currentFloor: 1, targetFloor: 95, posY: 1.2, isMoving: true, passengerAgentIds: [], speed: 4.5 },
    { id: 'car_B', currentFloor: 100, targetFloor: 15, posY: 298.2, isMoving: true, passengerAgentIds: [], speed: 5.0 }
  ]);

  // System Telemetry & Feeds
  const [metrics, setMetrics] = useState<SystemMetrics>(INITIAL_SYSTEM_METRICS);
  const [messages, setMessages] = useState<InterAgentMessage[]>(INITIAL_INTER_AGENT_MESSAGES);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [ceoSettings, setCeoSettings] = useState<CEOControlSettings>(DEFAULT_CEO_SETTINGS);

  // Modals Toggle State
  const [isCEOControlsOpen, setIsCEOControlsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState<boolean>(false);
  const [isAssignTaskModalOpen, setIsAssignTaskModalOpen] = useState<boolean>(false);

  // Mobile Panel State (bottom drawer tabs)
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>(null);
  const [isMobileView, setIsMobileView] = useState<boolean>(isMobile());

  // Track viewport changes for responsive mode switching
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(isMobile());
      // Auto-close mobile panel if switching to desktop
      if (!isMobile()) setMobilePanel(null);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Currently focused floor object
  const currentFloor = floors.find(f => f.id === selectedFloorId) || floors[0];

  // Currently focused agent object
  let currentAgent: AIAgent | undefined;
  if (selectedAgentId) {
    for (const f of floors) {
      const found = f.agents.find(a => a.id === selectedAgentId);
      if (found) {
        currentAgent = found;
        break;
      }
    }
  }

  // 1. Handle Keyboard Shortcuts (Ctrl+K, Space, 1-4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.code === 'Space' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        setCameraPreset('full_skyscraper');
        soundManager.playClick();
      } else if (e.key === '1') {
        setCameraPreset('full_skyscraper');
      } else if (e.key === '2') {
        setCameraPreset('floor_focus');
      } else if (e.key === '3') {
        setCameraPreset('agent_focus');
      } else if (e.key === '4') {
        setCameraPreset('sky_lounge');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 2. Real-Time Autonomous Building Simulation Engine
  useEffect(() => {
    if (ceoSettings.emergencyPause) return; // Emergency pause mode freeze

    const interval = setInterval(() => {
      // Update model router telemetry
      modelRouter.updateModelStats();

      // A. Update Agents State & Movement Pathfinding across floors
      setFloors(prevFloors => {
        return prevFloors.map(floor => {
          // Only animate random agents on active floors
          const updatedAgents = floor.agents.map(agent => {
            const chance = Math.random();
            const waypoints = getFloorWaypoints(floor.id);

            // Animate task progress
            let newProgress = agent.currentTask.progress;
            let currentStatus = agent.currentTask.status;
            if (agent.status === 'working_at_desk' && newProgress < 100) {
              newProgress = Math.min(100, newProgress + Math.floor(Math.random() * 4) + 1);
              if (newProgress === 100) {
                currentStatus = 'completed';
                setTimeout(() => {
                  setNotifications(prev => [
                    {
                      id: `notif_task_${Date.now()}_${Math.random()}`,
                      timestamp: new Date().toLocaleTimeString(),
                      title: `Task Completed: ${agent.name}`,
                      message: `Successfully finished: "${agent.currentTask.title}" on Floor ${floor.id}.`,
                      type: 'success',
                      floorId: floor.id
                    },
                    ...prev
                  ].slice(0, 3));
                }, 0);
              }
            }

            // Multi-model router check
            let updatedModel = agent.aiModel;
            let updatedLogs = [...agent.logs];
            if (ceoSettings.globalAutoSwitch) {
              const routeResult = modelRouter.routeRequest(agent.id, agent.name, agent.aiModel, ceoSettings.modelPriority);
              if (routeResult.switched) {
                updatedModel = routeResult.modelName as any;
                updatedLogs.unshift({
                  id: `log_switch_${Date.now()}_${Math.random()}`,
                  timestamp: new Date().toLocaleTimeString(),
                  message: `Auto-switched from ${agent.aiModel} to ${routeResult.modelName} due to [${routeResult.reason}]`,
                  severity: 'warn',
                  source: 'ModelRouter'
                });
              }
            }

            // State Transitions
            if (chance < 0.15) {
              const meetingWp = waypoints.find((w: WaypointNode) => w.type === 'meeting') || waypoints[0];
              return {
                ...agent,
                status: 'in_meeting' as const,
                pos: { ...meetingWp.pos },
                aiModel: updatedModel,
                logs: updatedLogs,
                speechBubble: 'Reviewing Q3 Model Benchmarks & Latency...',
                currentTask: { ...agent.currentTask, progress: newProgress }
              };
            } else if (chance < 0.3) {
              const loungeWp = waypoints.find((w: WaypointNode) => w.type === 'lounge') || waypoints[0];
              return {
                ...agent,
                status: 'coffee_break' as const,
                pos: { ...loungeWp.pos },
                aiModel: updatedModel,
                logs: updatedLogs,
                speechBubble: undefined,
                currentTask: { ...agent.currentTask, progress: newProgress }
              };
            } else if (chance < 0.5) {
              const deskWp = waypoints[Math.floor(Math.random() * 4)] || waypoints[0];
              return {
                ...agent,
                status: 'working_at_desk' as const,
                pos: { ...deskWp.pos },
                aiModel: updatedModel,
                logs: updatedLogs,
                speechBubble: undefined,
                currentTask: { ...agent.currentTask, progress: newProgress }
              };
            }

            return {
              ...agent,
              aiModel: updatedModel,
              logs: updatedLogs,
              currentTask: { ...agent.currentTask, progress: newProgress }
            };
          });

          return { ...floor, agents: updatedAgents };
        });
      });


      // B. Animate Central Glass Express Elevators
      setElevators(prevElevs => {
        return prevElevs.map(car => {
          let nextTarget = car.targetFloor;
          let nextY = car.posY;

          const targetY = (car.targetFloor - 1) * 3 + 1.2;
          const delta = targetY - car.posY;

          if (Math.abs(delta) < 1.0) {
            nextTarget = Math.floor(Math.random() * 99) + 1;
            soundManager.playFloorChime(car.targetFloor);
          } else {
            nextY += Math.sign(delta) * car.speed;
          }

          return {
            ...car,
            posY: nextY,
            targetFloor: nextTarget,
            currentFloor: Math.min(100, Math.max(1, Math.floor(nextY / 3) + 1))
          };
        });
      });

      // C. Dynamically Update System Telemetry
      setMetrics(prev => ({
        ...prev,
        totalTokensGenerated: prev.totalTokensGenerated + Math.floor(Math.random() * 4500) + 1500,
        tokenBurnRatePerMin: 240000 + Math.floor(Math.random() * 12000)
      }));

      // Random low-frequency critical system alert
      if (Math.random() < 0.015) {
        setNotifications(prev => [
          {
            id: `notif_critical_${Date.now()}`,
            timestamp: new Date().toLocaleTimeString(),
            title: `CRITICAL ALERT: Core Overload`,
            message: `Quantum processing core reached 95% CPU load. Cooling system activated.`,
            type: 'critical'
          },
          ...prev
        ].slice(0, 3));
      }

    }, 2000);

    return () => clearInterval(interval);
  }, [ceoSettings.emergencyPause]);

  // Handlers
  const handleSelectFloor = useCallback((floorId: number) => {
    setSelectedFloorId(floorId);
    setCameraPreset('floor_focus');
  }, []);

  const handleSelectAgent = useCallback((agentId: string, floorId?: number) => {
    setSelectedAgentId(agentId);
    if (floorId) setSelectedFloorId(floorId);
    setCameraPreset('agent_focus');
  }, []);

  const handleDeployAgent = (newAgentData: Partial<AIAgent>) => {
    const newAgent: AIAgent = {
      id: `agent_custom_${Date.now()}`,
      name: newAgentData.name || 'New AI Agent',
      codeName: `AGNT-${selectedFloorId.toString().padStart(3, '0')}-CUSTOM`,
      role: newAgentData.role || 'Autonomous Specialist',
      departmentId: newAgentData.departmentId || currentFloor.departmentCategory,
      departmentName: newAgentData.departmentName || currentFloor.departmentName,
      floorId: selectedFloorId,
      roomId: `room_f${selectedFloorId}_1`,
      roomName: currentFloor.name,
      status: 'working_at_desk',
      avatarColor: newAgentData.avatarColor || '#38bdf8',
      avatarShape: newAgentData.avatarShape || 'sphere',
      aiModel: newAgentData.aiModel || 'Claude 3.5 Sonnet',
      cpuLoad: 45,
      memoryUsage: 50,
      tokensPerSec: 1000,
      efficiencyScore: 92,
      currentTask: {
        id: `task_new_${Date.now()}`,
        title: `Floor ${selectedFloorId} Initial Pipeline Deployment`,
        progress: 15,
        status: 'in_progress',
        eta: '10m',
        subtasks: [{ id: 'st1', text: 'Boot virtual agent process', done: true }]
      },
      logs: [],
      memory: [],
      pos: { x: 0, y: (selectedFloorId - 1) * 3 + 1.2, z: 0 },
      targetPos: { x: 0, y: (selectedFloorId - 1) * 3 + 1.2, z: 0 },
      currentWaypointId: `f${selectedFloorId}_desk1`
    };

    setFloors(prev => prev.map(f => {
      if (f.id === selectedFloorId) {
        return { ...f, agents: [...f.agents, newAgent] };
      }
      return f;
    }));
  };

  const handleAssignTask = (taskData: Partial<AIAgent['currentTask']>) => {
    setFloors(prev => prev.map(f => {
      if (f.id === selectedFloorId) {
        const updatedAgents = f.agents.map((a, idx) => {
          if (idx === 0) {
            return {
              ...a,
              currentTask: {
                ...a.currentTask,
                ...taskData,
                id: `task_assigned_${Date.now()}`
              }
            };
          }
          return a;
        });
        return { ...f, agents: updatedAgents };
      }
      return f;
    }));
  };

  // Toggle mobile panel
  const toggleMobilePanel = useCallback((panel: MobilePanel) => {
    setMobilePanel(prev => prev === panel ? null : panel);
  }, []);

  const closeMobilePanel = useCallback(() => {
    setMobilePanel(null);
  }, []);

  // ==================== MOBILE LAYOUT ====================
  if (isMobileView) {
    return (
      <div className="w-screen h-[100dvh] bg-gray-950 text-white flex flex-col overflow-hidden select-none font-sans relative">
        {/* 1. Mobile Compact Header */}
        <CEOHeader 
          selectedFloorId={selectedFloorId}
          onSelectFloor={handleSelectFloor}
          cameraPreset={cameraPreset}
          onSelectCameraPreset={setCameraPreset}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCEOControls={() => setIsCEOControlsOpen(true)}
          metrics={metrics}
        />

        {/* 2. Main 3D Canvas (takes most space on mobile) */}
        <div className="flex-1 relative overflow-hidden">
          <BuildingCanvas 
            floors={floors}
            selectedFloorId={selectedFloorId}
            selectedAgentId={selectedAgentId}
            cameraPreset={cameraPreset}
            elevators={elevators}
            graphicsQuality={ceoSettings.graphicsQuality || 'low'}
            onSelectFloor={handleSelectFloor}
            onSelectAgent={(agentId) => handleSelectAgent(agentId)}
          />
        </div>

        {/* 3. Mobile Bottom Navigation Tabs */}
        <div className="bg-slate-950/95 border-t border-blue-500/30 backdrop-blur-xl flex items-center justify-around px-2 py-1 z-40 safe-bottom">
          {[
            { id: 'overview' as MobilePanel, label: 'Floor', icon: '🏢' },
            { id: 'comms' as MobilePanel, label: 'Network', icon: '📡' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => toggleMobilePanel(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 rounded-xl transition-all mobile-tap ${
                mobilePanel === item.id
                  ? 'text-cyan-300 bg-blue-500/20'
                  : 'text-blue-400/70 active:text-cyan-300 active:bg-blue-500/10'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[10px] font-mono font-bold">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => { setIsSearchOpen(true); soundManager.playClick(); }}
            className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl text-blue-400/70 active:text-cyan-300 active:bg-blue-500/10 transition-all mobile-tap"
          >
            <span className="text-lg">🔍</span>
            <span className="text-[10px] font-mono font-bold">Search</span>
          </button>
          <button
            onClick={() => { setIsCEOControlsOpen(true); soundManager.playClick(); }}
            className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl text-amber-400/70 active:text-amber-300 active:bg-amber-500/10 transition-all mobile-tap"
          >
            <span className="text-lg">⚙️</span>
            <span className="text-[10px] font-mono font-bold">CEO</span>
          </button>
        </div>

        {/* 4. Mobile Bottom Sheet Panel (Drawer) */}
        {mobilePanel === 'overview' && (
          <div className="absolute bottom-0 left-0 right-0 z-50 animate-slideUp">
            {/* Swipe indicator */}
            <div className="bg-slate-950/95 backdrop-blur-2xl border-t border-blue-500/40 rounded-t-2xl max-h-[60dvh] flex flex-col overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
              {/* Drag handle */}
              <div 
                className="flex items-center justify-center py-2 cursor-grab active:cursor-grabbing"
                onClick={closeMobilePanel}
              >
                <div className="w-10 h-1.5 rounded-full bg-blue-500/40" />
              </div>
              
              {/* Floor Overview - scrollable content */}
              <div className="flex-1 overflow-y-auto mobile-no-scrollbar">
                <FloorOverviewPanel 
                  floor={currentFloor}
                  selectedAgentId={selectedAgentId}
                  onSelectAgent={(agentId) => handleSelectAgent(agentId)}
                  onOpenDeployAgent={() => setIsDeployModalOpen(true)}
                  onOpenAssignTask={() => setIsAssignTaskModalOpen(true)}
                  isMobile={true}
                />
              </div>
            </div>
          </div>
        )}

        {mobilePanel === 'comms' && (
          <div className="absolute bottom-0 left-0 right-0 z-50 animate-slideUp">
            <div className="bg-slate-950/95 backdrop-blur-2xl border-t border-blue-500/40 rounded-t-2xl max-h-[60dvh] flex flex-col overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
              {/* Drag handle */}
              <div 
                className="flex items-center justify-center py-2 cursor-grab active:cursor-grabbing"
                onClick={closeMobilePanel}
              >
                <div className="w-10 h-1.5 rounded-full bg-blue-500/40" />
              </div>

              {/* InterAgent Comm Panel - scrollable content */}
              <div className="flex-1 overflow-y-auto mobile-no-scrollbar">
                <InterAgentCommPanel 
                  messages={messages}
                  metrics={metrics}
                  ceoSettings={ceoSettings}
                  onOpenCEOControls={() => setIsCEOControlsOpen(true)}
                  isMobile={true}
                />
              </div>
            </div>
          </div>
        )}

        {/* 5. Modals (full-screen on mobile) */}
        {isCEOControlsOpen && (
          <CEOControlCenterModal 
            settings={ceoSettings}
            onUpdateSettings={setCeoSettings}
            onClose={() => setIsCEOControlsOpen(false)}
          />
        )}

        {currentAgent && (
          <AgentDetailModal 
            agent={currentAgent}
            floor={floors.find(f => f.id === currentAgent!.floorId) || currentFloor}
            onClose={() => setSelectedAgentId(null)}
            onUpdateAgentStatus={(agentId, newStatus) => {
              setFloors(prev => prev.map(f => ({
                ...f,
                agents: f.agents.map(a => a.id === agentId ? { ...a, status: newStatus } : a)
              })));
            }}
          />
        )}

        {isDeployModalOpen && (
          <DeployAgentModal 
            floor={currentFloor}
            onDeploy={handleDeployAgent}
            onClose={() => setIsDeployModalOpen(false)}
          />
        )}

        {isAssignTaskModalOpen && (
          <AssignTaskModal 
            floor={currentFloor}
            onAssign={handleAssignTask}
            onClose={() => setIsAssignTaskModalOpen(false)}
          />
        )}

        {isSearchOpen && (
          <SearchModal 
            floors={floors}
            onSelectFloor={handleSelectFloor}
            onSelectAgent={handleSelectAgent}
            onClose={() => setIsSearchOpen(false)}
          />
        )}
      </div>
    );
  }

  // ==================== DESKTOP LAYOUT (original) ====================
  return (
    <div className="w-screen h-screen bg-gray-950 text-white flex flex-col overflow-hidden select-none font-sans relative">
      {/* 1. CEO Top Header Bar */}
      <CEOHeader 
        selectedFloorId={selectedFloorId}
        onSelectFloor={handleSelectFloor}
        cameraPreset={cameraPreset}
        onSelectCameraPreset={setCameraPreset}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCEOControls={() => setIsCEOControlsOpen(true)}
        metrics={metrics}
      />

      {/* 2. Main Workspace Layout */}
      <div className="flex-1 w-full h-full flex relative overflow-hidden">
        {/* Left Telemetry & Inter-Agent Mesh Panel */}
        <InterAgentCommPanel 
          messages={messages}
          metrics={metrics}
          ceoSettings={ceoSettings}
          onOpenCEOControls={() => setIsCEOControlsOpen(true)}
        />

        {/* Transparent spacer to allow OrbitControls interaction and push panels to outer edges */}
        <div className="flex-1 pointer-events-none" />

        {/* Right Floor Overview & Worker Inspector Panel */}
        <FloorOverviewPanel 
          floor={currentFloor}
          selectedAgentId={selectedAgentId}
          onSelectAgent={(agentId) => handleSelectAgent(agentId)}
          onOpenDeployAgent={() => setIsDeployModalOpen(true)}
          onOpenAssignTask={() => setIsAssignTaskModalOpen(true)}
        />

        {/* Center 3D Interactive Building Canvas (occupies background behind panels) */}
        <main className="absolute inset-0 w-full h-full z-0 bg-gray-950">
          <BuildingCanvas 
            floors={floors}
            selectedFloorId={selectedFloorId}
            selectedAgentId={selectedAgentId}
            cameraPreset={cameraPreset}
            elevators={elevators}
            graphicsQuality={ceoSettings.graphicsQuality || 'high'}
            onSelectFloor={handleSelectFloor}
            onSelectAgent={(agentId) => handleSelectAgent(agentId)}
          />
        </main>
      </div>

      {/* 3. Bottom Real-Time System HUD Ticker */}
      <SystemHUD 
        onSelectFloor={handleSelectFloor} 
        metrics={metrics}
        notifications={notifications}
        routerLogs={modelRouter.getLogs()}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDeploy={() => setIsDeployModalOpen(true)}
        onOpenAssign={() => setIsAssignTaskModalOpen(true)}
        onOpenCEOControls={() => setIsCEOControlsOpen(true)}
      />

      {/* 4. Real-Time Notification Stack */}
      <NotificationToastContainer 
        notifications={notifications}
        onDismiss={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
        onSelectFloor={handleSelectFloor}
      />

      {/* 5. Modals */}
      {isCEOControlsOpen && (
        <CEOControlCenterModal 
          settings={ceoSettings}
          onUpdateSettings={setCeoSettings}
          onClose={() => setIsCEOControlsOpen(false)}
        />
      )}

      {currentAgent && (
        <AgentDetailModal 
          agent={currentAgent}
          floor={floors.find(f => f.id === currentAgent!.floorId) || currentFloor}
          onClose={() => setSelectedAgentId(null)}
          onUpdateAgentStatus={(agentId, newStatus) => {
            setFloors(prev => prev.map(f => ({
              ...f,
              agents: f.agents.map(a => a.id === agentId ? { ...a, status: newStatus } : a)
            })));
          }}
        />
      )}

      {isDeployModalOpen && (
        <DeployAgentModal 
          floor={currentFloor}
          onDeploy={handleDeployAgent}
          onClose={() => setIsDeployModalOpen(false)}
        />
      )}

      {isAssignTaskModalOpen && (
        <AssignTaskModal 
          floor={currentFloor}
          onAssign={handleAssignTask}
          onClose={() => setIsAssignTaskModalOpen(false)}
        />
      )}

      {isSearchOpen && (
        <SearchModal 
          floors={floors}
          onSelectFloor={handleSelectFloor}
          onSelectAgent={handleSelectAgent}
          onClose={() => setIsSearchOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
