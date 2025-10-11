import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    'Python',
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'React',
    'Swift',
    'TensorFlow',
    'PyTorch',
    'CNNs',
    'LLMs',
    'Scikit-learn',
    'Data Analysis',
    'Data Visualization',
    'Pandas',
    'NumPy',
    'Firebase',
    'AWS',
    'IBM Cloud',
    'Microsoft Azure',
    'Linux',
    'Git',
    'Docker',
    'Agile & Scrum',
    'Project Planning',
    'Stakeholder Management',
    'Presentation Skills',
    'API Integration',
    'UI/UX Design',
    'Figma',
    'Prompt Engineering',
    'NLP',
    'Model Deployment',
    'RESTful APIs',
    'Cloud Databases',
  ]

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Skills & Superpowers
          </h2>
          <p className="text-xl beige-text max-w-3xl mx-auto">
            The go-to toolkit for crafting robust, scalable, and future-ready applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-[#F5EBDC] text-black rounded-full text-base font-medium border-2 border-[#F5EBDC] hover:bg-black hover:text-[#F5EBDC] transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
