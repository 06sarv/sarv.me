import { motion } from 'framer-motion'

const About = () => {

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-[#F5EBDC]/80 max-w-2xl mx-auto leading-relaxed font-light">
            AI & CS enthusiast turning complex problems into real-world solutions. Whether crafting chatbots or decoding data mysteries, I build intelligent systems that deliver impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">Education</h3>
          
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/[0.05] hover:border-white/[0.08] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* University Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/srmist-logo.jpg" 
                    alt="SRMIST Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Education Details */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  SRMIST Chennai
                </h4>
                <p className="text-base md:text-lg text-[#F5EBDC]/70 mb-1 font-light">
                  Bachelor of Technology in Computer Science Engineering
                </p>
                <p className="text-sm md:text-base text-[#F5EBDC]/60 mb-4 font-light">
                  Specialization in AI & ML
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center text-sm text-[#F5EBDC]/60">
                  <span>2023 - 2027</span>
                  <span className="text-[#F5EBDC]/30">•</span>
                  <span>CGPA: <span className="font-medium text-white">9.29</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
