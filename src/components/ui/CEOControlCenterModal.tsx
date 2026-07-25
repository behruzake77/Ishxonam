import React, { useState } from 'react';
import { 
  Crown, 
  X, 
  ShieldAlert, 
  Zap, 
  Cpu, 
  Radio, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle,
  Megaphone,
  Layers
} from 'lucide-react';
import { CEOControlSettings } from '../../types/office';
import { soundManager } from '../../utils/audio';

interface CEOControlCenterModalProps {
  settings: CEOControlSettings;
  onUpdateSettings: (newSettings: CEOControlSettings) => void;
  onClose: () => void;
}

export const CEOControlCenterModal: React.FC<CEOControlCenterModalProps> = ({
  settings,
  onUpdateSettings,
  onClose
}) => {
  const [emergencyPause, setEmergencyPause] = useState(settings.emergencyPause);
  const [budget, setBudget] = useState(settings.tokenBudgetLimit);
  const [broadcast, setBroadcast] = useState(settings.activeBroadcastMessage || '');
  const [graphicsQuality, setGraphicsQuality] = useState(settings.graphicsQuality || 'high');

  const handleToggleEmergency = () => {
    const next = !emergencyPause;
    setEmergencyPause(next);
    if (next) soundManager.playAlert();
    else soundManager.playNotification();
  };

  const handleSave = () => {
    onUpdateSettings({
      ...settings,
      emergencyPause,
      tokenBudgetLimit: budget,
      activeBroadcastMessage: broadcast.trim() || null,
      graphicsQuality
    });
    soundManager.playNotification();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4 select-none animate-fadeIn">
      <div className="w-full max-w-2xl h-full sm:h-auto sm:max-h-[90vh] bg-gray-950 border border-amber-500/30 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden font-sans">
        {/* Header */}
        <div className="p-3 sm:p-4 border-b border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-gray-950 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Crown className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-white flex items-center gap-2">
                CEO Control Center
                <span className="px-1.5 py-0.5 rounded bg-amber-400 text-gray-950 text-[8px] sm:text-[10px] font-extrabold uppercase">
                  LVL 100
                </span>
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-400">Global System Overrides & Autonomous Protocol</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white active:text-white transition-colors mobile-tap"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto custom-scrollbar">
          {/* Emergency System Override */}
          <div className="p-3 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <ShieldAlert className="w-5 sm:w-6 h-5 sm:h-6 text-red-400 shrink-0 animate-pulse" />
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-red-300">EMERGENCY FREEZE</h4>
                <p className="text-[9px] sm:text-xs text-gray-400">Pause all 420 AI threads across 100 floors.</p>
              </div>
            </div>
            <button
              onClick={handleToggleEmergency}
              className={`px-3 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md shrink-0 mobile-tap ${
                emergencyPause 
                  ? 'bg-red-500 text-white border border-red-400 shadow-red-500/30' 
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:text-red-300 active:text-red-300'
              }`}
            >
              {emergencyPause ? 'FROZEN' : 'FREEZE'}
            </button>
          </div>

          {/* Global Token Budget Slider */}
          <div className="p-3 sm:p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-300 font-bold flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                TOKEN BUDGET
              </span>
              <span className="text-cyan-300 font-bold text-sm">{(budget / 1000000).toFixed(1)}M</span>
            </div>
            <input 
              type="range"
              min="10000000"
              max="100000000"
              step="5000000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 mobile-tap"
            />
          </div>

          {/* Graphics Quality Control */}
          <div className="p-3 sm:p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-300 font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                GRAPHICS
              </span>
              <span className="text-cyan-300 font-bold uppercase">{graphicsQuality}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {(['low', 'medium', 'high'] as const).map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => {
                    setGraphicsQuality(q);
                    soundManager.playClick();
                  }}
                  className={`px-2 py-2 rounded-lg text-[10px] font-mono font-bold transition-all border mobile-tap ${
                    graphicsQuality === q
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                      : 'bg-gray-950 text-gray-500 border-gray-800 hover:text-gray-300 active:text-gray-300'
                  }`}
                >
                  {q === 'low' && 'LOW'}
                  {q === 'medium' && 'MED'}
                  {q === 'high' && 'HIGH'}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Low mode saves battery by disabling bloom, shadows & reducing pixel ratio.
            </p>
          </div>

          {/* CEO Emergency Broadcast */}
          <div className="p-3 sm:p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-2">
            <label className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
              <Megaphone className="w-4 h-4 text-amber-400" />
              CEO BROADCAST
            </label>
            <input 
              type="text"
              placeholder="Broadcast message to all 100 floors..."
              value={broadcast}
              onChange={(e) => setBroadcast(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-gray-950 border border-gray-800 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-900 bg-gray-950 flex justify-end gap-3 safe-bottom">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white active:text-white text-xs font-semibold mobile-tap"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 text-xs font-bold hover:brightness-110 active:brightness-90 shadow-lg shadow-amber-500/20 mobile-tap"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CEOControlCenterModal;
