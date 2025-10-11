import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl mb-8 text-white leading-tight"
          >
            Hi, I'm <span className="font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>Sarvagna</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl beige-text max-w-3xl mx-auto"
          >
            AI Enthusiast | F1 Aficionado | Pixie-Cut Coder
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
