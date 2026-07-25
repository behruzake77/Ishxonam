import React, { useState } from 'react';
import { 
  AIAgent, 
  Floor 
} from '../../types/office';
import { 
  X, 
  User, 
  Cpu, 
  Zap, 
  Activity, 
  CheckSquare, 
  Terminal, 
  Brain, 
  Coffee, 
  MessageSquare,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface AgentDetailModalProps {
  agent: AIAgent;
  floor: Floor;
  onClose: () => void;
  onUpdateAgentStatus: (agentId: string, newStatus: AIAgent['status']) => void;
}

export const AgentDetailModal: React.FC<AgentDetailModalProps> = ({
  agent,
  floor,
  onClose,
  onUpdateAgentStatus
}) => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'logs' | 'memory'>('tasks');

  const handleCoffeeBreak = () => {
    onUpdateAgentStatus(agent.id, 'coffee_break');
    soundManager.playNotification();
  };

  return (
    <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4 select-none animate-fadeIn">
      <div className="w-full max-w-2xl h-full sm:h-auto sm:max-h-[90vh] bg-gray-950 border border-cyan-500/30 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden font-sans">
        {/* Header */}
        <div 
          className="p-3 sm:p-5 border-b border-cyan-500/20 relative"
          style={{ background: `linear-gradient(135deg, ${agent.avatarColor}20 0%, rgba(3, 7, 18, 0.95) 100%)` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div 
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/20"
                style={{ backgroundColor: agent.avatarColor }}
              >
                {agent.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">{agent.name}</h3>
                  <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8px] sm:text-[10px] font-mono border border-cyan-500/30">
                    {agent.codeName}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-400 font-mono">
                  {agent.role} • Floor {agent.floorId} ({floor.departmentName})
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white active:text-white transition-colors mobile-tap"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Real-Time Telemetry Bar - compact on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-800/60 font-mono text-xs">
            <div className="p-2 rounded-lg bg-gray-900/60 border border-gray-800">
              <div className="text-[8px] text-gray-400">AI MODEL</div>
              <div className="text-cyan-300 font-bold truncate text-[10px] sm:text-xs">{agent.aiModel}</div>
            </div>
            <div className="p-2 rounded-lg bg-gray-900/60 border border-gray-800">
              <div className="text-[8px] text-gray-400">CPU LOAD</div>
              <div className="text-purple-300 font-bold">{agent.cpuLoad}%</div>
            </div>
            <div className="p-2 rounded-lg bg-gray-900/60 border border-gray-800">
              <div className="text-[8px] text-gray-400">TOKENS / SEC</div>
              <div className="text-amber-300 font-bold">{agent.tokensPerSec}</div>
            </div>
            <div className="p-2 rounded-lg bg-gray-900/60 border border-gray-800">
              <div className="text-[8px] text-gray-400">EFFICIENCY</div>
              <div className="text-emerald-300 font-bold">{agent.efficiencyScore}%</div>
            </div>
          </div>
        </div>

        {/* Tab Selection - compact on mobile */}
        <div className="flex border-b border-gray-900 bg-gray-900/40 px-3 sm:px-4 pt-2 gap-1 sm:gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-3 py-2 rounded-t-xl font-bold flex items-center gap-1 transition-all mobile-tap ${
              activeTab === 'tasks' ? 'bg-gray-950 text-cyan-400 border-t border-x border-cyan-500/30' : 'text-gray-400 hover:text-white active:text-white'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Active Tasks</span>
            <span className="sm:hidden">Tasks</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-2 rounded-t-xl font-bold flex items-center gap-1 transition-all mobile-tap ${
              activeTab === 'logs' ? 'bg-gray-950 text-cyan-400 border-t border-x border-cyan-500/30' : 'text-gray-400 hover:text-white active:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Live Logs</span>
            <span className="sm:hidden">Logs</span>
          </button>
          <button
            onClick={() => setActiveTab('memory')}
            className={`px-3 py-2 rounded-t-xl font-bold flex items-center gap-1 transition-all mobile-tap ${
              activeTab === 'memory' ? 'bg-gray-950 text-cyan-400 border-t border-x border-cyan-500/30' : 'text-gray-400 hover:text-white active:text-white'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Memory Stack</span>
            <span className="sm:hidden">Memory</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-3 sm:p-5 max-h-[50vh] sm:max-h-[50vh] overflow-y-auto custom-scrollbar font-mono text-xs space-y-4">
          {activeTab === 'tasks' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm truncate">{agent.currentTask.title}</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] shrink-0">
                    {agent.currentTask.priority || 'HIGH'}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>Progress</span>
                  <span className="text-cyan-400 font-bold">{agent.currentTask.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    style={{ width: `${agent.currentTask.progress}%` }}
                  />
                </div>
              </div>

              {/* Subtasks */}
              <div className="space-y-1.5">
                <div className="text-[11px] text-gray-400 uppercase tracking-wider">Subtasks</div>
                {agent.currentTask.subtasks.map(st => (
                  <div key={st.id} className="flex items-center gap-2 p-2 rounded-lg bg-gray-900/40 border border-gray-800 text-gray-300">
                    <CheckCircle2 className={`w-4 h-4 ${st.done ? 'text-emerald-400' : 'text-gray-600'}`} />
                    <span className={st.done ? 'line-through text-gray-500' : ''}>{st.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="bg-gray-950 p-3 rounded-xl border border-gray-800 space-y-2 text-[11px] font-mono">
              {agent.logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between text-gray-300 border-b border-gray-900 pb-1 gap-2">
                  <span className="text-gray-500 shrink-0">[{log.timestamp}]</span>
                  <span className="text-cyan-400 shrink-0">{log.source}</span>
                  <span className="truncate min-w-0">{log.message}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'memory' && (
            <div className="space-y-2">
              {agent.memory.map((mem) => (
                <div key={mem.id} className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 space-y-1">
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span className="text-purple-400 font-bold">{mem.topic}</span>
                    <span>{mem.timestamp}</span>
                  </div>
                  <p className="text-gray-300 text-xs">{mem.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-900 bg-gray-950 flex items-center justify-between safe-bottom">
          <button
            onClick={handleCoffeeBreak}
            className="px-3 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 active:bg-amber-500/30 text-xs font-semibold flex items-center gap-1.5 mobile-tap"
          >
            <Coffee className="w-4 h-4" />
            Coffee Break
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white active:text-white text-xs font-semibold mobile-tap"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailModal;
