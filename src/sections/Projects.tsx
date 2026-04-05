import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export type Project = {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  tags: string[]
  category: string
  linkedinUrl?: string  // optional so projects without a link still work
}

const projects: Project[] = [
 {
    id: '1',
    title: 'Custom Detection-as-Code Pipeline',
    shortDescription: 'Full detection engineering workflow with Sigma rules, CI/CD validation, and MITRE ATT&CK simulation.',
    longDescription:
      'Built a detection engineering pipeline from scratch: spun up a virtualized attack environment using Atomic Red Team to simulate MITRE ATT&CK techniques, ingested logs into Elastic/Splunk, and authored Sigma rules to detect each technique. Integrated GitHub Actions to automatically validate rules against test logs before deployment. Documented false positive rates and tuning decisions throughout.',
    tags: ['Sigma Rules', 'Elastic/Splunk', 'CI/CD', 'MITRE ATT&CK', 'Atomic Red Team'],
    category: 'Detection & Monitoring',
    linkedinUrl: 'https://www.linkedin.com/posts/nouha-mkhinini_detection-as-code-soc-pipeline-lab-report-ugcPost-7438201334006210561-3K2J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXiBBoBlCUZu-JQILhRWEYMTUzT5TqKg6s',
  },
 {
    id: '2',
    title: 'End-to-End IR Simulation in Active Directory Lab',
    shortDescription: 'Simulated a full ransomware attack chain in an AD environment and conducted a complete incident response investigation.',
    longDescription:
      'Built a multi-machine Active Directory lab (Windows 10, Windows Server 2008 R2, Windows Server 2019, Kali Linux) and simulated a full ransomware attack chain — from phishing-based initial access via malicious macro, Meterpreter session establishment, lateral movement, and domain compromise (including krbtgt hash exposure), through to ransomware deployment and file encryption. Conducted end-to-end incident response: reconstructed the attack timeline, identified IOCs, performed memory acquisition with WinPmem, and executed containment and remediation including SMBv1 hardening and persistence removal.',
    tags: ['Active Directory', 'Incident Response', 'WinPmem', 'Windows Forensics', 'Meterpreter', 'IOC Analysis'],
    category: 'Incident Response',
    linkedinUrl: 'https://www.linkedin.com/posts/nouha-mkhinini_soclabransomwareincidentresponsenouhamkhinin-ugcPost-7444089455948386304-RNB7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXiBBoBlCUZu-JQILhRWEYMTUzT5TqKg6sl',
  },
  {
  id: '3',
  title: 'Purple Team Network Lab – Attack Simulation & Detection',
  shortDescription: 'Simulated real-world attacks in a segmented network and evaluated detection using Wazuh and Suricata.',
  longDescription:
    'Designed and implemented a segmented purple team lab using pfSense (LAN, DMZ, Monitoring), with Kali Linux for attack simulation, a Windows 10 target, and Security Onion for centralized monitoring via Wazuh and Suricata. Executed attack scenarios and analyzed logs and alerts to assess detection coverage and visibility. Correlated events across tools, identified detection gaps, and improved detection strategies while documenting findings and tuning decisions.',
  tags: ['pfSense', 'Wazuh', 'Suricata', 'Security Onion', 'Kali Linux', 'Network Segmentation', 'Detection Engineering'],
  category: 'Purple Teaming',
  linkedinUrl: 'https://www.linkedin.com/posts/nouha-mkhinini_purple-team-lab-attack-simulation-detection-ugcPost-7446589428330061824-81kb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXiBBoBlCUZu-JQILhRWEYMTUzT5TqKg6s',
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
              {selected.linkedinUrl && (
                <a
                  href={selected.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View LinkedIn post
                </a>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
