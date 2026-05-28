import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Job } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, Bookmark, Flame, ExternalLink, ShieldCheck, Check, Info, Store, Building, Coffee } from 'lucide-react';

interface JobDetailProps {
  job: Job;
  onBack: () => void;
}

export default function JobDetail({ job, onBack }: JobDetailProps) {
  // Local state to track which offline job is selected/asked
  const [selectedSubJob, setSelectedSubJob] = useState<'dmart' | 'jeyaraj' | 'bombay' | null>(null);

  // Sub-jobs details configuration
  const SUB_JOBS = {
    dmart: {
      name: 'D-mart',
      title: 'Store Operations & Inventory Assistant',
      pay: '₹180 / Hour',
      timing: 'Flexible Morning (8 AM - 12 PM) or Evening (4 PM - 8 PM)',
      tasks: [
        'Organize stock shelves and restore proper layout standards.',
        'Assist shoppers at the electronic billing counters during rush hours.',
        'Track daily inventory arrivals and update inventory charts.'
      ],
      icon: <Store className="w-5 h-5 text-sky-400" />,
      colorClass: 'border-sky-500/30 bg-sky-500/5 hover:bg-sky-500/10'
    },
    jeyaraj: {
      name: 'Jeyaraj & co',
      title: 'Data entry & Office Document Handler',
      pay: '₹200 / Hour',
      timing: 'Fixed Afternoon shift (11 AM - 3 PM)',
      tasks: [
        'Record billing ledger listings into client database files.',
        'Sort documentation, verify invoices, and compile audit folders.',
        'Receive and forward calls with client departments politely.'
      ],
      icon: <Building className="w-5 h-5 text-emerald-400" />,
      colorClass: 'border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10'
    },
    bombay: {
      name: 'Bombay sweets',
      title: 'Billing Terminal Specialist & Packaging Hand',
      pay: '₹190 / Hour',
      timing: 'Flexible Evening shifts (2 PM - 6 PM or 6 PM - 10 PM)',
      tasks: [
        'Oversee sweet packaging, labeling, and shelf-display setup.',
        'Process payments at billing terminals with speedy customer support.',
        'Maintain pristine hygiene logs in the counter distribution areas.'
      ],
      icon: <Coffee className="w-5 h-5 text-amber-500" />,
      colorClass: 'border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10'
    }
  };

  const getTagStyles = (type: string) => {
    switch (type) {
      case 'tech':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20';
      case 'art':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20';
      case 'internship':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'guidance':
        return 'bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/20';
      default:
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20';
    }
  };

  const isOfflineJobs = job.id === 'offline-jobs';

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="back-btn flex items-center gap-2.5 px-5 py-3 rounded-full border border-theme-glass-border bg-theme-glass hover:bg-white/10 text-theme-primary hover:text-theme-heading text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-300"
        whileHover={{ scale: 1.02, x: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to active jobs</span>
      </motion.button>

      {/* Main detail container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: General Info or Interactive Sub-Job Ask Questionnaire */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-theme-card border-theme-glass-border space-y-6">
            
            <div className="space-y-3">
              <span className={`inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${getTagStyles(job.tagColorClass)}`}>
                {job.tag}
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-extrabold tracking-tight text-theme-heading">
                {job.title}
              </h2>
              <p className="text-sky-500 dark:text-[#00b4d8] text-xs sm:text-sm font-semibold tracking-wider uppercase font-display bg-[#0252a5]/5 px-3 py-1.5 rounded-xl border border-[#0252a5]/10 inline-block">
                {job.slogan}
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-theme-glass-border">
              <h3 className="text-xs font-black text-theme-heading uppercase tracking-widest flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-sky-400" /> 
                <span>Overview & Guidelines</span>
              </h3>
              <p className="text-[14px] text-[#0b0a14] font-light leading-relaxed">
                {job.desc}
              </p>
            </div>

            {/* Custom interactive "Ask" selector for Part Time Job Course */}
            {isOfflineJobs && (
              <div className="space-y-6 pt-6 border-t border-theme-glass-border">
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-[#00b4d8] uppercase tracking-widest flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#00b4d8]" />
                    <span>Select an Offline establishment below:</span>
                  </h4>
                  <p className="text-[13px] text-[#0c0c14] font-light">
                    Click any enterprise to review exclusive shifts, hourly payouts, and launch the WhatsApp join community protocol.
                  </p>
                </div>

                {/* 3 selectable job cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* D-mart Button */}
                  <button
                    onClick={() => setSelectedSubJob('dmart')}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all duration-300 w-full cursor-pointer relative overflow-hidden group ${
                      selectedSubJob === 'dmart' 
                      ? 'border-[#00b4d8] bg-[#00b4d8]/10 shadow-lg ring-1 ring-[#00b4d8]/50' 
                      : 'border-theme-glass-border bg-white/50 dark:bg-white/5 hover:border-sky-500/40 hover:bg-sky-500/5'
                    }`}
                  >
                    {selectedSubJob === 'dmart' && (
                      <div className="absolute top-2 right-2 bg-[#00b4d8] text-white rounded-full p-0.5 shadow-sm">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                    <div className="p-2 bg-sky-500/10 rounded-xl w-fit">
                      <Store className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <h5 style={{ color: '#2fe8b0' }} className="text-[11px] font-extrabold uppercase tracking-widest leading-none">
                        1. D-mart
                      </h5>
                      <p className="text-[11px] text-theme-secondary mt-1 tracking-wide leading-[15.25px]">
                        Retail & Inventory Coordinator
                      </p>
                    </div>
                  </button>

                  {/* Jeyaraj & co Button */}
                  <button
                    onClick={() => setSelectedSubJob('jeyaraj')}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all duration-300 w-full cursor-pointer relative overflow-hidden group ${
                      selectedSubJob === 'jeyaraj' 
                      ? 'border-[#00b4d8] bg-[#00b4d8]/10 shadow-lg ring-1 ring-[#00b4d8]/50' 
                      : 'border-theme-glass-border bg-white/50 dark:bg-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5'
                    }`}
                  >
                    {selectedSubJob === 'jeyaraj' && (
                      <div className="absolute top-2 right-2 bg-[#00b4d8] text-white rounded-full p-0.5 shadow-sm">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                    <div className="p-2 bg-emerald-500/10 rounded-xl w-fit">
                      <Building className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h5 style={{ color: '#27c779' }} className="text-[11px] font-extrabold uppercase tracking-widest leading-none">
                        2. Jeyaraj & co
                      </h5>
                      <p className="text-[11px] text-theme-secondary mt-1 tracking-wide leading-[15.75px]">
                        Data Entry & Office Helper
                      </p>
                    </div>
                  </button>

                  {/* Bombay sweets Button */}
                  <button
                    onClick={() => setSelectedSubJob('bombay')}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all duration-300 w-full cursor-pointer relative overflow-hidden group ${
                      selectedSubJob === 'bombay' 
                      ? 'border-[#00b4d8] bg-[#00b4d8]/10 shadow-lg ring-1 ring-[#00b4d8]/50' 
                      : 'border-theme-glass-border bg-white/50 dark:bg-white/5 hover:border-amber-500/40 hover:bg-[#d97706]/5'
                    }`}
                  >
                    {selectedSubJob === 'bombay' && (
                      <div className="absolute top-2 right-2 bg-[#00b4d8] text-white rounded-full p-0.5 shadow-sm">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                    <div className="p-2 bg-amber-500/10 rounded-xl w-fit">
                      <Coffee className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h5 style={{ color: '#26cf85' }} className="text-[11px] font-extrabold uppercase tracking-widest leading-none">
                        3. Bombay sweets
                      </h5>
                      <p className="text-[11px] text-theme-secondary mt-1 tracking-wide leading-[15.25px]">
                        Billing & packaging operator
                      </p>
                    </div>
                  </button>
                </div>

                {/* Sub-job details showcard */}
                <AnimatePresence mode="wait">
                  {selectedSubJob ? (
                    <motion.div
                      key={selectedSubJob}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 rounded-2xl border border-sky-500/20 bg-sky-500/5 space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div>
                          <span className="text-[9px] font-black tracking-widest text-[#00b4d8] uppercase">
                            Selected Enterprise Details
                          </span>
                          <h4 style={{ color: '#5aefef' }} className="text-base font-black uppercase mt-0.5">
                            {SUB_JOBS[selectedSubJob].name} &mdash; {SUB_JOBS[selectedSubJob].title}
                          </h4>
                        </div>
                        <div className="px-3 py-1 bg-[#00b4d8] text-white text-[11px] font-black uppercase tracking-wider rounded-lg w-fit">
                          {SUB_JOBS[selectedSubJob].pay}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-theme-secondary uppercase tracking-wider">
                          Shift Parameters
                        </span>
                        <p className="text-xs text-[#084e4e] dark:text-sky-200">
                          {SUB_JOBS[selectedSubJob].timing}
                        </p>
                      </div>

                      <div className="space-y-2 border-t border-theme-glass-border pt-3">
                        <span className="text-[10px] font-bold text-theme-secondary uppercase tracking-wider block">
                          Primary Tasks and Responsibilities
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {SUB_JOBS[selectedSubJob].tasks.map((task, index) => (
                            <div key={index} className="flex gap-2.5 items-start text-xs font-light text-theme-primary leading-normal">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="p-6 rounded-2xl border border-dashed border-theme-glass-border text-center text-theme-secondary py-10">
                      <p className="text-xs font-medium">
                        👈 Please select one of the three options matching your screenshot to load the custom workspace profile.
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Default objectives and guidelines (only show for standard courses or as sub-info) */}
            {!isOfflineJobs && (
              <div className="space-y-4 pt-4 border-t border-theme-glass-border">
                <h4 className="text-xs font-bold text-theme-secondary uppercase tracking-widest">
                  Key Course Objectives
                </h4>
                <div className="space-y-3">
                  {job.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-theme-primary leading-normal font-light">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Badges and tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {job.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-xl bg-sky-500/10 text-sky-600 dark:text-cyan-300 border border-[#0252a5]/10"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span className={index === 0 ? 'text-[#6ddcee]' : ''}>{highlight}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: High-Fidelity WhatsApp Group Invite Simulator OR Standard Detail Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {isOfflineJobs ? (
            /* Authentic WhatsApp Community Invite Box (only for "part time job availability offline") */
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#121b22] text-[#e9edef] border border-[#2f3b43] p-6 sm:p-8 space-y-8 select-none">
              
              {/* Header info */}
              <div className="flex flex-col items-center text-center space-y-4">
                
                {/* Purple Circle Avatar precisely matching Screenshot 2 */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-[#823a9d] flex items-center justify-center border border-purple-500/20 shadow-lg text-center p-3 select-none">
                    <span className="text-white text-[10px] font-extrabold uppercase tracking-tight leading-tight select-none">
                      PART TIME JOBS AVAILABILITY OFFLINE 💸
                    </span>
                  </div>
                  
                  {/* Embedded verified tiny stamp */}
                  <div className="absolute bottom-0 right-1 bg-[#00a884] text-[#121b22] rounded-full p-1.5 shadow-md">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                    Part time job availability offline
                  </h3>
                  <p className="text-xs text-[#8696a0] font-normal">
                    Group in "Web Wave"
                  </p>
                </div>

                {/* Group Mini Members Stack */}
                <div className="flex items-center justify-center gap-1">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <img
                      className="inline-block h-6.5 w-6.5 rounded-full ring-2 ring-[#121b22] object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Member 1"
                    />
                    <img
                      className="inline-block h-6.5 w-6.5 rounded-full ring-2 ring-[#121b22] object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Member 2"
                    />
                    <img
                      className="inline-block h-6.5 w-6.5 rounded-full ring-2 ring-[#121b22] object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                      alt="Member 3"
                    />
                  </div>
                  <span className="text-xs text-[#8696a0] font-medium ml-1 bg-[#202c33] px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
                    +9 active members
                  </span>
                </div>
              </div>

              {/* Invitation Description box from Screenshot */}
              <div className="bg-[#202c33] p-4.5 rounded-2xl border border-[#2f3b43] space-y-3 font-mono text-[11px] sm:text-xs text-[#d1d7db] leading-relaxed">
                <p className="font-extrabold text-[#00a884] uppercase tracking-wide">
                  Group Description payload:
                </p>
                <div>
                  <p>Jobs are available in offline.</p>
                  <p>Jobs at</p>
                  <p className={`pl-2 font-bold ${selectedSubJob === 'dmart' ? 'text-[#00a884] bg-[#00a884]/5 py-0.5 rounded border-l-2 border-[#00a884]' : ''}`}>
                    1.D-mart {selectedSubJob === 'dmart' && '🌟 (Selected Target)'}
                  </p>
                  <p className={`pl-2 font-bold ${selectedSubJob === 'jeyaraj' ? 'text-[#00a884] bg-[#00a884]/5 py-0.5 rounded border-l-2 border-[#00a884]' : ''}`}>
                    2.Jeyaraj & co {selectedSubJob === 'jeyaraj' && '🌟 (Selected Target)'}
                  </p>
                  <p className={`pl-2 font-bold ${selectedSubJob === 'bombay' ? 'text-[#00a884] bg-[#00a884]/5 py-0.5 rounded border-l-2 border-[#00a884]' : ''}`}>
                    3.Bombay sweets {selectedSubJob === 'bombay' && '🌟 (Selected Target)'}
                  </p>
                </div>
              </div>

              {/* Notice label */}
              <p className="text-[10px] text-[#8696a0] font-light leading-normal text-center select-none italic">
                "You will be added to the community &quot;Web Wave&quot; and its announcement group. Your profile will be visible to community admins."
              </p>

              {/* Interactive Apply buttons matching footer invite */}
              <div className="space-y-3 pt-4 border-t border-[#2f3b43]">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-[#00a884] hover:bg-[#00bf96] active:scale-98 text-[#121b22] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-[#00a884]/10 group cursor-pointer border-none"
                >
                  <span>Join community &amp; Apply</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#121b22]" />
                </a>

                <button
                  onClick={onBack}
                  className="w-full py-3 px-5 rounded-full bg-transparent border border-[#2f3b43] hover:border-[#8696a0] hover:bg-white/[0.02] text-[#8696a0] hover:text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            /* Elegant theme-appropriate standard flyer information & actions (NO simulated WhatsApp screen) */
            <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-theme-card border-theme-glass-border space-y-6">
              <div className="space-y-4">
                <div className="h-44 w-full rounded-2xl overflow-hidden relative border border-[#0252a5]/10">
                  <img
                    src={job.img}
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021f42]/80 to-transparent flex items-end p-4">
                    <span className="text-[11px] font-black text-white bg-[#0252a5]/90 uppercase tracking-widest px-3 py-1 rounded-lg">
                      {job.tag}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-theme-heading uppercase tracking-widest leading-none flex items-center gap-1.5 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Official Verified Gateway</span>
                  </h4>
                  <p className="text-[11.5px] text-[#084e4e] font-light leading-relaxed">
                    This official peer connection channel is verified by the <b>Web Wave</b> community administrators. Connect instantly to secure access to educational clinics, career counseling, and priority updates.
                  </p>
                </div>
              </div>

              {/* Action standard panel */}
              <div className="space-y-3 pt-4 border-t border-theme-glass-border">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#0252a5] hover:bg-[#023a75] active:scale-98 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-[#0252a5]/10 group cursor-pointer border-none"
                >
                  <span>Connect and Join Group</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>

                <button
                  onClick={onBack}
                  className="w-full py-3 px-5 rounded-xl bg-transparent border border-theme-glass-border hover:bg-white/5 text-theme-secondary hover:text-theme-heading font-bold text-xs uppercase tracking-widest flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}

          {/* Standard QR fallback locator (just in case they need to scan from a different phone) */}
          <div className="glass-panel p-6 rounded-2xl border border-theme-glass-border bg-theme-glass text-center space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-theme-heading">
              Quick Scan Entry QR
            </h4>
            <div className="p-3 bg-white rounded-xl inline-block shadow-inner">
              <QRCodeSVG
                value={job.link}
                size={110}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
                includeMargin={false}
              />
            </div>
            <p className="text-[9px] text-theme-secondary uppercase tracking-widest leading-none pt-1">
              {job.label}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
