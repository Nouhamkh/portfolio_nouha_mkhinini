import { motion } from 'framer-motion'

const experiences = [
  {
    id: '1',
    period: '2023 – Present',
    role: 'Cybersecurity Analyst',
    company: 'Company Name',
    description:
      'Threat monitoring, incident response, and security assessments. SIEM tuning and detection rule development.',
  },
  {
    id: '2',
    period: '2021 – 2023',
    role: 'Security Operations Analyst',
    company: 'Previous Company',
    description:
      'Security monitoring, vulnerability management, and support for penetration testing and compliance activities.',
  },
  {
    id: '3',
    period: '2019 – 2021',
    role: 'IT Security Intern / Junior Analyst',
    company: 'Earlier Role',
    description:
      'Log analysis, alert triage, and documentation. Assisted with security tooling and baseline hardening.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-transparent py-24 text-slate-100"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Experience
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-slate-600/50 to-transparent md:left-4"
            aria-hidden
          />

          <ul className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.id}
                className="relative flex gap-6 md:gap-8"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {/* dot */}
                <div
                  className="relative z-10 mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/80 bg-[#0C111B] shadow-[0_0_20px_rgba(0,240,255,0.3)] md:h-8 md:w-8"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                <div className="min-w-0 flex-1 rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-slate-700/80 md:p-6">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-400/90">
                    {exp.period}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {exp.role}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-slate-400">
                    {exp.company}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {exp.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
