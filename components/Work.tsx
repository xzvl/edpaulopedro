const projects = [
  {
    id: 1,
    colSpan: 'md:col-span-8',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdz8znCb3x1f9siZ6oZVIqzaqdqiN_sSiy4XCsq0Z5KYNFSsUDm6qi9AyoKr185OVeYDdcGEg4NueQC8A-dVDPF3aPgX8pDvxssJiQREe9riXUFtKyjG3CNH5TPZdZkAFb3-lFfxWncMU0eZvnlHZIqMBdbkd_b66NcxfnMHsVu6kELji3vlTOGqdborU7cq5Fbfz73vSA0p6wcn4cr0tQZpYZh-OASsJw07f0VSCGsb4M7l9C9mcmZEDTlzaK-bRvLzMY8XkiXLCH',
    alt: 'Neo-Finance Architecture fintech dashboard',
    tags: ['REACT', 'FINTECH'],
    title: 'Neo-Finance Architecture',
    description: 'A high-performance trading dashboard built for sub-second data processing and visualization.',
    scanline: true,
  },
  {
    id: 2,
    colSpan: 'md:col-span-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmHCJwK37snIdhxFNN5ru7J7h0KSpzdzelyncrvCBnbSO5MMp0hVknZOsw2sHXqMivkLMFmWsxi4mqA3_C40KWWLmcRMaTbhbt5Oev0ukPURA0UFr9JOapsTGa4WYI3CHqldjE-g1Q5_ntNSCMOcseuCGmIs2Ou25VM-0lcH4IpSDphGHX-pQcVtxtCF909R6W-V42quGFzUPl3ceEgayup8vYa7KTTqLz4vZ7r2cuX--4DPVBGJpYjt45QxMvgnqSr763jJWz9_2K',
    alt: 'Titan Store e-commerce storefront',
    tags: ['SHOPIFY'],
    title: 'Titan Store',
    description: 'Headless e-commerce infrastructure for elite hardware.',
    scanline: false,
  },
  {
    id: 3,
    colSpan: 'md:col-span-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh_E_3cQT_XNZQUEgZCoam1CB5kHU1bTZ1YQ_pG3StdKIwxKHnmNngwbStiRvGo6Dp4fGL-T04CDW4b53nfH1bA1G-t_ystUmlxir8cPNgoMbMQYjj9oYw9xq8KD466Xdf1dTp-nUceDQdFAI2i1R5sqUnTeOQ3e6keaY1US17ObdseMM6MBLY5A-ebIcbf6C9AQlDzFAHuQBA-jaKkXRFAXGRhp5_s7rxDfcsw5c2jAIXM75lOd-2yhDSfigb7HPQ6IEf8DxvrH-f',
    alt: 'Synopsis UI design system',
    tags: ['SYSTEMS'],
    title: 'Synopsis UI',
    description: 'Scalable design tokens for enterprise-grade applications.',
    scanline: false,
  },
  {
    id: 4,
    colSpan: 'md:col-span-8',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPuL7-_RPKvdjTM-Quuc81duJRnb9WUMgl6yexebxg1Xcobm_tZwukW7ckE4DYGUa7-3lqjqbJYLegWneyhvolou3ecHsgMaMtQBP03nsoCrhnNWbzX4vEblqGAVyHs6OCLJe43cao11bjzLTvjpzlJTmKLSAdAdF83SY12Iq8SLcleivbLZgCP-bwZ5gy_nN6mqJIvvinQL31JM04VjugEhnQnwszKKSsxXuw0N1VGTV9R3keXF6aw4614ycogw2gTFzoUYPfhQ5R',
    alt: 'Quantum Analytics data visualization',
    tags: ['BIG DATA', 'PYTHON'],
    title: 'Quantum Analytics',
    description: 'Real-time processing for planetary-scale data streams.',
    scanline: true,
  },
]

export default function Work() {
  return (
    <section className="py-32 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto" id="work">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
          <span className="font-label-mono text-label-mono text-cyber-red uppercase mb-4 block tracking-widest">
            Selected Works
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Curated Deployments //{' '}
            <span className="font-light opacity-50">Selected Case Studies</span>
          </h2>
        </div>
        <div className="hidden md:block h-[1px] flex-grow bg-white/10 mx-12 mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project) => (
          <div key={project.id} className={`${project.colSpan} glass-card rounded-xl overflow-hidden group`}>
            <div className="relative h-[400px] md:h-[500px]">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
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
        ))}
      </div>
    </section>
  )
}
