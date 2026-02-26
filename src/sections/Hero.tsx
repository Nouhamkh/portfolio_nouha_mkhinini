import { motion } from 'framer-motion'

const cyan = '#00F0FF'
const red = '#FF3B3B'

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-transparent text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.9, x: -40, y: -20 }}
          animate={{ opacity: 0.9, scale: 1.05, x: 0, y: 0 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-[#FF3B3B]/15 blur-3xl"
          initial={{ opacity: 0, scale: 0.9, x: 30, y: 20 }}
          animate={{ opacity: 0.7, scale: 1.08, x: 0, y: 0 }}
          transition={{ duration: 2.6, ease: 'easeOut', delay: 0.2 }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 lg:px-8">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col gap-16 md:flex-row md:items-center md:gap-12">
          <motion.div
            className="relative z-10 flex-1 space-y-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm sm:p-8">
              <div className="space-y-3">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                  Nouha Mkhinini
                </h1>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Cybersecurity Analyst | Network Security & Infrastructure Optimization
                </p>
              </div>

              <p className="mt-4 max-w-xl text-pretty text-sm text-slate-300 sm:text-base">
               Master’s in Cybersecurity. Network & IT Instructor. Passionate about{' '}
                <span className="font-semibold text-cyan-300">
                  secure architectures
                </span>
                ,{' '}
                <span className="font-semibold text-cyan-300">
                  vulnerability assessment
                </span>{' '}
                and{' '}
                <span className="font-semibold text-cyan-300">
                  defensive security
                </span>
                . 
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(0,240,255,0.45)] transition hover:bg-cyan-300"
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Security Projects
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-slate-500 hover:bg-slate-900"
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact for engagements
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${cyan}, transparent)`,
                    }}
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 flex-1 md:pl-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative mx-auto h-72 w-72 max-w-full md:h-80 md:w-80">
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/60 glow-ring"
                initial={{ rotate: -8, scale: 0.96, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />

              <motion.div
                className="absolute inset-3 rounded-full border border-cyan-500/30"
                style={{
                  background:
                    'radial-gradient(circle at 10% 0%, rgba(0,240,255,0.25), transparent 55%), radial-gradient(circle at 80% 120%, rgba(255,59,59,0.35), transparent 55%)',
                }}
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              />

              <motion.div
                className="absolute inset-6 overflow-hidden rounded-full border border-slate-800/80 bg-slate-900/80"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
              >
                <img
                  src="/images/profile.png"
                  alt="Professional portrait of Nouha Mkhinini"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                className="pointer-events-none absolute -right-4 bottom-10 flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/90 px-3 py-1 text-[0.65rem] font-medium text-slate-300 backdrop-blur"
                initial={{ opacity: 0, x: 12, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${cyan}, transparent)`,
                  }}
                />
                <span>Monitoring threats in real time</span>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute -left-3 top-10 flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/90 px-3 py-1 text-[0.65rem] font-medium text-slate-300 backdrop-blur"
                initial={{ opacity: 0, x: -12, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-emerald-500/40 bg-emerald-500/10 text-[0.55rem] font-semibold text-emerald-300">
                  ✓
                </span>
                <span>Secure by design</span>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full border border-cyan-400/40"
                style={{
                  borderImage: `conic-gradient(from 0deg, ${cyan}, ${red}, ${cyan}) 1`,
                }}
                initial={{ opacity: 0.2, scale: 1.05, rotate: 0 }}
                animate={{ opacity: 0.65, scale: 1.08, rotate: 360 }}
                transition={{
                  duration: 22,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

