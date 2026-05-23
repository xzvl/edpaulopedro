'use client'

import { useState, FormEvent } from 'react'
import AnimateIn from './AnimateIn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <section
      className="py-32 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto"
      id="contact"
    >
      <AnimateIn from="bottom" delay={0}>
        <div className="glass-card rounded-2xl p-8 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 hidden md:block">
            <span className="material-symbols-outlined text-[200px]">send</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <AnimateIn from="bottom" delay={100}>
                <span className="font-label-mono text-label-mono text-cyber-red uppercase tracking-widest mb-4 block">
                  Initialization
                </span>
              </AnimateIn>
              <AnimateIn from="bottom" delay={200}>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12">
                  Initialize Contact.
                </h2>
              </AnimateIn>

              <AnimateIn from="bottom" delay={300} className="flex flex-col gap-6 mb-12">
                <a href="mailto:ed.paulo.pedro@gmail.com" className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-cyber-red text-2xl">mail</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant group-hover:text-on-surface transition-colors">
                    ed.paulo.pedro@gmail.com
                  </span>
                </a>
                <a href="tel:+639957118740" className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-cyber-red text-2xl">call</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant group-hover:text-on-surface transition-colors">
                    +63 995 711 8740
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-cyber-red text-2xl">location_on</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Pampanga, Philippines
                  </span>
                </div>
              </AnimateIn>
            </div>

            <div>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <AnimateIn from="bottom" delay={300}>
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-cyber-red text-on-surface font-body-lg py-4 transition-all peer placeholder-transparent"
                    id="name"
                    placeholder="Name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <label
                    className="absolute left-0 top-4 text-on-surface-variant font-label-mono uppercase text-[10px] tracking-widest transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-cyber-red"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                </div>
              </AnimateIn>

              <AnimateIn from="bottom" delay={400}>
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-cyber-red text-on-surface font-body-lg py-4 transition-all peer placeholder-transparent"
                    id="email"
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <label
                    className="absolute left-0 top-4 text-on-surface-variant font-label-mono uppercase text-[10px] tracking-widest transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-cyber-red"
                    htmlFor="email"
                  >
                    Digital Address
                  </label>
                </div>
              </AnimateIn>

              <AnimateIn from="bottom" delay={500}>
                <div className="relative">
                  <textarea
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-cyber-red text-on-surface font-body-lg py-4 transition-all peer placeholder-transparent"
                    id="message"
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                  <label
                    className="absolute left-0 top-4 text-on-surface-variant font-label-mono uppercase text-[10px] tracking-widest transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-cyber-red"
                    htmlFor="message"
                  >
                    Transmission Data
                  </label>
                </div>
              </AnimateIn>

              <AnimateIn from="bottom" delay={620}>
                <div className="flex flex-col gap-4 items-start">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full md:w-auto bg-cyber-red text-white px-12 py-5 rounded-sm font-label-mono text-body-md uppercase tracking-widest cyber-red-glow transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Transmitting...' : 'Execute Dispatch'}
                  </button>

                  {status === 'sent' && (
                    <p className="font-label-mono text-[10px] uppercase tracking-widest text-cyber-red">
                      Transmission received.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="font-label-mono text-[10px] uppercase tracking-widest text-red-400">
                      Transmission failed. Try again.
                    </p>
                  )}
                </div>
              </AnimateIn>
            </form>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  )
}
