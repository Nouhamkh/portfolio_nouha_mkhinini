import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const certs = [
  {
    id: '1',
    name: 'CompTIA Security+',
    level: 'Core security fundamentals',
    status: 'Planned / In progress',
    focus: ['Network security', 'Threats & vulnerabilities', 'SecOps basics'],
    proofImage: '/images/certifications/security-plus.png',
  },
  {
    id: '2',
    name: 'ISC2 Certified in Cybersecurity (CC)',
    level: 'Entry-level',
    status: 'Planned / In progress',
    focus: ['Security principles', 'Access control', 'Security operations'],
    proofImage: '/images/certifications/isc2-cc.png',
  },
  {
    id: '3',
    name: 'Offensive Security (OSCP or similar)',
    level: 'Offensive / hands‑on',
    status: 'Target',
    focus: ['Penetration testing', 'Exploit development', 'Reporting'],
    proofImage: '/images/certifications/oscp.png',
  },
] as const

const Certifications = () => {
  const [activeCertId, setActiveCertId] = useState<string | null>(null)
  const activeCert = certs.find((cert) => cert.id === activeCertId) ?? null

  return (
    <section
      id="certifications"
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
            Certifications
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Building my credential path
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          {certs.map((cert, i) => (
            <article
              key={cert.id}
              className="flex h-full cursor-pointer flex-col rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition hover:border-cyan-500/40"
              onClick={() => setActiveCertId(cert.id)}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-cyan-400/50 bg-cyan-500/10 text-[0.65rem] font-semibold uppercase tracking-wide text-cyan-300">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {cert.level}
                </p>
              </div>

              <h3 className="mb-2 text-sm font-semibold text-slate-50 sm:text-base">
                {cert.name}
              </h3>
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-cyan-400/90">
                {cert.status}
              </p>

              <ul className="mb-4 space-y-1.5 text-xs text-slate-300">
                {cert.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-auto text-[0.7rem] text-slate-500">
                Click to view or add proof for this certification.
              </p>
            </article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveCertId(null)}
              aria-hidden
            />
            <motion.div
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' as const }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              <div className="rounded-xl border border-slate-700/80 bg-[#0C111B] p-6 shadow-xl shadow-cyan-500/5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-400">
                      {activeCert.level}
                    </p>
                    <h3
                      id="cert-modal-title"
                      className="text-lg font-semibold text-slate-50"
                    >
                      {activeCert.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cyan-400/80">
                      {activeCert.status}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCertId(null)}
                    className="rounded-lg border border-slate-700/80 bg-slate-800/60 p-2 text-slate-400 transition hover:bg-slate-700/60 hover:text-slate-200"
                    aria-label="Close certification proof"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {activeCert.proofImage ? (
                  <div className="overflow-hidden rounded-lg border border-slate-700/80 bg-slate-900">
                    <img
                      src={activeCert.proofImage}
                      alt={`Proof for ${activeCert.name}`}
                      className="max-h-[70vh] w-full object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-sm text-slate-300">
                    No proof image has been added yet. Place your certificate image
                    in the public folder and update the path in this section.
                  </p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications

