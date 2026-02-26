import { motion } from 'framer-motion'

const links = [
  { href: '#top', label: 'Top' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-[#050815]/90 backdrop-blur-md"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Nouha Mkhinini logo"
            className="h-10 w-10 rounded-xl object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />
          <div className="leading-tight">
            <p className="text-xs font-semibold text-slate-100">
              Nouha Mkhinini
            </p>
            <p className="text-[0.65rem] text-slate-400">
              Cybersecurity Analyst
            </p>
          </div>
        </div>

        <motion.ul
          className="hidden items-center gap-4 text-xs font-medium text-slate-300 sm:flex"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className="rounded-full px-3 py-1 text-[0.7rem] tracking-[0.18em] uppercase text-slate-300 transition hover:bg-slate-800/80 hover:text-cyan-300"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  )
}

export default Navbar

