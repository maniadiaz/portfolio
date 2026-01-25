import { useState } from 'react'
import { Box, Container, Typography, Card, CardContent, Chip, Stack, Grid, Divider, alpha, Button, Tabs, Tab } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GitHubIcon from '@mui/icons-material/GitHub'
import BusinessIcon from '@mui/icons-material/Business'
import PersonIcon from '@mui/icons-material/Person'
import LanguageIcon from '@mui/icons-material/Language'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import { getWebProjects, getPythonProjects, getWebStats, getPythonStats } from '../data/projectsData'

function Projects() {
  const { t } = useTranslation()
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabChange = (_event, newValue) => {
    setSelectedTab(newValue)
  }

  const webProjects = getWebProjects(t)
  const pythonProjects = getPythonProjects(t)
  const webStats = getWebStats(t)
  const pythonStats = getPythonStats(t)

  const currentProjects = selectedTab === 0 ? webProjects : pythonProjects
  const currentStats = selectedTab === 0 ? webStats : pythonStats

  const getProjectTypeLabel = (type) => {
    switch (type) {
      case 'personal':
        return { label: t('projects.personal'), color: '#10b981' }
      case 'company':
        return { label: t('projects.company'), color: '#667eea' }
      case 'freelance':
        return { label: t('projects.freelance'), color: '#f59e0b' }
      default:
        return { label: 'Project', color: '#808080' }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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
            {t('projects.title')}
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
            {t('projects.subtitle')}
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
                label={t('projects.webProjects')}
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
                label={t('projects.pythonProjects')}
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
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Stack spacing={5}>
          {currentProjects.map((project) => {
            const typeInfo = getProjectTypeLabel(project.projectType)
            const IconComponent = project.icon

            return (
              <motion.div key={project.id} variants={itemVariants}>
                <Card
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
                      label={project.status === 'completed' ? t('projects.completed') : t('projects.inProgress')}
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
                    {project.projectType && (
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
                    )}
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
                          <IconComponent sx={{ fontSize: 40 }} />
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
                          {project.subtitle && (
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
                          )}
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
                        {project.responsibilities && (
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
                                {t('projects.responsibilities')}
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
                        )}

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
                              {t('projects.technologies')}
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
                              {project.githubLink === 'coming-soon' ? t('projects.comingSoon') : t('projects.viewGithub')}
                            </Button>
                          </Box>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </Stack>
      </motion.div>

      {/* Stats Section */}
      <Box sx={{ mt: 8, mb: 8, textAlign: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          {currentStats.map((stat, idx) => {
            const Icon = stat.IconComponent

            return (
              <Grid item xs={12} md={4} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 32px ${alpha(stat.color, 0.3)}`,
                      }
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
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  )
}

export default Projects
