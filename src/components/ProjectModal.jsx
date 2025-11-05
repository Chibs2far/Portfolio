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
  const featureList = project.features ?? []
  const splitIndex = Math.ceil(featureList.length / 2)
  const featureColumns =
    featureList.length > 3
      ? [featureList.slice(0, splitIndex), featureList.slice(splitIndex)]
      : [featureList]
  const renderedFeatureColumns = featureColumns.filter((column) => column.length > 0)

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-lg px-2.5 py-3 sm:px-4 sm:py-5 md:px-6"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <div
        className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/95 shadow-2xl shadow-slate-950/60 max-h-[calc(100vh-1.5rem)] sm:max-w-xl sm:rounded-3xl sm:max-h-[calc(100vh-2rem)] md:max-w-2xl md:max-h-[calc(100vh-2.5rem)] lg:max-w-3xl lg:max-h-[calc(100vh-3rem)]"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="relative hidden w-full items-center justify-center overflow-hidden bg-slate-900/60 sm:flex sm:h-[180px] md:h-[230px] lg:h-[280px]">
            {images.length ? (
              <>
                <img
                  src={images[currentIndex]}
                  alt={`${project.title} preview ${currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
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
          <div className="flex flex-1 flex-col gap-3 border-t border-slate-800/70 bg-slate-900/95 p-3.5 sm:p-4 md:p-6 lg:p-6">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold text-slate-100 sm:text-[22px]">{project.title}</h3>
              <p className="text-[13px] leading-snug text-slate-300 sm:text-sm sm:leading-relaxed">
                {project.longDescription ?? project.description}
              </p>
            </div>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-violet-300/70 sm:text-xs sm:tracking-[0.24em] md:text-sm">
                  {labels?.featuresTitle}
                </h4>
                {renderedFeatureColumns.length ? (
                  <div className="flex flex-col gap-1.5 text-[13px] leading-snug text-slate-300 sm:flex-row sm:gap-3 sm:text-sm sm:leading-relaxed">
                    {renderedFeatureColumns.map((column, columnIndex) => (
                      <ul key={`features-column-${columnIndex}`} className="flex flex-1 flex-col gap-1.5">
                        {column.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 inline-flex size-1 rounded-full bg-violet-400 sm:size-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-violet-300/70 sm:text-xs sm:tracking-[0.24em] md:text-sm">
                  {labels?.technologiesTitle}
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-500/20 px-2.5 py-1 text-[11px] font-medium text-violet-200 sm:px-3 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 px-3.5 py-1.5 text-[13px] font-semibold text-slate-200 transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:px-4 sm:py-2 sm:text-sm"
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
