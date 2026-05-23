import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 w-full py-12 px-6 md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/assets/alt-logo.webp" alt="Ed Paulo Pedro" width={120} height={32} className="h-8 w-auto" />
        </div>

        <div className="flex gap-8">
          <a
            className="font-label-mono text-label-mono uppercase hover:text-cyber-red transition-colors"
            href="https://xzvl.vercel.app/"
          >
            XZVL
          </a>
          <a
            className="font-label-mono text-label-mono uppercase hover:text-cyber-red transition-colors"
            href="https://www.linkedin.com/in/edpaulopedro/"
          >
            LinkedIn
          </a>
          <a
            className="font-label-mono text-label-mono uppercase hover:text-cyber-red transition-colors"
            href="https://www.facebook.com/edpaulopedro"
          >
            Facebook
          </a>
        </div>

        <p className="font-label-mono text-label-mono uppercase">
          © 2026 Ed Paulo Pedro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
