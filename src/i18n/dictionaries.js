import profileAvatarImg from '../assets/images/profile-avatar.webp'
import attendanceScreenImg from '../assets/images/projects/nfc-screen-00.png'
import attendanceScreenCopyImg from '../assets/images/projects/nfc-screen-01.png'
import attendanceScreenCopy2Img from '../assets/images/projects/nfc-screen-02.png'
import attendanceScreenCopy3Img from '../assets/images/projects/nfc-screen-03.png'
import attendanceScreenCopy4Img from '../assets/images/projects/nfc-screen-04.png'
import attendanceScreenCopy5Img from '../assets/images/projects/nfc-screen-05.png'
import attendanceScreenCopy6Img from '../assets/images/projects/nfc-screen-06.png'
import assetInventoryImg1 from '../assets/images/projects/asset-inventory-01.jpeg'
import assetInventoryImg2 from '../assets/images/projects/asset-inventory-02.jpeg'
import assetInventoryImg3 from '../assets/images/projects/asset-inventory-03.jpeg'
import posControlPanelImg from '../assets/images/projects/pos-control-panel.png'
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
        { href: '#experiences', label: 'Deneyimler' },
        { href: '#projects', label: 'Projeler' },
        { href: '#contact', label: 'İletişim' },
      ],
    },
    hero: {
      badge: 'Software Developer',
      lines: [
        'Merhaba, ben Furkan.',
        'Statik fikirlere,',
        'Dinamik bir enerji katıyorum.',
      ],
      description:
        'Teknolojiyi bir araç olarak kullanarak fikirlere nasıl hayat verdiğimi görmek için  aşağı kaydırıp projelerimi inceleyebilirsiniz.',
      primaryCta: 'Projelere göz at',
      secondaryCta: 'İletişime geç',
      cards: [
        {
          title: 'BASİT',
          description: 'Yazılımın zekâsı, en karmaşık problemi bile en basit ve anlaşılır şekilde çözebilmektir.',
        },
        {
          title: 'VERİMLİ',
          description: 'Bir bilgiyi iki kez yazmak, bir hatayı iki kez düzeltmek demektir.',
        },
        {
          title: 'OKUNABİLİR',
          description: 'Kod, yazılmasından çok daha fazla okunur.',
        },
      ],
    },
    about: {
      sectionLabel: 'Hakkımda',
      heading: 'Tanışalım.',
      body: [
        'Merhaba, ben Furkan. 24 yaşındayım ve Konya Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum.',
        'Web ve mobil geliştirme alanında React ve React Native kullanarak kullanıcı odaklı projeler geliştiriyorum. Aynı zamanda T-SQL, Kotlin, Swift ve Unity konularında da başlangıç seviyesinde bilgi sahibiyim.',
        'Sürekli öğrenmeye ve kullanıcıya gerçek değer katan çözümler üretmeye odaklanıyorum. Yeni fırsatlara her zaman açığım. Projelerimi incelemek için lütfen kaydırmaya devam edin.',
        'Benimle iletişime geçmekten çekinmeyin.',
      ],
      profileCard: {
        name: 'Furkan Düzköprü',
        title: 'Software Developer',
        handle: 'furkanduzkopru',
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
          location: 'İstanbul, TÜRKİYE · On-site',
          description:
            'COBOL tabanlı legacy sistemlerden modern MSSQL veritabanlarına veri taşıyan ETL süreçleri geliştirirken, sahadaki operasyonları hızlandırmak için Android tabanlı çözümler tasarladım.',
          achievements: [
            'T-SQL betikleriyle COBOL tabanlı legacy sistemlerden modern MSSQL veritabanlarına veri taşıyan ETL süreçleri geliştirdim.',
            'Saha operasyonlarının verimliliğini artırmak için Android platformunda donanım etkileşimli özellikler tasarladım ve devreye aldım.',
            'Taşınabilir yazıcılar gibi çevresel cihazlarla Bluetooth üzerinden kablosuz iletişimi sağlayan modüller üzerinde çalıştım.',
            'Yerel Kamera API\'lerini kullanarak gerçek zamanlı QR kod tarama ve işleme işlevlerini uyguladım.',
          ],
          technologies: ['COBOL', 'T-SQL', 'Android'],
          logo: halkbankLogo,
        },
        {
          role: 'IT Specialist',
          company: 'Divizyon',
          timeframe: 'Oct 2024 – Sep 2025',
          location: 'KONYA, TÜRKİYE · On-site',
          description:
            'Donanım ve ağ altyapısına yönelik IT operasyonlarını yönetirken, şirketin web uygulamalarının frontend katmanını modern araçlarla geliştirdim ve sürdürdüm.',
          achievements: [
            'Şirketin donanım ve ağ altyapısı için IT desteği ve sistem yönetimi sağladım.',
            'Modern web teknolojileriyle şirketin web uygulamalarının frontend bölümlerini geliştirdim ve sürdürdüm.',
            'IT kaynaklarının kesintisiz çalışmasını garanti etmek için son kullanıcılara destek sundum.',
          ],
          technologies: ['React', 'IT Support', 'Networking'],
          logo: divizyonLogo,
        },
        {
          role: 'Volunteer',
          company: 'Inspire Foundation (Malta)',
          timeframe: 'Dec 2023 – Sep 2024',
          location: 'Żejtun, MALTA · On-site',
          description:
            'Inspire Malta\'da gönüllü olarak kapsayıcı eğitim ve terapi programlarını desteklerken, multidisipliner ekiplerle işbirliği becerilerimi geliştirdim.',
          achievements: [
            'Inspire Malta\'da gönüllü olarak çalıştım; engelli bireyler için eğitimsel ve terapötik programları destekledim.',
            'Çok kültürlü ve multidisipliner bir ortamda çalışırken kültürler arası iletişim, takım çalışması ve problem çözme becerileri geliştirdim.',
          ],
          technologies: ['Gönüllülük', 'Takım Çalışması', 'Eğitim'],
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
          title: 'Zimmet & Envanter Yönetim Sistemi',
          description:
            'Gerçek zamanlı zimmet yönetimi; dashboard metrikleri, canlı talepler ve raporlama ile operasyon görünürlüğü.',
          timeframe: '2024',
          stack: ['React', 'TypeScript', 'Socket.IO'],
          gallery: [assetInventoryImg1, assetInventoryImg2, assetInventoryImg3],
          longDescription:
            'Socket.IO bildirimleri, bakım ve raporlama süreçlerini tek yerde toplayan uçtan uca zimmet ve envanter çözümü.',
          features: [
            'Gerçek zamanlı talepler ve otomatik zimmet akışı.',
            'API’den beslenen metrik panosu ve trend grafikleri.',
            'JWT tabanlı rol ve rota kontrolü.',
            'Kategori/ürün yönetimi, zimmet atama ve bakım takibi.',
            'Detaylı filtreleme ve CSV dışa aktarma.',
            'FullCalendar ile etkinlik oluşturma ve sürükle-bırak takvim.',
          ],
          technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'PostgreSQL', 'Socket.IO'],
          link: null,
          image: assetInventoryImg1,
          useDarkOverlay: true,
        },
        {
          title: 'Sunmi POS Kontrol Paneli',
          description:
            'Sunmi POS terminalleri için Kotlin ve Jetpack Compose kullanılarak geliştirilmiş yerel (native) bir Android yönetim uygulamasıdır.',
          timeframe: '2024',
          stack: ['Jetpack Compose', 'Android (Native)', 'Kotlin'],
          gallery: [posControlPanelImg],
          longDescription:
            'Bu kontrol paneli, teknisyenlerin ve son kullanıcıların cihazı hızla test etmesini sağlamak için tasarlanmıştır. Uygulama, tek bir modern arayüz üzerinden üç ana işlevi yönetir.',
          features: [
            'Yazıcı Yönetimi: SunmiPrinterXManager API\'si ile doğrudan entegre olarak yazıcı bağlantı durumunu izler, test baskısı alır ve girilen URL\'leri anında QR kod olarak yazdırır.',
            'QR Tarama: Cihazın dahili kamerasını kullanarak QR kod okutur, sonucu kaydeder ve taranan bağlantıyı açma seçeneği sunar.',
          ],
          technologies: ['Jetpack Compose', 'Android (Native)', 'Kotlin'],
          link: null,
          image: posControlPanelImg,
          useDarkOverlay: true,
        },
        {
          title: 'NFC Yoklama Otomasyonu',
          description:
            'Üniversiteler için tasarlanmış çift rollü (Akademisyen/Öğrenci) NFC tabanlı yoklama otomasyonu.',
          timeframe: '2024',
          stack: ['React Native', 'Node.js', 'PostgreSQL', 'TypeScript', 'NFC', 'JWT'],
          gallery: [
            attendanceScreenCopy3Img,
            attendanceScreenImg,
            attendanceScreenCopyImg,
            attendanceScreenCopy2Img,
            attendanceScreenCopy4Img,
            attendanceScreenCopy5Img,
            attendanceScreenCopy6Img,
          ],
          longDescription:
            'Akademisyen ve öğrenciler için iki ayrı arayüz sunan bu otomasyon, canlı NFC oturumlarıyla yoklamayı otomatikleştirirken raporlamayı tek panelde toplar.',
          features: [
            'Akademisyenler: Canlı NFC oturumları başlatabilir, öğrencileri anlık olarak kaydedebilir ve katılım raporlarını görüntüleyebilir.',
            'Öğrenciler: Grafikler ve interaktif takvim üzerinden devamsızlık durumlarını, ders programlarını ve kalan haklarını takip edebilir.',
          ],
          technologies: ['React Native', 'Node.js', 'PostgreSQL', 'TypeScript', 'NFC', 'JWT'],
          link: null,
          image: attendanceScreenCopy3Img,
        },
      ],
    },
    contact: {
      sectionLabel: 'İletişim',
      heading: 'Birlikte Çalışmak veya Projeleriniz İçin İletişime Geçin.',
      body:
        'İster ekibinizin bir parçası, ister proje bazlı bir çözüm ortağı olarak fikirlerinizi gerçeğe dönüştürmek için benimle iletişime geçebilirsiniz.',
      emailLabel: 'E-posta',
      emailValue: 'furkanduzkopru@gmail.com',
      phoneLabel: 'Telefon',
      phoneValue: '+90 542 413 9180',
      cta: 'Mesaj Gönder',
    },
   
  },
  en: {
    header: {
      title: "Furkan",
      contact: 'Get in Touch',
      nav: [
        { href: '#top', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#experiences', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    hero: {
      badge: 'Software Developer',
      lines: [
        "Hi, I'm Furkan.",
        'I bring dynamic energy',
        'to every static idea.',
      ],
      description:
        'Scroll down and explore my projects to see how I use technology as a tool to bring ideas to life.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
      cards: [
        {
          title: 'SIMPLE',
          description: 'Smart software solves the most complex problems in the simplest, clearest way.',
        },
        {
          title: 'EFFICIENT',
          description: 'Every piece of information should have a single authoritative representation in the system.',
        },
        {
          title: 'READABLE',
          description: 'Code is read far more often than it is written.',
        },
      ],
    },
    about: {
      sectionLabel: 'About',
      heading: "Let's connect.",
      body: [
        "Hello, I'm Furkan. I am 24 years old and a graduate of Konya Technical University with a degree in Computer Engineering.",
        'I develop projects in web and mobile development using React and React Native. I also have beginner-level knowledge of T-SQL, Kotlin, Swift, and Unity. I am focused on continuous learning and delivering solutions that create real value for users.',
        'I am always open to new opportunities. Please feel free to scroll down to see my projects.',
        'Please feel free to get in touch.',
      ],
      profileCard: {
        name: 'Furkan Duzkopru',
        title: 'Software Developer',
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
            'Built data migration ETL workflows and field-ready Android solutions that bridged COBOL-based legacy systems with modern MSSQL platforms.',
          achievements: [
            'Developed ETL processes to migrate data from COBOL-based legacy systems to modern MSSQL databases using T-SQL scripts.',
            'Designed and implemented hardware-interactive features on the Android platform to enhance the efficiency of field operations.',
            'Worked on modules that enabled wireless communication with peripheral devices, such as portable printers, via Bluetooth.',
            'Implemented real-time QR code scanning and processing functionalities using native Camera APIs.',
          ],
          technologies: ['COBOL', 'T-SQL', 'Android'],
          logo: halkbankLogo,
        },
        {
          role: 'IT Specialist',
          company: 'Divizyon',
          timeframe: 'Oct 2024 – Sep 2025',
          location: 'Türkiye · On-site',
          description:
            'Balanced day-to-day IT operations with frontend development, keeping infrastructure stable while evolving the company\'s web applications.',
          achievements: [
            'Providing IT support and system administration for the company\'s hardware and network infrastructure.',
            'Developing and maintaining the frontend parts of the company\'s web applications using modern web technologies.',
            'Delivering end-user support to ensure the smooth operation of IT resources.',
          ],
          technologies: ['React', 'IT Support', 'Networking'],
          logo: divizyonLogo,
        },
        {
          role: 'Volunteer',
          company: 'Inspire Foundation (Malta)',
          timeframe: 'Dec 2023 – Sep 2024',
          location: 'Malta · On-site',
          description:
            'Volunteered with Inspire Malta to support inclusive education and therapy programmes while collaborating across multidisciplinary teams.',
          achievements: [
            'Contributed as a volunteer at Inspire Malta, supporting educational and therapeutic programs for individuals with disabilities.',
            'Developed cross-cultural communication, teamwork, and problem-solving skills while working in a diverse, multidisciplinary environment.',
          ],
          technologies: ['Volunteering', 'Teamwork', 'Education'],
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
          title: 'Asset & Inventory Management System',
          description:
            'Real-time asset tracking with dashboard metrics, live requests, and reporting for full operational visibility.',
          timeframe: '2024',
          stack: ['React', 'TypeScript', 'Socket.IO'],
          gallery: [assetInventoryImg1, assetInventoryImg2, assetInventoryImg3],
          longDescription:
            'An end-to-end platform that unifies socket-powered requests, maintenance workflows, and analytics into a single inventory hub.',
          features: [
            'Live requests with automatic assignment via Socket.IO.',
            'API-driven metrics dashboard and trend visualisations.',
            'Route-level JWT and role-based access control.',
            'Category/product admin, assignment, returns, maintenance.',
            'Granular filters with CSV export.',
            'FullCalendar events with create/edit/drag-and-drop.',
          ],
          technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'PostgreSQL', 'Socket.IO'],
          link: null,
          image: assetInventoryImg1,
          useDarkOverlay: true,
        },
        {
          title: 'Sunmi POS Control Panel',
          description:
            'A native Android management app built with Kotlin and Jetpack Compose for Sunmi POS terminals.',
          timeframe: '2024',
          stack: ['Jetpack Compose', 'Android (Native)', 'Kotlin'],
          gallery: [posControlPanelImg],
          longDescription:
            'Designed so technicians and end users can test devices quickly, this control panel unifies three core functions inside a single modern interface.',
          features: [
            "Printer Management: Integrates directly with the SunmiPrinterXManager API to monitor printer state, run test prints, and instantly render URLs as QR codes.",
            'QR Scanning: Uses the built-in camera to scan QR codes, log the result, and offer to open the scanned link.',
          ],
          technologies: ['Jetpack Compose', 'Android (Native)', 'Kotlin'],
          link: null,
          image: posControlPanelImg,
          useDarkOverlay: true,
        },
        {
          title: 'NFC Attendance Automation',
          description:
            'A dual-role (Faculty/Student) NFC attendance automation system built for universities.',
          timeframe: '2024',
          stack: ['React Native', 'Node.js', 'PostgreSQL', 'TypeScript', 'NFC', 'JWT'],
          gallery: [
            attendanceScreenCopy3Img,
            attendanceScreenImg,
            attendanceScreenCopyImg,
            attendanceScreenCopy2Img,
            attendanceScreenCopy4Img,
            attendanceScreenCopy5Img,
            attendanceScreenCopy6Img,
          ],
          longDescription:
            'Paired faculty and student experiences automate attendance via live NFC sessions while consolidating analytics inside a single dashboard.',
          features: [
            'Faculty: Launch live NFC sessions, capture students in real time, and review attendance reports.',
            'Students: Track absences, class schedules, and remaining allowances via charts and an interactive calendar.',
          ],
          technologies: ['React Native', 'Node.js', 'PostgreSQL', 'TypeScript', 'NFC', 'JWT'],
          link: null,
          image: attendanceScreenCopy3Img,
        },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      heading: 'Collaborate or Reach Out for Your Projects.',
      body:
        'Whether you need another teammate or a project-based partner, reach out and we can turn your ideas into reality.',
      emailLabel: 'Email',
      emailValue: 'furkanduzkopru@gmail.com',
      phoneLabel: 'Phone',
      phoneValue: '+90 542 413 9180',
      cta: 'Send a Message',
    },
   
  },
}
