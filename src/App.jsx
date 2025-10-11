import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Volunteering from './components/Volunteering'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import BackgroundEffect from './components/BackgroundEffect'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'volunteering', 'contact']
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 0)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white">
      <BackgroundEffect />
      
      {/* Top fade/blur overlay - Cinematic seamless fade */}
      {isScrolled && (
        <div
          className="fixed top-0 left-0 right-0 pointer-events-none z-40"
          style={{
            height: '120px',
            background:
              'linear-gradient(180deg, ' +
              'rgba(0,0,0,0.85) 0%, ' +
              'rgba(0,0,0,0.72) 8%, ' +
              'rgba(0,0,0,0.58) 16%, ' +
              'rgba(0,0,0,0.45) 24%, ' +
              'rgba(0,0,0,0.33) 32%, ' +
              'rgba(0,0,0,0.23) 40%, ' +
              'rgba(0,0,0,0.15) 50%, ' +
              'rgba(0,0,0,0.09) 60%, ' +
              'rgba(0,0,0,0.05) 70%, ' +
              'rgba(0,0,0,0.02) 80%, ' +
              'rgba(0,0,0,0.008) 90%, ' +
              'rgba(0,0,0,0) 100%)',
            backdropFilter: 'blur(8px) saturate(180%)',
            WebkitBackdropFilter: 'blur(8px) saturate(180%)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
          }}
        />
      )}
      
      {/* Bottom fade overlay */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, ' +
            'rgba(0,0,0,0.85) 0%, ' +
            'rgba(0,0,0,0.70) 8%, ' +
            'rgba(0,0,0,0.55) 16%, ' +
            'rgba(0,0,0,0.42) 24%, ' +
            'rgba(0,0,0,0.30) 32%, ' +
            'rgba(0,0,0,0.20) 42%, ' +
            'rgba(0,0,0,0.12) 52%, ' +
            'rgba(0,0,0,0.06) 65%, ' +
            'rgba(0,0,0,0.02) 80%, ' +
            'rgba(0,0,0,0) 100%)',
          backdropFilter: 'blur(4px) saturate(150%)',
          WebkitBackdropFilter: 'blur(4px) saturate(150%)'
        }}
      />
      
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home" className="mb-32">
          <Hero />
        </section>
        
        <section id="about" className="mb-20">
          <About />
        </section>
        
        <section id="experience" className="mb-20">
          <Experience />
        </section>
        
        <section id="skills" className="mb-20">
          <Skills />
        </section>
        
        <section id="projects" className="mb-20">
          <Projects />
        </section>
        
        <section id="volunteering" className="mb-20">
          <Volunteering />
        </section>
        
        <section id="contact" className="mb-20 pt-10">
          <Contact />
        </section>
      </main>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#F5EBDC] text-black rounded-full flex items-center justify-center border-2 border-[#F5EBDC] hover:bg-black hover:text-[#F5EBDC] transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  )
}

export default App
