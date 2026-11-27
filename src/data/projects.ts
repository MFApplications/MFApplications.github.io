export type Category = 'archiver' | 'downloader' | 'device' | 'desktop' | 'extension';

export interface Project {
  id: string;
  name: string;
  org: string;
  repo: string;
  url: string;
  language: string;
  license: string;
  category: Category;
  release?: string;
  docsUrl?: string;
  install?: string;
  description: { en: string; es: string };
}

export const projects: Project[] = [
  {
    id: 'scrapmf',
    name: 'ScrapMF',
    org: 'Scrap-MF',
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
  },
  {
    id: 'eldevoracucas',
    name: 'ElDevoraCucas',
    org: 'Scrap-MF',
    repo: 'ElDevoraCucasMF',
    url: 'https://github.com/Scrap-MF/ElDevoraCucasMF',
    language: 'JavaScript',
    license: 'MIT',
    category: 'extension',
    description: {
      en: 'Firefox extension that reads cookies from supported networks and writes them as a Netscape cookies.txt, and implants them back into a browser.',
      es: 'Extensión de Firefox que lee cookies de redes compatibles y las escribe como cookies.txt (Netscape), y las implanta de vuelta en un navegador.',
    },
  },
  {
    id: 'threadstractor',
    name: 'ThreadstractorMF',
    org: 'ExtractorsMF',
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
  },
  {
    id: 'tikstractor',
    name: 'TikstractorMF',
    org: 'ExtractorsMF',
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
  },
  {
    id: 'alejandradb',
    name: 'AlejandraDB',
    org: 'AlejandraDB-MF',
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
  },
  {
    id: 'rcsyncit',
    name: 'RCSyncitMF',
    org: 'MFApplications',
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
  },
];

export const categories: { id: Category | 'all'; label: { en: string; es: string } }[] = [
  { id: 'all', label: { en: 'All', es: 'Todos' } },
  { id: 'archiver', label: { en: 'Archivers', es: 'Archivadores' } },
  { id: 'downloader', label: { en: 'Downloaders', es: 'Descargadores' } },
  { id: 'device', label: { en: 'Device tools', es: 'Herramientas de dispositivo' } },
  { id: 'desktop', label: { en: 'Desktop apps', es: 'Apps de escritorio' } },
  { id: 'extension', label: { en: 'Extensions', es: 'Extensiones' } },
];