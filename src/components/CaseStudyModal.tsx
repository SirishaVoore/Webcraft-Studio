import React from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface CaseStudyModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onStartBuild: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onStartBuild }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#090d14] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090d14]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Case Study Deep Dive
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 font-mono">{project.client} ({project.year})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Banner Graphic */}
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden border border-white/[0.08]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white font-syne mt-2">
                  {project.title}
                </h2>
              </div>
              <div className="bg-black/80 backdrop-blur-md border border-cyan-500/40 px-4 py-2 rounded-xl text-left">
                <div className="text-xs text-slate-400">{project.stats.label}</div>
                <div className="text-xl font-bold text-cyan-300 font-syne">{project.stats.value}</div>
              </div>
            </div>
          </div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white font-syne mb-2">Project Overview</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <h4 className="text-sm font-semibold text-white font-syne flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  The Architectural Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-3">
                <h4 className="text-sm font-semibold text-cyan-300 font-syne flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Our Systematic Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-4">
                  Measurable Impact
                </h4>
                <ul className="space-y-3">
                  {project.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                  Architecture & Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.1] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="px-6 py-4 bg-[#07090e] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Want similar architecture and conversion results for your brand?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartBuild();
              }}
              className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[#39d6ce] hover:bg-[#2cc2ba] text-black text-xs font-bold transition-all shadow-lg shadow-[#39d6ce]/20 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Build Similar Product</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
