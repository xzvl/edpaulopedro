'use client'

import { useState } from 'react'
import { LOGO_DATA_URI } from '@/lib/constants'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/15 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop py-6 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <img alt="Obsidian Core Logo" className="h-8 w-auto" src={LOGO_DATA_URI} />
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
            Obsidian Core
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant/70 hover:text-on-surface transition-colors duration-300"
            href="#work"
          >
            Work
          </a>
          <a
            className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant/70 hover:text-on-surface transition-colors duration-300"
            href="#skills"
          >
            Tech
          </a>
          <a
            className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant/70 hover:text-on-surface transition-colors duration-300"
            href="#about"
          >
            Philosophy
          </a>
          <a
            href="#contact"
            className="bg-cyber-red text-white px-6 py-2 rounded-sm font-label-mono uppercase tracking-widest cyber-red-glow transition-all active:scale-95"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 border-t border-white/10 pt-4">
          <a
            className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant/70 hover:text-on-surface transition-colors"
            href="#work"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>
          <a
            className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant/70 hover:text-on-surface transition-colors"
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            Tech
          </a>
          <a
            className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant/70 hover:text-on-surface transition-colors"
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            Philosophy
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-cyber-red text-white px-6 py-2 rounded-sm font-label-mono uppercase tracking-widest cyber-red-glow transition-all text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
