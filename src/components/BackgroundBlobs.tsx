import React from 'react';

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Crystal Milky Blue premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5ff] via-[#f1f8fe] to-[#e4f3ff] transition-colors duration-300" />
      
      {/* Technical Grid Overlay - Made more prominent and beautiful */}
      <div 
        className="absolute inset-0 opacity-[0.14]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2, 82, 165, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 82, 165, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* SVG Container for the Wave Flows and Constellation Nodes */}
      <svg className="absolute inset-0 w-full h-full min-h-screen" preserveAspectRatio="none">
        {/* Double flowing ocean wave lines - WebWave Flow (Highly Prominent/High Opacity layout) */}
        <g className="opacity-75">
          {/* Wave line 1 */}
          <path
            d="M -100 450 C 300 400, 600 500, 1000 430 C 1400 360, 1700 480, 2100 420"
            fill="none"
            stroke="url(#blueCyanGradient)"
            strokeWidth="2.5"
            className="animate-[pulse_4s_ease-in-out_infinite]"
          />
          {/* Wave line 2 (offset) */}
          <path
            d="M -100 470 C 320 420, 580 520, 1020 450 C 1380 380, 1720 500, 2100 440"
            fill="none"
            stroke="url(#cyanBlueGradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-[pulse_5s_ease-in-out_infinite]"
          />

          {/* Wave line 3 (lower height flow) */}
          <path
            d="M -100 580 C 400 620, 800 540, 1200 600 C 1600 660, 1800 580, 2100 610"
            fill="none"
            stroke="url(#blueCyanGradient)"
            strokeWidth="1.5"
          />
          {/* Wave line 4 */}
          <path
            d="M -100 595 C 420 635, 780 555, 1220 615 C 1580 675, 1820 595, 2100 625"
            fill="none"
            stroke="url(#cyanBlueGradient)"
            strokeWidth="3"
            strokeOpacity="0.7"
          />
        </g>

        {/* Dynamic decorative flow nodes along wave lines */}
        <g className="opacity-75 animate-pulse">
          <circle cx="280" cy="437" r="4.5" fill="#00b4d8" />
          <circle cx="620" cy="485" r="5" fill="#0252a5" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="620" cy="485" r="4" fill="#02254e" />
          <circle cx="1180" cy="595" r="4.5" fill="#00b4d8" />
          <circle cx="1550" cy="630" r="4.5" fill="#0252a5" />
        </g>

        {/* Gradients declarations */}
        <defs>
          <linearGradient id="blueCyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0252a5" />
            <stop offset="50%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#0252a5" />
          </linearGradient>
          <linearGradient id="cyanBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#0252a5" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* High-Fidelity Constellation Map Node Network in Top-Right */}
        <g className="opacity-70">
          {/* Main constellation connection lines */}
          <line x1="1200" y1="120" x2="1080" y2="210" stroke="#00b4d8" strokeWidth="1" />
          <line x1="1080" y1="210" x2="980" y2="150" stroke="#002855" strokeWidth="1" />
          <line x1="980" y1="150" x2="1010" y2="290" stroke="#00b4d8" strokeWidth="1.2" />
          <line x1="1010" y1="290" x2="1120" y2="280" stroke="#0252a5" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="1120" y1="280" x2="1200" y2="120" stroke="#00b4d8" strokeWidth="1.5" />
          <line x1="1120" y1="280" x2="1190" y2="340" stroke="#0252a5" strokeWidth="1" />
          <line x1="1190" y1="340" x2="1270" y2="260" stroke="#00b4d8" strokeWidth="1.2" />
          <line x1="1200" y1="120" x2="1270" y2="260" stroke="#002855" strokeWidth="1" />
          
          <line x1="980" y1="150" x2="880" y2="240" stroke="#00b4d8" strokeWidth="1" />
          <line x1="880" y1="240" x2="1010" y2="290" stroke="#0252a5" strokeWidth="1.2" />
          <line x1="880" y1="240" x2="930" y2="330" stroke="#00b4d8" strokeWidth="0.8" />
          <line x1="930" y1="330" x2="1010" y2="290" stroke="#002855" strokeWidth="1.5" />
          
          {/* Glow surrounds for nodes */}
          <circle cx="1080" cy="210" r="16" fill="url(#nodeGlow)" />
          <circle cx="1010" cy="290" r="22" fill="url(#nodeGlow)" />
          <circle cx="880" cy="240" r="18" fill="url(#nodeGlow)" />

          {/* Connected dots (constellation junctions) */}
          <circle cx="1200" cy="120" r="4.5" fill="#0252a5" />
          <circle cx="1080" cy="210" r="3.5" fill="#00b4d8" />
          <circle cx="980" cy="150" r="4" fill="#02254e" />
          <circle cx="1010" cy="290" r="5" fill="#0252a5" />
          <circle cx="1120" cy="280" r="3" fill="#00b4d8" />
          <circle cx="1190" cy="340" r="4.5" fill="#02254e" />
          <circle cx="1270" cy="260" r="3.5" fill="#00b4d8" />
          <circle cx="880" cy="240" r="5" fill="#00b4d8" />
          <circle cx="930" cy="330" r="4" fill="#0252a5" />
        </g>
      </svg>
    </div>
  );
}
