import React, { useRef } from 'react';
import type { PatternType } from '../data/patterns';
import { patterns } from '../data/patterns';
import { ColorSummary } from './ColorSummary';

interface KnittingPreviewProps {
  pattern: PatternType;
  sectionColors: Record<string, string>;
  onSectionClick: (id: string) => void;
  selectedSection: string | null;
}

export function KnittingPreview({
  pattern,
  sectionColors,
  onSectionClick,
  selectedSection
}: KnittingPreviewProps) {
  const selectedPatternData = patterns[pattern];
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadPattern = () => {
    if (!svgRef.current) return;
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get the SVG dimensions
    const svgRect = svgRef.current.getBoundingClientRect();
    const width = svgRect.width;
    const height = svgRect.height + 200; // Extra space for color summary

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Create a temporary image for the SVG
    const img = new Image();
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      // Draw white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
      
      // Draw the SVG
      ctx.drawImage(img, 0, 0);

      // Draw color summary
      ctx.font = '16px Arial';
      ctx.fillStyle = '#1F2937';
      ctx.fillText('Color Selection:', 20, svgRect.height + 30);

      selectedPatternData.sections.forEach((section, index) => {
        const y = svgRect.height + 60 + (index * 30);
        
        // Draw color swatch
        ctx.fillStyle = sectionColors[section.id] || '#FFFFFF';
        ctx.fillRect(20, y - 15, 20, 20);
        ctx.strokeStyle = '#E5E7EB';
        ctx.strokeRect(20, y - 15, 20, 20);

        // Draw section name and color value
        ctx.fillStyle = '#1F2937';
        ctx.fillText(
          `${section.name}: ${sectionColors[section.id] || 'Not selected'}`,
          50,
          y
        );
      });

      // Convert to PNG and download
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `${pattern}-pattern.png`;
      downloadLink.href = pngUrl;
      downloadLink.click();

      // Cleanup
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <svg
          ref={svgRef}
          viewBox={selectedPatternData.viewBox}
          className="w-full h-auto max-w-3xl mx-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {selectedPatternData.sections.map((section) => (
            <path
              key={section.id}
              d={section.path}
              fill={sectionColors[section.id] || '#FFFFFF'}
              stroke={selectedSection === section.id ? '#4F46E5' : '#E5E7EB'}
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-200 hover:opacity-90"
              onClick={() => onSectionClick(section.id)}
            />
          ))}
        </svg>
      </div>

      <ColorSummary pattern={pattern} sectionColors={sectionColors} />

      <div className="flex justify-center">
        <button
          onClick={downloadPattern}
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-green-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="font-medium">Download Pattern</span>
        </button>
      </div>
    </div>
  );
}