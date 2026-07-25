import React, { useState } from 'react';
import { Search, X, Layers, User } from 'lucide-react';
import { Floor, AIAgent, DepartmentTier } from '../../types/office';
import { DEPARTMENT_TIERS } from '../../data/mockOfficeData';
import { soundManager } from '../../utils/audio';

interface SearchModalProps {
  floors: Floor[];
  onSelectFloor: (floorId: number) => void;
  onSelectAgent: (agentId: string, floorId: number) => void;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  floors,
  onSelectFloor,
  onSelectAgent,
  onClose
}) => {
  const [query, setQuery] = useState('');

  const allAgents: AIAgent[] = [];
  floors.forEach(f => allAgents.push(...f.agents));

  const filteredFloors = floors.filter(f => 
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.departmentName.toLowerCase().includes(query.toLowerCase()) ||
    f.id.toString() === query.trim()
  ).slice(0, 5);

  const filteredAgents = allAgents.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.role.toLowerCase().includes(query.toLowerCase()) ||
    a.aiModel.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 10);

  return (
    <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-start justify-center z-50 pt-4 sm:pt-20 p-2 sm:p-4 select-none animate-fadeIn">
      <div className="w-full max-w-xl h-full sm:h-auto sm:max-h-[80vh] bg-gray-950 border border-cyan-500/30 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden font-sans">
        {/* Search Input Bar */}
        <div className="p-3 sm:p-4 border-b border-gray-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search Floors, Agents, Models..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-mono"
          />
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-900 text-gray-400 active:bg-gray-800 mobile-tap">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-3 sm:p-4 max-h-[70vh] sm:max-h-[60vh] overflow-y-auto space-y-3 sm:space-y-4 font-mono text-xs custom-scrollbar mobile-no-scrollbar">
          {/* Department Quick Filter Tabs - scrollable on mobile */}
          <div>
            <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">BUILDING SECTORS</div>
            <div className="flex flex-wrap gap-1.5">
              {DEPARTMENT_TIERS.map((dept: DepartmentTier) => (
                <button
                  key={dept.category}
                  onClick={() => {
                    onSelectFloor(dept.floorRange[0]);
                    soundManager.playFloorChime(dept.floorRange[0]);
                    onClose();
                  }}
                  className="px-2 py-1 rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-500/40 active:border-cyan-500/40 text-gray-300 hover:text-cyan-300 active:text-cyan-300 text-[10px] mobile-tap"
                >
                  {dept.name} (L{dept.floorRange[0]}-{dept.floorRange[1]})
                </button>
              ))}
            </div>
          </div>

          {/* Floor Results */}
          {filteredFloors.length > 0 && (
            <div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">FLOORS</div>
              <div className="space-y-1">
                {filteredFloors.map(f => (
                  <div
                    key={f.id}
                    onClick={() => {
                      onSelectFloor(f.id);
                      soundManager.playFloorChime(f.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 active:border-cyan-500/40 flex items-center justify-between cursor-pointer transition-all mobile-tap"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-bold text-white">Floor {f.id}</span>
                      <span className="text-gray-400 truncate hidden sm:inline">({f.departmentName})</span>
                    </div>
                    <span className="text-cyan-300 shrink-0">{f.agents.length} Agents</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agent Results */}
          {filteredAgents.length > 0 && (
            <div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">AI AGENTS</div>
              <div className="space-y-1">
                {filteredAgents.map(a => (
                  <div
                    key={a.id}
                    onClick={() => {
                      onSelectAgent(a.id, a.floorId);
                      soundManager.playClick();
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 active:border-cyan-500/40 flex items-center justify-between cursor-pointer transition-all mobile-tap"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <User className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="font-bold text-white truncate">{a.name}</span>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-cyan-300 font-bold text-[10px]">Floor {a.floorId}</span>
                      <span className="text-[9px] text-gray-500 block hidden sm:block">{a.aiModel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
