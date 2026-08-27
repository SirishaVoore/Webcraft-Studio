import React, { useState } from 'react';
import { 
  Compass, 
  LayoutGrid, 
  Code2, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Terminal, 
  ShieldCheck,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { METHODOLOGY_PHASES } from '../data/mockData';
import { PhaseData } from '../types';

interface MethodologyTimelineProps {
  onInitiateProject: () => void;
}

export const MethodologyTimeline: React.FC<MethodologyTimelineProps> = ({ onInitiateProject }) => {
  const [activePhaseId, setActivePhaseId] = useState<string>('phase-01');
  const [expandedArtifacts, setExpandedArtifacts] = useState<Record<string, boolean>>({
    'phase-01': true,
  });

  const toggleArtifacts = (phaseId: string) => {
    setExpandedArtifacts((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }));
  };

  const scrollToPhase = (phaseId: string) => {
    setActivePhaseId(phaseId);
    const element = document.getElementById(phaseId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getPhaseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="methodology"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#040507] relative border-b border-white/[0.06]"
    >
      {/* Background glow lines */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#39d6ce]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#39d6ce]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Top Header */}
        <div id="methodology-header-block" className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39d6ce]/10 border border-[#39d6ce]/30 text-[#39d6ce] text-xs font-sans font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39d6ce]" />
            The 4-Step Proven Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
            Our Sprint Methodology
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            A strict, professional engineering process engineered for speed and certainty.
          </p>

          {/* 4 Phase Quick Switcher Row */}
          <div
            id="phase-quick-nav"
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8"
          >
            {METHODOLOGY_PHASES.map((phase) => {
              const isActive = activePhaseId === phase.id;
              return (
                <button
                  key={phase.id}
                  id={`quick-nav-${phase.id}`}
                  onClick={() => scrollToPhase(phase.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.06] border-[#39d6ce]/50 shadow-lg shadow-cyan-950/40'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.15]'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg inline-flex items-center justify-center mb-3 ${
                      isActive ? 'bg-[#39d6ce]/20 text-[#39d6ce]' : 'bg-white/[0.05] text-slate-400'
                    }`}
                  >
                    {getPhaseIcon(phase.iconName)}
                  </div>
                  <div className="font-semibold text-white text-sm font-sans">{phase.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{phase.shortDesc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Monumental Title */}
        <div id="methodology-architecture-title" className="mb-16 pt-8 border-t border-white/[0.08]">
          <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
            The Architecture of{' '}
            <span className="block sm:inline text-[#39d6ce] font-playfair italic font-normal">
              Flawless Execution
            </span>
          </h3>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-normal leading-relaxed">
            A transparent, rigorous methodology engineered to transform complex requirements into
            elite digital experiences.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-12">
          {/* Vertical Cyan Guide Line */}
          <div
            id="methodology-vertical-rail"
            className="absolute left-1.5 sm:left-3 top-4 bottom-12 w-[2px] bg-gradient-to-b from-[#39d6ce]/80 via-cyan-400/40 to-[#39d6ce]/80"
          />

          <div className="space-y-16 sm:space-y-24">
            {METHODOLOGY_PHASES.map((phase, index) => {
              const isActive = activePhaseId === phase.id;
              return (
                <div
                  key={phase.id}
                  id={phase.id}
                  onMouseEnter={() => setActivePhaseId(phase.id)}
                  className="relative group transition-all duration-300"
                >
                  {/* Glowing Node on Rail */}
                  <div
                    className={`absolute -left-[27px] sm:-left-[43px] top-8 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#39d6ce] border-[#39d6ce] ring-4 ring-[#39d6ce]/30 scale-125'
                        : 'bg-[#040507] border-[#39d6ce]/60 group-hover:border-[#39d6ce] group-hover:scale-110'
                    }`}
                  />

                  {/* Main Phase Card */}
                  <div
                    className={`relative p-6 sm:p-10 rounded-2xl bg-[#0a0d13]/80 border backdrop-blur-md overflow-hidden transition-all duration-300 ${
                      isActive
                        ? 'border-[#39d6ce]/40 shadow-2xl shadow-cyan-950/30 bg-[#0c1017]'
                        : 'border-white/[0.08] hover:border-white/[0.18]'
                    }`}
                  >
                    {/* Giant Watermark Number */}
                    <div
                      className="absolute right-4 top-2 text-7xl sm:text-9xl font-extrabold text-white/[0.03] select-none pointer-events-none font-sans tracking-tighter"
                      aria-hidden="true"
                    >
                      {phase.watermark}
                    </div>

                    {/* Phase Header Tag */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-widest text-[#39d6ce] uppercase font-mono">
                        PHASE {phase.number}
                      </span>
                      <div className="h-[1px] w-12 bg-[#39d6ce]/30" />
                      <span className="text-xs text-slate-400 font-mono ml-auto">
                        Est. {phase.duration}
                      </span>
                    </div>

                    {/* Phase Title */}
                    <h4 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight mb-4">
                      {phase.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl font-normal">
                      {phase.fullDesc}
                    </p>

                    {/* Checkpoints with double circle bullets */}
                    <div className="space-y-3.5 mb-8">
                      {phase.checkpoints.map((checkpoint, cpIdx) => (
                        <div key={cpIdx} className="flex items-center gap-3">
                          <div className="shrink-0 relative flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full border border-[#39d6ce]/80 flex items-center justify-center bg-cyan-950/40">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#39d6ce]" />
                            </div>
                          </div>
                          <span className="text-sm sm:text-base text-slate-200 font-medium">
                            {checkpoint}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Deliverables Preview Toggle */}
                    <div className="pt-6 border-t border-white/[0.08]">
                      <button
                        onClick={() => toggleArtifacts(phase.id)}
                        className="flex items-center justify-between w-full text-xs text-slate-400 hover:text-[#39d6ce] font-medium tracking-wide uppercase transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Layers size={14} className="text-[#39d6ce]" />
                          Phase {phase.number} Key Deliverables & Artifacts ({phase.deliverables.length})
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            expandedArtifacts[phase.id] ? 'rotate-180 text-[#39d6ce]' : ''
                          }`}
                        />
                      </button>

                      {expandedArtifacts[phase.id] && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {phase.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-3 rounded-lg bg-black/40 border border-white/[0.06] text-xs text-slate-300 flex items-center gap-2.5 hover:border-[#39d6ce]/30 transition-colors"
                            >
                              <FileText size={14} className="text-[#39d6ce] shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Specific Action CTA on Phase 04 */}
                    {index === METHODOLOGY_PHASES.length - 1 && (
                      <div className="mt-8 pt-4">
                        <button
                          id="btn-initiate-project-phase4"
                          onClick={onInitiateProject}
                          className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#39d6ce] text-black font-bold text-sm tracking-wider uppercase hover:bg-[#2cc2ba] transition-all duration-200 shadow-xl shadow-[#39d6ce]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                        >
                          <span>INITIATE PROJECT</span>
                          <ArrowRight size={16} className="stroke-[2.5]" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
