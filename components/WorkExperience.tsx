import AnimateIn from './AnimateIn'

const experiences = [
  {
    company: 'Build Page',
    role: 'Junior Web Developer',
    type: 'Full Time',
    mode: 'On Site',
    period: 'April 2014 — January 2015',
    current: false,
    skills: [
      'WordPress', 'Custom Theme', 'WooCommerce', 'PHP', 'HTML', 'CSS',
      'Javascript', 'jQuery', 'AJAX', 'phpMyAdmin', 'MySQL', 'PHP Frameworks', 'Photoshop',
    ],
  },
  {
    company: 'Powered Office',
    role: 'Junior Web Developer',
    type: 'Full Time',
    mode: 'On Site',
    period: 'February 2015 — September 2015',
    current: false,
    skills: [
      'WordPress', 'WP Bakery', 'Visual Composer', 'WooCommerce', 'PHP', 'HTML', 'CSS',
      'Javascript', 'jQuery', 'AJAX', 'phpMyAdmin', 'MySQL', 'PHP Frameworks',
      'Photoshop', 'Adobe XD',
    ],
  },
  {
    company: 'Capital Tech Co.',
    role: 'Junior Web Developer',
    type: 'Full Time',
    mode: 'On Site',
    period: 'April 2015 — August 2015',
    current: false,
    skills: [
      'WordPress', 'WP Bakery', 'Visual Composer', 'WooCommerce', 'PHP', 'HTML', 'CSS',
      'Javascript', 'jQuery', 'AJAX', 'phpMyAdmin', 'MySQL', 'PHP Frameworks',
      'Photoshop', 'Adobe XD',
    ],
  },
  {
    company: 'Glue Digital',
    role: 'Senior Web Developer',
    type: 'Full Time',
    mode: 'Remote',
    period: 'September 2014 — August 2017',
    current: false,
    skills: [
      'WordPress', 'WP Bakery', 'Visual Composer', 'WooCommerce', 'Shopify',
      'API Integration', 'PHP', 'HTML', 'CSS', 'Javascript', 'jQuery', 'AJAX',
      'phpMyAdmin', 'MySQL', 'PostgreSQL', 'PHP Frameworks', 'Photoshop', 'Adobe XD', 'Git',
    ],
  },
  {
    company: 'Net Fusion Technology',
    role: 'Senior Web Developer',
    type: 'Full Time',
    mode: 'Remote',
    period: 'November 2014 — October 2022',
    current: false,
    skills: [
      'WordPress', 'WP Bakery', 'Visual Composer', 'Oxygen', 'WooCommerce', 'Shopify',
      'Wix', 'SquareSpace', 'API Integration', 'PHP', 'HTML', 'CSS', 'Javascript',
      'jQuery', 'AJAX', 'phpMyAdmin', 'MySQL', 'PostgreSQL', 'PHP Frameworks',
      'Zapier', 'Photoshop', 'Adobe XD', 'Git',
    ],
  },
  {
    company: 'Growmodo',
    role: 'Senior Web Developer',
    type: 'Full Time',
    mode: 'Remote',
    period: 'May 2021 — May 2026',
    current: false,
    skills: [
      'WordPress', 'Elementor', 'Divi', 'WP Bakery', 'Gutenberg', 'WooCommerce',
      'Webflow', 'Shopify', 'Wix', 'SquareSpace', 'HubSpot', 'Unbounce',
      'API Integration', 'PHP', 'HTML', 'CSS', 'Javascript', 'jQuery', 'AJAX',
      'phpMyAdmin', 'MySQL', 'PostgreSQL', 'PHP Frameworks', 'Automation', 'Zapier',
      'ClickFunnels', 'Figma', 'Photoshop', 'Canva', 'AI Specialist',
      'Git', 'TypeScript', 'Next.js', 'Ghost', 'Node.js',
    ],
  },
]

export default function WorkExperience() {
  return (
    <section
      className="py-32 px-6 md:px-margin-desktop bg-surface-container-lowest/50"
      id="experience"
    >
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="md:text-center mb-24">
          <AnimateIn from="none" delay={0}>
            <span className="font-label-mono text-label-mono text-cyber-red uppercase tracking-widest mb-4 block">
              Career
            </span>
          </AnimateIn>
          <AnimateIn from="bottom" delay={120}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Work{' '}
              <span className="font-light opacity-50">Experience</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0
              return (
                <AnimateIn key={`${exp.company}-${exp.period}`} from={isEven ? 'left' : 'right'} delay={i * 80}>
                  <div className={`md:grid md:grid-cols-2 md:gap-16 items-start ${isEven ? '' : ''}`}>
                    {/* Left column: date + meta (only on even, else spacer) */}
                    <div className={`hidden md:flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left order-last'} pt-2`}>
                      {isEven && (
                        <div className="space-y-2 pr-8">
                          <p className="font-label-mono text-[14px] text-cyber-red uppercase tracking-widest">
                            {exp.period}
                          </p>
                          <p className="font-label-mono text-[12px] text-on-surface-variant uppercase tracking-wider">
                            {exp.type} &middot; {exp.mode}
                          </p>
                        </div>
                      )}
                      {!isEven && (
                        <div className="space-y-2 pl-8">
                          <p className="font-label-mono text-[14px] text-cyber-red uppercase tracking-widest">
                            {exp.period}
                          </p>
                          <p className="font-label-mono text-[12px] text-on-surface-variant uppercase tracking-wider">
                            {exp.type} &middot; {exp.mode}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Card */}
                    <div className={`relative ${isEven ? 'pl-0 md:pl-8' : 'pl-0 md:pr-8'}`}>
                      {/* Timeline dot */}
                      <div className={`absolute top-6 hidden md:block w-3 h-3 rounded-full border-2 ${exp.current ? 'border-cyber-red bg-cyber-red' : 'border-cyber-red bg-surface-container-lowest'} ${isEven ? '-left-[38px]' : '-right-[38px]'}`} />

                      <div className="glass-card p-8 rounded-xl hover:border-cyber-red/30 transition-all space-y-5">
                        {/* Mobile: date */}
                        <div className="md:hidden space-y-1">
                          <p className="font-label-mono text-[14px] text-cyber-red uppercase tracking-widest">
                            {exp.period}
                          </p>
                          <p className="font-label-mono text-[12px] text-on-surface-variant uppercase tracking-wider">
                            {exp.type} &middot; {exp.mode}
                          </p>
                        </div>

                        {/* Company + role */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-display-xl text-body-lg text-on-surface leading-tight">
                              {exp.company}
                            </h3>
                            <p className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">
                              {exp.role}
                            </p>
                          </div>
                          {exp.current && (
                            <span className="shrink-0 font-label-mono text-[9px] uppercase tracking-widest text-cyber-red border border-cyber-red/50 px-2 py-1 rounded">
                              Current
                            </span>
                          )}
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="font-label-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-on-surface-variant border border-white/10 hover:border-cyber-red/40 hover:text-on-surface transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
