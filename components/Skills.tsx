const groups = [
  {
    title: 'Core Runtimes',
    icon: 'terminal',
    skills: [
      { icon: 'javascript', label: 'Next.js' },
      { icon: 'code', label: 'TypeScript' },
    ],
  },
  {
    title: 'Edge Systems',
    icon: 'lan',
    skills: [
      { icon: 'database', label: 'PostgreSQL' },
      { icon: 'shopping_bag', label: 'Shopify' },
      { icon: 'palette', label: 'Tailwind' },
      { icon: 'hub', label: 'GraphQL' },
    ],
  },
  {
    title: 'Orchestration',
    icon: 'cloud',
    skills: [
      { icon: 'cloud_queue', label: 'AWS' },
      { icon: 'memory', label: 'Redis' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-margin-desktop bg-surface-container-lowest/50" id="skills">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-24">
          <span className="font-label-mono text-label-mono text-cyber-red uppercase tracking-widest mb-4 block">
            Core Competencies
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            The Stack //{' '}
            <span className="font-light opacity-50">Version 4.0</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {groups.map((group) => (
            <div key={group.title} className="space-y-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
