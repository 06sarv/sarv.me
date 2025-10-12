import { motion } from 'framer-motion'

const Contact = () => {
  const contactMethods = [
    {
      title: 'Email',
      value: 'sarvagna.nandyala@gmail.com',
      link: 'mailto:sarvagna.nandyala@gmail.com',
      icon: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/sarvagna06',
      link: 'https://www.linkedin.com/in/sarvagna06',
      icon: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      title: 'GitHub',
      value: 'github.com/06sarv',
      link: 'https://github.com/06sarv?tab=repositories',
      icon: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      )
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
