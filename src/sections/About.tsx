import { motion } from 'framer-motion'

const RESUME_URL = '/Nouha Mkhinini - Resume.pdf'

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent py-24 text-slate-100"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: rectangular image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 shadow-[0_0_60px_rgba(0,240,255,0.08)]">
              <div className="absolute inset-0 rounded-xl border border-cyan-500/20" />
              <img
                src="/images/about.png"
                alt="Nouha Mkhinini — Cybersecurity Analyst"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </motion.div>

          {/* Right: structured cybersecurity profile */}
          <motion.div
            className="min-w-0 flex-1"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm sm:p-8 md:p-10">
              <motion.h2
                variants={item}
                className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400"
              >
                About
              </motion.h2>
              

              <div className="space-y-6 text-slate-300">
                <motion.p
                  variants={item}
                  className="text-pretty text-sm leading-relaxed sm:text-base"
                >
                  I am a cybersecurity professional with a Master’s degree in{' '}
                  <span className="font-semibold text-cyan-300">
                    Network Services & Security
                  </span>{' '}
                  . I specialize in network defense, secure infrastructure design, and vulnerability assessment.
                </motion.p>

                <motion.div variants={item} className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Focus areas
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {[
                      'Network Security & VLAN Architecture',
                      'Firewall Configuration',
                      'Monitoring & SIEM Labs',
                      'Vulnerability Assessment',
                      'Secure Infrastructure Design',
                    ].map((focus) => (
                      <li key={focus} className="flex items-center gap-2 text-sm">
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                        {focus}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.p
                  variants={item}
                  className="text-pretty text-sm leading-relaxed sm:text-base"
                >
                  Beyond technical implementation, I’ve taught network security concepts, guided students through secure architecture design, and implemented infrastructure optimization strategies in production environments. I combine analytical precision with strong communication skills.
                </motion.p>

                <motion.div variants={item} className="pt-2">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/80 bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition hover:bg-cyan-400"
                  >
                    View full resume
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
