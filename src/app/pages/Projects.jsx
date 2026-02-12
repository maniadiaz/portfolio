import { useState, useRef } from 'react'
import { Box, Container, Typography, Card, CardContent, Chip, Stack, Grid, Divider, alpha, Button, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GitHubIcon from '@mui/icons-material/GitHub'
import BusinessIcon from '@mui/icons-material/Business'
import PersonIcon from '@mui/icons-material/Person'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { getWebProjects, getPythonProjects, getWebStats, getPythonStats } from '../data/projectsData'

function Projects() {
  const { t } = useTranslation()
  const [selectedTab, setSelectedTab] = useState(0)

  const webProjects = getWebProjects(t)
  const pythonProjects = getPythonProjects(t)
  const webStats = getWebStats(t)
  const pythonStats = getPythonStats(t)

  // Separar proyectos web por tipo
  const personalProjects = webProjects.filter(p => p.projectType === 'personal')
  const companyProjects = webProjects.filter(p => p.projectType === 'company' || p.projectType === 'freelance')
  const scrollRef = useRef(null)

  const filterTabs = [
    { label: t('projects.personalProjects'), icon: <PersonIcon />, color: '#10b981' },
    { label: t('projects.companyProjects'), icon: <BusinessIcon />, color: '#667eea' },
    { label: t('projects.pythonProjects'), icon: <IntegrationInstructionsIcon />, color: '#8b5cf6' },
  ]

  const handleScrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' })
  }
  const handleScrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' })
  }

  // Determinar proyectos y stats actuales según la pestaña
  const getCurrentProjects = () => {
    switch(selectedTab) {
      case 0: return personalProjects
      case 1: return companyProjects
      case 2: return pythonProjects
      default: return personalProjects
    }
  }

  const getCurrentStats = () => {
    switch(selectedTab) {
      case 0: return webStats
      case 1: return webStats
      case 2: return pythonStats
      default: return webStats
    }
  }

  const currentProjects = getCurrentProjects()
  const currentStats = getCurrentStats()

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

            {/* Filter Tabs with scroll */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                width: '100%',
                maxWidth: '100%',
              }}
            >
              {/* Left arrow - only on mobile */}
              <IconButton
                onClick={handleScrollLeft}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: '#909090',
                  flexShrink: 0,
                  background: 'rgba(102, 126, 234, 0.1)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  width: 36,
                  height: 36,
                  '&:hover': { background: 'rgba(102, 126, 234, 0.2)' },
                }}
              >
                <ChevronLeftIcon fontSize="small" />
              </IconButton>

              <Box
                ref={scrollRef}
                sx={{
                  display: 'flex',
                  gap: 1,
                  p: 0.5,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  overflowX: 'auto',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                  flexShrink: 1,
                  minWidth: 0,
                }}
              >
                {filterTabs.map((tab, idx) => (
                  <Button
                    key={idx}
                    startIcon={tab.icon}
                    onClick={() => setSelectedTab(idx)}
                    sx={{
                      color: selectedTab === idx ? '#fff' : '#909090',
                      fontWeight: 600,
                      fontSize: { xs: '0.8rem', md: '0.95rem' },
                      py: { xs: 1, md: 1.5 },
                      px: { xs: 2, md: 3 },
                      minWidth: 'max-content',
                      borderRadius: 3,
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                      background: selectedTab === idx
                        ? `linear-gradient(135deg, ${tab.color} 0%, ${alpha(tab.color, 0.7)} 100%)`
                        : 'transparent',
                      boxShadow: selectedTab === idx
                        ? `0 4px 15px ${alpha(tab.color, 0.4)}`
                        : 'none',
                      '&:hover': {
                        color: selectedTab === idx ? '#fff' : tab.color,
                        background: selectedTab === idx
                          ? `linear-gradient(135deg, ${tab.color} 0%, ${alpha(tab.color, 0.7)} 100%)`
                          : alpha(tab.color, 0.1),
                      },
                    }}
                  >
                    {tab.label}
                  </Button>
                ))}
              </Box>

              {/* Right arrow - only on mobile */}
              <IconButton
                onClick={handleScrollRight}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: '#909090',
                  flexShrink: 0,
                  background: 'rgba(102, 126, 234, 0.1)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  width: 36,
                  height: 36,
                  '&:hover': { background: 'rgba(102, 126, 234, 0.2)' },
                }}
              >
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </Box>
        </Box>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        key={selectedTab}
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
                      top: { xs: -12, md: -18 },
                      right: { xs: 8, md: 24 },
                      zIndex: 1,
                      display: 'flex',
                      gap: { xs: 0.5, md: 1.5 },
                      flexWrap: 'wrap',
                      justifyContent: 'flex-end',
                      maxWidth: { xs: 'calc(100% - 16px)', md: 'auto' },
                    }}
                  >
                    <Chip
                      icon={project.status === 'completed' ? <CheckCircleIcon sx={{ fontSize: { xs: 16, md: 20 } }} /> : <AccessTimeIcon sx={{ fontSize: { xs: 16, md: 20 } }} />}
                      label={project.status === 'completed' ? t('projects.completed') : t('projects.inProgress')}
                      sx={{
                        background: project.status === 'completed'
                          ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                          : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: { xs: '0.65rem', md: '0.85rem' },
                        height: { xs: 26, md: 36 },
                        boxShadow: project.status === 'completed'
                          ? '0 4px 12px rgba(16, 185, 129, 0.5)'
                          : '0 4px 12px rgba(245, 158, 11, 0.5)',
                        border: 'none',
                        '& .MuiChip-icon': { ml: { xs: 0.3, md: 0.5 } },
                      }}
                    />
                    {project.projectType && (
                      <Chip
                        icon={project.projectType === 'personal' ? <PersonIcon sx={{ fontSize: { xs: 16, md: 20 } }} /> : <BusinessIcon sx={{ fontSize: { xs: 16, md: 20 } }} />}
                        label={typeInfo.label}
                        sx={{
                          background: `linear-gradient(135deg, ${typeInfo.color} 0%, ${alpha(typeInfo.color, 0.7)} 100%)`,
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: { xs: '0.65rem', md: '0.85rem' },
                          height: { xs: 26, md: 36 },
                          boxShadow: `0 4px 12px ${alpha(typeInfo.color, 0.5)}`,
                          border: 'none',
                          '& .MuiChip-icon': { ml: { xs: 0.3, md: 0.5 } },
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 5 }, pt: { xs: 3.5, md: 5 } }}>
                    <Grid container spacing={3}>
                      {/* Icon Section */}
                      <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: { xs: 'flex-start', md: 'center' } }}>
                        <Box
                          sx={{
                            width: { xs: 60, md: 90 },
                            height: { xs: 60, md: 90 },
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
                          <IconComponent sx={{ fontSize: { xs: 30, md: 45 }, position: 'relative', zIndex: 1 }} />
                        </Box>
                      </Grid>

                      {/* Content Section */}
                      <Grid size={{ xs: 12, md: 10 }}>
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
        <Box sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 }, textAlign: 'center' }}>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {currentStats.map((stat, idx) => {
              const Icon = stat.IconComponent

              return (
                <Grid size={{ xs: 6, md: 4 }} key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 2, md: 4 },
                        borderRadius: { xs: 3, md: 4 },
                        background: `linear-gradient(135deg, ${alpha(stat.color, 0.1)} 0%, ${alpha(stat.color, 0.05)} 100%)`,
                        backdropFilter: 'blur(20px)',
                        border: `2px solid ${alpha(stat.color, 0.3)}`,
                        height: '100%',
                        display: 'flex',
                        minWidth: 0,
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
                      <Icon sx={{ fontSize: { xs: 32, md: 48 }, color: stat.color, mb: { xs: 1, md: 2 } }} />
                      <Typography variant="h3" sx={{ fontWeight: 900, color: stat.color, mb: 1, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
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
