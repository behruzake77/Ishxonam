import React, { useState } from 'react';
import { 
  InterAgentMessage, 
  SystemMetrics, 
  CEOControlSettings 
} from '../../types/office';
import { 
  Radio, 
  Cpu, 
  ShieldCheck, 
  DollarSign, 
  Zap, 
  Layers, 
  ArrowRight,
  LayoutDashboard,
  Users,
  MessageSquare,
  Network,
  CloudLightning,
  Settings,
  ShieldAlert
} from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface InterAgentCommPanelProps {
  messages: InterAgentMessage[];
  metrics: SystemMetrics;
  ceoSettings: CEOControlSettings;
  onOpenCEOControls: () => void;
  isMobile?: boolean;
}

type TabType = 'overview' | 'providers' | 'comms';

export const InterAgentCommPanel: React.FC<InterAgentCommPanelProps> = ({
  messages,
  metrics,
  ceoSettings,
  onOpenCEOControls,
  isMobile = false
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    soundManager.playClick();
  };

  // Mobile: render as inline content for bottom drawer
  if (isMobile) {
    return (
      <div className="w-full flex flex-col overflow-hidden">
        {/* CEO Navigation HUD Tabs - compact mobile version */}
        <div className="flex border-b border-blue-500/20 bg-slate-900/40 p-1 gap-1">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'providers', icon: Network, label: 'AI Engines' },
            { id: 'comms', icon: MessageSquare, label: 'Comms' }
          ].map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id as TabType)}
                className={`flex-1 py-2 px-1 rounded-xl text-[10px] font-mono font-bold flex flex-col items-center justify-center gap-1 transition-all mobile-tap ${
                  activeTab === item.id 
                    ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/40 shadow-[0_0_12px_rgba(6,182,212,0.15)]' 
                    : 'text-blue-300/60 hover:text-white hover:bg-slate-800/40 active:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Main Tab Content */}
        <div className="flex-1 flex flex-col overflow-hidden px-3 py-2 space-y-3">
          {activeTab === 'overview' && (
            <div className="space-y-2">
              {/* Grid Metrics - compact 2x2 */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-blue-500/10">
                  <div className="text-[8px] text-blue-400 font-bold">TOTAL AGENTS</div>
                  <div className="text-lg font-black text-cyan-300">{metrics.totalAgents}</div>
                  <div className="text-[7px] text-emerald-400">{metrics.activeAgents} Running</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-blue-500/10">
                  <div className="text-[8px] text-blue-400 font-bold">ACTIVE TASKS</div>
                  <div className="text-lg font-black text-purple-300">{metrics.activeTasks}</div>
                  <div className="text-[7px] text-purple-400">100 Floor Sync</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-blue-500/10">
                  <div className="text-[8px] text-blue-400 font-bold">TOKEN BURN/MIN</div>
                  <div className="text-xs font-black text-amber-300">{metrics.tokenBurnRatePerMin.toLocaleString()}</div>
                  <div className="text-[7px] text-amber-400/80">Auto-Route Active</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-blue-500/10">
                  <div className="text-[8px] text-blue-400 font-bold">EARNINGS SAVED</div>
                  <div className="text-xs font-black text-emerald-300">${metrics.totalEarningsSavedUSD.toLocaleString()}</div>
                  <div className="text-[7px] text-emerald-400/80">+14% vs Prev Qtr</div>
                </div>
              </div>

              {/* CEO settings summary - compact */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-950/30 to-slate-900/30 border border-blue-500/20 space-y-1.5">
                <div className="text-[9px] font-mono font-bold text-amber-400 flex items-center gap-1">
                  <Settings className="w-3 h-3 text-amber-400" />
                  CEO OVERRIDES
                </div>
                <div className="space-y-1 text-[10px] font-mono">
                  <div className="flex justify-between items-center text-blue-200">
                    <span>Emergency:</span>
                    <span className={ceoSettings.emergencyPause ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                      {ceoSettings.emergencyPause ? 'LOCKED' : 'ARMED'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-blue-200">
                    <span>Auto Balance:</span>
                    <span className={ceoSettings.globalAutoSwitch ? 'text-cyan-400 font-bold' : 'text-gray-400'}>
                      {ceoSettings.globalAutoSwitch ? 'ON' : 'OFF'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-blue-200">
                    <span>Token Budget:</span>
                    <span className="text-amber-300 font-bold">
                      {(ceoSettings.tokenBudgetLimit / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </div>

              {/* System Status */}
              <div className="p-2.5 rounded-xl bg-slate-900/40 border border-blue-900/60 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  <ShieldCheck className="w-4 h-4 animate-pulse" />
                </div>
                <div className="leading-tight">
                  <h4 className="text-[10px] font-bold text-blue-100">SYSTEM: SECURE</h4>
                  <p className="text-[8px] text-blue-400/80 font-mono">Firewall: MAXIMUM</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'providers' && (
            <div className="space-y-2 font-mono text-xs">
              {[
                { name: 'Gemini 1.5 Pro', provider: 'Gemini', cost: '$1.25/M', quota: '85%', health: 'Optimal' },
                { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', cost: '$3.00/M', quota: '92%', health: 'Optimal' },
                { name: 'GPT-4o Enterprise', provider: 'OpenAI', cost: '$2.50/M', quota: '78%', health: 'Optimal' },
                { name: 'DeepSeek-V3 (Local)', provider: 'Local Cluster', cost: '$0.15/M', quota: '99%', health: 'High Load' },
                { name: 'Llama 3.1 70B', provider: 'Meta-OSS', cost: '$0.40/M', quota: '95%', health: 'Optimal' }
              ].map((p, idx) => (
                <div 
                  key={p.name}
                  className="p-2 rounded-xl bg-slate-900/60 border border-blue-500/10 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-100 text-[10px]">{p.name}</span>
                    <span className={`px-1 rounded text-[7px] font-extrabold ${p.health === 'Optimal' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {p.health}
                    </span>
                  </div>
                  <div className="flex justify-between text-[8px] text-blue-400">
                    <span>{p.provider}</span>
                    <span>{p.cost}</span>
                  </div>
                  <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${idx === 3 ? 'from-amber-400 to-orange-500' : 'from-cyan-500 to-blue-500'}`}
                      style={{ width: p.quota }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'comms' && (
            <div className="space-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-2 rounded-xl bg-slate-900/60 border border-blue-500/10 font-mono"
                >
                  <div className="flex items-center justify-between text-[8px] text-blue-400 mb-0.5">
                    <span className="px-1 py-0.5 rounded bg-blue-500/15 text-cyan-300 border border-blue-500/20 text-[7px]">{msg.topic}</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div className="text-[10px] text-white font-semibold flex items-center gap-1 my-0.5">
                    <span className="text-cyan-400 truncate max-w-[80px]">{msg.senderName.split(' ')[0]}</span>
                    <ArrowRight className="w-2.5 h-2.5 text-blue-500 shrink-0" />
                    <span className="text-purple-400 truncate max-w-[80px]">{msg.receiverName.split(' ')[0]}</span>
                  </div>

                  <p className="text-[9px] text-blue-200 leading-relaxed bg-slate-950/60 p-1 rounded border border-blue-900/40 line-clamp-2">
                    "{msg.content}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop version (original)
  return (
    <aside className="w-80 h-full bg-slate-950/80 border-r border-blue-500/30 backdrop-blur-2xl flex flex-col z-30 select-none overflow-hidden shadow-[4px_0_30px_rgba(0,0,0,0.5)]">
      {/* CEO Navigation HUD Sidebar */}
      <div className="flex border-b border-blue-500/20 bg-slate-900/40 p-1.5 gap-1">
        {[
          { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
          { id: 'providers', icon: Network, label: 'AI Engines' },
          { id: 'comms', icon: MessageSquare, label: 'Comms Mesh' }
        ].map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id as TabType)}
              className={`flex-1 py-2 px-1 rounded-xl text-[10px] font-mono font-bold flex flex-col items-center justify-center gap-1 transition-all ${
                activeTab === item.id 
                  ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/40 shadow-[0_0_12px_rgba(6,182,212,0.15)]' 
                  : 'text-blue-300/60 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Main Tab Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {activeTab === 'overview' && (
          <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 space-y-4">
            {/* Sector 1: Global Telemetry */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> Live Telemetry
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {metrics.quantumClusterStatus}
                </span>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner">
                  <div className="text-[9px] text-blue-400 font-bold">TOTAL AGENTS</div>
                  <div className="text-xl font-black text-cyan-300 mt-1">{metrics.totalAgents}</div>
                  <div className="text-[8px] text-emerald-400 mt-0.5">{metrics.activeAgents} Running</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner">
                  <div className="text-[9px] text-blue-400 font-bold">ACTIVE TASKS</div>
                  <div className="text-xl font-black text-purple-300 mt-1">{metrics.activeTasks}</div>
                  <div className="text-[8px] text-purple-400 mt-0.5">100 Floor Sync</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner">
                  <div className="text-[9px] text-blue-400 font-bold">TOKEN BURN/MIN</div>
                  <div className="text-sm font-black text-amber-300 mt-1">{metrics.tokenBurnRatePerMin.toLocaleString()}</div>
                  <div className="text-[8px] text-amber-400/80 mt-0.5">Auto-Route Active</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner">
                  <div className="text-[9px] text-blue-400 font-bold">EARNINGS SAVED</div>
                  <div className="text-sm font-black text-emerald-300 mt-1">${metrics.totalEarningsSavedUSD.toLocaleString()}</div>
                  <div className="text-[8px] text-emerald-400/80 mt-0.5">+14% vs Prev Qtr</div>
                </div>
              </div>
            </div>

            {/* Sector 2: CEO settings summary */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/30 to-slate-900/30 border border-blue-500/20 space-y-2">
              <div className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5 text-amber-400" />
                CEO OVERRIDES ACTIVE
              </div>
              <div className="space-y-1.5 text-[11px] font-mono">
                <div className="flex justify-between items-center text-blue-200">
                  <span>Emergency Lock:</span>
                  <span className={ceoSettings.emergencyPause ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                    {ceoSettings.emergencyPause ? 'LOCKED' : 'ARMED'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-blue-200">
                  <span>Auto Load Balance:</span>
                  <span className={ceoSettings.globalAutoSwitch ? 'text-cyan-400 font-bold' : 'text-gray-400'}>
                    {ceoSettings.globalAutoSwitch ? 'ENABLED' : 'DISABLED'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-blue-200">
                  <span>Daily Token Budget:</span>
                  <span className="text-amber-300 font-bold">
                    {(ceoSettings.tokenBudgetLimit / 1000000).toFixed(1)}M
                  </span>
                </div>
              </div>
            </div>

            {/* Sector 3: System Status Indicator */}
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-blue-900/60 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                <ShieldCheck className="w-5 h-5 animate-pulse" />
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-blue-100">SYSTEM HEALTH: SECURE</h4>
                <p className="text-[9px] text-blue-400/80 font-mono mt-0.5">Firewall level: MAXIMUM SECURITY</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'providers' && (
          <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
              <span className="flex items-center gap-1.5 uppercase">
                <CloudLightning className="w-3.5 h-3.5 text-cyan-400" /> AI Provider Nodes
              </span>
              <span className="text-[9px] text-blue-400">5 ONLINE</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {[
                { name: 'Gemini 1.5 Pro', provider: 'Gemini', cost: '$1.25/M', quota: '85%', health: 'Optimal' },
                { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', cost: '$3.00/M', quota: '92%', health: 'Optimal' },
                { name: 'GPT-4o Enterprise', provider: 'OpenAI', cost: '$2.50/M', quota: '78%', health: 'Optimal' },
                { name: 'DeepSeek-V3 (Local)', provider: 'Local Cluster', cost: '$0.15/M', quota: '99%', health: 'High Load' },
                { name: 'Llama 3.1 70B', provider: 'Meta-OSS', cost: '$0.40/M', quota: '95%', health: 'Optimal' }
              ].map((p, idx) => (
                <div 
                  key={p.name}
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-100 text-[11px]">{p.name}</span>
                    <span className={`px-1 rounded text-[8px] font-extrabold ${p.health === 'Optimal' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {p.health}
                    </span>
                  </div>
                  <div className="flex justify-between text-[9px] text-blue-400">
                    <span>Cluster: {p.provider}</span>
                    <span>Cost: {p.cost}</span>
                  </div>
                  {/* Gauge Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[8px] text-blue-500">
                      <span>Quota Availability</span>
                      <span>{p.quota}</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${idx === 3 ? 'from-amber-400 to-orange-500' : 'from-cyan-500 to-blue-500'}`}
                        style={{ width: p.quota }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'comms' && (
          <div className="flex-1 flex flex-col overflow-hidden p-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2 px-1">
              <span className="flex items-center gap-1.5 uppercase font-bold">
                <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> Comm stream
              </span>
              <span className="text-[9px] text-blue-400">ACTIVE MESH</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 custom-scrollbar pr-1">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/25 transition-all font-mono shadow-inner"
                >
                  <div className="flex items-center justify-between text-[9px] text-blue-400 mb-1">
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/15 text-cyan-300 border border-blue-500/20">{msg.topic}</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div className="text-xs text-white font-semibold flex items-center gap-1.5 my-1">
                    <span className="text-cyan-400 truncate max-w-[100px]">{msg.senderName.split(' ')[0]}</span>
                    <ArrowRight className="w-3 h-3 text-blue-500 shrink-0" />
                    <span className="text-purple-400 truncate max-w-[100px]">{msg.receiverName.split(' ')[0]}</span>
                  </div>

                  <p className="text-[10px] text-blue-200 leading-relaxed bg-slate-950/60 p-1.5 rounded border border-blue-900/40">
                    "{msg.content}"
                  </p>

                  <div className="flex items-center justify-between text-[9px] text-blue-400 mt-2">
                    <span>Tokens: <strong className="text-cyan-300">{msg.tokenCount}</strong></span>
                    <span className="text-emerald-400 font-bold uppercase">{msg.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CEO Override Button */}
      <div className="p-3.5 border-t border-blue-500/20 bg-slate-950">
        <button
          onClick={() => { onOpenCEOControls(); soundManager.playClick(); }}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 via-blue-600/25 to-indigo-600/20 border border-blue-500/40 text-cyan-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all"
        >
          <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
          GLOBAL CONTROL PANEL
        </button>
      </div>
    </aside>
  );
};

export default InterAgentCommPanel;
