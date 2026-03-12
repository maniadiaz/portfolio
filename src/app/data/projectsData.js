import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import CloudIcon from '@mui/icons-material/Cloud'
import StorageIcon from '@mui/icons-material/Storage'
import WorkIcon from '@mui/icons-material/Work'
import WebIcon from '@mui/icons-material/Web'
import NotificationsIcon from '@mui/icons-material/Notifications'
import DevicesIcon from '@mui/icons-material/Devices'
import MapIcon from '@mui/icons-material/Map'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import FolderIcon from '@mui/icons-material/Folder'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import DescriptionIcon from '@mui/icons-material/Description'
import ApiIcon from '@mui/icons-material/Api'
import SearchIcon from '@mui/icons-material/Search'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import LanguageIcon from '@mui/icons-material/Language'
import DnsIcon from '@mui/icons-material/Dns'

export const getWebProjects = (t) => [
  {
    id: 14,
    title: t('projects.list.apexCRM.title'),
    subtitle: t('projects.list.apexCRM.subtitle'),
    period: t('projects.list.apexCRM.period'),
    status: 'in-progress',
    projectType: 'company',
    company: 'ApexMesh Network',
    githubLink: null,
    description: t('projects.list.apexCRM.description'),
    responsibilities: t('projects.list.apexCRM.responsibilities', { returnObjects: true }),
    technologies: ['React', 'TypeScript', 'Vite', 'Material UI', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'Redis', 'OpenAI API', 'WhatsApp Cloud API', 'Mercado Pago', 'Cloudflare R2', 'Docker', 'JWT'],
    icon: BusinessCenterIcon,
    color: '#38BDF8'
  },
  {
    id: 15,
    title: t('projects.list.apexMeshLanding.title'),
    subtitle: t('projects.list.apexMeshLanding.subtitle'),
    period: t('projects.list.apexMeshLanding.period'),
    status: 'completed',
    projectType: 'company',
    company: 'ApexMesh Network',
    githubLink: null,
    description: t('projects.list.apexMeshLanding.description'),
    responsibilities: t('projects.list.apexMeshLanding.responsibilities', { returnObjects: true }),
    technologies: ['React', 'TypeScript', 'Vite', 'Material UI v7', 'Framer Motion', 'react-i18next', 'CSS Grid'],
    icon: LanguageIcon,
    color: '#A855F7'
  },
  {
    id: 16,
    title: t('projects.list.apexMeshVPS.title'),
    subtitle: t('projects.list.apexMeshVPS.subtitle'),
    period: t('projects.list.apexMeshVPS.period'),
    status: 'in-progress',
    projectType: 'company',
    company: 'ApexMesh Network',
    githubLink: null,
    description: t('projects.list.apexMeshVPS.description'),
    responsibilities: t('projects.list.apexMeshVPS.responsibilities', { returnObjects: true }),
    technologies: ['Linux', 'Nginx', 'Bind9', 'Cloudflare', 'DNS', 'VPS', 'Docker', 'SSL/TLS'],
    icon: DnsIcon,
    color: '#2563EB'
  },
  {
    id: 1,
    title: t('projects.list.cvGeneratorFrontend.title'),
    subtitle: t('projects.list.cvGeneratorFrontend.subtitle'),
    period: t('projects.list.cvGeneratorFrontend.period'),
    status: 'completed',
    projectType: 'personal',
    company: null,
    githubLink: 'https://github.com/maniadiaz/cv-generator.git',
    description: t('projects.list.cvGeneratorFrontend.description'),
    responsibilities: t('projects.list.cvGeneratorFrontend.responsibilities', { returnObjects: true }),
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Material-UI', 'Vite', 'react-i18next', 'PWA', 'Axios', 'React Router'],
    icon: DescriptionIcon,
    color: '#1976d2'
  },
  {
    id: 2,
    title: t('projects.list.cvGeneratorBackend.title'),
    subtitle: t('projects.list.cvGeneratorBackend.subtitle'),
    period: t('projects.list.cvGeneratorBackend.period'),
    status: 'completed',
    projectType: 'personal',
    company: null,
    githubLink: 'https://github.com/maniadiaz/cv-generator.git',
    description: t('projects.list.cvGeneratorBackend.description'),
    responsibilities: t('projects.list.cvGeneratorBackend.responsibilities', { returnObjects: true }),
    technologies: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT', 'Puppeteer', 'Winston', 'Joi', 'PM2', 'Bcrypt'],
    icon: ApiIcon,
    color: '#2e7d32'
  },
  {
    id: 3,
    title: t('projects.list.mediaHunter.title'),
    subtitle: t('projects.list.mediaHunter.subtitle'),
    period: t('projects.list.mediaHunter.period'),
    status: 'completed',
    projectType: 'personal',
    company: null,
    githubLink: 'https://github.com/maniadiaz/media-hunter.git',
    description: t('projects.list.mediaHunter.description'),
    responsibilities: t('projects.list.mediaHunter.responsibilities', { returnObjects: true }),
    technologies: ['React', 'Vite', 'Material UI', 'TypeScript', 'Express', 'i18next', 'Pexels API', 'Pixabay API', 'Giphy API', 'Freesound API'],
    icon: SearchIcon,
    color: '#f59e0b'
  },
  {
    id: 4,
    title: t('projects.list.serviapp.title'),
    subtitle: t('projects.list.serviapp.subtitle'),
    period: t('projects.list.serviapp.period'),
    status: 'completed',
    projectType: 'company',
    company: 'Locmex (AmericasIoT)',
    githubLink: null,
    description: t('projects.list.serviapp.description'),
    responsibilities: t('projects.list.serviapp.responsibilities', { returnObjects: true }),
    technologies: ['Angular', 'TypeScript', 'Ionic', 'Vite', 'Supabase', 'Push Notifications', 'Mobile Development'],
    icon: PhoneAndroidIcon,
    color: '#ef4444'
  },
  {
    id: 5,
    title: t('projects.list.sims.title'),
    subtitle: t('projects.list.sims.subtitle'),
    period: t('projects.list.sims.period'),
    status: 'completed',
    projectType: 'company',
    company: 'Locmex (AmericasIoT)',
    githubLink: null,
    description: t('projects.list.sims.description'),
    responsibilities: t('projects.list.sims.responsibilities', { returnObjects: true }),
    technologies: ['React', 'Vite', 'JavaScript', 'MariaDB', 'Node.js', 'Express', 'emnify API'],
    icon: PhoneAndroidIcon,
    color: '#3b82f6'
  },
  {
    id: 6,
    title: t('projects.list.microSavings.title'),
    subtitle: t('projects.list.microSavings.subtitle'),
    period: t('projects.list.microSavings.period'),
    status: 'in-progress',
    projectType: 'personal',
    company: null,
    githubLink: 'coming-soon',
    description: t('projects.list.microSavings.description'),
    responsibilities: t('projects.list.microSavings.responsibilities', { returnObjects: true }),
    technologies: ['React', 'Vite', 'Express', 'Sequelize', 'MySQL', 'Node.js', 'Nginx', 'VPS'],
    icon: CloudIcon,
    color: '#d946ef'
  },
  {
    id: 7,
    title: t('projects.list.microSavingsApi.title'),
    subtitle: t('projects.list.microSavingsApi.subtitle'),
    period: t('projects.list.microSavingsApi.period'),
    status: 'completed',
    projectType: 'personal',
    company: null,
    githubLink: 'https://github.com/maniadiaz/Apis-Micro-Ahorros',
    description: t('projects.list.microSavingsApi.description'),
    responsibilities: t('projects.list.microSavingsApi.responsibilities', { returnObjects: true }),
    technologies: ['Node.js', 'Express.js', 'Sequelize', 'MySQL', 'JWT', 'bcrypt', 'nodemon', 'dotenv'],
    icon: StorageIcon,
    color: '#3b82f6',
  },
  {
    id: 13,
    title: t('projects.list.desktopApps.title'),
    subtitle: t('projects.list.desktopApps.subtitle'),
    period: t('projects.list.desktopApps.period'),
    status: 'completed',
    projectType: 'company',
    company: 'CertexAI',
    githubLink: null,
    description: t('projects.list.desktopApps.description'),
    responsibilities: t('projects.list.desktopApps.responsibilities', { returnObjects: true }),
    technologies: ['.NET', 'C#', 'ASP.NET', 'Blazor', 'Razor Pages', 'SQLite', 'PDF Processing'],
    icon: DevicesIcon,
    color: '#512BD4'
  },
  {
    id: 10,
    title: t('projects.list.pushNotifications.title'),
    subtitle: t('projects.list.pushNotifications.subtitle'),
    period: t('projects.list.pushNotifications.period'),
    status: 'completed',
    projectType: 'company',
    company: 'CertexAI',
    githubLink: null,
    description: t('projects.list.pushNotifications.description'),
    responsibilities: t('projects.list.pushNotifications.responsibilities', { returnObjects: true }),
    technologies: ['.NET', 'Blazor', 'C#', 'Service Worker', 'Web Push API'],
    icon: NotificationsIcon,
    color: '#f59e0b'
  },
  {
    id: 11,
    title: t('projects.list.gpsManagement.title'),
    subtitle: t('projects.list.gpsManagement.subtitle'),
    period: t('projects.list.gpsManagement.period'),
    status: 'completed',
    projectType: 'company',
    company: 'CertexAI',
    githubLink: null,
    description: t('projects.list.gpsManagement.description'),
    responsibilities: t('projects.list.gpsManagement.responsibilities', { returnObjects: true }),
    technologies: ['React', 'Vite', 'REST API', 'PWA', 'SPA', 'Responsive Design'],
    icon: DevicesIcon,
    color: '#764ba2'
  },
  {
    id: 8,
    title: t('projects.list.portfolio.title'),
    subtitle: t('projects.list.portfolio.subtitle'),
    period: t('projects.list.portfolio.period'),
    status: 'completed',
    projectType: 'personal',
    company: null,
    githubLink: 'https://github.com/maniadiaz/portfolio',
    description: t('projects.list.portfolio.description'),
    responsibilities: t('projects.list.portfolio.responsibilities', { returnObjects: true }),
    technologies: ['React', 'Vite', 'Material UI', 'React Router', 'JavaScript', 'CSS3', 'Responsive Design'],
    icon: WorkIcon,
    color: '#10b981'
  },
  {
    id: 9,
    title: t('projects.list.onlineDegree.title'),
    subtitle: t('projects.list.onlineDegree.subtitle'),
    period: t('projects.list.onlineDegree.period'),
    status: 'completed',
    projectType: 'company',
    company: 'UAS en Facultad Informática Mazatlán',
    githubLink: null,
    description: t('projects.list.onlineDegree.description'),
    responsibilities: t('projects.list.onlineDegree.responsibilities', { returnObjects: true }),
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'MVC'],
    icon: WebIcon,
    color: '#ff944dff'
  },
  {
    id: 12,
    title: t('projects.list.googleMaps.title'),
    subtitle: t('projects.list.googleMaps.subtitle'),
    period: t('projects.list.googleMaps.period'),
    status: 'completed',
    projectType: 'personal',
    company: null,
    githubLink: 'https://github.com/maniadiaz/Map-Google-React',
    description: t('projects.list.googleMaps.description'),
    responsibilities: t('projects.list.googleMaps.responsibilities', { returnObjects: true }),
    technologies: ['React', 'React Router', 'Google Maps API', 'Material UI', 'JavaScript', 'Git'],
    icon: MapIcon,
    color: '#4ff36aff'
  },
]

export const getPythonProjects = (t) => [
  {
    id: 1,
    title: t('projects.list.deployManager.title'),
    description: t('projects.list.deployManager.description'),
    period: t('projects.list.deployManager.period'),
    status: 'completed',
    technologies: ['Python', 'Deployment', 'Automation', 'CLI'],
    responsibilities: t('projects.list.deployManager.responsibilities', { returnObjects: true }),
    githubLink: 'https://github.com/maniadiaz/DeployManager',
    color: '#3b82f6',
    icon: CloudIcon
  },
  {
    id: 2,
    title: t('projects.list.inventoryApi.title'),
    description: t('projects.list.inventoryApi.description'),
    period: t('projects.list.inventoryApi.period'),
    status: 'completed',
    technologies: ['Python', 'Flask', 'REST API', 'Database', 'JSON'],
    responsibilities: t('projects.list.inventoryApi.responsibilities', { returnObjects: true }),
    githubLink: 'https://github.com/maniadiaz/inventory-api-python',
    color: '#8b5cf6',
    icon: StorageIcon
  },
  {
    id: 3,
    title: t('projects.list.weatherApp.title'),
    description: t('projects.list.weatherApp.description'),
    period: t('projects.list.weatherApp.period'),
    status: 'completed',
    technologies: ['Python', 'API Integration', 'Data Processing', 'CLI/GUI'],
    responsibilities: t('projects.list.weatherApp.responsibilities', { returnObjects: true }),
    githubLink: 'https://github.com/maniadiaz/python-weather-app',
    color: '#10b981',
    icon: ThunderstormIcon
  },
  {
    id: 4,
    title: t('projects.list.fileOrganizer.title'),
    description: t('projects.list.fileOrganizer.description'),
    period: t('projects.list.fileOrganizer.period'),
    status: 'completed',
    technologies: ['Python', 'File I/O', 'Automation', 'OS Operations'],
    responsibilities: t('projects.list.fileOrganizer.responsibilities', { returnObjects: true }),
    githubLink: 'https://github.com/maniadiaz/organizador_archivos',
    color: '#f59e0b',
    icon: FolderIcon
  }
]

export const getWebStats = (t) => [
  {
    value: '16',
    label: t('projects.stats.webCompleted'),
    IconComponent: IntegrationInstructionsIcon,
    color: '#667eea',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
    border: '1px solid rgba(102, 126, 234, 0.2)',
  },
  {
    value: '20+',
    label: t('projects.stats.webTech'),
    IconComponent: StorageIcon,
    color: '#764ba2',
    background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
    border: '1px solid rgba(118, 75, 162, 0.2)',
  },
  {
    value: '18+',
    label: t('projects.stats.webExperience'),
    IconComponent: WorkIcon,
    color: '#d946ef',
    background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
    border: '1px solid rgba(217, 70, 239, 0.2)',
  },
]

export const getPythonStats = (t) => [
  {
    value: '4',
    label: t('projects.stats.pythonCreated'),
    IconComponent: IntegrationInstructionsIcon,
    color: '#3b82f6',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
  },
  {
    value: '4',
    label: t('projects.stats.pythonCompleted'),
    IconComponent: WorkIcon,
    color: '#8b5cf6',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
  },
  {
    value: '100%',
    label: t('projects.stats.pythonOpenSource'),
    IconComponent: IntegrationInstructionsIcon,
    color: '#10b981',
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
  },
]
