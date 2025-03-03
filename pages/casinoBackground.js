import React from 'react';

const CasinoBackground = ({ connectWallet, colors = { button: '#5cbb5c' } }) => {
  return (
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" className="w-full">
        {/* Dark background with gradient */}
        <rect width="800" height="400" fill="#0a0e14"/>
        <rect width="800" height="400" fill="#000000"/>
        {/* <rect width="800" height="400" fill="url(#darkGradient)"/> */}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121a24" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#000000" stopOpacity="1"/>
          </linearGradient>
          <radialGradient id="lightGlow" cx="50%" cy="30%" r="50%" fx="50%" fy="30%">
            <stop offset="0%" stopColor="#614b2a" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#0a0e14" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* Ambient light glow */}
        <circle cx="400" cy="120" r="300" fill="url(#lightGlow)"/>
        
        {/* Poker table felt texture */}
        <ellipse cx="400" cy="280" rx="300" ry="100" fill="#fff" opacity="0.1"/>
        
        {/* Card suits symbols as subtle background elements */}
        <path d="M150,120 L170,150 L130,150 Z" fill="#d90429" fillOpacity="0.1"/>
        <path d="M650,120 L670,150 L630,150 Z" fill="#d90429" fillOpacity="0.1"/>
        <path d="M240,80 C240,60 220,60 220,80 C220,95 240,110 240,80 Z" fill="#d90429" fillOpacity="0.1"/>
        <path d="M560,80 C560,60 540,60 540,80 C540,95 560,110 560,80 Z" fill="#d90429" fillOpacity="0.1"/>
        <path d="M400,50 L415,80 L430,50 L415,20 Z" fill="#111111" fillOpacity="0.15"/>
        <path d="M300,130 C300,110 280,110 280,130 C280,145 300,160 300,130 Z" fill="#111111" fillOpacity="0.15"/>
        
        {/* Subtle light spots */}
        <circle cx="200" cy="70" r="20" fill="#614b2a" fillOpacity="0.1"/>
        <circle cx="600" cy="70" r="20" fill="#614b2a" fillOpacity="0.1"/>
        <circle cx="400" cy="40" r="30" fill="#614b2a" fillOpacity="0.1"/>
        
        {/* Chips on the table */}
        <circle cx="320" cy="250" r="15" fill="#f9423a" stroke="#111" strokeWidth="1"/>
        <circle cx="350" cy="240" r="15" fill="#ffffff" stroke="#111" strokeWidth="1"/>
        <circle cx="380" cy="260" r="15" fill="#1a1a1a" stroke="#111" strokeWidth="1"/>
        <circle cx="410" cy="245" r="15" fill="#2461b8" stroke="#111" strokeWidth="1"/>
        <circle cx="440" cy="255" r="15" fill="#f6c224" stroke="#111" strokeWidth="1"/>
        
        {/* Cards (face down) */}
        <rect x="365" y="210" width="30" height="40" rx="3" fill="#b12222" stroke="#000" strokeWidth="1"/>
        <rect x="375" y="210" width="30" height="40" rx="3" fill="#b12222" stroke="#000" strokeWidth="1"/>
        
        {/* Subtle smoke effect */}
        <path d="M300,100 Q330,80 310,50 Q340,70 330,40 Q350,70 380,60" fill="none" stroke="#aaa" strokeWidth="1" opacity="0.1"/>
        <path d="M500,100 Q470,80 490,50 Q460,70 470,40 Q450,70 420,60" fill="none" stroke="#aaa" strokeWidth="1" opacity="0.1"/>
        
        {/* Slot Machine - Reduced by 30% */}
        <rect x="130" y="120" width="98" height="126" rx="7" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="3"/>
        <rect x="137" y="127" width="84" height="63" rx="3.5" fill="#000" stroke="#444" strokeWidth="2"/>
        
        {/* Slot Reels - Reduced */}
        <rect x="144" y="134" width="21" height="49" rx="1.4" fill="#fff" stroke="#333" strokeWidth="1"/>
        <rect x="169" y="134" width="21" height="49" rx="1.4" fill="#fff" stroke="#333" strokeWidth="1"/>
        <rect x="194" y="134" width="21" height="49" rx="1.4" fill="#fff" stroke="#333" strokeWidth="1"/>
        
        {/* Slot Symbols - Adjusted */}
        <text x="147" y="161" fontFamily="Arial" fontSize="14" fill="#d4af37">7</text>
        <circle cx="180" cy="158.5" r="7" fill="#f90000"/>
        <text x="198" y="161" fontFamily="Arial" fontSize="14" fill="#d4af37">$</text>
        
        {/* Slot Machine Arm - Reduced */}
        <rect x="235" y="141" width="7" height="42" rx="3.5" fill="#d32f2f" stroke="#fff" strokeWidth="1"/>
        <circle cx="238.5" cy="137.5" r="7" fill="#f44336" stroke="#fff" strokeWidth="1"/>
        
        {/* Slot Machine Base with Coin Elements - Reduced */}
        <rect x="137" y="197" width="84" height="28" rx="1.4" fill="#3a3a3a" stroke="#4a4a4a" strokeWidth="2"/>
        <circle cx="158" cy="211" r="8.4" fill="#222" stroke="#d4af37" strokeWidth="2"/>
        <circle cx="200" cy="211" r="8.4" fill="#222" stroke="#d4af37" strokeWidth="2"/>
        
        {/* Winning Tray - Reduced */}
        <rect x="144" y="228.5" width="70" height="10.5" rx="3.5" fill="#222" stroke="#444" strokeWidth="1"/>
        
        {/* Lights Around Slot Machine - Reduced and Repositioned */}
        <circle cx="137" cy="127" r="3.5" fill="#ffeb3b" opacity="0.8"/>
        <circle cx="158" cy="127" r="3.5" fill="#ffeb3b" opacity="0.8"/>
        <circle cx="179" cy="127" r="3.5" fill="#f44336" opacity="0.8"/>
        <circle cx="200" cy="127" r="3.5" fill="#ffeb3b" opacity="0.8"/>
        <circle cx="221" cy="127" r="3.5" fill="#f44336" opacity="0.8"/>
        <circle cx="137" cy="204" r="3.5" fill="#f44336" opacity="0.8"/>
        <circle cx="221" cy="204" r="3.5" fill="#ffeb3b" opacity="0.8"/>
      </svg>
      
      {/* Interactive Button positioned absolutely over the SVG */}
      <div className="absolute left-[14%] top-[63%] flex justify-center pb-8 font-mono">
        <button 
          onClick={connectWallet}
          className="py-4 px-6 text-md rounded-2xl text-white border border-[#5cbb5c] border-opacity-40"
          style={{background: colors.button}}
        >
          Connet Wallet & Mint!!
        </button>
      </div>
    </div>
  );
};

export default CasinoBackground;