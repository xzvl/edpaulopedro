'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // TODO: wire up form submission
    alert('Message sent!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      className="py-32 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto"
      id="contact"
    >
      <div className="glass-card rounded-2xl p-8 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 hidden md:block">
          <span className="material-symbols-outlined text-[200px]">send</span>
        </div>

        <div className="max-w-2xl">
          <span className="font-label-mono text-label-mono text-cyber-red uppercase tracking-widest mb-4 block">
            Initialization
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12">
            Initialize Contact.
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="w-full md:w-auto bg-cyber-red text-white px-12 py-5 rounded-sm font-label-mono text-body-md uppercase tracking-widest cyber-red-glow transition-all active:scale-95"
            >
              Execute Dispatch
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
