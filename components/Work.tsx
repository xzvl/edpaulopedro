import Image from 'next/image'
import AnimateIn from './AnimateIn'

const projects = [
  {
    id: 1,
    colSpan: 'md:col-span-8',
    image: '/assets/ruhdental.png',
    alt: 'Ruh Dental',
    tags: ['Wordpress', 'GM 2025'],
    title: 'Ruh Dental',
    description: 'ruhdental.com',
    scanline: true,
  },
  {
    id: 2,
    colSpan: 'md:col-span-4',
    image: '/assets/thechurchatrb.png',
    alt: 'The Church at RB',
    tags: ['Webflow', 'GM 2025'],
    title: 'The Church at RB',
    description: 'www.thechurchrb.org',
    scanline: false,
  },
  {
    id: 3,
    colSpan: 'md:col-span-4',
    image: '/assets/lyfe-fuel.png',
    alt: 'Lyfe Fuel',
    tags: ['Shopify', 'GM 2026'],
    title: 'Lyfe Fuel',
    description: 'lyfefuel.com',
    scanline: false,
  },
  {
    id: 4,
    colSpan: 'md:col-span-8',
    image: '/assets/gemspire.png',
    alt: 'Gemspire',
    tags: ['Wix', 'GM 2026'],
    title: 'Gemspire',
    description: 'www.gemspire.org',
    scanline: true,
  },
]

export default function Work() {
  return (
    <section className="py-32 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto" id="work">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl w-[100%]">
          <AnimateIn from="left" delay={0}>
            <span className="font-label-mono text-label-mono text-cyber-red uppercase mb-4 block tracking-widest">
              Works
            </span>
          </AnimateIn>
          <AnimateIn from="left" delay={120}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Portfolio //{' '}
              <span className="font-light opacity-50">Websites</span>
            </h2>
          </AnimateIn>
        </div>
        <div className="hidden md:block h-[1px] flex-grow bg-white/10 mx-12 mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, i) => (
          <AnimateIn key={project.id} className={`${project.colSpan}`} delay={i * 120}>
            <div className="glass-card rounded-xl overflow-hidden group h-full">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={project.image}
                  alt={project.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-sm font-label-mono text-[10px] text-on-surface border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                </div>
                {project.scanline && <div className="scanline" />}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
