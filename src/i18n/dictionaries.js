import educationDashboardImg from '../assets/images/projects/education-dashboard.jpg'
import profileAvatarImg from '../assets/images/profile-avatar.png'
import portfolioExperienceImg from '../assets/images/projects/portfolio-experience.jpg'
import microAnimationsImg from '../assets/images/projects/micro-animations.jpg'
import divizyonLogo from '../assets/images/experiences/divizyon_logo.jpeg'
import halkbankLogo from '../assets/images/experiences/halkbank_logo.jpeg'
import inspireLogo from '../assets/images/experiences/inspire_foundation_malta__logo.jpeg'

export const dictionaries = {
  tr: {
    header: {
      title: "Furkan",
      contact: 'İletişime Geç',
      nav: [
        { href: '#top', label: 'Ana Sayfa' },
        { href: '#about', label: 'Hakkımda' },
        { href: '#projects', label: 'Projeler' },
        { href: '#contact', label: 'İletişim' },
      ],
    },
    hero: {
      badge: 'Frontend Developer',
      lines: [
        'Merhaba, ben Furkan.',
        'Etkileşimli deneyimler tasarlıyorum.',
        'React, Tailwind ve GSAP ile.',
      ],
      description:
        'Modern web teknolojileriyle kullanıcı odaklı arayüzler yaratmayı seviyorum. Aşağıya kaydırarak yaklaşımımı ve örnek projelerimi inceleyebilirsin.',
      primaryCta: 'Projelere göz at',
      secondaryCta: 'İletişime geç',
    },
    about: {
      sectionLabel: 'Hakkımda',
      heading: 'Özgün ve yaşayan web deneyimleri oluşturuyorum.',
      body:
        'Kullanıcı davranışlarını anlayarak, markaların dijitalde fark yaratmasına yardımcı olacak arayüzler tasarlıyorum. Tasarım sistemleri oluşturma, komponent kütüphaneleri hazırlama ve animasyonlu deneyimler üretme konularında çalışıyorum.',
      profileCard: {
        name: 'Furkan Düzköprü',
        title: 'Frontend Developer',
        handle: 'furkandüzköprü',
        status: 'Freelance projelere açık',
        contactText: 'İletişime geç',
        avatar: profileAvatarImg,
      },
    },
    experiences: {
      sectionLabel: 'Deneyimler',
      heading: 'Takımlarla büyüyen ve iz bırakan işbirlikleri.',
      items: [
        {
          role: 'Intern',
          company: 'Halkbank',
          timeframe: 'Sep 2025 – Oct 2025',
          location: 'İstanbul, Türkiye · On-site',
          description:
            'COBOL tabanlı legacy sistemlerden modern MSSQL veritabanlarına veri migrasyonu için ETL süreçleri geliştirdim. Sahadaki operasyonların verimliliğini artırmak adına Android platformunda donanım etkileşimli özellikler tasarladım ve uyguladım.',
          achievements: [
            'Taşınabilir yazıcılar gibi çevresel cihazlarla Bluetooth üzerinden kablosuz iletişimi mümkün kılan modüller geliştirdim.',
            'Yerel kamera API\'leri ile gerçek zamanlı QR kod tarama ve işleme işlevlerini hayata geçirdim.',
          ],
          technologies: ['COBOL', 'SQL', 'Android'],
          logo: halkbankLogo,
        },
        {
          role: 'IT Specialist | Frontend Developer',
          company: 'Divizyon',
          timeframe: 'Oct 2024 – Sep 2025',
          location: 'Türkiye · On-site',
          description:
            'Donanım ve ağ altyapısının sorunsuz çalışması için IT desteği ve sistem yönetimi sağladım. Modern web teknolojileri kullanarak şirketin web uygulamalarının frontend taraflarını geliştirdim ve bakımını yürüttüm.',
          achievements: [
            'Kullanıcı arayüzü tasarımları ve bileşen kütüphaneleri oluşturarak ekiplerin geliştirme hızını yükselttim.',
            'PostgreSQL tabanlı veri yapıları üzerinde çalışarak iş süreçlerini dijitalleştirdim.',
          ],
          technologies: ['UI Design', 'PostgreSQL', 'React'],
          logo: divizyonLogo,
        },
        {
          role: 'Volunteer',
          company: 'Inspire Foundation (Malta)',
          timeframe: 'Dec 2023 – Sep 2024',
          location: 'Malta · On-site',
          description:
            'Inspire Malta\'da gönüllü olarak engelli bireyler için eğitimsel ve terapötik programları destekledim. Çeşitlilik içeren multidisipliner ortamda kültürler arası iletişim, takım çalışması ve problem çözme becerileri geliştirdim.',
          achievements: [
            'Birebir destek ve grup etkinlikleri ile terapötik programların etkisini artırdım.',
            'Katılımcılar için özelleştirilmiş öğrenme materyalleri ve aktiviteler hazırladım.',
          ],
          technologies: ['Adaptasyon', 'İngilizce'],
          logo: inspireLogo,
        },
      ],
    },
    projects: {
      sectionLabel: 'Projeler',
      heading: 'Farklı sektörler için etkileşimli arayüzler ve deneyimler.',
      modal: {
        openLabel: 'Detayları Gör',
        featuresTitle: 'Öne Çıkanlar',
        technologiesTitle: 'Kullanılan Teknolojiler',
        primaryActionButton: 'Projeyi Görüntüle',
        comingSoonLabel: 'Yakında',
        closeLabel: 'Kapat',
        imageFallback: 'Önizleme hazırlanıyor',
      },
      cards: [
        {
          title: 'Portfolio Deneyimi',
          description:
            'Kişisel marka hikayesini görsel etkileşimlerle anlatan landing page. GSAP ile sahne geçişleri ve scroll tabanlı animasyonlar içeriyor.',
          timeframe: '2024',
          stack: ['React', 'GSAP', 'TailwindCSS'],
          longDescription:
            'Marka hikayesini anlatan tek sayfalık deneyim; animasyonlu sahneler ve kullanıcı etkileşimini takip eden içerik blokları ile destekleniyor.',
          features: [
            'Scroll bazlı sahne geçişleri ve hikaye anlatımı',
            'Bileşen tabanlı animasyon sistemi',
            'İçerik yönetimi için modüler veri yapısı',
          ],
          technologies: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
          link: 'https://github.com/furkanduzkopru',
          image: portfolioExperienceImg,
        },
        {
          title: 'Eğitim Platformu Dashboard',
          description:
            'Gerçek zamanlı veri görselleştirmeleri ve özelleştirilebilir bileşenlerle tasarlanmış yönetim paneli prototipi.',
          timeframe: '2023',
          stack: ['React', 'Recharts', 'Radix UI'],
          longDescription:
            'Eğitim yöneticileri için eğitmen, modül ve öğrenci performanslarını tek panelden takip etmeyi kolaylaştıran bir kontrol merkezi.',
          features: [
            'Gerçek zamanlı grafikler ve ilerleme göstergeleri',
            'Modüler widget yapısı ile özelleştirilebilir pano',
            'Karanlık/aydınlık tema desteği',
          ],
          technologies: ['React', 'Recharts', 'Radix UI', 'TypeScript'],
          link: null,
          image: educationDashboardImg,
        },
        {
          title: 'Mikro Animasyon Kütüphanesi',
          description:
            'Çeşitli mikro etkileşimleri tek çatı altında toplayan yeniden kullanılabilir animasyon paketleri.',
          timeframe: '2022',
          stack: ['React', 'GSAP', 'Storybook'],
          longDescription:
            'Ürün ekiplerinin hızlıca prototip hazırlayabilmesi için tasarlanmış, yeniden kullanılabilir animasyon koleksiyonu ve Storybook dokümantasyonu.',
          features: [
            'GSAP tabanlı 20+ mikro etkileşim',
            'Storybook ile canlı dokümantasyon',
            'Temalandırılabilir mimari ve API',
          ],
          technologies: ['React', 'GSAP', 'Storybook', 'Framer Motion'],
          link: null,
          image: microAnimationsImg,
        },
      ],
    },
    contact: {
      sectionLabel: 'İletişim',
      heading: 'Yeni projeler ve freelance işbirlikleri için iletişime geç.',
      body:
        'Fikirlerini paylaşmak ya da potansiyel proje detaylarını konuşmak istersen, kısa bir not bırakman yeterli.',
      emailLabel: 'E-posta',
      emailValue: 'hello@furkan.dev',
      phoneLabel: 'Telefon',
      phoneValue: '+90 542 413 9180',
      cta: 'Mesaj Gönder',
    },
    footer: {
      rights: 'Furkan. Tüm hakları saklıdır.',
      stack: 'React · Tailwind CSS · GSAP ile oluşturuldu.',
    },
  },
  en: {
    header: {
      title: "Furkan",
      contact: 'Get in Touch',
      nav: [
        { href: '#top', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    hero: {
      badge: 'Frontend Developer',
      lines: [
        "Hi, I'm Furkan.",
        'I craft interactive experiences.',
        'With React, Tailwind and GSAP.',
      ],
      description:
        'I love designing user-focused interfaces using modern web technologies. Scroll down to explore my approach and sample projects.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
    },
    about: {
      sectionLabel: 'About',
      heading: 'I build distinctive, living web experiences.',
      body:
        'By understanding user behaviour, I craft interfaces that help brands stand out digitally. I focus on design systems, component libraries, and animation-rich experiences.',
      profileCard: {
        name: 'Furkan Duzkopru',
        title: 'Frontend Developer',
        handle: 'furkanduzkopru',
        status: 'Open for freelance work',
        contactText: 'Contact',
        avatar: profileAvatarImg,
      },
    },
    experiences: {
      sectionLabel: 'Experience',
      heading: 'Collaborations that grow products and teams.',
      items: [
        {
          role: 'Intern',
          company: 'Halkbank',
          timeframe: 'Sep 2025 – Oct 2025',
          location: 'Istanbul, Türkiye · On-site',
          description:
            'Built ETL workflows to migrate data from COBOL-based legacy systems to MSSQL and delivered hardware-interactive Android features that improved field efficiency.',
          achievements: [
            'Enabled reliable Bluetooth communication with portable peripherals such as mobile printers.',
            'Implemented real-time QR code scanning and processing using native Camera APIs.',
          ],
          technologies: ['COBOL', 'SQL', 'Android'],
          logo: halkbankLogo,
        },
        {
          role: 'IT Specialist | Frontend Developer',
          company: 'Divizyon',
          timeframe: 'Oct 2024 – Sep 2025',
          location: 'Türkiye · On-site',
          description:
            'Handled IT support and system administration while modernising the company\'s web applications with scalable frontend solutions.',
          achievements: [
            'Introduced reusable UI kits and component libraries that accelerated delivery for product squads.',
            'Optimised PostgreSQL-backed workflows to digitalise key business processes.',
          ],
          technologies: ['UI Design', 'PostgreSQL', 'React'],
          logo: divizyonLogo,
        },
        {
          role: 'Volunteer',
          company: 'Inspire Foundation (Malta)',
          timeframe: 'Dec 2023 – Sep 2024',
          location: 'Malta · On-site',
          description:
            'Supported inclusive educational and therapeutic programmes for people with disabilities, strengthening cross-cultural communication and teamwork skills.',
          achievements: [
            'Amplified programme impact through one-to-one support and group workshops.',
            'Helped design engaging learning materials tailored to participant needs.',
          ],
          technologies: ['Adaptable', 'English'],
          logo: inspireLogo,
        },
      ],
    },
    projects: {
      sectionLabel: 'Projects',
      heading: 'Interactive interfaces and experiences across industries.',
      modal: {
        openLabel: 'View details',
        featuresTitle: 'Features & Details',
        technologiesTitle: 'Technologies Used',
        primaryActionButton: 'View Project',
        comingSoonLabel: 'Coming soon',
        closeLabel: 'Close',
        imageFallback: 'Preview coming soon',
      },
      cards: [
        {
          title: 'Portfolio Experience',
          description:
            'A landing page that tells a personal brand story with visual interactions. Features scene transitions and scroll-based animations powered by GSAP.',
          timeframe: '2024',
          stack: ['React', 'GSAP', 'TailwindCSS'],
          longDescription:
            'A narrative-driven personal portfolio experience with scroll-triggered scenes, parallax layers, and reusable animated components.',
          features: [
            'Story-driven layout with progressive disclosure',
            'Reusable animation primitives powered by GSAP',
            'Content model designed for rapid updates',
          ],
          technologies: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
          link: 'https://github.com/furkanduzkopru',
          image: portfolioExperienceImg,
        },
        {
          title: 'Education Platform Dashboard',
          description:
            'A management dashboard prototype featuring real-time data visualisations and customisable components.',
          timeframe: '2023',
          stack: ['React', 'Recharts', 'Radix UI'],
          longDescription:
            'A control center for education teams to monitor instructors, modules, and learner performance from a single unified interface.',
          features: [
            'Live analytics and progress charts',
            'Widget-based layout with drag-and-drop customisation',
            'Light and dark theme support out of the box',
          ],
          technologies: ['React', 'Recharts', 'Radix UI', 'TypeScript'],
          link: null,
          image: educationDashboardImg,
        },
        {
          title: 'Micro Animation Library',
          description:
            'Reusable animation packs that consolidate a wide range of micro-interactions in a single place.',
          timeframe: '2022',
          stack: ['React', 'GSAP', 'Storybook'],
          longDescription:
            'A collection of reusable motion presets to speed up prototyping, packaged with Storybook for live documentation.',
          features: [
            '20+ GSAP-powered micro animations',
            'Storybook playground with controls',
            'Theme-aware API with tokens',
          ],
          technologies: ['React', 'GSAP', 'Storybook', 'Framer Motion'],
          link: null,
          image: microAnimationsImg,
        },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      heading: 'Reach out for new projects or freelance collaborations.',
      body:
        'Share your ideas or project details and we can schedule a quick chat about the next steps.',
      emailLabel: 'Email',
      emailValue: 'hello@furkan.dev',
      phoneLabel: 'Phone',
      phoneValue: '+90 542 413 9180',
      cta: 'Send a Message',
    },
    footer: {
      rights: "Furkan. All rights reserved.",
      stack: 'Built with React · Tailwind CSS · GSAP.',
    },
  },
}
