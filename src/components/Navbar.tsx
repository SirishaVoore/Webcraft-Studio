import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040507]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 lg:gap-10">
        {/* Brand Logo on Left with generous breathing space */}
        <a
          href="#home"
          id="navbar-brand-logo"
          className="flex items-center gap-2.5 text-white group cursor-pointer shrink-0 mr-2 lg:mr-6"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <span className="text-[#39d6ce] text-lg group-hover:rotate-12 transition-transform duration-300 inline-block font-sans">
            ✦
          </span>
          <span className="font-sans font-semibold tracking-tight text-lg sm:text-xl flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-white">Webcraft</span>
            <span className="text-[#39d6ce]">Studio</span>
          </span>
        </a>

        {/* Desktop Nav Links in a clean, balanced single horizontal row */}
        <nav
          id="navbar-desktop-links"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-slate-300 font-sans font-medium whitespace-nowrap"
        >
          <button
            id="nav-link-why-us"
            onClick={() => scrollToSection('funnel-leaks')}
            className="hover:text-[#39d6ce] transition-colors cursor-pointer whitespace-nowrap py-1"
          >
            Why Us
          </button>
          <button
            id="nav-link-methodology"
            onClick={() => scrollToSection('methodology')}
            className="hover:text-[#39d6ce] transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap py-1"
          >
            <span>Methodology</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#39d6ce] animate-pulse"></span>
          </button>
          <button
            id="nav-link-portfolio"
            onClick={() => scrollToSection('portfolio')}
            className="hover:text-[#39d6ce] transition-colors cursor-pointer whitespace-nowrap py-1"
          >
            Portfolio
          </button>
          <button
            id="nav-link-pricing"
            onClick={() => scrollToSection('pricing')}
            className="hover:text-[#39d6ce] transition-colors cursor-pointer whitespace-nowrap py-1"
          >
            Pricing & FAQs
          </button>
          <button
            id="nav-link-inquiry"
            onClick={() => scrollToSection('inquiry')}
            className="hover:text-[#39d6ce] transition-colors cursor-pointer whitespace-nowrap py-1"
          >
            Inquiry
          </button>
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden md:flex items-center gap-3.5 shrink-0 ml-2 lg:ml-6">
          <button
            id="nav-cta-inquiry"
            onClick={() => scrollToSection('inquiry')}
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors cursor-pointer whitespace-nowrap"
          >
            Get in touch
          </button>
          <button
            id="nav-cta-start-build"
            onClick={onOpenEstimator}
            className="bg-[#39d6ce] text-black font-sans font-semibold text-sm px-5 py-2 rounded-md hover:bg-[#2cc2ba] transition-all duration-200 shadow-md shadow-[#39d6ce]/20 active:scale-[0.98] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Start Your Build</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="navbar-mobile-drawer"
          className="md:hidden bg-[#0a0d13] border-b border-white/[0.1] px-6 py-6 space-y-4 shadow-2xl"
        >
          <div className="flex flex-col space-y-3 text-base text-slate-200 font-medium">
            <button
              onClick={() => scrollToSection('funnel-leaks')}
              className="text-left py-2 hover:text-[#39d6ce] transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-left py-2 hover:text-[#39d6ce] transition-colors flex items-center justify-between"
            >
              <span>Build Methodology</span>
              <span className="text-xs bg-[#39d6ce]/10 text-[#39d6ce] border border-[#39d6ce]/30 px-2 py-0.5 rounded">
                4 Phases
              </span>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 hover:text-[#39d6ce] transition-colors"
            >
              Portfolio & Work
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 hover:text-[#39d6ce] transition-colors"
            >
              Pricing & Retainers
            </button>
            <button
              onClick={() => scrollToSection('inquiry')}
              className="text-left py-2 hover:text-[#39d6ce] transition-colors"
            >
              Contact / Inquiry
            </button>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full bg-[#39d6ce] text-black font-semibold text-center py-2.5 rounded-md hover:bg-[#2cc2ba] transition-colors shadow-lg shadow-[#39d6ce]/20"
            >
              Start Your Build
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('inquiry');
              }}
              className="w-full bg-white/[0.05] border border-white/[0.15] text-white text-center py-2.5 rounded-md hover:bg-white/[0.1] transition-colors text-sm"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
