import { useLanguage } from '../i18n/LanguageContext.jsx'
import ProfileCard from './ProfileCard.jsx'

export default function About() {
  const { t } = useLanguage()
  const about = t('about')

  return (
    <section id="about" className="space-y-6">
      <p className="text-base font-semibold uppercase tracking-[0.28em] text-violet-300/80 sm:text-lg">
        {about?.sectionLabel}
      </p>
      <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-100">
            {about?.heading}
          </h2>
          <div className="space-y-4 text-base text-slate-200/80">
            {(Array.isArray(about?.body) ? about.body : about?.body ? [about.body] : []).map(
              (paragraph, index) => (
                <p key={`about-paragraph-${index}`} className="leading-relaxed">
                  {paragraph}
                </p>
              ),
            )}
          </div>
        </div>
        <ProfileCard
          className="mx-auto max-w-[320px] md:max-w-sm lg:ml-auto lg:mr-0 lg:max-w-md xl:max-w-lg"
          name={about?.profileCard?.name}
          title={about?.profileCard?.title}
          handle={about?.profileCard?.handle}
          status={about?.profileCard?.status}
          contactText={about?.profileCard?.contactText}
          avatarUrl={about?.profileCard?.avatar}
          showUserInfo={false}
          enableTilt
          enableMobileTilt={false}
          onContactClick={() => {
            const contactSection = document.querySelector('#contact')
            contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        />
      </div>
    </section>
  )
}
