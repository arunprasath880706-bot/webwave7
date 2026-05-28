import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { WhatsAppGroup } from '../types';
import { COMMUNITY_GROUPS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, PhoneCall, Check, Calendar, Lock, Users, ExternalLink, ShieldCheck, Bookmark, Send, Copy } from 'lucide-react';

export default function CommunityView() {
  const [selectedGroup, setSelectedGroup] = useState<WhatsAppGroup>(COMMUNITY_GROUPS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);

  const customMessage = `hi bro , i am intrested to join. what are the coureses are availible in ${selectedGroup?.name || ''}`;

  const handleJoinLiveGroup = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedGroup) return;

    try {
      await navigator.clipboard.writeText(customMessage);
      setCopiedMessage(selectedGroup.name);
      setTimeout(() => setCopiedMessage(null), 5000);
    } catch (err) {
      console.warn('Could not write to clipboard', err);
    }

    // Open WhatsApp Group Invite Link in a new tab
    window.open(selectedGroup.link, '_blank', 'noopener,noreferrer');
  };

  const filteredGroups = COMMUNITY_GROUPS.filter((g) =>
    g.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="community-hub" className="max-w-6xl mx-auto space-y-6">
      {/* Intro branding banner */}
      <div className="bg-gradient-to-r from-emerald-950/10 via-theme-card to-cyan-950/10 border border-emerald-500/15 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-tl from-emerald-500/5 to-transparent pointer-events-none" />
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="px-3 py-1 text-xs font-bold tracking-widest text-emerald-500 bg-emerald-500/10 border border-emerald-500/25 rounded-full inline-block">
            Pulsing Community Hub
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-theme-heading tracking-wide">
            EXPLORE THE WEBWAVE ECOSYSTEM
          </h2>
          <p className="text-xs md:text-sm text-theme-secondary leading-relaxed font-light">
            We operate as a unified WhatsApp Community with decentralized, skill-oriented sub-channels. Scan or tap any room to talk directly with organizers and active student peers.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-3xl font-black text-emerald-500">700+</div>
          <p className="text-[10px] text-theme-secondary font-extrabold uppercase tracking-widest">
            Active Members in Chennai
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Mockups of WhatsApp group chats list */}
        <div className="md:col-span-5 glass-panel rounded-3xl overflow-hidden flex flex-col max-h-[580px] bg-theme-card">
          <div className="p-4 border-b border-theme-glass-border space-y-3 bg-theme-glass">
            <h3 className="font-extrabold text-theme-heading text-sm tracking-wider uppercase flex items-center justify-between">
              <span>WebWave Community Rooms</span>
              <span className="text-xs font-bold text-theme-secondary font-mono tracking-normal">{filteredGroups.length} Channels</span>
            </h3>
            {/* Simple Search */}
            <input
              type="text"
              placeholder="Search active channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-theme-glass-border text-xs text-theme-primary rounded-xl py-2 px-3 focus:outline-none focus:border-emerald-500/40 placeholder-theme-secondary transition-all font-light"
            />
          </div>

          <div className="overflow-y-auto divide-y divide-theme-glass-border flex-1 select-none">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => {
                const isSelected = selectedGroup.id === group.id;
                return (
                  <div
                    key={group.id}
                    onClick={() => setSelectedGroup(group)}
                    className={`p-4 flex gap-3.5 items-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/10 border-l-4 border-emerald-500'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    {/* Channel Avatar Sticker */}
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-lg shrink-0 ${group.avatarColorClass}`}>
                       {group.avatarLetter}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-theme-heading text-sm truncate">{group.name}</h4>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-theme-secondary text-xs font-light">
                No matching community channels found.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Immersive detail view and live QR Generator */}
        <div className="md:col-span-7">
          <AnimatePresence mode="wait">
            {selectedGroup && (
              <motion.div
                key={selectedGroup.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-6 md:p-8 rounded-3xl space-y-6 relative flex flex-col justify-between h-full bg-theme-glass"
              >
                {/* Channel banner details */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-theme-glass-border pb-5">
                    <div className="flex gap-4 items-center">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${selectedGroup.avatarColorClass}`}>
                        {selectedGroup.avatarLetter}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl md:text-2xl font-black text-theme-heading leading-tight">
                            {selectedGroup.name}
                          </h3>
                          <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full inline-block">
                            Live Room
                          </span>
                        </div>
                        <p className="text-xs text-theme-secondary font-light mt-0.5">
                          WebWave Decentralized Group
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2 text-left">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#a78bfa] block">
                        Channel Objective
                      </span>
                      <p className="text-sm text-theme-primary font-light leading-relaxed">
                        {selectedGroup.description}
                      </p>
                    </div>

                    {/* Chat log mock simulation */}
                    <div className="space-y-3 bg-theme-card border border-theme-glass-border rounded-2xl p-4 font-light text-xs text-theme-secondary relative">
                      <span className="absolute top-2 right-3 text-[10px] uppercase font-bold text-theme-secondary font-mono tracking-widest">
                        Preview
                      </span>
                      <h4 className="text-[10px] font-bold text-theme-secondary uppercase tracking-wider mb-2">
                        Recent Activity Log
                      </h4>
                      <div className="space-y-2">
                        <p className="border-l-2 border-v/40 pl-3 py-0.5">
                          <strong className="text-theme-heading">System Bot:</strong> Community parameters initialized. Link synced with WebWave Smart Platform.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* QR Code and CTA integration */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-6 border-t border-theme-glass-border">
                  <div className="sm:col-span-8 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-theme-heading uppercase tracking-widest flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-emerald-500" /> Secure Direct Join
                      </h4>
                      <p className="text-xs text-theme-secondary leading-normal font-light">
                        This group is protected under the WebWave Unified Community terms. Tap below to automatically copy the inquiry message and join the WhatsApp room instantly.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a
                        href={selectedGroup.link}
                        onClick={handleJoinLiveGroup}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-700 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none"
                      >
                        <PhoneCall className="w-4 h-4 text-slate-950 shrink-0" />
                        <span>Join Live Group</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                      </a>
                      <p className="text-[10px] text-[#2fe8b0] text-left font-semibold leading-normal">
                        ⚡ Message copied in background to your keyboard pasteboard:
                        <span className="block text-[10px] text-theme-secondary font-light mt-1.5 italic bg-black/25 p-2 rounded-lg border border-theme-glass-border">
                          &ldquo;{customMessage}&rdquo;
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Gorgeous QR Code SVG Box */}
                  <div className="sm:col-span-4 flex flex-col items-center justify-center space-y-2">
                    <div className="p-3 bg-white rounded-2xl shadow-xl shadow-black/30 transition-transform duration-300 hover:scale-105 inline-block">
                      <QRCodeSVG
                        value={selectedGroup.link}
                        size={110}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                        includeMargin={false}
                      />
                    </div>
                    <span className="text-[10px] text-theme-secondary font-bold uppercase tracking-widest">
                      Scan to join on mobile
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating high-fidelity status toast helper */}
      <AnimatePresence>
        {copiedMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-950/95 border-2 border-emerald-500 text-white rounded-2xl p-4 shadow-2xl max-w-sm backdrop-blur-md text-left"
          >
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#2fe8b0] text-xs uppercase tracking-widest">
                  Message Loaded to Keyboard!
                </h4>
                <p className="text-[11px] text-slate-300 leading-normal">
                  We copied: <span className="text-[#a78bfa] font-mono italic">&ldquo;hi bro , i am intrested to join. what are the coureses are availible in {copiedMessage}&rdquo;</span> to your clipboard. Once WhatsApp opens, simply paste it in the chat without manual typing!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
