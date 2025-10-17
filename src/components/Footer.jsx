export default function Footer() {
  return (
    <footer className="border-t border-violet-500/20 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:justify-between">
        <span className="text-violet-100/70">
          &copy; {new Date().getFullYear()} Furkan. Tüm hakları saklıdır.
        </span>
        <span className="text-slate-400">
          React · Tailwind CSS · GSAP ile oluşturuldu.
        </span>
      </div>
    </footer>
  )
}
