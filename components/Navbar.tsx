'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#work', label: 'Work', id: 'work' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/15 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop py-6 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/assets/alt-logo.webp" alt="Ed Paulo Pedro" width={160} height={40} className="lg:h-10 h-6 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label, id }) => {
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={href}
                className={`relative font-body-md text-body-md uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-on-surface' : 'text-on-surface-variant/70 hover:text-on-surface'}`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px bg-cyber-red transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`} />
              </a>
            )
          })}
          <a
            href="/assets/resume-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyber-red text-white px-6 py-2 rounded-sm font-label-mono uppercase tracking-widest cyber-red-glow transition-all active:scale-95"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-on-surface relative w-6 h-5 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
          <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
          <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
        </button>
      </div>

      <div className={`md:hidden flex flex-col gap-6 px-6 border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 pb-6 pt-4 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0'}`}>
        {navLinks.map(({ href, label, id }) => {
          const isActive = activeSection === id
          return (
            <a
              key={id}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-body-md text-body-md uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-on-surface' : 'text-on-surface-variant/70 hover:text-on-surface'}`}
            >
              {label}
            </a>
          )
        })}
        <a
          href="/assets/resume-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="bg-cyber-red text-white px-6 py-2 rounded-sm font-label-mono uppercase tracking-widest cyber-red-glow transition-all text-center"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}
