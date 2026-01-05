import { useState } from 'react'
import { Box, Container, Typography, Card, CardContent, Chip, Stack, Grid, Divider, useTheme, alpha, Button, Tabs, Tab } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import WebIcon from '@mui/icons-material/Web'
import DevicesIcon from '@mui/icons-material/Devices'
import CloudIcon from '@mui/icons-material/Cloud'
import WorkIcon from '@mui/icons-material/Work'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MapIcon from '@mui/icons-material/Map'
import GitHubIcon from '@mui/icons-material/GitHub'
import BusinessIcon from '@mui/icons-material/Business'
import PersonIcon from '@mui/icons-material/Person'
import LanguageIcon from '@mui/icons-material/Language'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import FolderIcon from '@mui/icons-material/Folder'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

function Proyects() {
  const theme = useTheme()
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const projects = [
    {
      id: 1,
      title: 'Micro-Savings API',
      subtitle: 'RESTful API for Savings Management',
      period: 'September 2025 - Present',
      status: 'completed',
      projectType: 'personal',
      company: null,
      githubLink: 'https://github.com/maniadiaz/Apis-Micro-Ahorros',
      description: 'RESTful API built with Node.js, Express, and Sequelize for a micro-savings application. Enables users to register, login, manage profiles, create savings goals, and track their savings with secure JWT authentication.',
      responsibilities: [
        'Backend API development with Express.js and MVC architecture',
        'Database design and ORM implementation with Sequelize migrations',
        'User authentication system with JWT and bcrypt password hashing',
        'CRUD operations for users, savings goals, and savings records management',
        'RESTful endpoint design for authentication, users, goals, and savings',
        'Environment configuration management with dotenv',
        'API testing and deployment setup'
      ],
      technologies: ['Node.js', 'Express.js', 'Sequelize', 'MySQL', 'JWT', 'bcrypt', 'nodemon', 'dotenv'],
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      color: '#3b82f6',
    },
    {
      id: 2,
      title: 'Micro-Savings Platform',
      subtitle: 'Financial Management System',
      period: 'September 2025 - Present',
      status: 'in-progress',
      projectType: 'personal',
      company: null,
      githubLink: 'coming-soon',
      description: 'Complete savings management platform with VPS infrastructure, backend API, and modern frontend interface.',
      responsibilities: [
        'VPS management and configuration: Bind9, Nginx, PHP, MySQL, Node.js',
        'Backend: API creation with Express and Sequelize',
        'Frontend: Page design with React + Vite',
        'API consumption through services using JavaScript',
        'Complete infrastructure deployment and maintenance'
      ],
      technologies: ['React', 'Vite', 'Express', 'Sequelize', 'MySQL', 'Node.js', 'Nginx', 'VPS'],
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      color: '#d946ef'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      subtitle: 'Professional Frontend Showcase',
      period: 'October 2025',
      status: 'completed',
      projectType: 'personal',
      company: null,
      githubLink: 'https://github.com/maniadiaz/portfolio',
      description: 'Modern and responsive portfolio website showcasing my skills, projects, and professional experience. Features interactive UI components and smooth animations.',
      responsibilities: [
        'Complete frontend development using React and Material UI',
        'Implementation of React Router for seamless navigation',
        'Design of multiple interactive sections: Home, Projects, Skills, Contact, and CV',
        'Creation of responsive layouts optimized for all devices',
        'Integration of PDF viewer for resume display',
        'Custom color theming with gradient effects and animations',
        'Contact form implementation with validation',
        'Skills showcase with progress bars and interactive tabs'
      ],
      technologies: ['React', 'Vite', 'Material UI', 'React Router', 'JavaScript', 'CSS3', 'Responsive Design'],
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      color: '#10b981'
    },
    {
      id: 4,
      title: 'Servi App',
      subtitle: 'AmericasIoT - Service Management Application',
      period: 'November 2024 - December 2024',
      status: 'completed',
      projectType: 'company',
      company: 'AmericasIoT',
      githubLink: null,
      description: 'Mobile service management application built with Angular, Ionic, and Supabase. Features real-time notifications and comprehensive service tracking capabilities for field operations.',
      responsibilities: [
        'Frontend development with Angular TypeScript and Ionic framework',
        'View design and implementation with corresponding business logic',
        'Backend development using Supabase for database and authentication',
        'Push notification system implementation for real-time alerts',
        'Integration of mobile-optimized UI/UX patterns',
        'State management and data synchronization',
        'Testing and deployment on mobile platforms'
      ],
      technologies: ['Angular', 'TypeScript', 'Ionic', 'Vite', 'Supabase', 'Push Notifications', 'Mobile Development'],
      icon: <PhoneAndroidIcon sx={{ fontSize: 40 }} />,
      color: '#ef4444'
    },
    {
      id: 5,
      title: 'Push Notifications System',
      subtitle: 'Instituto Cultural de Occidente - Colegio Xaveriano de Mazatlán',
      period: 'August 2024',
      status: 'completed',
      projectType: 'company',
      company: 'Certex',
      githubLink: null,
      description: 'Implementation of push notification system for an educational institution, enabling real-time communication with students and staff through web notifications.',
      responsibilities: [
        'UI design and implementation for push notification management section',
        'Service Worker configuration for notification handling',
        'Integration of subscription and unsubscription logic',
        'Testing and deployment of notification delivery system'
      ],
      technologies: ['.NET', 'Blazor', 'C#', 'Service Worker', 'Web Push API'],
      icon: <NotificationsIcon sx={{ fontSize: 40 }} />,
      color: '#f59e0b'
    },
    {
      id: 6,
      title: 'GPS & User Management Application',
      subtitle: 'Focused on Resellers',
      period: 'May 2024 - August 2024',
      status: 'completed',
      projectType: 'freelance',
      company: 'Freelancer',
      githubLink: null,
      description: 'Mobile and web application for real-time management of GPS devices and users, with advanced features for resellers.',
      responsibilities: [
        'Development of CRUD modules for user and GPS device management',
        'Barcode reader implementation using phone camera',
        'REST API integration and consumption for real-time data handling',
        'Responsive design optimized for mobile and desktop devices',
        'Development under SPA and PWA architecture, improving UX and enabling offline usage'
      ],
      technologies: ['React', 'Vite', 'REST API', 'PWA', 'SPA', 'Responsive Design'],
      icon: <DevicesIcon sx={{ fontSize: 40 }} />,
      color: '#764ba2'
    },
    {
      id: 7,
      title: 'React with Google Maps API',
      subtitle: 'Location Mapping Practice Project',
      period: 'February 2024 - June 2024',
      status: 'completed',
      projectType: 'personal',
      company: null,
      githubLink: 'https://github.com/maniadiaz/Map-Google-React',
      description: 'Practice project to learn React Router and Google Maps API integration, featuring navigation between pages and an interactive map showing the Faculty of Computer Science UAS Mazatlán location.',
      responsibilities: [
        'Implementation of React Router for multi-page navigation',
        'Integration of Google Maps API for location display',
        'Creation of reusable components and routing structure',
        'Development of Home, About, Contact, and Map pages',
        'Material UI integration for consistent styling',
        'Version control setup with Git and GitHub'
      ],
      technologies: ['React', 'React Router', 'Google Maps API', 'Material UI', 'JavaScript', 'Git'],
      icon: <MapIcon sx={{ fontSize: 40 }} />,
      color: '#4ff36aff'
    },
    {
      id: 8,
      title: 'Online Degree System',
      subtitle: 'UAS - Faculty of Computer Science Mazatlán, Academic Department',
      period: 'August 2024 - March 2025',
      status: 'completed',
      projectType: 'company',
      company: 'UAS en Facultad Informática Mazatlán',
      githubLink: null,
      description: 'Complete web system for digital management of degree applications, optimizing the workflow and reducing manual workload for the academic department.',
      responsibilities: [
        'Frontend and Backend design and development under MVC architecture',
        'Database creation and connection using PHP and MySQL',
        'Web interface implementation for managing degree requests digitally',
        'Workflow optimization to streamline the process and reduce manual load'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'MVC'],
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      color: '#ff944dff'
    },
  ]

  const pythonProjects = [
    {
      id: 1,
      title: 'DeployManager',
      description: 'A deployment management tool designed to streamline and automate server deployment processes. Features include deployment tracking, status monitoring, and automated deployment workflows.',
      period: 'Completed',
      status: 'completed',
      technologies: ['Python', 'Deployment', 'Automation', 'CLI'],
      responsibilities: [
        'Deployment automation and orchestration',
        'Server status monitoring and tracking',
        'Automated workflow management',
        'Error logging and recovery mechanisms',
        'Command-line interface for deployment operations'
      ],
      githubLink: 'https://github.com/maniadiaz/DeployManager',
      color: '#3b82f6',
      icon: <CloudIcon sx={{ fontSize: 40 }} />
    },
    {
      id: 2,
      title: 'Inventory API Python',
      description: 'RESTful API for inventory management built with Python. Handles product management, stock tracking, and inventory operations. Demonstrates API design patterns and database integration.',
      period: 'Completed',
      status: 'completed',
      technologies: ['Python', 'Flask', 'REST API', 'Database', 'JSON'],
      responsibilities: [
        'RESTful API endpoint design and implementation',
        'Product and inventory database management',
        'Stock tracking and reporting functionality',
        'Error handling and validation',
        'API documentation and usage examples'
      ],
      githubLink: 'https://github.com/maniadiaz/inventory-api-python',
      color: '#8b5cf6',
      icon: <StorageIcon sx={{ fontSize: 40 }} />
    },
    {
      id: 3,
      title: 'Python Weather App',
      description: 'Weather application that fetches real-time weather data from APIs and displays forecasts. Shows integration with external APIs, data processing, and user interface creation.',
      period: 'Completed',
      status: 'completed',
      technologies: ['Python', 'API Integration', 'Data Processing', 'CLI/GUI'],
      responsibilities: [
        'Weather API integration and data fetching',
        'Real-time weather data processing',
        'User-friendly interface for weather display',
        'Forecast calculation and analysis',
        'Error handling for API requests'
      ],
      githubLink: 'https://github.com/maniadiaz/python-weather-app',
      color: '#10b981',
      icon: <ThunderstormIcon sx={{ fontSize: 40 }} />
    },
    {
      id: 4,
      title: 'File Organizer',
      description: 'Automatic file organization tool that categorizes and sorts files based on type and metadata. Demonstrates file system operations, automation, and efficient data processing in Python.',
      period: 'Completed',
      status: 'completed',
      technologies: ['Python', 'File I/O', 'Automation', 'OS Operations'],
      responsibilities: [
        'File system scanning and analysis',
        'Automatic file categorization by type',
        'File sorting and organization logic',
        'Metadata extraction and processing',
        'Logging and operation tracking'
      ],
      githubLink: 'https://github.com/maniadiaz/organizador_archivos',
      color: '#f59e0b',
      icon: <FolderIcon sx={{ fontSize: 40 }} />
    }
  ]

  const getProjectTypeLabel = (type) => {
    switch (type) {
      case 'personal':
        return { label: 'Personal Project', color: '#10b981' }
      case 'company':
        return { label: 'Company Project', color: '#667eea' }
      case 'freelance':
        return { label: 'Freelance', color: '#f59e0b' }
      default:
        return { label: 'Project', color: '#808080' }
    }
  }


  const webStats = [
    {
      value: '8',
      label: 'Projects Completed',
      IconComponent: TrendingUpIcon,
      color: '#667eea',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      border: '1px solid rgba(102, 126, 234, 0.2)',
    },
    {
      value: '20+',
      label: 'Technologies Used',
      IconComponent: StorageIcon,
      color: '#764ba2',
      background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
      border: '1px solid rgba(118, 75, 162, 0.2)',
    },
    {
      value: '18+',
      label: 'Months of Experience',
      IconComponent: CheckCircleIcon,
      color: '#d946ef',
      background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
      border: '1px solid rgba(217, 70, 239, 0.2)',
    },
  ]

  const pythonStats = [
    {
      value: '4',
      label: 'Projects Created',
      IconComponent: IntegrationInstructionsIcon,
      color: '#3b82f6',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    {
      value: '4',
      label: 'Completed',
      IconComponent: CheckCircleIcon,
      color: '#8b5cf6',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
    },
    {
      value: '100%',
      label: 'Open Source',
      IconComponent: TrendingUpIcon,
      color: '#10b981',
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
    },
  ]

  const currentProjects = selectedTab === 0 ? projects : pythonProjects
  const currentStats = selectedTab === 0 ? webStats : pythonStats

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#808080',
            maxWidth: 700,
            mx: 'auto',
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          A collection of projects showcasing my full-stack development skills, from backend infrastructure to modern frontend interfaces
        </Typography>

        {/* Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#667eea',
                height: 3,
              },
            }}
          >
            <Tab
              icon={<LanguageIcon />}
              iconPosition="start"
              label="Web Projects"
              sx={{
                color: '#808080',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: '#667eea',
                },
                '&:hover': {
                  color: '#667eea',
                },
              }}
            />
            <Tab
              icon={<IntegrationInstructionsIcon />}
              iconPosition="start"
              label="Python Projects"
              sx={{
                color: '#808080',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: '#8b5cf6',
                },
                '&:hover': {
                  color: '#8b5cf6',
                },
              }}
            />
          </Tabs>
        </Box>
      </Box>

      {/* Projects Grid */}
      <Stack spacing={5}>
        {currentProjects.map((project, index) => {
          const typeInfo = getProjectTypeLabel(project.projectType)

          return (
            <Card
              key={project.id}
              sx={{
                background: alpha(project.color, 0.03),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(project.color, 0.2)}`,
                borderRadius: 4,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'visible',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 20px 40px ${alpha(project.color, 0.3)}`,
                  border: `1px solid ${alpha(project.color, 0.4)}`,
                }
              }}
            >
              {/* Status & Type Badges */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -15,
                  right: 20,
                  zIndex: 1,
                  display: 'flex',
                  gap: 1,
                }}
              >
                <Chip
                  icon={project.status === 'completed' ? <CheckCircleIcon /> : <AccessTimeIcon />}
                  label={project.status === 'completed' ? 'COMPLETED' : 'IN PROGRESS'}
                  sx={{
                    background: project.status === 'completed'
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    boxShadow: project.status === 'completed'
                      ? '0 4px 12px rgba(16, 185, 129, 0.4)'
                      : '0 4px 12px rgba(245, 158, 11, 0.4)',
                    border: 'none',
                  }}
                />
                <Chip
                  icon={project.projectType === 'personal' ? <PersonIcon /> : <BusinessIcon />}
                  label={typeInfo.label}
                  sx={{
                    background: `linear-gradient(135deg, ${typeInfo.color} 0%, ${alpha(typeInfo.color, 0.7)} 100%)`,
                    color: '#fff',
                    fontWeight: 700,
                    boxShadow: `0 4px 12px ${alpha(typeInfo.color, 0.4)}`,
                    border: 'none',
                  }}
                />
              </Box>

              <CardContent sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  {/* Icon Section */}
                  <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${project.color} 0%, ${alpha(project.color, 0.6)} 100%)`,
                        color: '#fff',
                        boxShadow: `0 8px 24px ${alpha(project.color, 0.4)}`,
                      }}
                    >
                      {project.icon}
                    </Box>
                  </Grid>

                  {/* Content Section */}
                  <Grid item xs={12} md={10}>
                    {/* Title & Period */}
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: '#e0e0e0',
                          mb: 0.5,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#a0a0a0',
                          fontStyle: 'italic',
                          mb: 1,
                        }}
                      >
                        {project.subtitle}
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <CalendarTodayIcon sx={{ fontSize: 18, color: project.color }} />
                          <Typography variant="body2" sx={{ color: '#808080', fontWeight: 500 }}>
                            {project.period}
                          </Typography>
                        </Stack>
                        {project.company && (
                          <Stack direction="row" spacing={1} alignItems="center">
                            <BusinessIcon sx={{ fontSize: 18, color: project.color }} />
                            <Typography variant="body2" sx={{ color: '#808080', fontWeight: 500 }}>
                              {project.company}
                            </Typography>
                          </Stack>
                        )}
                      </Stack>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: alpha(project.color, 0.2) }} />

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#b0b0b0',
                        mb: 3,
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Responsibilities */}
                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                        <WorkIcon sx={{ color: project.color }} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#e0e0e0',
                          }}
                        >
                          Key Responsibilities
                        </Typography>
                      </Stack>
                      <Stack spacing={1}>
                        {project.responsibilities.map((resp, idx) => (
                          <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: project.color,
                                mt: 1,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#909090',
                                lineHeight: 1.6,
                              }}
                            >
                              {resp}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>

                    {/* Technologies */}
                    <Box sx={{ mb: project.githubLink ? 3 : 0 }}>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                        <CodeIcon sx={{ color: project.color }} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#e0e0e0',
                          }}
                        >
                          Technologies Used
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: alpha(project.color, 0.15),
                              color: '#b0b0b0',
                              fontWeight: 600,
                              border: `1px solid ${alpha(project.color, 0.3)}`,
                              '&:hover': {
                                backgroundColor: alpha(project.color, 0.25),
                                color: project.color,
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    {/* GitHub Link Button */}
                    {project.githubLink && (
                      <Box sx={{ mt: 3 }}>
                        <Button
                          variant="outlined"
                          startIcon={<GitHubIcon />}
                          href={project.githubLink === 'coming-soon' ? undefined : project.githubLink}
                          target={project.githubLink === 'coming-soon' ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          disabled={project.githubLink === 'coming-soon'}
                          sx={{
                            borderColor: project.color,
                            color: project.color,
                            borderWidth: 2,
                            fontWeight: 600,
                            px: 3,
                            py: 1,
                            '&:hover': {
                              borderColor: project.color,
                              backgroundColor: alpha(project.color, 0.1),
                              borderWidth: 2,
                              transform: 'translateY(-2px)',
                            },
                            '&.Mui-disabled': {
                              borderColor: alpha(project.color, 0.3),
                              color: alpha(project.color, 0.5),
                            }
                          }}
                        >
                          {project.githubLink === 'coming-soon' ? 'Coming Soon' : 'View on GitHub'}
                        </Button>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )
        })}
      </Stack>

      {/* Stats Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          {currentStats.map((stat) => {
            const Icon = stat.IconComponent;

            return (
              <Grid item xs={12} md={4} key={stat.label}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: stat.background,
                    border: stat.border,
                    height: '100%',
                    display: 'flex',
                    minWidth: 210,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon sx={{ fontSize: 40, color: stat.color, mb: 1 }} />
                  <Typography variant="h3" sx={{ fontWeight: 800, color: stat.color, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#909090' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  )
}

export default Proyects