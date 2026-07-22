import React from 'react';
import { 
  AlertTriangle, 
  Users, 
  Clock, 
  Zap, 
  ArrowUpRight,
  Terminal,
  Search,
  PlusCircle,
  Play,
  Sliders,
  Volume2
} from 'lucide-react';
import { soundManager } from '../../utils/audio';
import { SystemMetrics, NotificationItem } from '../../types/office';
import { RouterSwitchLog } from '../../utils/modelRouter';

interface SystemHUDProps {
  onSelectFloor: (floorId: number) => void;
  metrics: SystemMetrics;
  notifications: NotificationItem[];
  routerLogs: RouterSwitchLog[];
  onOpenSearch?: () => void;
  onOpenDeploy?: () => void;
  onOpenAssign?: () => void;
  onOpenCEOControls?: () => void;
}

export const SystemHUD: React.FC<SystemHUDProps> = ({ 
  onSelectFloor,
  metrics,
  notifications,
  routerLogs,
  onOpenSearch,
  onOpenDeploy,
  onOpenAssign,
  onOpenCEOControls
}) => {
  // Extract latest critical alert, latest router switch, latest meeting notification, and active floor counts
  const latestAlert = notifications.find(n => n.type === 'critical') || 
                      notifications.find(n => n.type === 'warning') ||
                      notifications[0];
  const latestSwitch = routerLogs[0];

  return (
    <footer className="w-full bg-slate-950/90 border-t border-blue-500/30 backdrop-blur-xl px-4 py-2 flex flex-col md:flex-row items-center justify-between z-40 select-none shadow-[0_-4px_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Dynamic scanline element for futuristic HUD look */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-500/5 to-transparent opacity-30" />

      {/* Terminal prompt indicators & live metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full md:w-3/4 font-mono text-xs mb-2 md:mb-0">
        {/* 1. Dynamic System Alert */}
        <div 
          onClick={() => { 
            const targetFloor = latestAlert?.floorId || 95;
            onSelectFloor(targetFloor); 
            soundManager.playFloorChime(targetFloor); 
          }}
          className="px-3 py-1.5 rounded-xl bg-red-950/30 border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner"
        >
          <div className="flex items-center gap-2 min-w-0">
            <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] text-red-400 font-bold uppercase tracking-wider">SYSTEM TELEMETRY</div>
              <div className="text-blue-100 text-[10px] truncate">
                {latestAlert ? latestAlert.title : `Secure • Security Level: ${metrics.securityLevel}`}
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-500/60 group-hover:text-red-400 transition-colors" />
        </div>

        {/* 2. Compute Capacity */}
        <div 
          onClick={() => { onSelectFloor(85); soundManager.playFloorChime(85); }}
          className="px-3 py-1.5 rounded-xl bg-purple-950/30 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Users className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] text-purple-400 font-bold uppercase tracking-wider">COMPUTE CLUSTERS</div>
              <div className="text-blue-100 text-[10px] truncate">
                {metrics.quantumClusterStatus} • {metrics.activeAgents}/{metrics.totalAgents} Agents
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-500/60 group-hover:text-purple-400 transition-colors" />
        </div>

        {/* 3. Token Generation */}
        <div 
          onClick={() => { onSelectFloor(65); soundManager.playFloorChime(65); }}
          className="px-3 py-1.5 rounded-xl bg-amber-950/30 border border-amber-500/30 hover:border-amber-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] text-amber-400 font-bold uppercase tracking-wider">TOKEN THROUGHPUT</div>
              <div className="text-blue-100 text-[10px] truncate">
                {metrics.totalTokensGenerated.toLocaleString()} Generated • {metrics.activeTasks} Active Tasks
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-500/60 group-hover:text-amber-400 transition-colors" />
        </div>

        {/* 4. Token Router switches */}
        <div 
          onClick={() => { 
            const targetFloor = latestSwitch?.floorId || 45;
            onSelectFloor(targetFloor); 
            soundManager.playFloorChime(targetFloor); 
          }}
          className="px-3 py-1.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">TOKEN ROUTER LOG</div>
              <div className="text-blue-100 text-[10px] truncate">
                {latestSwitch 
                  ? `${latestSwitch.agentName.split(' ')[0]} -> ${latestSwitch.newModel}` 
                  : `Router Active • Burn Rate: ${metrics.tokenBurnRatePerMin}/m`}
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-500/60 group-hover:text-cyan-400 transition-colors" />
        </div>
      </div>

      {/* Cyber Command input/shortcut panel on the right */}
      <div className="flex items-center gap-2 border-l border-blue-900/40 pl-4 py-0.5 font-mono text-[10px]">
        <span className="text-cyan-400/60 flex items-center gap-1">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          CMD_PROMPT:
        </span>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => { if (onOpenDeploy) { onOpenDeploy(); soundManager.playClick(); } }}
            className="px-2 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300 hover:text-white hover:bg-blue-900/30 transition-all"
            title="Deploy new virtual worker process"
          >
            /deploy
          </button>
          <button 
            onClick={() => { if (onOpenAssign) { onOpenAssign(); soundManager.playClick(); } }}
            className="px-2 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300 hover:text-white hover:bg-blue-900/30 transition-all"
            title="Inject cognitive instructions"
          >
            /task
          </button>
          <button 
            onClick={() => { if (onOpenSearch) { onOpenSearch(); soundManager.playClick(); } }}
            className="px-2 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300 hover:text-white hover:bg-blue-900/30 transition-all"
            title="Quick agent database lookup"
          >
            /find
          </button>
          <button 
            onClick={() => { if (onOpenCEOControls) { onOpenCEOControls(); soundManager.playClick(); } }}
            className="px-2 py-1 rounded bg-amber-950/30 border border-amber-500/20 text-amber-400 hover:text-white hover:bg-amber-900/20 transition-all"
            title="Access root authority controls"
          >
            /sys_ctl
          </button>
        </div>
      </div>
    </footer>
  );
};

