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
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '15%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'float 12s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'float 15s ease-in-out infinite',
          animationDelay: '3s',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Box sx={{ textAlign: 'center', mb: 7, mt: 4 }}>
            <Box
              sx={{
                display: 'inline-block',
                px: 4,
                py: 1.5,
                mb: 3,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  letterSpacing: 3,
                  fontSize: '0.9rem',
                }}
              >
                Portfolio
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #764ba2 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 5s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: -1,
              }}
            >
              {t('projects.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#a0a0a0',
                maxWidth: 750,
                mx: 'auto',
                lineHeight: 1.8,
                mb: 5,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              {t('projects.subtitle')}
            </Typography>

            {/* Tabs */}
            <Box
              sx={{
                display: 'inline-flex',
                p: 0.5,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                sx={{
                  minHeight: 'auto',
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },
                }}
              >
                <Tab
                  icon={<LanguageIcon />}
                  iconPosition="start"
                  label={t('projects.webProjects')}
                  sx={{
                    color: '#909090',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    minHeight: 'auto',
                    transition: 'all 0.3s ease',
                    '&.Mui-selected': {
                      color: '#fff',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    },
                    '&:hover': {
                      color: '#b0b0b0',
                      background: 'rgba(102, 126, 234, 0.1)',
                    },
                  }}
                />
                <Tab
                  icon={<IntegrationInstructionsIcon />}
                  iconPosition="start"
                  label={t('projects.pythonProjects')}
                  sx={{
                    color: '#909090',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    minHeight: 'auto',
                    transition: 'all 0.3s ease',
                    '&.Mui-selected': {
                      color: '#fff',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
                    },
                    '&:hover': {
                      color: '#b0b0b0',
                      background: 'rgba(139, 92, 246, 0.1)',
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
                    background: `linear-gradient(135deg, ${alpha(project.color, 0.05)} 0%, ${alpha(project.color, 0.02)} 100%)`,
                    backdropFilter: 'blur(20px)',
                    border: `2px solid ${alpha(project.color, 0.25)}`,
                    borderRadius: 5,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: `0 8px 32px ${alpha(project.color, 0.15)}`,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 5,
                      padding: 2,
                      background: `linear-gradient(135deg, ${alpha(project.color, 0.3)}, transparent)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.01)',
                      boxShadow: `0 25px 50px ${alpha(project.color, 0.35)}`,
                      border: `2px solid ${alpha(project.color, 0.5)}`,
                      '&::before': {
                        opacity: 1,
                      }
                    }
                  }}
                >
                  {/* Status & Type Badges */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -18,
                      right: 24,
                      zIndex: 1,
                      display: 'flex',
                      gap: 1.5,
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
                        fontSize: '0.85rem',
                        py: 2.5,
                        px: 1.5,
                        boxShadow: project.status === 'completed'
                          ? '0 6px 20px rgba(16, 185, 129, 0.5)'
                          : '0 6px 20px rgba(245, 158, 11, 0.5)',
                        border: 'none',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: project.status === 'completed'
                            ? '0 8px 25px rgba(16, 185, 129, 0.6)'
                            : '0 8px 25px rgba(245, 158, 11, 0.6)',
                        }
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
                          fontSize: '0.85rem',
                          py: 2.5,
                          px: 1.5,
                          boxShadow: `0 6px 20px ${alpha(typeInfo.color, 0.5)}`,
                          border: 'none',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: `0 8px 25px ${alpha(typeInfo.color, 0.6)}`,
                          }
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ p: 5 }}>
                    <Grid container spacing={3}>
                      {/* Icon Section */}
                      <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Box
                          sx={{
                            width: 90,
                            height: 90,
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${project.color} 0%, ${alpha(project.color, 0.6)} 100%)`,
                            color: '#fff',
                            boxShadow: `0 10px 30px ${alpha(project.color, 0.5)}`,
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: '-50%',
                              left: '-50%',
                              width: '200%',
                              height: '200%',
                              background: `radial-gradient(circle, ${alpha('#fff', 0.2)} 0%, transparent 70%)`,
                              animation: 'float 6s ease-in-out infinite',
                            }
                          }}
                        >
                          <IconComponent sx={{ fontSize: 45, position: 'relative', zIndex: 1 }} />
                        </Box>
                      </Grid>

                      {/* Content Section */}
                      <Grid item xs={12} md={10}>
                        {/* Title & Period */}
                        <Box sx={{ mb: 2.5 }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 800,
                              color: '#f0f0f0',
                              mb: 1,
                              fontSize: { xs: '1.5rem', md: '1.75rem' },
                              letterSpacing: -0.5,
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

                        <Divider
                          sx={{
                            my: 3,
                            borderColor: alpha(project.color, 0.3),
                            borderWidth: 1.5,
                            borderRadius: 1,
                          }}
                        />

                        {/* Description */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#c0c0c0',
                            mb: 3.5,
                            lineHeight: 1.8,
                            fontSize: '1.05rem',
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
                        p: 4,
                        borderRadius: 4,
                        background: `linear-gradient(135deg, ${alpha(stat.color, 0.1)} 0%, ${alpha(stat.color, 0.05)} 100%)`,
                        backdropFilter: 'blur(20px)',
                        border: `2px solid ${alpha(stat.color, 0.3)}`,
                        height: '100%',
                        display: 'flex',
                        minWidth: 210,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'all 0.4s ease',
                        boxShadow: `0 8px 32px ${alpha(stat.color, 0.2)}`,
                        '&:hover': {
                          transform: 'translateY(-10px) scale(1.02)',
                          boxShadow: `0 15px 40px ${alpha(stat.color, 0.4)}`,
                          border: `2px solid ${alpha(stat.color, 0.5)}`,
                        }
                      }}
                    >
                      <Icon sx={{ fontSize: 48, color: stat.color, mb: 2 }} />
                      <Typography variant="h3" sx={{ fontWeight: 900, color: stat.color, mb: 1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#a0a0a0', fontWeight: 600 }}>
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
    </Box>
  )
}

export default Projects
