import { Box, Container, Typography, Card, CardContent, Chip, Stack, Grid, Divider, alpha, Button } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import GitHubIcon from '@mui/icons-material/GitHub'
import StorageIcon from '@mui/icons-material/Storage'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CloudIcon from '@mui/icons-material/Cloud'
import FolderIcon from '@mui/icons-material/Folder'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'

function Python() {
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

  const inProgressProjects = pythonProjects.filter(p => p.status === 'in-progress')
  const completedProjects = pythonProjects.filter(p => p.status === 'completed')

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Python Projects
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
          A collection of Python projects demonstrating my skills in backend development, automation, API design, and system tools
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Stack spacing={5} sx={{ mb: 8 }}>
        {pythonProjects.map((project) => (
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
                icon={project.status === 'completed' ? <CheckCircleIcon /> : null}
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
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
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
                      <CodeIcon sx={{ color: project.color }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#e0e0e0',
                        }}
                      >
                        Key Features
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
                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <StorageIcon sx={{ color: project.color }} />
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
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        }
                      }}
                    >
                      View on GitHub
                    </Button>
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
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}
            >
              <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 1 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#3b82f6', mb: 0.5 }}>
                4
              </Typography>
              <Typography variant="body1" sx={{ color: '#909090' }}>
                Projects Created
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 40, color: '#8b5cf6', mb: 1 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#8b5cf6', mb: 0.5 }}>
                3
              </Typography>
              <Typography variant="body1" sx={{ color: '#909090' }}>
                Completed
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <TrendingUpIcon sx={{ fontSize: 40, color: '#10b981', mb: 1 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#10b981', mb: 0.5 }}>
                100%
              </Typography>
              <Typography variant="body1" sx={{ color: '#909090' }}>
                Open Source
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Python