import Image from 'next/image'
import AnimateIn from './AnimateIn'

export default function About() {
  return (
    <section
      className="py-32 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto overflow-hidden"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <AnimateIn from="left" delay={0}>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden glass-card p-2">
              <Image
                fill
                className="object-cover brightness-75"
                src="/assets/me.png"
                alt="Ed Paulo Pedro — senior developer portrait"
              />
            </div>
            <AnimateIn from="bottom" delay={300} className="absolute -bottom-10 -right-10 hidden md:block">
              <div className="glass-card p-8 rounded-xl">
                <div className="space-y-6">
                  <div>
                    <div className="font-display-xl text-headline-lg text-cyber-red">1000+</div>
                    <div className="font-label-mono text-[10px] uppercase tracking-tighter">
                      Website Handled
                    </div>
                  </div>
                  <div>
                    <div className="font-display-xl text-headline-lg text-on-surface">10+</div>
                    <div className="font-label-mono text-[10px] uppercase tracking-tighter">
                      Platform Learned
                    </div>
                  </div>
                  <div>
                    <div className="font-display-xl text-headline-lg text-on-surface">12+</div>
                    <div className="font-label-mono text-[10px] uppercase tracking-tighter">
                      Years of Experience
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </AnimateIn>

        <div className="space-y-8">
          <AnimateIn from="right" delay={0}>
            <span className="font-label-mono text-label-mono text-cyber-red uppercase tracking-widest">
              THE DEVELOPER // BIO
            </span>
          </AnimateIn>
          <AnimateIn from="right" delay={100}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Ed Paulo <span className="text-cyber-red">Pedro.</span>
            </h2>
          </AnimateIn>
          <AnimateIn from="right" delay={200}>
            <p className="font-body-lg">
              I am a passionate and experienced Senior Web Developer with more than 12 years of experience in web development, WordPress development, and full-stack solutions. Throughout my career, I have worked with local and international companies in remote and on-site environments, delivering high-quality websites, custom themes, plugins, and web applications. I specialize in technologies such as HTML, PHP, CSS, JavaScript, ReactJS, NextJS, WordPress, Shopify, Webflow, API integration, and AI automation tools like Zapier.
            </p>
          </AnimateIn>
          <AnimateIn from="right" delay={320}>
            <p className="font-body-lg text-on-surface-variant">
              I am highly adaptable, detail-oriented, and committed to continuous learning to stay updated with modern web technologies and industry trends. My experience in handling multiple projects, collaborating with teams, and providing efficient digital solutions has strengthened my ability to work under pressure while maintaining quality and performance. I am passionate about creating user-friendly, responsive, and scalable websites that help businesses grow and succeed online.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
