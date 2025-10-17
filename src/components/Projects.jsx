import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'SPORE v2',
      description: 'A hierarchical machine learning system that predicts soil microbial communities in India using spatial and soil data, analyzing over 79,000+ soil-microbe observations and generating professional PDF reports and AI-powered scientific explanations.',
      tags: ['Hierarchical ML', 'GeoSpatial Data Engineering'],
      image: '/Screenshot 2025-10-11 at 21.30.12.png',
      link: 'https://github.com/06sarv/SPORE-2.0/tree/main'
    },
    {
      title: 'FusionSentinel',
      description: 'Multi-modal deep learning system for cyber threat detection using CNN-Transformer-BiLSTM fusion architecture.',
      tags: ['Multimodal Deep Learning', 'Hybrid Neural Architecture Design'],
      image: '/training_curves.png',
      link: 'https://github.com/06sarv/FusionSentinel'
    },
    {
      title: 'GeneticRAG',
      description: 'A modular Retrieval-Augmented Generation system for genetic counseling that supports local document and VCF variant analysis, advanced vector search, and API access.',
      tags: ['RAG Architecture', 'VCF Analysis', 'Vector Search', 'API Development'],
      image: '/Screenshot 2025-10-12 at 02.40.02.png',
      link: 'https://github.com/06sarv/GeneticRAG'
    },
    {
      title: 'Sizl',
      description: 'A multilingual smart factory production monitoring dashboard built with React, TypeScript, and Mantine. It provides real-time data visualization with filters by machine and date, supports English and Korean languages, and features responsive design and internationalization.',
      tags: ['Production Monitoring', 'Multilingual UI', 'Data Visualization'],
      image: '/Korean_Dashboard.png',
      link: 'https://github.com/06sarv/sizl'
    },
    {
      title: 'EcoTrack',
      description: 'An environmental monitoring platform that collects, analyzes, and visualizes ecological data to support sustainable practices and informed decision-making.',
      tags: ['Ecological Modeling', 'Full-Stack Development'],
      image: '/Dasboard.png',
      link: 'https://github.com/06sarv/EcoTrack?tab=readme-ov-file'
    }
  ]

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Spotlight Projects
          </h2>
          <p className="text-xl beige-text max-w-3xl mx-auto">
            Showcasing the work that fuels my passion and sharpens my skills.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
              >
                  {/* Project Image */}
                  {project.image ? (
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                          project.title === 'ReactNow' || project.title === 'FusionSentinel'
                            ? 'object-contain' 
                            : 'object-cover object-top'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ) : (
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#F5EBDC]/5 to-[#F5EBDC]/[0.02] flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#F5EBDC]/10 flex items-center justify-center">
                          <svg className="w-8 h-8 text-[#F5EBDC]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <p className="text-[#F5EBDC]/40 text-sm font-medium">Backend System</p>
                      </div>
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#F5EBDC] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 45 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 ml-3 cursor-pointer"
                        >
                          <ArrowUpRight className="w-6 h-6 text-[#F5EBDC]/60 group-hover:text-[#F5EBDC] transition-colors" />
                        </motion.div>
                      </a>
                    </div>

                    <p className="text-[#F5EBDC]/70 mb-5 leading-relaxed text-sm md:text-base font-light">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-[#F5EBDC]/5 border border-[#F5EBDC]/10 rounded-full text-[#F5EBDC]/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="https://github.com/06sarv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5EBDC] text-black rounded-full text-lg font-medium border-2 border-[#F5EBDC] hover:bg-black hover:text-[#F5EBDC] transition-all duration-300 cursor-default"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
