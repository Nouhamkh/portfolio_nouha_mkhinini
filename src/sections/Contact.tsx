import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [state, handleSubmit] = useForm('xlgwzolb')

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-24 text-slate-100"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          className="mb-10 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Let&apos;s talk security
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Use this form to reach out about security projects, collaboration, or
            analyst roles. Messages open in your email client, addressed to
            Nouha.mkhinini@gmail.com.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="space-y-4">
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-slate-700/80 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/80 focus:bg-slate-950/60"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-slate-700/80 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/80 focus:bg-slate-950/60"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-slate-700/80 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/80 focus:bg-slate-950/60"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-slate-700/80 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/80 focus:bg-slate-950/60"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/80 bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(0,240,255,0.45)] transition disabled:cursor-not-allowed disabled:border-cyan-400/40 disabled:bg-cyan-500/60"
                disabled={state.submitting}
                whileHover={
                  state.submitting ? undefined : { y: -2, scale: 1.02 }
                }
                whileTap={state.submitting ? undefined : { scale: 0.98 }}
              >
                {state.submitting
                  ? 'Sending…'
                  : state.succeeded
                    ? 'Sent!'
                    : 'Send message'}
              </motion.button>

              <div className="space-y-1 text-[0.7rem] text-slate-500">
                <p>No logins required. Formspree delivers your message by email.</p>
                {state.succeeded && (
                  <p className="text-emerald-400">
                    Message sent successfully — I&apos;ll get back to you soon.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 text-xs text-slate-300">
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Signal of interest
            </h3>
            <p>
              This form is intentionally minimal to reduce data exposure. Feel free
              to omit sensitive details and move deeper discussion to a secure
              channel.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                No external form backend or server code required.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                No API keys or secrets in the browser.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                Sends to Nouha.mkhinini@gmail.com.
              </li>
            </ul>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

