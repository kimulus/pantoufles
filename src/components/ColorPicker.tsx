import React from 'react';
import { Palette } from 'lucide-react';
import type { ColorPalette } from '../types';

interface ColorPickerProps {
  colors: ColorPalette[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  sectionName: string;
}

export function ColorPicker({ colors, selectedColor, onColorSelect, sectionName }: ColorPickerProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-800">Colors for {sectionName}</h2>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {colors.map((color) => (
          <button
            key={color.color}
            className={`w-12 h-12 rounded-full border-2 transition-transform hover:scale-110 ${
              selectedColor === color.color ? 'border-indigo-600 ring-2 ring-indigo-200' : 'border-gray-200'
            }`}
            style={{ backgroundColor: color.color }}
            onClick={() => onColorSelect(color.color)}
            title={color.name}
          />
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-3">
        {colors.find(c => c.color === selectedColor)?.name || 'Select a color'}
      </p>
    </div>
  );
}