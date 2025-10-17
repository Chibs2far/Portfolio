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
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300/70">
        {projectsContent?.sectionLabel}
      </p>
      <h2 className="max-w-2xl text-3xl font-semibold text-slate-100">
        {projectsContent?.heading}
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((project) => (
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
            className="flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-violet-500/20 bg-slate-900/40 p-6 transition hover:border-violet-400/60 hover:bg-violet-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
              <p className="text-sm text-slate-200/80">{project.description}</p>
            </div>
            <div className="mt-6 space-y-4">
              <ul className="flex flex-wrap gap-2">
                {project.stack?.map((item, index) => (
                  <li
                    key={`${project.title}-stack-${item}-${index}`}
                    className="rounded-full border border-violet-500/30 px-3 py-1 text-xs font-medium text-violet-100/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span className="text-sm font-semibold text-violet-300/90">
                {projectsContent?.modal?.openLabel}
              </span>
            </div>
          </article>
        ))}
      </div>
      {isClient && selectedProject ? (
        <ProjectModal project={selectedProject} labels={projectsContent?.modal} onClose={handleClose} />
      ) : null}
    </section>
  )
}
