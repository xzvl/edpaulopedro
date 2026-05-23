export default function About() {
  return (
    <section
      className="py-32 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto overflow-hidden"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden glass-card p-2">
            <img
              className="w-full h-full object-cover grayscale brightness-75"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLVbvYdJr3REYK0uTct-8GdC0N17PRgkjMDREzSwA5nhmbzE4AcxCLVxh4bOWkvXgq5ULB8tbLUSUrKJmG7Dchr5BTK-GybAv3deIk8b-yWgcowxRgM7lSi1SzxoWv2g1uCct7AkrxeT61DjXvFMek7ePcVmxi3a1fXB3RRq6yJfLCR8sRshUy3JBVA4M7qBqCrf7oukGM2-Xl_pjT891AqnlkARcLDzK80dho9GzBjuvIXH-yZZxu4-NfeIX4Jsphz62ESmqUfHf4"
              alt="Ed Paulo Pedro — senior developer portrait"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-xl hidden md:block">
            <div className="space-y-6">
              <div>
                <div className="font-display-xl text-headline-lg text-cyber-red">120+</div>
                <div className="font-label-mono text-[10px] uppercase tracking-tighter">
                  Deploys Verified
                </div>
              </div>
              <div>
                <div className="font-display-xl text-headline-lg text-on-surface">99.9%</div>
                <div className="font-label-mono text-[10px] uppercase tracking-tighter">
                  Uptime Goal
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <span className="font-label-mono text-label-mono text-cyber-red uppercase tracking-widest">
            History
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            The Architect&apos;s <span className="text-cyber-red">Journey.</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            I build digital systems with the same precision and intent as physical engineering. My
            philosophy centers on &ldquo;Technical Minimalism&rdquo;—where every line of code serves
            a purpose, and performance is a feature, not an afterthought.
          </p>
          <div className="grid grid-cols-1 gap-6 pt-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-cyber-red">verified</span>
              <div>
                <h4 className="font-headline-md text-body-lg text-on-surface">Systems Thinker</h4>
                <p className="font-body-md text-on-surface-variant/70">
                  Approaching UI as a high-performance engine, optimized for speed and reliability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-cyber-red">design_services</span>
              <div>
                <h4 className="font-headline-md text-body-lg text-on-surface">Elite Craftsmanship</h4>
                <p className="font-body-md text-on-surface-variant/70">
                  Bridging the gap between brutalist engineering and cinematic aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
