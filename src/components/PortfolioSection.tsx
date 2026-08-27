import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioItem } from '../types';
import { ArrowUpRight, Filter, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'SaaS & Web App', 'Fintech & Web3', 'E-Commerce', 'Brand Systems'];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030406] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Selected Portfolio & Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-syne tracking-tight">
              Crafted with Precision.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Explore bespoke digital products built for category-defining startups and forward-thinking enterprises.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-2xl bg-[#090d14]/70 border border-white/[0.08] hover:border-cyan-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-transparent opacity-80" />

                {/* Floating Metric Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                  <TrendingUp size={12} className="text-cyan-400" />
                  <span>{project.stats.value}</span>
                  <span className="text-slate-400 font-normal text-[10px]">{project.stats.label}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm border border-white/[0.1] px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300">
                  {project.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white font-syne group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] group-hover:bg-[#00f2fe] group-hover:text-black group-hover:border-cyan-400 flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
