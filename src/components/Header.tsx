import React from 'react';
import { ActiveTab } from '../types';
import { Compass, Users, Sparkles, Home, PhoneCall, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onExploreClick: () => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export default function Header({ activeTab, setActiveTab, onExploreClick, theme, setTheme }: HeaderProps) {
  return (
    <header className="glass-panel rounded-3xl p-4 md:p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 z-11 sticky top-4 backdrop-blur-xl">
      {/* Brand logo details matched to the flyer */}
      <button 
        onClick={() => setActiveTab('landing')} 
        className="flex items-center gap-3 group text-left cursor-pointer bg-transparent border-none"
      >
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#004094] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#004094]/15">
          <span className="font-extrabold text-[#ffffff] text-[18px] font-display">
            W
          </span>
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight text-[#24c1df] font-display lowercase select-none">
            webwave
          </h1>
          <span className="text-[9px] text-[#00b4d8] font-extrabold uppercase tracking-widest block leading-none pt-0.5 select-none">
            flow of opportunities
          </span>
         </div>
      </button>

      {/* Navigation tabs */}
      <nav className="flex flex-wrap justify-center items-center gap-2 bg-white/5 border border-white/5 p-1.5 rounded-2xl w-full md:w-auto">
        <button
          onClick={() => setActiveTab('landing')}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
            activeTab === 'landing'
              ? 'bg-v text-white shadow-md shadow-purple-900/40'
              : 'text-theme-secondary hover:text-white hover:bg-white/5'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Portal</span>
        </button>

        <button
          onClick={() => setActiveTab('jobs')}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
            activeTab === 'jobs'
              ? 'bg-pk text-white shadow-md shadow-pink-900/40'
              : 'text-theme-secondary hover:text-white hover:bg-white/5'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Jobs</span>
        </button>

        <button
          onClick={() => setActiveTab('community')}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
            activeTab === 'community'
              ? 'bg-c text-white shadow-md shadow-cyan-900/40'
              : 'text-theme-secondary hover:text-white hover:bg-white/5'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Community</span>
        </button>

        <button
          onClick={() => setActiveTab('flyer')}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
            activeTab === 'flyer'
              ? 'bg-vl text-slate-950 shadow-md shadow-purple-900/25'
              : 'text-theme-secondary hover:text-white hover:bg-white/5'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Roadmap</span>
        </button>
      </nav>

      <div className="flex items-center flex-col sm:flex-row gap-3 w-full md:w-auto">
        {/* WhatsApp Quick Join CTA */}
        <a
          href="https://chat.whatsapp.com/CEnAvjp16KJ5YhRkamxQ8Z"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider rounded-xl border border-[#0252a5]/20 bg-[#0252a5]/5 text-[#0252a5] hover:bg-[#0252a5] hover:text-white transition-all duration-300 w-full sm:w-auto"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>WhatsApp Sync</span>
        </a>
      </div>
    </header>
  );
}
