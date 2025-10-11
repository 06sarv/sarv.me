import { motion } from 'framer-motion'

const Volunteering = () => {
  const activities = [
    {
      role: 'Trainee',
      organization: 'Team RUDRA - SRM Mars Rover',
      period: 'Sep 2024 - Nov 2024',
      description: 'Focused on astrobiology and biotechnology research, contributing to the team\'s scientific foundation.'
    },
    {
      role: 'Life Sciences Associate',
      organization: 'Team RUDRA - SRM Mars Rover',
      period: 'Nov 2024 - Present',
      description: 'Bridging computer science and biology as an interdisciplinary contributor, applying ML and data engineering to advance life sciences research and mission objectives.'
    },
    {
      role: 'Design Associate',
      organization: 'Liftoff',
      period: 'May 2024 - Feb 2025',
      description: 'Redesigned brand assets and UI/UX for clients including MamaEarth, improving visual consistency and engagement.'
    },
    {
      role: 'Core Member',
      organization: 'ASTROPHILIA SRM',
      period: 'Sep 2023 - Apr 2024',
      description: 'Organized NovaArt, a cosmic art event, and participated in space-themed presentations fostering science outreach.'
    },
    {
      role: 'Active Discipline',
      organization: 'Directorate of Student Affairs, SRMIST',
      period: 'Sep 2023 - Dec 2023',
      description: 'Managed crowd and logistics for Aarush, one of SRM\'s flagship events, ensuring smooth execution and attendee safety.'
    }
  ]

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            Beyond the Academics
          </h2>
          <p className="text-lg md:text-xl text-[#F5EBDC]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Exploring passions and talents outside the curriculum boundaries.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5EBDC]/30 via-[#F5EBDC]/20 to-transparent" />

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 -ml-[3px] rounded-full bg-[#F5EBDC]" />

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between mb-2 gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-white flex-shrink">
                      {activity.role}
                    </h3>
                    <span className="text-sm text-[#F5EBDC]/50 font-light whitespace-nowrap flex-shrink-0">
                      {activity.period}
                    </span>
                  </div>
                  <p className="text-base text-[#F5EBDC]/70 font-medium mb-2">
                    {activity.organization}
                  </p>
                  <p className="text-[#F5EBDC]/60 leading-relaxed text-sm md:text-base font-light">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteering
