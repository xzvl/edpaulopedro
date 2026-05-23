export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        <span className="font-display-xl text-display-xl text-outline-stroke opacity-10 tracking-widest scale-[3] md:scale-[5]">
          CORE
        </span>
      </div>

      <div className="relative z-10 w-full max-w-container-max px-6 md:px-margin-desktop text-center">
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyber-red/30 bg-cyber-red/5">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse" />
          <span className="font-label-mono text-label-mono text-cyber-red uppercase">
            System Status: Optimized
          </span>
        </div>

        <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl mb-6 text-on-surface">
          Hello, I&apos;m&nbsp;
          <span className="text-cyber-red">Ed&nbsp;</span>
          <span style={{ letterSpacing: '-0.04em' }}>a</span>
          <div>
            <span style={{ letterSpacing: '-0.04em' }}>Web Developer</span>
          </div>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Senior Web Developer specializing in high-performance systems and technical minimalism.
          Building the next generation of scalable interfaces.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            className="w-full md:w-auto bg-cyber-red text-white px-10 py-4 rounded-sm font-label-mono text-body-md uppercase tracking-widest cyber-red-glow transition-all"
            href="#work"
          >
            View Work
          </a>
          <a
            className="w-full md:w-auto border border-white/20 hover:border-cyber-red/50 text-on-surface px-10 py-4 rounded-sm font-label-mono text-body-md uppercase tracking-widest transition-all backdrop-blur-sm"
            href="#"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
      </div>
    </section>
  )
}
