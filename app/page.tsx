import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <WorkExperience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
