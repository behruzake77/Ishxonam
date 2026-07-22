import React, { useState } from 'react';
import { X, PlayCircle, Clock, AlertCircle } from 'lucide-react';
import { Floor, TaskItem } from '../../types/office';
import { soundManager } from '../../utils/audio';

interface AssignTaskModalProps {
  floor: Floor;
  onAssign: (task: Partial<TaskItem>) => void;
  onClose: () => void;
}

export const AssignTaskModal: React.FC<AssignTaskModalProps> = ({
  floor,
  onAssign,
  onClose
}) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<TaskItem['priority']>('HIGH');
  const [eta, setEta] = useState('15m');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAssign({
      title: title.trim(),
      priority,
      eta,
      progress: 5,
      status: 'in_progress',
      subtasks: [
        { id: 'st_new_1', text: 'Initialize system context & vectors', done: true },
        { id: 'st_new_2', text: 'Execute main processing loop', done: false }
      ]
    });

    soundManager.playNotification();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 select-none animate-fadeIn">
      <div className="w-full max-w-md bg-gray-950 border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans">
        <div className="p-4 border-b border-blue-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400 font-bold">
            <PlayCircle className="w-5 h-5" />
            Dispatch High-Priority Task (Floor {floor.id})
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-900 text-gray-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs font-mono">
          <div>
            <label className="block text-gray-400 mb-1">TASK DIRECTIVE TITLE</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Execute Quantum Risk Simulation Batch #42"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">PRIORITY LEVEL</label>
            <div className="grid grid-cols-4 gap-2">
              {(['NORMAL', 'HIGH', 'URGENT', 'CRITICAL'] as const).map(p => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPriority(p)}
                  className={`p-2 rounded-xl border text-center text-[10px] font-bold transition-all ${
                    priority === p ? 'bg-blue-500/20 border-blue-400 text-blue-300' : 'bg-gray-900 border-gray-800 text-gray-400'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">ESTIMATED COMPLETION ETA</label>
            <input 
              type="text" 
              value={eta}
              onChange={(e) => setEta(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 rounded-xl bg-blue-500 text-gray-950 font-bold hover:brightness-110"
            >
              Dispatch Task Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
