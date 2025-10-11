import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      title: 'Email',
      value: 'sarvagna.nandyala@gmail.com',
      link: 'mailto:sarvagna.nandyala@gmail.com',
      icon: Mail
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/sarvagna06',
      link: 'https://www.linkedin.com/in/sarvagna06',
      icon: Linkedin
    },
    {
      title: 'GitHub',
      value: 'github.com/06sarv',
      link: 'https://github.com/06sarv?tab=repositories',
      icon: Github
    }
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
            Collaborate With Me
          </h2>
          <p className="text-xl beige-text max-w-3xl mx-auto">
            Got a project idea? Let's bring it to life and make something extraordinary.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 md:gap-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-[#F5EBDC] text-black rounded-full flex items-center justify-center border-2 border-[#F5EBDC] hover:bg-black hover:text-[#F5EBDC] transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Contact
