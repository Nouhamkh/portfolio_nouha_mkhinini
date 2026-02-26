import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export type Project = {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  tags: string[]
  category: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Network traffic analysis pipeline',
    shortDescription: 'SIEM integration and detection rules for suspicious traffic patterns.',
    longDescription:
      'Designed and deployed a pipeline to ingest network flows, normalize logs, and run detection rules. Integrated with existing SIEM and reduced mean time to detect lateral movement. Documented playbooks for analysts.',
    tags: ['SIEM', 'IDS', 'Detection rules', 'Playbooks'],
    category: 'Monitoring & Analysis',
  },
  {
    id: '2',
    title: 'Internal penetration test & report',
    shortDescription: 'Scoped internal assessment with findings and remediation roadmap.',
    longDescription:
      'Led an internal pentest covering web apps, network segments, and endpoints. Delivered a prioritized report with proof-of-concept evidence and remediation steps. Presented to engineering and leadership.',
    tags: ['Pentesting', 'Reporting', 'Remediation'],
    category: 'Offensive Security',
  },
  {
    id: '3',
    title: 'Endpoint visibility & hardening',
    shortDescription: 'EDR deployment and baseline hardening across workstations and servers.',
    longDescription:
      'Rolled out EDR agents, tuned detection policies, and established a hardening baseline (config, patches, least privilege). Reduced alert noise and improved visibility for incident response.',
    tags: ['EDR', 'Hardening', 'Baseline'],
    category: 'Infrastructure',
  },
  {
    id: '4',
    title: 'Vulnerability management program',
    shortDescription: 'Scanning, prioritization, and tracking for critical assets.',
    longDescription:
      'Set up recurring scans, risk-based prioritization (CVSS + context), and tracking in a central register. Aligned with patching cycles and provided metrics for leadership.',
    tags: ['Vuln scanning', 'Prioritization', 'Metrics'],
    category: 'Network Security',
  },
]

const Projects = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = projects.find((p) => p.id === selectedId)

  return (
    <section
      id="projects"
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
            Projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Security work in practice
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]"
              onClick={() => setSelectedId(project.id)}
            >
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-cyan-400/90">
                {project.category}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-slate-50 group-hover:text-cyan-100">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400">
                {project.shortDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-700/80 bg-slate-800/60 px-2 py-0.5 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-cyan-400/80">View details →</p>
            </article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedId(null)}
              aria-hidden
            />
            <motion.div
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' as const }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <div className="rounded-xl border border-slate-700/80 bg-[#0C111B] p-6 shadow-xl shadow-cyan-500/5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-400">
                      {selected.category}
                    </p>
                    <h3 id="project-modal-title" className="text-xl font-semibold text-slate-50">
                      {selected.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    className="rounded-lg border border-slate-700/80 bg-slate-800/60 p-2 text-slate-400 transition hover:bg-slate-700/60 hover:text-slate-200"
                    aria-label="Close modal"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-300">
                  {selected.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-700/80 bg-slate-800/60 px-2 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
