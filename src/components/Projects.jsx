import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const { t } = useLanguage()
  const projectsContent = t('projects')
  const cards = projectsContent?.cards ?? []
  const [selectedProject, setSelectedProject] = useState(null)
  const [isClient, setIsClient] = useState(false)

  const handleCardClick = (project) => {
    setSelectedProject(project)
  }

  const handleClose = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id="projects" className="space-y-6">
      <p className="text-base font-semibold uppercase tracking-[0.28em] text-violet-300/80 sm:text-lg">
        {projectsContent?.sectionLabel}
      </p>
      <h2 className="max-w-2xl text-3xl font-semibold text-slate-100 md:text-4xl">
        {projectsContent?.heading}
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((project) => {
          const cover = project.image
          return (
            <article
              key={project.title}
              onClick={() => handleCardClick(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleCardClick(project)
                }
              }}
              tabIndex={0}
              role="button"
              className="group relative flex h-72 cursor-pointer flex-col overflow-hidden rounded-3xl border border-violet-500/20 bg-slate-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              {cover ? (
                <img
                  src={cover}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : null}
              <div className="absolute inset-0 bg-slate-950/55 transition group-hover:bg-slate-950/45" />
              <div className="relative z-10 mt-auto flex flex-col gap-4 p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-100 drop-shadow-[0_2px_8px_rgba(15,23,42,0.45)]">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-xs text-slate-200/90 drop-shadow-[0_2px_6px_rgba(15,23,42,0.35)]">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-[11px]">
                  <div className="flex flex-wrap gap-2">
                    {project.stack?.map((item, index) => (
                      <span
                        key={`${project.title}-stack-${item}-${index}`}
                        className="rounded-full bg-violet-500/30 px-2.5 py-1 font-medium text-violet-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      {isClient && selectedProject ? (
        <ProjectModal project={selectedProject} labels={projectsContent?.modal} onClose={handleClose} />
      ) : null}
    </section>
  )
}
