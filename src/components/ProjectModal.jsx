import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectModal({ project, labels, onClose }) {
  // --- All Hooks are now at the top level ---
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Effect for handling 'Escape' key press
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Effect to confirm the component has mounted (for portal)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Effect to handle body scroll lock
  useEffect(() => {
    if (!project) return // Conditional logic *inside* the hook is fine
    const { body } = document
    const prevOverflow = body.style.overflow
    body.style.overflow = 'hidden'
    return () => {
      body.style.overflow = prevOverflow
    }
  }, [project])

  // ✅ Effect to reset image index when the project changes (MOVED HERE)
  useEffect(() => {
    setCurrentIndex(0)
  }, [project])

  // --- Early return is now after all hooks have been called ---
  if (!project || !mounted) {
    return null
  }

  const images = project.gallery?.length ? project.gallery : project.image ? [project.image] : []
  const hasLink = Boolean(project.link)

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-lg px-4 py-10 sm:py-12"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/95 shadow-2xl shadow-slate-950/60"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800/40">
            {images.length ? (
              <>
                <img
                  src={images[currentIndex]}
                  alt={`${project.title} preview ${currentIndex + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-slate-100 shadow-md transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                      aria-label={labels?.prevImageLabel ?? 'Previous image'}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-slate-100 shadow-md transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                      aria-label={labels?.nextImageLabel ?? 'Next image'}
                    >
                      ›
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {images.map((_, idx) => (
                        <span
                          key={`${project.title}-dot-${idx}`}
                          className={`h-1.5 w-1.5 rounded-full ${
                            idx === currentIndex ? 'bg-violet-400' : 'bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                {labels?.imageFallback ?? 'Preview coming soon'}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-6 border-t border-slate-800/70 bg-slate-900/95 p-6 lg:p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.longDescription ?? project.description}</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/70">
                  {labels?.featuresTitle}
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.features?.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-1.5 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/70">
                  {labels?.technologiesTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end gap-3">
              {hasLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-400/60 px-4 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  {labels?.primaryActionButton ?? 'View Project'}
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-700/60 px-4 py-2 text-sm font-semibold text-slate-500 opacity-60"
                >
                  {labels?.comingSoonLabel ?? 'Coming soon'}
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                {labels?.closeLabel ?? 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}