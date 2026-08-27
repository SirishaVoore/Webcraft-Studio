import React from 'react';
import { TECH_BRANDS } from '../data/mockData';

export const BrandMarquee: React.FC = () => {
  return (
    <section id="brands-marquee-section" className="py-12 border-y border-white/[0.06] bg-[#030406]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
          Powering High-Growth Startups & Elite Digital Products
        </p>
      </div>

      <div className="flex overflow-x-hidden relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex gap-12 shrink-0 animate-[marquee_25s_linear_infinite] items-center py-2">
          {TECH_BRANDS.concat(TECH_BRANDS).map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors select-none"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
              <span className="font-syne font-semibold tracking-wider text-base">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-400 border border-white/[0.1] rounded px-1.5 py-0.5">
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
