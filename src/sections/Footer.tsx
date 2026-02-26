const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#050815] text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Your logo"
            className="h-30 w-30 rounded-lg object-contain"
          />
          </div>
          <div className="text-sm">
            <p className="font-semibold text-slate-100">Nouha Mkhinini</p>
            <p className="text-xs text-slate-400">
              Cybersecurity Analyst &amp; Security Engineer
            </p>
          </div>
        </div>

        <div className="grid gap-2 text-xs sm:text-sm sm:text-right">
          <p className="text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{' '}
            <span className="text-slate-400">Your City, Country</span>
          </p>
          <p className="text-slate-300">
            <span className="font-semibold text-slate-100">Mobile:</span>{' '}
            <span className="text-slate-400">+00 000 000 000</span>
          </p>
          <p className="text-slate-300">
            <span className="font-semibold text-slate-100">Email:</span>{' '}
            <a
              href="mailto:youremail@example.com"
              className="text-cyan-300 hover:text-cyan-200"
            >
              youremail@example.com
            </a>
          </p>
          <p className="text-slate-300">
            <span className="font-semibold text-slate-100">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="break-all text-cyan-300 hover:text-cyan-200"
            >
              linkedin.com/in/your-profile
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

