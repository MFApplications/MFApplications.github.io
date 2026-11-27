export type Category = 'archiver' | 'downloader' | 'device' | 'desktop' | 'extension' | 'docs';

export interface Project {
  id: string;
  name: string;
  repo?: string;
  url?: string;
  placeholder?: boolean;
  language: string;
  license: string;
  category: Category;
  release?: string;
  docsUrl?: string;
  install?: string;
  description: { en: string; es: string };
  features: { en: string[]; es: string[] };
}

export interface Family {
  id: string;
  name: string;
  org: string;
  url: string;
  avatar: string;
  description: { en: string; es: string };
  projects: Project[];
}

export const families: Family[] = [
  {
    id: 'scrap-mf',
    name: 'ScrapMF',
    org: 'Scrap-MF',
    url: 'https://github.com/Scrap-MF',
    avatar: '/orgs/scrap-mf.png',
    description: {
      en: 'Archiving and cookie tooling for social media galleries.',
      es: 'Herramientas de archivado y cookies para galerías de redes sociales.',
    },
    projects: [
      {
        id: 'scrapmf',
        name: 'ScrapMF CLI',
        repo: 'ScrapMF-Rust-CLI',
        url: 'https://github.com/Scrap-MF/ScrapMF-Rust-CLI',
        language: 'Rust',
        license: 'GPL-3.0',
        category: 'archiver',
        release: 'v1.5.18',
        docsUrl: 'https://scrap-mf.github.io/ScrapMF-Docs/',
        install: 'curl -fsSL https://raw.githubusercontent.com/Scrap-MF/ScrapMF-Rust-CLI/main/install.sh | sh',
        description: {
          en: 'A safe, interactive archiver for social media galleries. Wraps gallery-dl so you do not have to learn its flags.',
          es: 'Archivador seguro e interactivo para galerías de redes sociales. Envuelve gallery-dl para que no tengas que aprender sus flags.',
        },
        features: {
          en: ['Single binary, no runtime dependencies', 'Guided interactive menu when run with no arguments', 'Remembers previous downloads, no duplicates on re-run', 'Supports 300+ sites via pinned gallery-dl', 'Checksum-verified installer'],
          es: ['Binario único, sin dependencias de runtime', 'Menú interactivo guiado al ejecutar sin argumentos', 'Recuerda descargas previas, sin duplicados al re-ejecutar', 'Soporta más de 300 sitios vía gallery-dl fijado', 'Instalador verificado por checksum'],
        },
      },
      {
        id: 'eldevoracucas',
        name: 'ElDevoraCucas',
        repo: 'ElDevoraCucasMF',
        url: 'https://github.com/Scrap-MF/ElDevoraCucasMF',
        language: 'JavaScript',
        license: 'MIT',
        category: 'extension',
        description: {
          en: 'Firefox extension that reads cookies from supported networks and writes them as a Netscape cookies.txt, and implants them back into a browser.',
          es: 'Extensión de Firefox que lee cookies de redes compatibles y las escribe como cookies.txt (Netscape), y las implanta de vuelta en un navegador.',
        },
        features: {
          en: ['Export cookies for Instagram, TikTok, Twitter/X, VSCO, Threads, Facebook', 'Import cookies.txt back into any browser', 'Keyboard shortcuts for quick export', 'Works on Firefox desktop and Android'],
          es: ['Exporta cookies de Instagram, TikTok, Twitter/X, VSCO, Threads, Facebook', 'Importa cookies.txt de vuelta en cualquier navegador', 'Atajos de teclado para exportación rápida', 'Funciona en Firefox desktop y Android'],
        },
      },
      {
        id: 'scrapmf-docs',
        name: 'ScrapMF Docs',
        repo: 'ScrapMF-Docs',
        url: 'https://github.com/Scrap-MF/ScrapMF-Docs',
        language: 'TypeScript',
        license: '—',
        category: 'docs',
        docsUrl: 'https://scrap-mf.github.io/ScrapMF-Docs/',
        description: {
          en: 'Docusaurus documentation site for the ScrapMF CLI, in English and Spanish.',
          es: 'Sitio de documentación Docusaurus para el CLI de ScrapMF, en inglés y español.',
        },
        features: {
          en: ['Bilingual content (English and Spanish)', 'Installation, quickstart and CLI reference', 'Configuration and cookies guides', 'Troubleshooting and FAQ'],
          es: ['Contenido bilingüe (inglés y español)', 'Instalación, inicio rápido y referencia del CLI', 'Guías de configuración y cookies', 'Solución de problemas y FAQ'],
        },
      },
    ],
  },
  {
    id: 'extractors',
    name: 'ExtractorsMF',
    org: 'ExtractorsMF',
    url: 'https://github.com/ExtractorsMF',
    avatar: '/orgs/extractorsmf.png',
    description: {
      en: 'Media downloaders for Threads and TikTok with a Python library and CLI.',
      es: 'Descargadores de media para Threads y TikTok con biblioteca Python y CLI.',
    },
    projects: [
      {
        id: 'threadstractor',
        name: 'ThreadstractorMF',
        repo: 'ThreadstractorMF',
        url: 'https://github.com/ExtractorsMF/ThreadstractorMF',
        language: 'Python',
        license: 'GPL-3.0',
        category: 'downloader',
        release: 'v1.4.0',
        description: {
          en: 'Threads media downloader — Python library plus CLI, compatible with gallery-dl/yt-dlp cookies.',
          es: 'Descargador de media de Threads: biblioteca Python más CLI, compatible con cookies de gallery-dl/yt-dlp.',
        },
        features: {
          en: ['Python library and CLI', 'httpx/curl_cffi backends', 'Netscape and browser cookies', 'Profile picture download', 'Filename templates'],
          es: ['Biblioteca Python y CLI', 'Backends httpx/curl_cffi', 'Cookies Netscape y de navegador', 'Descarga de foto de perfil', 'Plantillas de nombre de archivo'],
        },
      },
      {
        id: 'tikstractor',
        name: 'TikstractorMF',
        repo: 'TikstractorMF',
        url: 'https://github.com/ExtractorsMF/TikstractorMF',
        language: 'Python',
        license: 'GPL-3.0',
        category: 'downloader',
        release: 'v1.6.2',
        description: {
          en: 'TikTok media downloader — Python library plus CLI, compatible with gallery-dl/yt-dlp cookies.',
          es: 'Descargador de media de TikTok: biblioteca Python más CLI, compatible con cookies de gallery-dl/yt-dlp.',
        },
        features: {
          en: ['Python library and CLI', 'curl_cffi antibot backend', 'Browser cookie extraction', 'Stories and profile downloads', 'Filename templates'],
          es: ['Biblioteca Python y CLI', 'Backend antibot curl_cffi', 'Extracción de cookies del navegador', 'Descargas de stories y perfil', 'Plantillas de nombre de archivo'],
        },
      },
    ],
  },
  {
    id: 'alejandradb',
    name: 'AlejandraDB',
    org: 'AlejandraDB-MF',
    url: 'https://github.com/AlejandraDB-MF',
    avatar: '/orgs/alejandradb-mf.png',
    description: {
      en: 'Android device management from the terminal.',
      es: 'Gestión de dispositivos Android desde la terminal.',
    },
    projects: [
      {
        id: 'alejandradb',
        name: 'AlejandraDB CLI',
        repo: 'AlejandraDB-CLI',
        url: 'https://github.com/AlejandraDB-MF/AlejandraDB-CLI',
        language: 'Rust',
        license: 'GPL-3.0',
        category: 'device',
        release: 'v1.2.0',
        install: 'curl -fsSL https://raw.githubusercontent.com/AlejandraDB-MF/AlejandraDB-CLI/main/install.sh | sh',
        description: {
          en: 'Terminal tool for managing Android devices through ADB: list devices, manage apps, read info, capture logcat, run backup scripts. Rust binary with a full-screen TUI.',
          es: 'Herramienta de terminal para gestionar dispositivos Android vía ADB: listar dispositivos, gestionar apps, leer info, capturar logcat, ejecutar scripts de backup. Binario Rust con TUI a pantalla completa.',
        },
        features: {
          en: ['Device listing and info', 'App install/uninstall', 'Logcat capture', 'Backup scripts', 'Docker image published to GHCR', 'Wi-Fi and USB ADB support'],
          es: ['Listado e info de dispositivos', 'Instalación/desinstalación de apps', 'Captura de logcat', 'Scripts de backup', 'Imagen Docker publicada en GHCR', 'Soporte ADB por Wi-Fi y USB'],
        },
      },
    ],
  },
  {
    id: 'mfapplications',
    name: 'MFApplications',
    org: 'MFApplications',
    url: 'https://github.com/MFApplications',
    avatar: '/orgs/mfapplications.png',
    description: {
      en: 'Desktop apps for managing cloud storage.',
      es: 'Apps de escritorio para gestionar almacenamiento en la nube.',
    },
    projects: [
      {
        id: 'rcsyncit',
        name: 'RCSyncitMF',
        repo: 'RCSyncit-MF',
        url: 'https://github.com/MFApplications/RCSyncit-MF',
        language: 'Python',
        license: 'GPL-3.0',
        category: 'desktop',
        release: 'v1.1.4',
        description: {
          en: 'GNOME/libadwaita manager for rclone with multi-profile support: profiles, remotes, unions, mounts and sync from a GTK4 UI.',
          es: 'Gestor GNOME/libadwaita para rclone con soporte multi-perfil: perfiles, remotos, uniones, montajes y sincronización desde una UI GTK4.',
        },
        features: {
          en: ['Multi-profile management', 'Remote and union creation', 'Dry-run sync by default', 'Mount with rclone mount --daemon', 'Flatpak with host rclone', 'GTK4/libadwaita UI'],
          es: ['Gestión multi-perfil', 'Creación de remotos y uniones', 'Sincronización dry-run por defecto', 'Montaje con rclone mount --daemon', 'Flatpak con rclone del host', 'UI GTK4/libadwaita'],
        },
      },
      {
        id: 'coming-soon',
        name: 'Coming soon',
        placeholder: true,
        url: 'https://github.com/MFApplications',
        language: '—',
        license: '—',
        category: 'desktop',
        description: {
          en: 'More independent applications from MFApplications are on the way.',
          es: 'Más aplicaciones independientes de MFApplications están en camino.',
        },
        features: { en: [], es: [] },
      },
    ],
  },
];