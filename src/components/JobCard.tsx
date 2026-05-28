import React from 'react';
import { Job } from '../types';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface JobCardProps {
  key?: React.Key;
  job: Job;
  onClick: () => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  // Map our tag classes matching original demo tags
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

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="glass-panel rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full group border-theme-glass-border transition-all duration-300 shadow-md hover:shadow-v/10 hover:border-v/40 bg-theme-card"
    >
      {/* Card Image Cover with elegant zoom effect */}
      <div className="relative w-full h-44 overflow-hidden bg-slate-900 border-b border-theme-glass-border flex items-center justify-center">
        <img
          src={job.img}
          alt={job.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
        {/* Shadow Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      {/* Card Body and Content info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Custom Tag */}
          <span className={`inline-block text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${getTagStyles(job.tagColorClass)}`}>
            {job.tag}
          </span>
          
          <h3 className="text-lg font-black text-theme-heading group-hover:text-v transition-colors duration-200">
            {job.title}
          </h3>
          
          <p className="text-xs text-theme-secondary font-light leading-relaxed">
            {job.desc}
          </p>
        </div>

        {/* Footer dynamic button linking details */}
        <div className="pt-4 border-t border-theme-glass-border flex justify-between items-center">
          <span className="text-[10px] text-theme-secondary font-bold uppercase tracking-widest block">
            Click to discover
          </span>
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-v/10 hover:bg-v/20 text-v border border-v/20 group-hover:bg-v group-hover:text-white transition-all duration-300">
            <span>View</span>
            <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
