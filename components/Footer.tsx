export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 w-full py-12 px-6 md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <img alt="Ed Paulo Pedro" className="h-8 w-auto" src="/assets/alt-logo.webp" />
        </div>

        <div className="flex gap-8">
          <a
            className="font-label-mono text-label-mono uppercase text-on-surface-variant/50 hover:text-cyber-red transition-colors"
            href="https://xzvl.vercel.app/"
          >
            XZVL
          </a>
          <a
            className="font-label-mono text-label-mono uppercase text-on-surface-variant/50 hover:text-cyber-red transition-colors"
            href="https://www.linkedin.com/in/edpaulopedro/"
          >
            LinkedIn
          </a>
          <a
            className="font-label-mono text-label-mono uppercase text-on-surface-variant/50 hover:text-cyber-red transition-colors"
            href="https://www.facebook.com/edpaulopedro"
          >
            Facebook
          </a>
        </div>

        <p className="font-label-mono text-label-mono uppercase text-on-surface-variant/30">
          © 2026 Ed Paulo Pedro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
