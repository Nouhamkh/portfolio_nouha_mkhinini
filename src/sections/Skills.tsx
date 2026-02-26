import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Security',
    accent: 'cyan',
    skills: [
      'Network Security',
      'Vulnerability Assessment',
      'Threat Analysis',
      'Firewall Configuration',
      'Access Control',
    ],
  },
  {
    title: 'Networking',
    accent: 'cyan',
    skills: [
      'TCP/IP',
      'VLAN Design',
      'Subnetting',
      'Routing & Switching',
      'Networking tooling (Wireshark, Nmap, etc.)',
    ],
  },
  {
    title: 'Tools',
    accent: 'cyan',
    skills: [
      'Kali Linux',
      'Metasploit',
      'Nmap',
      'Firewall',
      'VMware',
      'Zabbix',
      'Git',
    ],
  },
  {
    title: 'Programming',
    accent: 'cyan',
    skills: [
      'Python',
      'Bash',
      'Javascript',
      'Basic Scripting',
    ],
  },
] as const

const Skills = () => {
  return (
    <section
      id="skills"
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
            Security Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            What I focus on
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition hover:border-slate-700/80"
            >
              <h3
                className={`mb-4 text-sm font-semibold uppercase tracking-wider ${
                  category.accent === 'cyan'
                    ? 'text-cyan-400'
                    : 'text-cyan-400'
                }`}
              >
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span
                      className={`h-1 w-1 flex-shrink-0 rounded-full ${
                        category.accent === 'cyan' ? 'bg-cyan-400' : 'bg-cyan-400'
                      }`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
