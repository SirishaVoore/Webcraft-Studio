import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, MessageSquare, Clock, Shield } from 'lucide-react';

export const InquirySection: React.FC = () => {
  const [services, setServices] = useState<string[]>(['Custom Web Build']);
  const [budget, setBudget] = useState<string>('$10k - $25k');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const availableServices = [
    'Custom Web Build',
    'Design Sprint (2-Wk)',
    'Design System & Tokens',
    'Full SaaS Product UI',
    'Monthly Studio Retainer',
  ];

  const budgetTiers = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      if (services.length > 1) {
        setServices(services.filter((s) => s !== srv));
      }
    } else {
      setServices([...services, srv]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('http://localhost:3001/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          services,
          budget,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      alert('Failed to send inquiry. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section id="inquiry" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#040507] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Direct Project Initiation
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-syne tracking-tight">
            Let's Build Something Exceptional.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed font-normal">
            Have a project in mind? Fill in your scope or book a direct technical discovery call with our leads.
          </p>
        </div>

        {/* Inquiry Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090d14]/90 border border-white/[0.1] shadow-2xl relative overflow-hidden">
          {status === 'success' ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white font-syne">
                Inquiry Successfully Logged!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. We have routed your inquiry directly to our principal engineering and design leads. Expect a personalized response within 2 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-medium text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                  I'm interested in:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {availableServices.map((srv) => {
                    const isSelected = services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#00f2fe] text-black font-semibold shadow-md shadow-cyan-500/20'
                            : 'bg-white/[0.03] text-slate-300 border border-white/[0.08] hover:bg-white/[0.07]'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                  Estimated Budget Tier:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono font-medium transition-all text-center cursor-pointer ${
                        budget === tier
                          ? 'bg-cyan-950/60 border border-cyan-400 text-cyan-300'
                          : 'bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:bg-white/[0.05]'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Company or Startup URL</label>
                <input
                  type="text"
                  placeholder="https://yourcompany.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Project Goals & Key Requirements</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about what you are building, timeline expectations, and target audience..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock size={14} className="text-cyan-400" />
                  <span>Guaranteed response under 2 hours</span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#39d6ce] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#2cc2ba] transition-all shadow-xl shadow-[#39d6ce]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{status === 'submitting' ? 'Transmitting Scope...' : 'Submit Inquiry'}</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
