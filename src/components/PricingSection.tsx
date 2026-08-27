import React from 'react';
import { PRICING_PLANS, FAQS } from '../data/mockData';
import { Check, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#040507] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Transparent Investment & Sprint Models
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-syne tracking-tight">
            Simple Pricing. Zero Fluff.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Direct access to senior craft leaders. Guaranteed delivery schedules and complete code ownership.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.featured
                  ? 'bg-[#0a0f18] border-2 border-[#39d6ce]/80 shadow-2xl shadow-cyan-950/60 lg:-translate-y-2'
                  : 'bg-[#080b11]/70 border border-white/[0.08] hover:border-white/[0.2]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#39d6ce] text-black text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg shadow-[#39d6ce]/30">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-syne">{plan.name}</h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2 py-0.5 rounded">
                    {plan.turnaround}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">{plan.tagline}</p>

                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-4xl font-extrabold text-white font-syne">{plan.price}</span>
                  <span className="text-xs text-slate-400">/ {plan.period}</span>
                </div>

                <p className="text-xs text-slate-300 mb-6 leading-relaxed border-b border-white/[0.08] pb-6 font-normal">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    What's Included:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-[#39d6ce]/20 text-[#39d6ce] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.featured
                    ? 'bg-[#39d6ce] text-black hover:bg-[#2cc2ba] shadow-lg shadow-[#39d6ce]/25'
                    : 'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.1]'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-white/[0.08]">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white font-syne">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-400 mt-1">Everything you need to know about our sprints & delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <h4 className="text-sm font-semibold text-white font-syne mb-2 flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">Q.</span>
                  {faq.question}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed pl-5 font-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
