import { motion } from 'framer-motion'

const experiences = [
  {
    id: '0',
    period: 'Mar 2025 – Present',
    role: 'IT Network & Security Administrator',
    company: 'DI VISTA DESIGN · Sousse, Tunisia',
    description:
      '• Managed and supported IT infrastructure across 50+ endpoints and Point of Sale (POS) systems, ensuring reliable operations and rapid incident resolution.\n• Monitored and maintained LAN/Wi-Fi networks, achieving 99%+ uptime and minimizing service disruptions.\n• Implemented security best practices including patch management, backups, and access control, reducing security risks by ~30%.\n• Performed preventive maintenance and system hardening, identifying and resolving 20+ issues while improving documentation and operational efficiency.\n• Gained hands-on experience in security operations, incident response, and endpoint monitoring.',
  },
  {
    id: '1',
    period: 'Feb 2025 – May 2025',
    role: 'Cybersecurity Intern',
    company: 'Vision Age VFX · Internship · Sousse, Tunisia',
    description:
      '• Analyzed and redesigned VLAN segmentation per department.\n• Provisioned secured workstations with VPN and RDP access, configured RAID-5 storage on NAS, and deployed a ticketing system on Ubuntu Server (VMware ESXi).\n• Developed a desktop automation tool for file sorting, OCR, and watermarking.\n• Documented security policies aligned with TPN+ content protection standards and participated in vulnerability assessments.',
  },
  {
    id: '2',
    period: 'Feb 2023 – May 2023',
    role: 'Student Intern',
    company: 'LEONI Tunisia · Internship · Sousse, Tunisia',
    description:
      '• Developed an IoT system and mobile application for real-time monitoring of server rooms.\n• Collected environmental data including temperature, humidity, gas level, and sound level.\n• Built a user-friendly admin interface with threshold-based alerting.',
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
                  <p className="text-sm leading-relaxed text-slate-300 whitespace-pre-wrap">
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
