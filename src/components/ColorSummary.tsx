import React from 'react';
import type { PatternType } from '../data/patterns';
import { patterns } from '../data/patterns';

interface ColorSummaryProps {
  pattern: PatternType;
  sectionColors: Record<string, string>;
}

export function ColorSummary({ pattern, sectionColors }: ColorSummaryProps) {
  const patternSections = patterns[pattern].sections;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Colors</h3>
      <div className="grid grid-cols-2 gap-4">
        {patternSections.map((section) => (
          <div key={section.id} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full border-2 border-gray-200"
              style={{
                backgroundColor: sectionColors[section.id] || '#FFFFFF',
              }}
            />
            <div>
              <p className="text-sm font-medium text-gray-700">{section.name}</p>
              <p className="text-xs text-gray-500">
                {sectionColors[section.id] || 'Not selected'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}