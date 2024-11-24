import React, { useState } from 'react';
import { Wand2, Sparkles } from 'lucide-react';

interface AIColorSuggestionsProps {
  onSuggest: () => void;
  onThemeColors: (colors: Record<string, string>) => void;
}

export function AIColorSuggestions({ onSuggest, onThemeColors }: AIColorSuggestionsProps) {
  const [theme, setTheme] = useState('');

  const generateThemeColors = () => {
    if (!theme.trim()) return;

    // This is a simple example of theme-to-color mapping
    // In a real application, this would use an AI service
    const themeColors: Record<string, Record<string, string>> = {
      ocean: {
        'section-a': '#1E3D59', // deep blue for sole
        'section-b': '#2D5F7C', // medium blue for side panel
        'section-c': '#3E8EAE', // light blue for cuff
        'section-d': '#60A3BC'  // sky blue for upper part
      },
      forest: {
        'section-a': '#2D3A1E', // dark forest green
        'section-b': '#4A5D3F', // moss green
        'section-c': '#739063', // sage
        'section-d': '#A4B494'  // light sage
      },
      sunset: {
        'section-a': '#FF6B6B', // coral
        'section-b': '#FF8E72', // peach
        'section-c': '#FFA07A', // light salmon
        'section-d': '#FFB88C'  // light peach
      },
      desert: {
        'section-a': '#8B4513', // saddle brown
        'section-b': '#D2691E', // chocolate
        'section-c': '#DEB887', // burly wood
        'section-d': '#F5DEB3'  // wheat
      },
      galaxy: {
        'section-a': '#1A1A2E', // dark blue
        'section-b': '#16213E', // navy
        'section-c': '#0F3460', // deep blue
        'section-d': '#533483'  // purple
      }
    };

    // Generate colors based on theme input
    const baseTheme = theme.toLowerCase();
    let colors: Record<string, string> = {};
    
    if (themeColors[baseTheme]) {
      colors = themeColors[baseTheme];
    } else {
      // Generate random theme-inspired colors if theme not found
      const hue = Math.random() * 360;
      colors = {
        'section-a': `hsl(${hue}, 70%, 20%)`,
        'section-b': `hsl(${hue}, 60%, 35%)`,
        'section-c': `hsl(${hue}, 50%, 50%)`,
        'section-d': `hsl(${hue}, 40%, 65%)`
      };
    }

    onThemeColors(colors);
    setTheme('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="relative">
        <input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Enter a theme (e.g., ocean, forest)"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 min-w-[250px]"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              generateThemeColors();
            }
          }}
        />
        <button
          onClick={generateThemeColors}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
        </button>
      </div>
      
      <button
        onClick={onSuggest}
        className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
      >
        <Wand2 className="w-5 h-5" />
        <span className="font-medium">Suggest from Palette</span>
      </button>
    </div>
  );
}