import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'Website Development',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const agencyEmail = 'omniafore@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/aryanrai135/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Formulate clean mailto link without any price/budget fields
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello OMNIAFORE Team,\n\nMy name is ${formData.name} (${formData.email}).\n\nI am interested in: ${formData.service}\n\nProject Scope & Objectives:\n${formData.message}\n\nLooking forward to connecting.`
    );
    
    // Automatically trigger mail client
    window.location.href = `mailto:${agencyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 cyber-grid">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs tracking-wider uppercase mb-3">
            <span>// 04 DIRECT TRANSMISSION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Have an Idea? Let's Build Something Together.
          </h2>
          <p className="text-primary-muted text-base sm:text-lg">
            Whether you need a cutting-edge web application, custom software architecture, 
            or autonomous business AI agents, our engineers and designers are ready to deploy.
          </p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glow-card rounded-2xl p-6 sm:p-7 border border-surface-border group hover:border-accent-purple/60"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/15 flex items-center justify-center border border-accent-purple/30 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
                    Direct Email Dispatch
                  </span>
                  <h3 className="font-display font-semibold text-white text-base sm:text-xl break-all">
                    {agencyEmail}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-primary-muted mb-6 leading-relaxed">
                Reach our team directly. We review new project inquiries daily and reply with technical scoping within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${agencyEmail}?subject=Project%20Inquiry%20-%20OMNIAFORE`}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-mono font-semibold tracking-wide text-[#1e1e2e] bg-gradient-to-r from-accent-purple to-accent-cyan hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Mail</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-3 px-4 rounded-xl text-xs font-mono font-semibold tracking-wide text-primary bg-surface hover:bg-surface-cardHover border border-surface-border hover:border-accent-cyan/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-accent-green" />
                      <span className="text-accent-green">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-accent-cyan" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* LinkedIn Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glow-card rounded-2xl p-6 sm:p-7 border border-surface-border group hover:border-accent-blue/60"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/15 flex items-center justify-center border border-accent-blue/30 group-hover:scale-110 transition-transform shrink-0">
                  <Linkedin className="w-6 h-6 text-accent-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-xs text-accent-pink uppercase tracking-wider block">
                    Professional Network
                  </span>
                  <h3 className="font-display font-semibold text-white text-base sm:text-xl">
                    Aryan Rai on LinkedIn
                  </h3>
                </div>
              </div>

              <div className="mb-4 inline-block px-2.5 py-1 rounded bg-[#1e1e2e] border border-surface-border text-[11px] font-mono text-primary-muted max-w-full break-all">
                URL: <span className="text-accent-cyan">linkedin.com/in/aryanrai135</span>
              </div>

              <p className="text-xs text-primary-muted mb-6 leading-relaxed">
                Connect directly on LinkedIn for partnership inquiries, technical consulting, and updates on AI automation workflows.
              </p>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-mono font-semibold tracking-wide text-primary bg-surface hover:bg-surface-cardHover border border-surface-border hover:border-accent-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/link"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent-blue group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Quick Commitments / Specs */}
            <div className="p-4 rounded-xl bg-surface/30 border border-surface-border/60 font-mono text-xs text-primary-muted space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>Response Time: &lt; 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-green shrink-0" />
                <span>Strict Non-Disclosure Agreements Honored</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Terminal (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glow-card rounded-2xl p-6 sm:p-8 border border-surface-border relative"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5555] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#f1fa8c] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#50fa7b] inline-block" />
                  <span className="font-mono text-xs text-primary-muted ml-2">
                    client-brief-intake.sh
                  </span>
                </div>
                <div className="font-mono text-[11px] text-accent-green">
                  ENCRYPTED // TLS 1.3
                </div>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Aryan Rai"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-surface-border text-primary text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all placeholder:text-primary-dim"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. aryan@yourcompany.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-surface-border text-primary text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all placeholder:text-primary-dim"
                      />
                    </div>
                  </div>

                  {/* Service Category */}
                  <div>
                    <label className="block font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                      Service Discipline *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-surface-border text-primary text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                    >
                      <option value="Website Development">01 — Website Development</option>
                      <option value="Video Editing & Animation">02 — Video Editing & Animation</option>
                      <option value="Graphic Design & Image Editing">03 — Graphic Design & Image Editing</option>
                      <option value="Custom Software & Digital Platforms">04 — Custom Software & Platforms</option>
                      <option value="AI & Business Automation">05 — AI & Business Automation</option>
                      <option value="Full Digital Suite & Consulting">06 — Full Digital Suite & Consulting</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                      Project Objective & Timeline *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Briefly describe what you are looking to build, desired scope, target audience, and timeline..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1e1e2e] border border-surface-border text-primary text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all placeholder:text-primary-dim resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-mono font-semibold tracking-wider uppercase text-[#1e1e2e] bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#1e1e2e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Transmit Project Inquiry</span>
                  </button>
                  <p className="font-mono text-[11px] text-center text-primary-dim">
                    * Submitting initializes a direct dispatch to omniafore@gmail.com
                  </p>
                </form>
              ) : (
                /* Post-Submission Success State */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent-green/20 border border-accent-green/40 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-accent-green" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Inquiry Prepared!
                  </h3>
                  <p className="text-primary-muted text-sm max-w-md mb-6 leading-relaxed">
                    Your transmission has been configured. Your email client was triggered to send directly to{' '}
                    <span className="text-accent-cyan font-mono">{agencyEmail}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-surface border border-surface-border text-xs font-mono text-primary hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
