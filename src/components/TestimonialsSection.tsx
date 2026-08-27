import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030406] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39d6ce]/10 border border-[#39d6ce]/30 text-[#39d6ce] text-xs font-sans font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39d6ce]" />
            Social Proof & Founder Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight leading-[1.15]">
            Backed by ambitious{' '}
            <span className="font-playfair italic font-normal text-[#39d6ce]">high-growth founders.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real outcomes from design systems and builds shipped with our sprint methodology.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#090d14]/70 border border-white/[0.08] hover:border-[#39d6ce]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div>
                {/* Rating & Highlight Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-[#39d6ce]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#39d6ce]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#39d6ce] bg-[#39d6ce]/10 border border-[#39d6ce]/30 px-2.5 py-0.5 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#39d6ce]/30"
                />
                <div>
                  <div className="text-sm font-bold text-white font-sans group-hover:text-[#39d6ce] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role}, <span className="text-slate-300">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
