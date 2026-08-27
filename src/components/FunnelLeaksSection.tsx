import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Eye, 
  ShieldAlert, 
  Sparkles, 
  Layers, 
  Activity,
  Sliders,
  DollarSign
} from 'lucide-react';

interface FunnelLeaksSectionProps {
  onStartBuild: () => void;
  onExploreProcess?: () => void;
}

export const FunnelLeaksSection: React.FC<FunnelLeaksSectionProps> = ({ 
  onStartBuild,
  onExploreProcess 
}) => {
  const [activeLeakId, setActiveLeakId] = useState<string>('bounce');
  const [leaksPlugged, setLeaksPlugged] = useState<boolean>(true);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(8000);
  const [customerValue, setCustomerValue] = useState<number>(3000);

  const funnelLeaks = [
    {
      id: 'bounce',
      stage: 'Stage 01: Top of Funnel',
      title: 'The Silent Bounce Leak',
      severity: 'Critical Drop-off (42%)',
      problem: 'Sluggish load speeds (>2.8s) and vague, generic headlines cause 4 out of 10 paid or organic visitors to bounce in under 3 seconds before even reading your pitch.',
      agitation: 'You pay for traffic via ads, SEO, or social, but the traffic evaporates immediately on contact.',
      solution: 'Sub-400ms edge-rendered architecture paired with an unassailable above-the-fold value proposition.',
      metricRecovery: '+42% Visitor Retention',
      icon: Zap,
    },
    {
      id: 'confusion',
      stage: 'Stage 02: Engagement & Interest',
      title: 'The Cognitive Overload Leak',
      severity: 'High Drop-off (35%)',
      problem: 'Dense wall-of-text paragraphs, low-contrast text, and lack of visual hierarchy force visitors to exert cognitive effort to understand what you actually do.',
      agitation: 'Confused visitors never buy. If they cannot scan your core benefit in 5 seconds, they tab away.',
      solution: 'Mathematical typographic hierarchy, high-contrast visual anchors, and scannable benefit modules.',
      metricRecovery: '+68% Page Depth',
      icon: Eye,
    },
    {
      id: 'trust',
      stage: 'Stage 03: Decision & Authority',
      title: 'The Credibility Deficit Leak',
      severity: 'Severe Hesitation (28%)',
      problem: 'Stock templates, generic illustrations, and vague testimonials without real metrics trigger subconscious buyer skepticism.',
      agitation: 'Buyers compare you against competitors and assume you are a low-tier vendor with low pricing power.',
      solution: 'Tier-1 bespoke art direction, tactile WebGL dynamics, and verified case studies with quantified telemetry.',
      metricRecovery: '3.2x Brand Authority',
      icon: ShieldAlert,
    },
    {
      id: 'action',
      stage: 'Stage 04: Conversion & Close',
      title: 'The Friction-Heavy CTA Leak',
      severity: 'Fatal Abandonment (54%)',
      problem: 'Buried contact buttons, sluggish multi-page redirects, and intimidating 8-field forms scare away ready-to-buy prospects.',
      agitation: 'Leads who are 90% ready to book a demo drop off at the final 10-foot stretch.',
      solution: 'Progressive multi-step lead funnels, persistent action triggers, and 1-click scheduling integrations.',
      metricRecovery: '+184% Form Completions',
      icon: TrendingUp,
    },
  ];

  const currentLeak = funnelLeaks.find(l => l.id === activeLeakId) || funnelLeaks[0];

  // Mathematical Funnel Simulation
  // Leaking funnel: 1.1% conversion rate
  // Plugged funnel: 3.4% conversion rate (+2.3% lift)
  const baselineLeads = Math.floor(monthlyVisitors * 0.011);
  const pluggedLeads = Math.floor(monthlyVisitors * 0.034);
  const recoveredLeads = pluggedLeads - baselineLeads;
  const monthlyRevenueRecovered = Math.floor(recoveredLeads * 0.25 * customerValue);
  const annualRevenueRecovered = monthlyRevenueRecovered * 12;

  return (
    <section id="funnel-leaks" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030406] relative overflow-hidden border-t border-white/[0.05]">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#39d6ce]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[#6e10f7]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39d6ce]/10 border border-[#39d6ce]/30 text-[#39d6ce] text-xs font-sans font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39d6ce]" />
            Conversion Diagnostics
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight leading-[1.15]">
            Remove the invisible leaks in{' '}
            <span className="font-playfair italic font-normal text-[#39d6ce]">your funnel.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Most websites silently lose 60% to 80% of high-intent visitors at four critical friction points. Here is how we diagnose and plug every single drop-off.
          </p>
        </div>

        {/* 4 Interactive Leak Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {funnelLeaks.map((leak) => {
            const isActive = activeLeakId === leak.id;
            const Icon = leak.icon;
            return (
              <button
                key={leak.id}
                onClick={() => setActiveLeakId(leak.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0b1018] border-[#39d6ce] shadow-xl shadow-cyan-950/40'
                    : 'bg-[#070a0f] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.15]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isActive
                          ? 'bg-[#39d6ce]/20 text-[#39d6ce]'
                          : 'bg-white/[0.04] text-slate-400'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-red-400 bg-red-950/40 border border-red-500/30 px-2 py-0.5 rounded-full">
                      Leak Point
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    {leak.stage}
                  </div>
                  <div className="font-bold text-white text-sm sm:text-base font-sans">
                    {leak.title}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-[#39d6ce]">
                  {leak.metricRecovery}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Leak Diagnostic Deep-Dive Card */}
        <div className="rounded-3xl bg-[#080c13] border border-white/[0.1] p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Problem & Agitation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider bg-red-950/40 border border-red-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <AlertTriangle size={12} />
                  {currentLeak.severity}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentLeak.stage}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                {currentLeak.title}
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-red-400 block mb-1 font-mono uppercase text-[11px]">The Invisible Flaw:</strong>
                  {currentLeak.problem}
                </div>

                <div className="p-4 rounded-xl bg-[#090e17] border border-white/[0.08] text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-amber-400 block mb-1 font-mono uppercase text-[11px]">The Commercial Cost:</strong>
                  {currentLeak.agitation}
                </div>
              </div>
            </div>

            {/* Right The Engineered Plug */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0a121c] border-2 border-[#39d6ce]/60 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-[#39d6ce] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#39d6ce]" />
                  <span>How We Plug This Leak</span>
                </div>
                <span className="text-xs font-bold text-black bg-[#39d6ce] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Guaranteed Fix
                </span>
              </div>

              <div>
                <div className="text-xl font-bold text-white font-sans mb-2">
                  Precision Engineering & Copy Hierarchy
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentLeak.solution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070b10] border border-[#39d6ce]/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Impact on Conversion</div>
                  <div className="text-lg font-bold text-[#39d6ce] font-mono mt-0.5">
                    {currentLeak.metricRecovery}
                  </div>
                </div>
                <button
                  onClick={onStartBuild}
                  className="px-4 py-2 rounded-lg bg-[#39d6ce] hover:bg-[#2cc2ba] text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shadow-[#39d6ce]/20"
                >
                  Plug This Leak
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive "Funnel Revenue Recovery Calculator" */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#070b12] to-[#040609] border border-white/[0.08] relative overflow-hidden shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#39d6ce] uppercase tracking-wider">
              Telemetry Simulator
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-1">
              Calculate Revenue Recovered From Plugged Leaks
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              See what happens to your annual pipeline when you eliminate bounce, confusion, trust, and CTA friction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-2">
                  <span>Monthly Website Visitors:</span>
                  <span className="text-base font-bold text-white font-mono">{monthlyVisitors.toLocaleString()} /mo</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#39d6ce]"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>1,000</span>
                  <span>25,000</span>
                  <span>50,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-2">
                  <span>Average Customer Lifetime / Deal Value:</span>
                  <span className="text-base font-bold text-white font-mono">${customerValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#39d6ce]"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>$500</span>
                  <span>$10,000</span>
                  <span>$20,000+</span>
                </div>
              </div>
            </div>

            {/* Projected Impact Box */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#090f18] border-2 border-[#39d6ce]/40 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Recovered Revenue per Year
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#39d6ce] tracking-tight mb-4">
                  +${annualRevenueRecovered.toLocaleString()}
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.08] text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Leaking Funnel Deals:</span>
                    <span className="font-mono text-slate-400">{Math.floor(baselineLeads * 0.25)} deals/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Plugged Funnel Deals:</span>
                    <span className="font-mono text-[#39d6ce] font-bold">{Math.floor(pluggedLeads * 0.25)} deals/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Net Additional Closes:</span>
                    <span className="font-mono text-[#39d6ce] font-bold">+{Math.floor(recoveredLeads * 0.25)} clients/mo</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onStartBuild}
                className="mt-6 w-full py-3.5 rounded-xl bg-[#39d6ce] hover:bg-[#2cc2ba] text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#39d6ce]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Plug All Funnel Leaks</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
