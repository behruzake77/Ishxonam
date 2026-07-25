import React from 'react';
import { 
  Floor, 
  AIAgent 
} from '../../types/office';
import { 
  getDepartmentByFloor, 
} from '../../data/mockOfficeData';
import { 
  Users, 
  Cpu, 
  Zap, 
  Activity, 
  MessageSquare,
  PlusCircle, 
  PlayCircle,
  Database,
  BarChart3,
  HardDrive
} from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface FloorOverviewPanelProps {
  floor: Floor;
  selectedAgentId: string | null;
  onSelectAgent: (agentId: string) => void;
  onOpenDeployAgent: () => void;
  onOpenAssignTask: () => void;
  isMobile?: boolean;
}

export const FloorOverviewPanel: React.FC<FloorOverviewPanelProps> = ({
  floor,
  selectedAgentId,
  onSelectAgent,
  onOpenDeployAgent,
  onOpenAssignTask,
  isMobile = false
}) => {
  const dept = getDepartmentByFloor(floor.id);

  const getStatusColor = (status: AIAgent['status']) => {
    switch (status) {
      case 'working_at_desk': return 'emerald';
      case 'in_meeting': return 'purple';
      case 'coffee_break': return 'amber';
      case 'walking': return 'blue';
      case 'conversing': return 'pink';
      default: return 'cyan';
    }
  };

  // Mobile: render as inline content for bottom drawer
  if (isMobile) {
    return (
      <div className="w-full flex flex-col overflow-hidden">
        {/* Header Banner for Floor - compact */}
        <div 
          className="px-3 py-2 border-b border-blue-500/20"
          style={{ background: `linear-gradient(135deg, ${dept.color}15 0%, rgba(15, 23, 42, 0.9) 100%)` }}
        >
          <div className="flex items-center justify-between mb-0.5">
            <span 
              className="px-1.5 py-0.5 rounded-md text-[8px] font-mono font-black tracking-wider uppercase border"
              style={{ color: dept.color, borderColor: `${dept.color}40`, backgroundColor: `${dept.color}15` }}
            >
              {dept.name}
            </span>
            <span className="text-[9px] font-mono text-blue-400">{floor.code}</span>
          </div>

          <h2 className="text-base font-black text-white flex items-center gap-1.5">
            Floor {floor.id}
            <span className="text-[10px] font-normal text-blue-400">({floor.agents.length} nodes)</span>
          </h2>

          {/* Energy & Process Stats - compact */}
          <div className="flex items-center gap-3 mt-1.5 text-[9px] font-mono">
            <span className="flex items-center gap-1 text-blue-300">
              <Zap className="w-3 h-3 text-amber-400" />
              {floor.energyUsageKW} kW
            </span>
            <span className="flex items-center gap-1 text-blue-300">
              <Activity className="w-3 h-3 text-cyan-400" />
              {floor.activeProcesses} threads
            </span>
          </div>
        </div>

        {/* Worker List for Floor - compact cards */}
        <div className="overflow-y-auto mobile-no-scrollbar p-2 space-y-2">
          <div className="flex items-center justify-between text-[9px] font-mono text-blue-400 mb-1 px-1">
            <span>COGNITIVE NODES ({floor.agents.length})</span>
            <span className="text-emerald-400 font-bold animate-pulse">● LIVE</span>
          </div>

          {floor.agents.map((agent) => {
            const isSelected = selectedAgentId === agent.id;
            const sc = getStatusColor(agent.status);
            return (
              <div
                key={agent.id}
                onClick={() => {
                  onSelectAgent(agent.id);
                  soundManager.playClick();
                }}
                className={`p-2 rounded-xl border transition-all cursor-pointer active:scale-[0.98] ${
                  isSelected
                    ? 'bg-blue-500/10 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-900/50 border-blue-900/40 hover:border-blue-500/30 active:bg-slate-900/70'
                }`}
              >
                {/* Agent Header - compact */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${sc}-400 opacity-75`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 bg-${sc}-500`} />
                    </span>
                    <span className="text-[11px] font-bold text-white tracking-wide">{agent.name}</span>
                  </div>
                  <span className={`px-1 py-0.5 rounded text-[7px] font-mono border font-bold bg-${sc}-500/10 border-${sc}-500/20 text-${sc}-400`}>
                    {agent.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                {/* Specs - compact inline */}
                <div className="flex items-center gap-2 my-1.5 text-[9px] font-mono">
                  <span className="text-blue-200">CPU <strong className="text-white">{agent.cpuLoad}%</strong></span>
                  <span className="text-blue-200">MEM <strong className="text-white">{agent.memoryUsage}%</strong></span>
                  <span className="text-cyan-300 font-bold">{agent.aiModel}</span>
                </div>

                {/* Task Progress - compact */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                      style={{ width: `${agent.currentTask.progress}%` }}
                    />
                  </div>
                  <span className="text-[8px] font-mono text-cyan-400 font-bold">{agent.currentTask.progress}%</span>
                </div>

                {/* Speech Bubble */}
                {agent.speechBubble && (
                  <div className="mt-1 p-1 rounded bg-slate-950 border border-blue-500/20 text-[8px] text-blue-200 flex items-center gap-1 font-mono italic">
                    <MessageSquare className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                    <span className="truncate">"{agent.speechBubble}"</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Footer Buttons - compact */}
        <div className="p-2 border-t border-blue-500/20 bg-slate-950 grid grid-cols-2 gap-2 safe-bottom">
          <button
            onClick={() => { onOpenDeployAgent(); soundManager.playClick(); }}
            className="px-2 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 active:bg-cyan-500/30 text-[10px] font-mono font-bold flex items-center justify-center gap-1 transition-all mobile-tap"
          >
            <PlusCircle className="w-3 h-3" />
            Deploy
          </button>
          <button
            onClick={() => { onOpenAssignTask(); soundManager.playClick(); }}
            className="px-2 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 active:bg-blue-500/30 text-[10px] font-mono font-bold flex items-center justify-center gap-1 transition-all mobile-tap"
          >
            <PlayCircle className="w-3 h-3" />
            Task
          </button>
        </div>
      </div>
    );
  }

  // Desktop version (original)
  return (
    <aside className="w-80 h-full bg-slate-950/80 border-l border-blue-500/30 backdrop-blur-2xl flex flex-col z-30 select-none overflow-hidden shadow-[-4px_0_30px_rgba(0,0,0,0.5)]">
      {/* Header Banner for Floor */}
      <div 
        className="p-4 border-b border-blue-500/20 relative"
        style={{ background: `linear-gradient(135deg, ${dept.color}15 0%, rgba(15, 23, 42, 0.9) 100%)` }}
      >
        <div className="flex items-center justify-between mb-1">
          <span 
            className="px-2 py-0.5 rounded-md text-[9px] font-mono font-black tracking-wider uppercase border shadow-[0_0_8px_rgba(6,182,212,0.1)]"
            style={{ color: dept.color, borderColor: `${dept.color}40`, backgroundColor: `${dept.color}15` }}
          >
            {dept.name}
          </span>
          <span className="text-[10px] font-mono text-blue-400">{floor.code}</span>
        </div>

        <h2 className="text-xl font-black text-white flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
          Floor {floor.id}
          <span className="text-xs font-normal text-blue-400">({floor.agents.length} active threads)</span>
        </h2>
        <p className="text-[11px] text-blue-200/60 mt-1 line-clamp-2 leading-relaxed">{floor.description}</p>

        {/* Energy & Process Stats */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-blue-500/10 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-blue-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Power: <strong className="text-white font-bold">{floor.energyUsageKW} kW</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-300">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Threads: <strong className="text-white font-bold">{floor.activeProcesses}</strong></span>
          </div>
        </div>
      </div>

      {/* 2D Floor Plan Schematic Preview */}
      <div className="p-3.5 border-b border-blue-950 bg-slate-900/30">
        <div className="text-[9px] font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center justify-between">
          <span>FLOOR MATRIX NODES</span>
          <span className="text-cyan-400 font-bold">2D RADAR MAP</span>
        </div>
        <div className="relative w-full h-24 rounded-xl border border-blue-900/40 bg-slate-950 p-2 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
          
          {/* Central Elevator */}
          <div className="absolute inset-[35%] rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-[9px] font-mono text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.2)] animate-pulse">
            SHAFT
          </div>
          {/* Corner nodes */}
          <div className="absolute top-2 left-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300">A</div>
          <div className="absolute top-2 right-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300">B</div>
          <div className="absolute bottom-2 left-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300">C</div>
          <div className="absolute bottom-2 right-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300">D</div>
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400/40 animate-bounce" />
        </div>
      </div>

      {/* Worker List for Floor */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
        <div className="flex items-center justify-between text-[10px] font-mono text-blue-400 mb-1 px-1">
          <span>ACTIVE COGNITIVE NODES ({floor.agents.length})</span>
          <span className="text-emerald-400 font-bold animate-pulse">● LIVE GRID</span>
        </div>

        {floor.agents.map((agent) => {
          const isSelected = selectedAgentId === agent.id;
          const sc = getStatusColor(agent.status);
          return (
            <div
              key={agent.id}
              onClick={() => {
                onSelectAgent(agent.id);
                soundManager.playClick();
              }}
              className={`p-3 rounded-xl border transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-blue-500/10 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-slate-900/50 border-blue-900/40 hover:border-blue-500/30 hover:bg-slate-900/70'
              }`}
            >
              {/* Agent Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${sc}-400 opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 bg-${sc}-500`} />
                  </span>
                  <span className="text-xs font-bold text-white tracking-wide">{agent.name}</span>
                </div>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono border font-bold bg-${sc}-500/10 border-${sc}-500/20 text-${sc}-400`}>
                  {agent.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              {/* Specs & Hardware Load Grid */}
              <div className="grid grid-cols-3 gap-1.5 my-2.5 text-[9px] font-mono border-y border-blue-500/10 py-1.5">
                <div className="flex flex-col items-center bg-slate-950/40 px-1 py-0.5 rounded">
                  <span className="text-blue-500 text-[8px]">CPU</span>
                  <span className="text-blue-200 font-bold">{agent.cpuLoad}%</span>
                </div>
                <div className="flex flex-col items-center bg-slate-950/40 px-1 py-0.5 rounded">
                  <span className="text-blue-500 text-[8px]">MEM</span>
                  <span className="text-blue-200 font-bold">{agent.memoryUsage}%</span>
                </div>
                <div className="flex flex-col items-center bg-slate-950/40 px-1 py-0.5 rounded">
                  <span className="text-blue-500 text-[8px]">SPEED</span>
                  <span className="text-cyan-300 font-bold">{agent.tokensPerSec}/s</span>
                </div>
              </div>

              {/* Model */}
              <div className="flex items-center justify-between text-[10px] text-blue-300 font-mono">
                <span>Role: <strong className="text-white font-normal">{agent.role}</strong></span>
                <span className="text-cyan-400 font-bold">{agent.aiModel}</span>
              </div>

              {/* Task Progress */}
              <div className="mt-2">
                <div className="flex justify-between text-[9px] font-mono text-blue-400 mb-1">
                  <span className="truncate pr-2 font-medium">{agent.currentTask.title}</span>
                  <span className="text-cyan-400 font-bold">{agent.currentTask.progress}%</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${agent.currentTask.progress}%` }}
                  />
                </div>
              </div>

              {/* Speech Bubble */}
              {agent.speechBubble && (
                <div className="mt-2 p-1.5 rounded bg-slate-950 border border-blue-500/20 text-[9px] text-blue-200 flex items-center gap-1 font-mono italic">
                  <MessageSquare className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="truncate">"{agent.speechBubble}"</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer Buttons */}
      <div className="p-3.5 border-t border-blue-500/20 bg-slate-950 grid grid-cols-2 gap-2">
        <button
          onClick={() => { onOpenDeployAgent(); soundManager.playClick(); }}
          className="px-3 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:brightness-110 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          Deploy Node
        </button>
        <button
          onClick={() => { onOpenAssignTask(); soundManager.playClick(); }}
          className="px-3 py-2.5 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:brightness-110 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
        >
          <PlayCircle className="w-3.5 h-3.5" />
          Assign Task
        </button>
      </div>
    </aside>
  );
};

export default FloorOverviewPanel;
