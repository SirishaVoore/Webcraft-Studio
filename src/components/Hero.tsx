import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, Zap } from 'lucide-react';
import { GradientWave } from '@/src/components/ui/gradient-wave';

interface HeroProps {
  onGetInTouch: () => void;
  onStartBuild: () => void;
  onExploreMethodology: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetInTouch,
  onStartBuild,
  onExploreMethodology,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* WebGL Gradient Wave dynamic background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <GradientWave
          colors={["#040507", "#071728", "#39d6ce", "#051329", "#6e10f7", "#040507"]}
          noiseSpeed={0.000008}
          deform={{ incline: 0.35, noiseAmp: 180, noiseFlow: 4 }}
        />
      </div>

      {/* Subtle background glow accents - Blue and sparse purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 left-1/4 w-[320px] h-[320px] bg-[#6e10f7]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[280px] h-[280px] bg-[#39d6ce]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* 5. Trust Badge: TRUSTED BY 500+ BRANDS */}
        <div
          id="hero-trust-badge"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#39d6ce]/10 border border-[#39d6ce]/30 text-xs text-[#39d6ce] mb-8 backdrop-blur-sm hover:border-[#39d6ce]/50 transition-colors shadow-sm shadow-[#39d6ce]/10"
        >
          {/* Subtle Laurel Leaf Left */}
          <svg className="w-3.5 h-3.5 text-[#39d6ce]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M7 21C6 17 5 11 11 6M7 21c-2-3-3-8 1-13M7 21C4 18 3 13 8 9" />
          </svg>
          <span className="font-sans font-semibold tracking-wider uppercase text-[11px] text-[#39d6ce]">
            Trusted by 500+ Brands
          </span>
          {/* Subtle Laurel Leaf Right */}
          <svg className="w-3.5 h-3.5 text-[#39d6ce] -scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M7 21C6 17 5 11 11 6M7 21c-2-3-3-8 1-13M7 21C4 18 3 13 8 9" />
          </svg>
        </div>

        {/* 2, 3 & 4. Main Headline with Playfair Display Italic for "decisions." */}
        <h1
          id="hero-main-heading"
          className="font-sans text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6 select-none"
        >
          <span className="block text-white">Design that</span>
          <span className="block mt-2 text-white">
            drives{' '}
            <span className="font-playfair italic font-normal text-[#39d6ce] tracking-normal inline-block">
              decisions.
            </span>
          </span>
        </h1>

        {/* 6. Subtitle */}
        <p
          id="hero-subtitle"
          className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-[1.75] font-normal"
        >
          Helping brands grow, convert, and stand out with first-class digital
          experiences.
        </p>

        {/* 7. CTA Buttons */}
        <div
          id="hero-actions-container"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Get in touch Button matching turquoise style */}
          <button
            id="hero-btn-get-in-touch"
            onClick={onGetInTouch}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#39d6ce] text-black font-sans text-sm font-semibold hover:bg-[#2cc2ba] transition-all duration-200 shadow-lg shadow-[#39d6ce]/25 flex items-center justify-center cursor-pointer"
          >
            Get in touch
          </button>

          {/* Main Light Green CTA Button */}
          <button
            id="hero-btn-start-build"
            onClick={onStartBuild}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#39d6ce] text-black font-sans text-sm font-semibold hover:bg-[#2cc2ba] transition-all duration-200 shadow-lg shadow-[#39d6ce]/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start Your Build</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Content: Clean two-column information area */}
        <div
          id="hero-info-cards"
          className="mt-16 pt-10 border-t border-white/[0.08] w-full grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto"
        >
          {/* Section 1: Get in touch */}
          <div
            onClick={onGetInTouch}
            className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#39d6ce]/30 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#39d6ce]/10 border border-[#39d6ce]/30 flex items-center justify-center text-[#39d6ce]">
                <MessageSquare size={14} />
              </div>
              <h3 className="font-sans font-semibold text-sm text-white group-hover:text-[#39d6ce] transition-colors">
                Get in touch
              </h3>
            </div>
            <p className="font-sans text-xs text-slate-400 leading-relaxed font-normal">
              Direct technical discovery call with our founding architecture leads.
            </p>
          </div>

          {/* Section 2: Start Your Build */}
          <div
            onClick={onStartBuild}
            className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#39d6ce]/30 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#39d6ce]/10 border border-[#39d6ce]/30 flex items-center justify-center text-[#39d6ce]">
                <Sparkles size={14} />
              </div>
              <h3 className="font-sans font-semibold text-sm text-white group-hover:text-[#39d6ce] transition-colors">
                Start Your Build
              </h3>
            </div>
            <p className="font-sans text-xs text-slate-400 leading-relaxed font-normal">
              Interactive scope configurator with real-time transparent estimates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
