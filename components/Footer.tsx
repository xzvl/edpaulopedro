import { LOGO_DATA_URI } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 w-full py-12 px-6 md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <img alt="Obsidian Core Logo" className="h-6 w-auto" src={LOGO_DATA_URI} />
          <span className="font-headline-md text-headline-md text-on-surface">Obsidian Core</span>
        </div>

        <div className="flex gap-8">
          <a
            className="font-label-mono text-label-mono uppercase text-on-surface-variant/50 hover:text-cyber-red transition-colors"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-label-mono text-label-mono uppercase text-on-surface-variant/50 hover:text-cyber-red transition-colors"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-label-mono text-label-mono uppercase text-on-surface-variant/50 hover:text-cyber-red transition-colors"
            href="#"
          >
            Source Code
          </a>
        </div>

        <p className="font-label-mono text-label-mono uppercase text-on-surface-variant/30">
          © 2024 Obsidian Core. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
