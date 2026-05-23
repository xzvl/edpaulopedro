import AnimateIn from './AnimateIn'

const groups = [
  {
    title: 'Full Stacks',
    icon: 'terminal',
    skills: [
      { icon: 'javascript', label: 'Next.js' },
      { icon: 'code', label: 'TypeScript' },
      { icon: 'php', label: 'PHP' },
    ],
  },
  {
    title: 'Content Management Systems',
    icon: 'lan',
    skills: [
      { icon: 'article', label: 'WordPress' },
      { icon: 'design_services', label: 'Webflow' },
      { icon: 'shopping_bag', label: 'Shopify' },
      { icon: 'grid_view', label: 'Squarespace' },
      { icon: 'web', label: 'Wix' },
      { icon: 'hub', label: 'Hubspot' },
    ],
  },
  {
    title: 'Databases & Cloud',
    icon: 'cloud',
    skills: [
      { icon: 'hub', label: 'MySQL' },
      { icon: 'database', label: 'PostgreSQL' },
    ],
  },
]

const platforms = [
  { icon: 'cloud_queue', label: 'AWS' },
  { icon: 'memory', label: 'Hosting' },
  { icon: 'palette', label: 'Tailwind' },
  { icon: 'palette', label: 'Bootstrap' },
  { icon: 'html', label: 'HTML' },
  { icon: 'css', label: 'CSS' },
  { icon: 'javascript', label: 'Javascript' },
  { icon: 'source', label: 'GitHub' },
  { icon: 'bolt', label: 'Zapier' },
]

export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-margin-desktop bg-surface-container-lowest/50" id="skills">
      <div className="max-w-container-max mx-auto">
        <div className="md:text-center mb-24">
          <AnimateIn from="none" delay={0}>
            <span className="font-label-mono text-label-mono text-cyber-red uppercase tracking-widest mb-4 block">
              Skills
            </span>
          </AnimateIn>
          <AnimateIn from="bottom" delay={120}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              CMS //{' '}
              <span className="font-light opacity-50">Platforms</span>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {groups.map((group, i) => (
            <AnimateIn key={group.title} from="bottom" delay={i * 150} className="space-y-8">
              <h3 className="font-label-mono text-body-md text-on-surface border-b border-white/10 pb-4 flex items-center justify-between">
                {group.title}
                <span className="material-symbols-outlined text-cyber-red">{group.icon}</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="glass-card p-6 flex flex-col items-center gap-3 group hover:border-cyber-red/50 transition-all"
                  >
                    <span className="material-symbols-outlined text-3xl group-hover:text-cyber-red transition-colors">
                      {skill.icon}
                    </span>
                    <span className="font-label-mono text-[10px] uppercase">{skill.label}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <AnimateIn from="bottom" delay={0}>
            <h3 className="font-label-mono text-body-md text-on-surface border-b border-white/10 pb-4 flex items-center justify-between">
              Platforms &amp; Tools
              <span className="material-symbols-outlined text-cyber-red">tune</span>
            </h3>
          </AnimateIn>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
            {platforms.map((skill, i) => (
              <AnimateIn key={skill.label} from="bottom" delay={i * 60}>
                <div className="glass-card p-6 flex flex-col items-center gap-3 group hover:border-cyber-red/50 transition-all">
                  <span className="material-symbols-outlined text-3xl group-hover:text-cyber-red transition-colors">
                    {skill.icon}
                  </span>
                  <span className="font-label-mono text-[10px] uppercase">{skill.label}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
