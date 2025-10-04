import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Grid,
  Divider,
  useTheme,
  alpha,
  Button
} from '@mui/material'
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

function Proyectos() {
  const theme = useTheme()

  const projects = [
    {
      id: 1,
      title: 'Online Degree System',
      subtitle: 'Academic Department UAS - Faculty of Computer Science Mazatlán',
      period: 'August 2024 - March 2025',
      status: 'completed',
      description: 'Complete web system for digital management of degree applications, optimizing the workflow and reducing manual workload for the academic department.',
      responsibilities: [
        'Frontend and Backend design and development under MVC architecture',
        'Database creation and connection using PHP and MySQL',
        'Web interface implementation for managing degree requests digitally',
        'Workflow optimization to streamline the process and reduce manual load'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'MVC'],
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      color: '#667eea'
    },
    {
      id: 2,
      title: 'GPS & User Management Application',
      subtitle: 'Focused on Resellers',
      period: 'May 2024 - August 2024',
      status: 'completed',
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
      id: 3,
      title: 'Micro-Savings Platform',
      subtitle: 'Financial Management System',
      period: 'September 2024 - Present',
      status: 'in-progress',
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
      id: 4,
      title: 'Personal Portfolio Website',
      subtitle: 'Professional Frontend Showcase',
      period: 'October 2024',
      status: 'completed',
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
    }
  ]

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
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
          }}
        >
          A collection of projects showcasing my full-stack development skills, from backend infrastructure to modern frontend interfaces
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Stack spacing={5}>
        {projects.map((project, index) => (
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
            {/* Status Badge */}
            <Box
              sx={{
                position: 'absolute',
                top: -15,
                right: 20,
                zIndex: 1,
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
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarTodayIcon sx={{ fontSize: 18, color: project.color }} />
                      <Typography variant="body2" sx={{ color: '#808080', fontWeight: 500 }}>
                        {project.period}
                      </Typography>
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
                  <Box>
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
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Stats Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
              }}
            >
              <TrendingUpIcon sx={{ fontSize: 40, color: '#667eea', mb: 1 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea', mb: 0.5 }}>
                4
              </Typography>
              <Typography variant="body1" sx={{ color: '#909090' }}>
                Projects Completed
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
                border: '1px solid rgba(118, 75, 162, 0.2)',
              }}
            >
              <StorageIcon sx={{ fontSize: 40, color: '#764ba2', mb: 1 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#764ba2', mb: 0.5 }}>
                12+
              </Typography>
              <Typography variant="body1" sx={{ color: '#909090' }}>
                Technologies Used
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
                border: '1px solid rgba(217, 70, 239, 0.2)',
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 40, color: '#d946ef', mb: 1 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#d946ef', mb: 0.5 }}>
                18+
              </Typography>
              <Typography variant="body1" sx={{ color: '#909090' }}>
                Months of Experience
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Proyectos