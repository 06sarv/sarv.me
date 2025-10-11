import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'volunteering', label: 'Extracurricular' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const showFullNav = activeSection === 'home'

  useEffect(() => {
    setMenuOpen(false)
  }, [activeSection])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="px-3 py-2 md:px-6 md:py-3 flex items-center relative">
          <div className="flex items-center gap-3 md:gap-4 min-w-[60px] md:min-w-[80px]">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setActiveSection('home')
              }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-[0_0_20px_rgba(245,235,220,0.4)] hover:shadow-[0_0_30px_rgba(245,235,220,0.6)] transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <img
                src="/avatar-icon.png"
                alt="Sarvagna"
                className="w-full h-full object-cover"
              />
            </button>

            <AnimatePresence initial={false} mode="wait">
              {!showFullNav && (
                <motion.button
                  key="hamburger"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-1.5 md:p-2 text-[#F5EBDC] hover:text-white transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-8 md:h-8">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
            <AnimatePresence initial={false} mode="wait">
              {showFullNav && (
                <motion.div
                  key="full-nav"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="hidden md:flex items-center gap-1"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 text-sm transition-all duration-200 ${
                        activeSection === item.id
                          ? 'text-[#F5EBDC] font-bold'
                          : 'text-[#F5EBDC]/60 hover:text-[#F5EBDC] font-medium'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="ml-auto">
            <motion.a
              href="https://drive.google.com/file/d/1vDu_7xOGRpw0HXup8eX8ooVoJYfdJ_pt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 md:px-6 md:py-3 bg-[#F5EBDC] text-black rounded-full text-sm md:text-base font-medium border-2 border-[#F5EBDC] hover:bg-black hover:text-[#F5EBDC] transition-all duration-300"
            >
              Resume
            </motion.a>
          </div>

          <AnimatePresence>
            {activeSection !== 'home' && menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.18 }}
                className="absolute top-full left-0 mt-2"
              >
                <nav className="flex flex-col gap-1 rounded-xl bg-black/65 backdrop-blur-md px-2 py-2 shadow-[0_10px_22px_rgba(0,0,0,0.25)]">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id)
                        setMenuOpen(false)
                      }}
                      className={`text-left px-2 py-1.5 text-sm transition-all duration-150 ${
                        activeSection === item.id
                          ? 'text-white font-semibold'
                          : 'text-[#F5EBDC]/75 hover:text-white hover:translate-x-1'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
