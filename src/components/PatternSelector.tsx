import React from 'react';
import { Shirt, Scroll, Footprints } from 'lucide-react';
import type { PatternType } from '../data/patterns';

interface PatternSelectorProps {
  selectedPattern: PatternType;
  onPatternSelect: (pattern: PatternType) => void;
}

export function PatternSelector({ selectedPattern, onPatternSelect }: PatternSelectorProps) {
  return (
    <div className="flex gap-4 justify-center mb-6">
      <button
        onClick={() => onPatternSelect('sweater')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          selectedPattern === 'sweater'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Shirt className="w-5 h-5" />
        <span>Sweater</span>
      </button>
      <button
        onClick={() => onPatternSelect('scarf')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          selectedPattern === 'scarf'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Scroll className="w-5 h-5" />
        <span>Scarf</span>
      </button>
      <button
        onClick={() => onPatternSelect('pantouffle')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          selectedPattern === 'pantouffle'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Footprints className="w-5 h-5" />
        <span>Pantouffle</span>
      </button>
    </div>
  );
}