import React, { useState } from 'react';
import { MessageBottle } from './OceanIcons';
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSending(true);
    // Simulate casting the bottle into the ocean delay
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      // Autoclose success message after a few seconds
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative z-10 container mx-auto px-6 overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
        
        {/* Left Side: Message Bottle Theme Narrative */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="relative">
            <MessageBottle className="w-40 h-48 mx-auto lg:mx-0 cursor-pointer hover:brightness-125 transition-all" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-cyan-400/10 rounded-full blur-md animate-pulse" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
              Send a Message Across the Ocean
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-sans mt-3 leading-relaxed">
              Have a position in mind or matching developer goals? Write your inquiry, seal it inside this digital flask, and cast it into the digital tide! Voonna regularly monitors the oceanic shore for newly received scrolls.
            </p>
          </div>

          {/* Social Anchor badging */}
          <div className="space-y-3 w-full">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              Direct Marine Radio:
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                id="social-github-link"
                href="https://github.com/jenilavoonna"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 hover:bg-[#00f2fe]/5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="social-linkedin-link"
                href="https://linkedin.com/in/voonna-jenila"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 hover:bg-[#00f2fe]/5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                id="social-email-link"
                href="mailto:jenilavoonna@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 hover:bg-[#00f2fe]/5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs font-mono text-gray-500">
              Personal Mailbox: <a href="mailto:jenilavoonna@gmail.com" className="hover:text-cyan-400 underline">jenilavoonna@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form Container */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.4)] relative">
            
            {/* Success Shield overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 z-20 bg-[#031533]/95 flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-[#05b293] animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-2">
                  Scroll Cast Into The Sea!
                </h3>
                <p className="text-gray-300 font-sans text-sm max-w-md leading-relaxed mb-6">
                  Thank you! Your message bottle has successfully been uncorked, recorded, and cast off. The tides of digital communication are swimming towards Voonna Jenila. Expect a feedback sonar response soon.
                </p>
                <button
                  id="send-another-btn"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-mono hover:bg-emerald-500/20 transition-all"
                >
                  Retrieve & Cast Another
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Marine Captain Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Admiral John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-ocean-dark/80 border border-white/10 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Communication coordinates (Email) *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. john@shipcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-ocean-dark/80 border border-white/10 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Scroll message (Your Inquiry) *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Compose your encrypted message coordinates, hiring timelines, or technology projects and we'll sail them forward..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-ocean-dark/80 border border-white/10 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] text-white rounded-xl px-4 py-3 text-sm placeholder:text-gray-600 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={isSending}
                  className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-aqua-blue to-cyan-500 hover:from-cyan-400 hover:to-blue-600 text-ocean-dark font-display font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-ocean-dark/35 border-t-ocean-dark animate-spin" />
                      <span className="font-mono text-sm uppercase tracking-wider">Casting scroll...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-ocean-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="text-sm uppercase tracking-wider">Cast Scroll Across the Sea</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
