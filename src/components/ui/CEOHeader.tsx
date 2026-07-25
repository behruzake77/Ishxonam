import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Crown, 
  Search, 
  Volume2, 
  VolumeX, 
  SlidersHorizontal, 
  Layers, 
  Focus, 
  User, 
  Activity,
  Cpu,
  Brain,
  Wifi,
  Terminal,
  ShieldCheck,
  PersonStanding
} from 'lucide-react';
import { CameraPreset, SystemMetrics } from '../../types/office';
import { soundManager } from '../../utils/audio';

interface CEOHeaderProps {
  selectedFloorId: number;
  onSelectFloor: (floorId: number) => void;
  cameraPreset: CameraPreset;
  onSelectCameraPreset: (preset: CameraPreset) => void;
  onOpenSearch: () => void;
  onOpenCEOControls: () => void;
  metrics: SystemMetrics;
}

export const CEOHeader: React.FC<CEOHeaderProps> = ({
  selectedFloorId,
  onSelectFloor,
  cameraPreset,
  onSelectCameraPreset,
  onOpenSearch,
  onOpenCEOControls,
  metrics
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentTime(timeStr);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSoundToggle = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    if (!muted) soundManager.playClick();
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const floor = parseInt(e.target.value, 10);
    onSelectFloor(floor);
    soundManager.playFloorChime(floor);
  };

  // Connected AI Providers status
  const aiProviders = [
    { name: 'Gemini', status: 'optimal', delay: '85ms' },
    { name: 'Claude', status: 'optimal', delay: '120ms' },
    { name: 'OpenAI', status: 'optimal', delay: '140ms' },
    { name: 'DeepSeek', status: 'high_load', delay: '310ms' },
    { name: 'Llama', status: 'optimal', delay: '45ms' }
  ];

  return (
    <header className="w-full bg-slate-950/80 border-b border-blue-500/30 backdrop-blur-xl px-4 py-3 flex flex-col lg:flex-row items-center justify-between z-40 select-none shadow-[0_4px_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Dynamic scanline element for futuristic HUD look */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-500/5 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse" />

      {/* Left Segment: Branding + CEO Identity */}
      <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start mb-3 lg:mb-0">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Building2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-wider bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                NEURAL OFFICE OS
              </span>
              <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-[9px] font-mono text-cyan-300">
                v5.2-SECURE
              </span>
            </div>
            <p className="text-[9px] text-blue-300/60 tracking-widest font-mono uppercase">
              100-Floor Autonomous Sub-System
            </p>
          </div>
        </div>

        <div className="hidden sm:block h-8 w-px bg-blue-900/40" />

        {/* Premium CEO Profile Panel */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-950/60 to-slate-900/60 border border-blue-500/30 shadow-[inset_0_0_8px_rgba(59,130,246,0.2)]">
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md ring-1 ring-amber-400/40">
              <Crown className="w-4 h-4 text-slate-950" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full animate-ping" />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full" />
          </div>
          <div className="text-left leading-none hidden md:block">
            <div className="text-xs font-bold text-blue-100 flex items-center gap-1">
              B. Ismatullayev
              <span className="text-[8px] bg-amber-400/20 text-amber-300 border border-amber-500/30 px-1 rounded font-extrabold uppercase">
                CEO
              </span>
            </div>
            <span className="text-[8px] text-cyan-400/70 font-mono tracking-wider">CLEARANCE LVL 100</span>
          </div>
        </div>
      </div>

      {/* Middle Segment: 100-Floor Navigation & Connected Providers */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto justify-center mb-3 lg:mb-0">
        {/* Floor selector slider */}
        <div className="flex items-center gap-3 bg-slate-900/80 px-3 py-2 rounded-xl border border-blue-500/20 backdrop-blur-md w-full sm:w-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 shrink-0">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-sm text-white">FLR {selectedFloorId}</span>
            <span className="text-blue-500/60">/100</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={selectedFloorId}
            onChange={handleSliderChange}
            className="w-28 sm:w-36 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"
          />
          <div className="flex gap-1 text-[10px] font-mono shrink-0">
            {[1, 50, 95, 100].map(f => (
              <button
                key={f}
                onClick={() => {
                  onSelectFloor(f);
                  soundManager.playFloorChime(f);
                }}
                className={`px-1.5 py-0.5 rounded transition-all mobile-tap ${
                  selectedFloorId === f 
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_8px_rgba(6,182,212,0.4)]' 
                    : 'bg-slate-800 text-blue-300 hover:text-cyan-300 hover:bg-slate-700'
                }`}
              >
                L{f}
              </button>
            ))}
          </div>
        </div>

        {/* Connected AI Providers status pills - hidden on small mobile */}
        <div className="hidden md:flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-xl border border-blue-900/40 overflow-x-auto max-w-full scrollbar-none">
          <span className="text-[8px] font-mono text-blue-400 tracking-wider uppercase mr-1 flex items-center gap-1 shrink-0">
            <Wifi className="w-3 h-3 text-cyan-400 animate-pulse" /> PROVIDERS:
          </span>
          {aiProviders.map(p => (
            <div 
              key={p.name} 
              className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-950/40 border border-blue-500/10 text-[9px] font-mono shrink-0"
              title={`Latency: ${p.delay}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'optimal' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-blue-200">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Segment: Active metrics, Camera Presets, and System Controls */}
      <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
        {/* Core Live Stats (Pills) - hidden on small mobile */}
        <div className="hidden sm:flex items-center gap-2 font-mono">
          <div className="px-2.5 py-1 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center">
            <div className="text-[8px] text-blue-400">ACTIVE AGENTS</div>
            <div className="text-xs font-bold text-cyan-300 flex items-center gap-1 justify-center">
              <Cpu className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              {metrics.activeAgents}
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center">
            <div className="text-[8px] text-blue-400">RUNNING TASKS</div>
            <div className="text-xs font-bold text-indigo-300 flex items-center gap-1 justify-center">
              <Activity className="w-3 h-3 text-indigo-400 animate-pulse" />
              {metrics.activeTasks}
            </div>
          </div>
        </div>

        {/* Camera Preset Selector Grid */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-blue-900/60 shadow-inner">
          {[
            { preset: 'full_skyscraper', label: 'Full', icon: Building2 },
            { preset: 'floor_focus', label: 'Floor', icon: Focus },
            { preset: 'agent_focus', label: 'Agent', icon: User },
            { preset: 'sky_lounge', label: 'Sky', icon: Crown },
            { preset: 'ceo_walk', label: 'Walk', icon: PersonStanding }
          ].map(({ preset, label, icon: Icon }) => (
            <button
              key={preset}
              onClick={() => { onSelectCameraPreset(preset as CameraPreset); soundManager.playClick(); }}
              className={`px-2 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1 transition-all mobile-tap ${
                cameraPreset === preset 
                  ? 'bg-blue-500/25 text-cyan-300 border border-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.15)] font-bold' 
                  : 'text-blue-300/70 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* CEO Controls */}
        <button
          onClick={() => { onOpenCEOControls(); soundManager.playClick(); }}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all active:scale-95 shrink-0 mobile-tap"
          title="CEO Control Panel"
        >
          <SlidersHorizontal className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">CEO Controls</span>
        </button>

        {/* Search */}
        <button
          onClick={() => { onOpenSearch(); soundManager.playClick(); }}
          className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-900 border border-blue-900/60 text-blue-300 hover:text-white hover:border-blue-500/40 transition-all shrink-0 mobile-tap"
          title="Search Agent/Floor"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Global Sound Toggle */}
        <button
          onClick={handleSoundToggle}
          className="p-2 rounded-xl bg-slate-900 border border-blue-900/60 text-blue-300 hover:text-cyan-300 transition-all shrink-0 mobile-tap"
          title={isMuted ? 'Unmute HUD Audio' : 'Mute HUD Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
        </button>

        {/* Live Clock with pulsing colon */}
        <div className="text-right font-mono text-[10px] text-blue-300/80 hidden xl:block border-l border-blue-900/40 pl-3 min-w-[75px]">
          <div className="text-cyan-300 font-bold text-sm tracking-widest flex items-center justify-end">
            {currentTime.split(':').slice(0, 2).join(':')}
            <span className="animate-pulse mx-0.5 text-cyan-400">:</span>
            {currentTime.split(':')[2]}
          </div>
          <div className="text-[8px] text-blue-500/60">GMT SYNC</div>
        </div>
      </div>
    </header>
  );
};

export default CEOHeader;
