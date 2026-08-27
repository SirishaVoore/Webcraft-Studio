import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#020305] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-[#39d6ce] text-lg">✦</span>
              <span className="font-sans font-semibold text-lg sm:text-xl tracking-tight flex items-center gap-1.5">
                <span className="text-white">Webcraft</span>
                <span className="text-[#39d6ce]">Studio</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-normal">
              A strict, professional engineering methodology used for custom high-ticket builds. Helping brands grow, convert, and command market leadership.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#39d6ce]/10 border border-[#39d6ce]/30 text-[#39d6ce] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#39d6ce] animate-pulse" />
              <span>Studio Status: Available for High-Impact Sprints</span>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Architecture & Sprints
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#funnel-leaks" className="hover:text-[#39d6ce] transition-colors">
                  Remove Funnel Leaks
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#39d6ce] transition-colors">
                  Build Methodology (Phases 01-04)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#39d6ce] transition-colors">
                  Selected Work & Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#39d6ce] transition-colors">
                  Sprint Pricing & Retainers
                </a>
              </li>
            </ul>
          </div>

          {/* More Links & Direct Actions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Connect & Inquiries
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#testimonials" className="hover:text-[#39d6ce] transition-colors">
                  Founder Testimonials
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#39d6ce] transition-colors">
                  Direct Technical Inquiry
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#39d6ce] transition-colors flex items-center gap-1">
                  <span>X / Twitter</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#39d6ce] transition-colors flex items-center gap-1">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Webcraft Studio. All rights reserved. Precision-engineered.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-[#39d6ce] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
