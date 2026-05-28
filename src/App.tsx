import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Job, ActiveTab } from './types';
import { JOBS_DATA } from './data';
import BackgroundBlobs from './components/BackgroundBlobs';
import Header from './components/Header';
import JobCard from './components/JobCard';
import JobDetail from './components/JobDetail';
import CommunityView from './components/CommunityView';
import InteractiveFlyer from './components/InteractiveFlyer';
import { PhoneCall, ArrowRight, ShieldCheck, Heart, Sparkles, AlertCircle, Share2, Sun, Moon, Laptop, Palette, Microscope, Briefcase } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('landing');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  // Auto-scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedJob]);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setActiveTab('jobs');
  };

  const handleExploreClick = () => {
    setActiveTab('jobs');
    setSelectedJob(null);
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const PILLAR_CARDS = [
    {
      id: 'digital',
      title: 'DIGITAL SKILLS',
      desc: 'Master in-demand tech skills and stay ahead in the digital world.',
      icon: <Laptop className="w-5.5 h-5.5 text-white" />,
      targetJobId: 'marketing',
    },
    {
      id: 'creative',
      title: 'CREATIVE ARTS',
      desc: 'Unleash your creativity and turn your artistic talent into impactful creations.',
      icon: <Palette className="w-5.5 h-5.5 text-white" />,
      targetJobId: 'architect',
    },
    {
      id: 'labs',
      title: 'LAB DIVISIONS',
      desc: 'Explore, experiment, and excel in modern lab environments with total confidence.',
      icon: <Microscope className="w-5.5 h-5.5 text-white" />,
      targetJobId: 'internship-lab',
    },
    {
      id: 'jobs',
      title: 'PART TIME JOBS',
      desc: 'Earn while you learn with flexible opportunities tailored for you.',
      icon: <Briefcase className="w-5.5 h-5.5 text-white" />,
      targetJobId: 'offline-jobs',
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'theme-light' : 'theme-dark'} text-theme-primary bg-color-bg font-sans relative pb-20 transition-all duration-300`}>
      {/* Immersive glowing background blobs */}
      <BackgroundBlobs />

      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto pt-4">
        {/* Render header if not on landing or as a fixed topper */}
        {activeTab !== 'landing' && (
          <Header
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setActiveTab(tab);
              if (tab !== 'jobs') setSelectedJob(null);
            }}
            onExploreClick={handleExploreClick}
            theme={theme}
            setTheme={setTheme}
          />
        )}

        <AnimatePresence mode="wait">
          {/* LANDING PAGE tab */}
          {activeTab === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="min-h-[85vh] flex flex-col items-center justify-center py-6 md:py-12 space-y-12 max-w-6xl mx-auto"
            >
              {/* Split Hero layout from the flyer image */}
              <div id="landing-hero" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
                
                {/* Left Side: Dynamic badges, big typography and custom actions */}
                <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
                  
                  {/* Pill badge matched precisely to the flyer left margin */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-theme-glass-border bg-[#0252a5]/5 text-[#0252a5] dark:text-cyan-300 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest leading-none">
                      ✦ SKILL PLATFORM 2025
                    </span>
                  </div>

                  {/* Mega Typography Headings stack matching the flyer's layout */}
                  <div className="space-y-3 w-full">
                    <div className="relative inline-block">
                      <h1 className="text-4xl sm:text-[3.65rem] font-black tracking-tight text-[#08cffa] border-white uppercase leading-[1.05] font-display">
                        CUSTOMISE
                        <span className="block mt-1">YOUR SKILLS,</span>
                      </h1>
                      {/* Cyan Accent line underneath the top heading row */}
                      <div className="h-[4.5px] w-40 bg-[#00b4d8] mt-2.5 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
                    </div>

                    <h2 className="text-4xl sm:text-[3.5rem] font-black tracking-tight uppercase leading-[1.05] font-display">
                      <span className="text-[#085a5a] font-extrabold">BUILD YOUR</span>{' '}
                      <span className="text-[#08cffa] block sm:inline font-black">CAREER,</span>
                    </h2>

                    <h3 className="text-4xl sm:text-[3.5rem] font-black tracking-tight uppercase leading-[1.05] font-display">
                      <span className="text-[#08cffa] font-extrabold">OWN YOUR</span>{' '}
                      <span className="text-[#08cffa] block sm:inline font-black">DESTINY.</span>
                    </h3>
                  </div>

                  {/* Core tagline/subtext */}
                  <p className="text-xs sm:text-sm text-[#084e4e] font-light max-w-xl leading-relaxed select-none">
                    Discover part-time jobs, lab fellowships, and skill-shops that match your student schedule — connect instantly via WhatsApp groups.
                  </p>

                  {/* High fidelity interactive actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleExploreClick}
                      className="px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#0252a5] to-[#00b4d8] text-white hover:opacity-95 transition-all duration-300 shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 cursor-pointer border-none"
                    >
                      <span>Explore Opportunity Deck</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab('community');
                        setSelectedJob(null);
                      }}
                      className="px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/60 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 text-[#22dce5] border border-theme-glass-border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Join Community Hub</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: High-fidelity interactive logo constellation node system from the flyer */}
                <div className="lg:col-span-5 relative flex items-center justify-center py-8">
                  <div className="relative w-full max-w-[360px] h-[340px] flex items-center justify-center bg-transparent">
                    {/* Backing Node Connectors graph */}
                    <div className="absolute inset-0 select-none">
                      <svg className="w-full h-full absolute inset-0 text-cyan-400 opacity-70 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                        <line x1="80" y1="80" x2="180" y2="130" stroke="#00b4d8" strokeWidth="1" strokeDasharray="3 3"/>
                        <line x1="180" y1="130" x2="280" y2="70" stroke="#0252a5" strokeWidth="1.5" />
                        <line x1="180" y1="130" x2="240" y2="240" stroke="#00b4d8" strokeWidth="1.2" />
                        <line x1="240" y1="240" x2="110" y2="210" stroke="#02254e" strokeWidth="1" />
                        <line x1="110" y1="210" x2="80" y2="80" stroke="#00b4d8" strokeWidth="1.5" />
                        <line x1="180" y1="130" x2="110" y2="210" stroke="#0252a5" strokeWidth="1" />
                        <line x1="280" y1="70" x2="320" y2="160" stroke="#00b4d8" strokeWidth="1" />
                        <line x1="240" y1="240" x2="320" y2="160" stroke="#0252a5" strokeWidth="1.2" />
                        
                        {/* Joints */}
                        <circle cx="80" cy="80" r="4.5" fill="#00b4d8" className="animate-pulse" />
                        <circle cx="280" cy="70" r="5" fill="#0252a5" />
                        <circle cx="110" cy="210" r="4" fill="#02254e" />
                        <circle cx="240" cy="240" r="5" fill="#00b4d8" />
                        <circle cx="320" cy="160" r="4" fill="#0252a5" />
                        
                        {/* Interactive Halos */}
                        <circle cx="180" cy="130" r="64" fill="none" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '30s' }} />
                        <circle cx="180" cy="130" r="82" fill="none" stroke="#0252a5" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 6" className="animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
                        <circle cx="180" cy="130" r="40" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeOpacity="0.5" className="animate-ping" style={{ animationDuration: '3s' }} />
                      </svg>
                    </div>

                    {/* Concentric brand signature badge */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-2 bg-white/70 dark:bg-[#0a0a14]/75 p-6 rounded-3xl backdrop-blur-md border border-[#0252a5]/10 shadow-xl shadow-blue-900/5 transition-transform duration-300 hover:scale-[1.03] select-none">
                      {/* W Emblem inside deep blue circle */}
                      <div className="w-16 h-16 rounded-full bg-[#004094] flex items-center justify-center shadow-lg shadow-[#004094]/30">
                        <span className="text-white text-3xl font-black font-display tracking-tight select-none">
                          W
                        </span>
                      </div>

                      {/* Stack brand elements */}
                      <div className="space-y-0.5">
                        <h2 className="text-2xl font-black tracking-tight text-[#02254e] dark:text-white leading-none font-display">
                          webwave
                        </h2>
                        <p className="text-[10px] text-[#00b4d8] uppercase font-extrabold tracking-widest leading-none pt-1">
                          capture the flow of opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Central horizontal row of 4 visual/touch pillar cards matching raw flyer content */}
              <div id="landing-pillars" className="w-full pt-6 space-y-4">
                <div className="text-center md:text-left">
                  <h3 className="text-xs font-black tracking-widest text-[#0252a5] dark:text-[#a78bfa] uppercase">
                    Central Career Pillars
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {PILLAR_CARDS.map((pillar) => (
                    <motion.div
                      key={pillar.id}
                      onClick={() => {
                        const targetJob = JOBS_DATA.find((j) => j.id === pillar.targetJobId);
                        if (targetJob) {
                          setSelectedJob(targetJob);
                          setActiveTab('jobs');
                        } else {
                          setActiveTab('jobs');
                        }
                      }}
                      className="glass-panel p-6 rounded-2xl border border-theme-glass-border bg-white/60 dark:bg-white/5 hover:bg-white/95 dark:hover:bg-white/10 shadow-lg hover:shadow-xl hover:shadow-[#0252a5]/10 dark:hover:shadow-black/40 flex flex-col items-center text-center space-y-4 group cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Deep blue circular button containing icon */}
                      <div className="w-12 h-12 rounded-full bg-[#0252a5] group-hover:bg-[#003d7a] transition-colors duration-300 flex items-center justify-center shadow-md shadow-[#0252a5]/20 shrink-0">
                        {pillar.icon}
                      </div>

                      <div className="space-y-1 flex-1">
                        <h4 className="text-[12px] font-black tracking-wider text-[#02254e] dark:text-white uppercase">
                          {pillar.title}
                        </h4>
                        <p className="text-[11px] text-[#1e3a60] dark:text-theme-secondary font-light leading-relaxed select-none">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom horizontal gradient ribbon matching footer banner from flyer */}
              <div className="w-full rounded-2xl overflow-hidden p-6 md:p-8 bg-gradient-to-r from-[#0252a5] to-[#00b4d8] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/10 transition-transform duration-300 hover:scale-[1.005] select-none">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  
                  {/* Styled overlapping mountains/geometric vector image exactly like the flyer */}
                  <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center select-none shrink-0 border border-white/10 shadow-inner">
                    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 38L22 17L34 38H10Z" fill="#10B981" /> {/* Mountain heap 1 */}
                      <path d="M20 38L27 25L38 38H20Z" fill="#F59E0B" fillOpacity="0.85" /> {/* Mountain heap 2 */}
                      <circle cx="22" cy="14" r="3" fill="#FFFFFF" className="animate-pulse" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm md:text-base font-black tracking-widest uppercase flex items-center justify-center sm:justify-start gap-1">
                      LEARN TODAY, LEAD TOMORROW <span className="text-sky-200 ml-1">&rarr;</span>
                    </h4>
                    <p className="text-[11px] text-sky-100 font-normal tracking-wide mt-1">
                      Your future starts here. Join 700+ active student freelancers.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleExploreClick}
                  className="px-6 py-3 rounded-full bg-[#02254e] hover:bg-[#001c3e] text-white text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none shadow-lg hover:shadow-black/20"
                >
                  <span>Get Started &rarr;</span>
                </button>
              </div>

            </motion.div>
          )}

          {/* OPPORTUNITIES (Jobs Guide List / Details Tab) */}
          {activeTab === 'jobs' && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {selectedJob ? (
                <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />
              ) : (
                <div className="space-y-6">
                  {/* Category Title description strip */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-1">
                      <h2 className="text-2xl md:text-3xl font-black tracking-wide text-theme-heading">
                        AVAILABLE OPPORTUNITIES
                      </h2>
                      <p className="text-xs text-theme-secondary font-light">
                        Select a target folder to explore planned curriculums and scan specific WhatsApp join credentials.
                      </p>
                    </div>
                    {/* Share action */}
                    <button
                      onClick={handleShareClick}
                      className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 hover:bg-white/10 text-theme-primary hover:text-theme-heading border border-theme-glass-border flex items-center gap-2 self-start md:self-auto cursor-pointer"
                    >
                      <Share2 className="w-4 h-4 text-purple-400" />
                      <span>{copiedLink ? 'Link Copied!' : 'Share WebWave'}</span>
                    </button>
                  </div>

                  {/* Grid deck */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                    {JOBS_DATA.map((job) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        onClick={() => handleJobClick(job)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* COMMUNITY CHATS TAB */}
          {activeTab === 'community' && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <CommunityView />
            </motion.div>
          )}

          {/* ROADMAP / INTERACTIVE FLYER TAB */}
          {activeTab === 'flyer' && (
            <motion.div
              key="flyer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <InteractiveFlyer />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info blocks */}
        <footer className="mt-20 border-t border-theme-glass-border pt-8 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-[10px] text-theme-secondary uppercase tracking-widest font-extrabold select-none">
            <span>WEBWAVE</span>
            <span>&copy;</span>
            <span>2026</span>
          </div>
          <div className="flex justify-center items-center gap-1.5 text-xs text-theme-secondary font-light select-none">
            <span>Lovingly designed for your career future</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </div>
        </footer>
      </div>
    </div>
  );
}
