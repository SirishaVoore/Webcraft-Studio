import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Calculator, Calendar, DollarSign, Send } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState<string>('full-build');
  const [velocityTier, setVelocityTier] = useState<string>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cms', 'animations']);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'landing', name: 'High-Conversion Landing Page', basePrice: 4200, duration: '1-2 Weeks' },
    { id: 'full-build', name: 'Full Custom Web & SaaS App', basePrice: 9800, duration: '4-5 Weeks' },
    { id: 'design-system', name: 'Design System & Token Architecture', basePrice: 5600, duration: '2-3 Weeks' },
    { id: 'ecommerce', name: 'Luxury Direct E-Commerce Flagship', basePrice: 8400, duration: '3-4 Weeks' },
  ];

  const velocityTiers = [
    { id: 'standard', name: 'Standard Rigor (Phases 01-04)', multiplier: 1.0, note: 'Normal pace' },
    { id: 'fast-track', name: 'Fast-Track Sprint (Double Capacity)', multiplier: 1.25, note: 'Accelerated 40% faster' },
    { id: 'emergency', name: 'Critical Launch Rush (7-10 Days)', multiplier: 1.5, note: 'Maximum priority' },
  ];

  const availableAddons = [
    { id: 'cms', name: 'Headless CMS (Sanity / Supabase)', price: 1200 },
    { id: 'animations', name: '60 FPS Micro-Physics & WebGL', price: 1500 },
    { id: 'ai-copilot', name: 'Gemini AI Assistant / Smart Workflows', price: 2400 },
    { id: 'seo-analytics', name: 'Enterprise SEO & Telemetry Matrix', price: 900 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[1];
  const selectedVelocityObj = velocityTiers.find((v) => v.id === velocityTier) || velocityTiers[0];

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = availableAddons.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const estimatedTotal = Math.round((selectedTypeObj.basePrice + addonsTotal) * selectedVelocityObj.multiplier);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType: selectedTypeObj.name,
          velocityTier: selectedVelocityObj.name,
          selectedAddons: selectedAddons.map(
            (id) => availableAddons.find((a) => a.id === id)?.name ?? id
          ),
          estimatedTotal,
          clientName,
          clientEmail,
          projectNotes,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch {
      alert('Failed to send build spec. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl bg-[#090d14] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#090d14]/95 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">✦</span>
            <h3 className="text-base font-bold text-white font-syne">
              Interactive Scope & Build Configurator
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
                <Check size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white font-syne">
                Build Specification Received!
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{clientName || 'Partner'}</strong>. We have generated your preliminary scope blueprint for{' '}
                <span className="text-cyan-300 font-semibold">${estimatedTotal.toLocaleString()}</span>. Our founding lead will review and email you at{' '}
                <strong className="text-white">{clientEmail || 'your email'}</strong> within 2 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#00f2fe] text-black font-semibold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  01. Select Project Architecture & Deliverable Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        projectType === type.id
                          ? 'bg-cyan-950/30 border-cyan-500/60 shadow-md shadow-cyan-950/40'
                          : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white text-sm font-syne">
                          {type.name}
                        </span>
                        {projectType === type.id && (
                          <div className="w-4 h-4 rounded-full bg-cyan-400 text-black flex items-center justify-center">
                            <Check size={10} className="stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
                        <span>Base: ${type.basePrice.toLocaleString()}</span>
                        <span>{type.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Velocity Tier */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  02. Timeline & Execution Velocity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {velocityTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setVelocityTier(tier.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        velocityTier === tier.id
                          ? 'bg-cyan-950/30 border-cyan-500/60 shadow-md shadow-cyan-950/40'
                          : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="font-semibold text-white text-xs font-syne">{tier.name}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{tier.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-on Modules */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  03. Technical & AI Modules
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableAddons.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        type="button"
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-white/[0.06] border-cyan-500/50'
                            : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked
                                ? 'bg-cyan-400 border-cyan-400 text-black'
                                : 'border-slate-600 bg-transparent'
                            }`}
                          >
                            {isChecked && <Check size={12} className="stroke-[3]" />}
                          </div>
                          <span className="text-xs text-slate-200 font-medium">{addon.name}</span>
                        </div>
                        <span className="text-xs text-cyan-400 font-mono">+${addon.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Real-time Calculation Summary Box */}
              <div className="p-5 rounded-xl bg-cyan-950/30 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                    Estimated Investment & Delivery
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-syne mt-1">
                    ${estimatedTotal.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400 font-sans">
                      (Fixed Quote)
                    </span>
                  </div>
                </div>
                <div className="text-right sm:border-l sm:border-white/[0.1] sm:pl-6 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 justify-end">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>Est. Delivery: {selectedTypeObj.duration}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Includes 30-Day Hypercare Guarantee
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-2 border-t border-white/[0.08]">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                  04. Your Details for Proposal Dispatch
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Founder"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email (e.g. founder@company.com)"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <textarea
                  rows={2}
                  placeholder="Optional brief notes or links to your current website/figma..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 text-xs font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-lg bg-[#39d6ce] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#2cc2ba] transition-all shadow-lg shadow-[#39d6ce]/25 flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Specification</span>
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
