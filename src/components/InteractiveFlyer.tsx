import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Palette, Beaker, Briefcase, ChevronRight, Award, Flame, Star, Sparkles, CheckCircle2 } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  accentColor: string;
  description: string;
  learningTrack: string[];
  duration: string;
  avgWage: string;
}

export default function InteractiveFlyer() {
  const [selectedPillar, setSelectedPillar] = useState<string | null>('digital');

  const pillars: Pillar[] = [
    {
      id: 'digital',
      title: 'DIGITAL SKILLS',
      subtitle: 'Master in-demand tech skills and stay ahead in the digital world.',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30 text-cyan-400',
      accentColor: 'text-cyan-400',
      description: 'WebWave helps you master SEO, quantitative social media metrics, web-flow development, and automated content frameworks. Accelerate your modern design and code confidence under certified mentors.',
      learningTrack: [
        'Introduction to Modern Brand Copywriting',
        'Advanced Meta Ads & Pixel Configuration',
        'Google Analytics 4 & Conversion Optimization',
        'Freelancing Blueprint: Navigating Global Contracts'
      ],
      duration: '4 Weeks Intensive Masterclass',
      avgWage: '₹12,000 - ₹25,000 / month (Part-time)'
    },
    {
      id: 'arts',
      title: 'CREATIVE ARTS',
      subtitle: 'Unleash your creativity and turn your ideas into impactful creations.',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-purple-500/20 to-pink-600/10 border-purple-500/30 text-purple-400',
      accentColor: 'text-purple-400',
      description: 'Our Creative Arts track, featuring premium Henna/Mehndi Art collectives and digital illustration workshops, translates deep passion into major festive and commercial workflows.',
      learningTrack: [
        'Symmetry & Foundations of Bridal Henna Art',
        'Seasonal Event Orchestration & Client Pitching',
        'Traditional vs Indo-Arabic Fusion Layouts',
        'Marketing Your Portfolio online via Reels & TikTok'
      ],
      duration: '6 Weeks Expert Program',
      avgWage: '₹15,000 - ₹35,000 / month (Independent)'
    },
    {
      id: 'lab',
      title: 'LAB DIVISIONS',
      subtitle: 'Explore, experiment and excel in modern lab environments with confidence.',
      icon: <Beaker className="w-6 h-6" />,
      color: 'from-teal-500/20 to-emerald-600/10 border-teal-500/30 text-teal-400',
      accentColor: 'text-teal-400',
      description: 'Dive deep into certified bio-chemical and pharmaceutical experimental paradigms. Learn maintenance protocols, data recording, and validation practices matching global scientific mandates.',
      learningTrack: [
        'Bio-Safety Guidelines & Sterile Protocols',
        'Precision Measurement & Reagent Standardization',
        'Clinical Data Compilation and Lab Notebook Audits',
        'Filing Validated Industrial Research Certifications'
      ],
      duration: '8 Weeks Supervised Fellowship',
      avgWage: '₹8,000 - ₹18,000 Stipend + Certificate'
    },
    {
      id: 'jobs',
      title: 'PART TIME JOBS',
      subtitle: 'Earn while you learn with flexible part-time job opportunities tailored for you.',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-pink-500/20 to-rose-600/10 border-pink-500/30 text-pink-400',
      accentColor: 'text-pink-400',
      description: 'Discover regional offline, event, and academic support opportunities optimized to run beautifully alongside heavy college semester requirements.',
      learningTrack: [
        'Identifying Safe Local Job Ecosystems',
        'Aptitude & Standard Professional Communication',
        'Balancing Class Timetables & Daily Deliverables',
        'Financial Literacy: Invoicing & Direct Bank Transfers'
      ],
      duration: 'Immediate Onboarding (Continuous)',
      avgWage: 'Flexible hourly / weekly payouts'
    }
  ];

  return (
    <div id="interactive-flyer" className="max-w-6xl mx-auto">
      {/* Slogan Hero Section */}
      <div className="text-center mb-10">
        <span className="px-3 py-1 text-xs font-semibold tracking-widest text-vl uppercase bg-v/10 border border-v/20 rounded-full inline-block mb-3 animate-pulse">
          Interactive Career Builder
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-theme-heading via-slate-400 to-slate-500 bg-clip-text text-transparent uppercase drop-shadow-sm">
          Customise Your Skills
        </h1>
        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-v to-c bg-clip-text text-transparent uppercase mt-1">
          Build Your Career, Own Your Destiny
        </h2>
        <p className="text-sm md:text-base text-theme-secondary max-w-2xl mx-auto mt-3">
          Explore our four central pillars designed to turn your ambition into real-world achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: interactive grid of the 4 pillars */}
        <div className="lg:col-span-7 space-y-4">
          {pillars.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <motion.button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-5 cursor-pointer backdrop-blur-md ${
                  isSelected
                    ? 'border-v bg-v/10 shadow-lg shadow-purple-900/10'
                    : 'border-theme-glass-border bg-theme-glass hover:bg-white/10 hover:border-white/10'
                }`}
                whileHover={{ scale: isSelected ? 1 : 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className={`p-3 rounded-xl bg-slate-900 border border-theme-glass-border ${pillar.accentColor}`}>
                  {pillar.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold tracking-wider text-base text-theme-heading">{pillar.title}</h3>
                    {isSelected && (
                      <motion.span
                        layoutId="active-indicator"
                        className="text-xs font-semibold text-v bg-v/10 px-2 py-1 rounded"
                      >
                        Selected Room
                      </motion.span>
                    )}
                  </div>
                  <p className="text-xs text-theme-secondary leading-relaxed font-light">{pillar.subtitle}</p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 self-center ${
                  isSelected ? 'text-v rotate-90' : 'text-slate-500'
                }`} />
              </motion.button>
            );
          })}
        </div>

        {/* Right Side: immersive detailed tracker with micro-animations */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {selectedPillar && (
              <motion.div
                key={selectedPillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-8 rounded-3xl relative overflow-hidden bg-theme-glass"
              >
                {/* Visual Glow Ornament */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />

                {(() => {
                  const data = pillars.find((p) => p.id === selectedPillar)!;
                  return (
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#a78bfa]">
                            Pillar Deep Dive
                          </span>
                          <h3 className="text-2xl font-black text-theme-heading tracking-wide">{data.title}</h3>
                        </div>
                        <div className={`p-3 rounded-2xl bg-white/5 border border-theme-glass-border ${data.accentColor}`}>
                          {data.icon}
                        </div>
                      </div>

                      <p className="text-sm text-theme-primary leading-relaxed font-light">
                        {data.description}
                      </p>

                      {/* Learning Track Steps */}
                      <div className="space-y-3 pt-3">
                        <h4 className="text-xs font-bold text-theme-heading uppercase tracking-widest flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-v" /> Planned Learning & Onboarding Track
                        </h4>
                        <div className="space-y-2">
                          {data.learningTrack.map((step, idx) => (
                            <div
                              key={idx}
                              className="bg-white/5 border border-theme-glass-border rounded-xl p-3 flex items-start gap-3"
                            >
                              <span className="text-xs font-mono font-bold text-v bg-v/10 px-2 py-0.5 rounded">
                                0{idx + 1}
                              </span>
                              <span className="text-xs text-theme-primary font-normal">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key stats banner */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-theme-glass-border">
                        <div className="space-y-1">
                          <span className="text-[10px] text-theme-secondary uppercase tracking-wider block font-semibold">
                            Est. Track Duration:
                          </span>
                          <span className="text-xs font-bold text-theme-heading flex items-center gap-1.5 font-mono">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-300" /> {data.duration}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] text-theme-secondary uppercase tracking-wider block font-semibold">
                            Average Payout range:
                          </span>
                          <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 font-mono">
                            <Sparkles className="w-4 h-4 text-emerald-400" /> {data.avgWage}
                          </span>
                        </div>
                      </div>

                      {/* Action Prompt */}
                      <div className="mt-4 p-4 rounded-2xl bg-v/10 border border-v/20 text-center space-y-2">
                        <p className="text-xs font-medium text-v flex items-center justify-center gap-2">
                          <Flame className="w-4 h-4 text-amber-500" /> Start Customising Your Path Today!
                        </p>
                        <p className="text-[11px] text-theme-secondary">
                          WebWave groups host direct mentoring pipelines. Jump over to the <strong className="text-theme-primary">Opportunities</strong> or <strong className="text-theme-primary">Community Hub</strong> to instantly align with top event leaders.
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Slogan Banner matched to high-fidelity gradient style */}
      <div className="mt-14 p-8 rounded-2xl relative text-center overflow-hidden bg-gradient-to-r from-[#0252a5] to-[#00b4d8] text-white shadow-xl shadow-blue-900/10 select-none">
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        <h4 className="text-lg md:text-2xl font-black tracking-widest uppercase flex items-center justify-center gap-1.5 leading-none">
          LEARN TODAY, LEAD TOMORROW <span className="text-sky-200">&rarr;</span>
        </h4>
        <p className="text-xs md:text-sm uppercase tracking-widest font-normal text-sky-100 mt-2">
          Your Future Starts Right Here &bull; Join 700+ student freelancers.
        </p>
      </div>
    </div>
  );
}
