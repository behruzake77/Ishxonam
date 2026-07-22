import React, { useState } from 'react';
import { X, PlusCircle, User, Cpu, Sparkles } from 'lucide-react';
import { AIAgent, Floor } from '../../types/office';
import { getDepartmentByFloor } from '../../data/mockOfficeData';
import { soundManager } from '../../utils/audio';

interface DeployAgentModalProps {
  floor: Floor;
  onDeploy: (agent: Partial<AIAgent>) => void;
  onClose: () => void;
}

export const DeployAgentModal: React.FC<DeployAgentModalProps> = ({
  floor,
  onDeploy,
  onClose
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [model, setModel] = useState<AIAgent['aiModel']>('Claude 3.5 Sonnet');
  const [shape, setShape] = useState<AIAgent['avatarShape']>('sphere');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const dept = getDepartmentByFloor(floor.id);

    onDeploy({
      name: name.trim(),
      role: role.trim() || `${dept.name.split(' ')[0]} Engineer`,
      aiModel: model,
      avatarShape: shape,
      avatarColor: dept.color,
      floorId: floor.id,
      departmentId: dept.category,
      departmentName: dept.name,
      status: 'working_at_desk'
    });

    soundManager.playNotification();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 select-none animate-fadeIn">
      <div className="w-full max-w-md bg-gray-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans">
        <div className="p-4 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <PlusCircle className="w-5 h-5" />
            Deploy Agent to Floor {floor.id}
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-900 text-gray-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs font-mono">
          <div>
            <label className="block text-gray-400 mb-1">AGENT FULL NAME</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Kaius Cyber"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">SPECIALIZED ROLE</label>
            <input 
              type="text" 
              placeholder="e.g. Neural Weights Engineer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">LLM MODEL BACKBONE</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value as AIAgent['aiModel'])}
              className="w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-cyan-300 focus:outline-none focus:border-cyan-500"
            >
              <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Anthropic)</option>
              <option value="Gemini 1.5 Pro">Gemini 1.5 Pro (Google)</option>
              <option value="GPT-4o Enterprise">GPT-4o Enterprise (OpenAI)</option>
              <option value="Llama 3.1 70B">Llama 3.1 70B (Meta)</option>
              <option value="DeepSeek-V3">DeepSeek-V3 (DeepSeek)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">3D AVATAR GEOMETRY</label>
            <div className="grid grid-cols-3 gap-2">
              {(['sphere', 'cube', 'octahedron', 'torus', 'pyramid', 'cylinder'] as const).map(s => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setShape(s)}
                  className={`p-2 rounded-xl border text-center capitalize transition-all ${
                    shape === s ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-gray-900 border-gray-800 text-gray-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
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
              className="px-4 py-2 rounded-xl bg-cyan-500 text-gray-950 font-bold hover:brightness-110"
            >
              Deploy Agent Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
