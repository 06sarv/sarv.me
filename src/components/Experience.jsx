import { motion } from 'framer-motion'

const Experience = () => {
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
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-[#F5EBDC]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Focused industry engagement fostering practical expertise and career readiness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/[0.05] hover:border-white/[0.08] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Company Logo */}
              <a
                href="https://www.sentientscripts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white flex items-center justify-center overflow-hidden cursor-pointer"
                >
                  <img 
                    src="/a85867_414c31e9e6884b6c9b4492b22fd2bfd1~mv2.png" 
                    alt="Sentient Scripts Logo" 
                    className="w-full h-full object-contain p-3"
                  />
                </motion.div>
              </a>
              
              {/* Experience Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    AI Engineer Intern
                  </h3>
                  <span className="text-sm md:text-base text-[#F5EBDC]/60 font-light">
                    Jul 2025 to Present
                  </span>
                </div>
                <p className="text-base md:text-lg text-[#F5EBDC]/70 mb-1 font-light">
                  Sentient Scripts
                </p>
                <p className="text-sm md:text-base text-[#F5EBDC]/60 mb-4 font-light">
                  Chennai, Tamil Nadu, India
                </p>
                
                {/* Responsibilities */}
                <ul className="space-y-2 text-sm md:text-base text-[#F5EBDC]/70 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5EBDC] mt-1.5 text-xs">▸</span>
                    <span>Developing AI-powered intelligence systems to automate data collection, analysis, and reporting, improving efficiency for enterprise teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5EBDC] mt-1.5 text-xs">▸</span>
                    <span>Designing multi-source pipelines and AI agents to generate structured insights from diverse datasets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5EBDC] mt-1.5 text-xs">▸</span>
                    <span>Building internal tools for data processing and visualization, enabling faster decision-making and actionable outcomes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
