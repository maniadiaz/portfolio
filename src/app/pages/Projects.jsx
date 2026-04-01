import { useState, useRef } from 'react'
import {
  Box, Container, Typography, Card, CardContent, Chip,
  Stack, Grid, Divider, alpha, Button, IconButton
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GitHubIcon from '@mui/icons-material/GitHub'
import BusinessIcon from '@mui/icons-material/Business'
import PersonIcon from '@mui/icons-material/Person'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { getWebProjects, getWebStats } from '../data/projectsData'

/* Variantes para el contenedor de tabs al cambiar categoría */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/* Variante de salida al cambiar tab — las cards salen hacia arriba */
const tabExitVariants = {
  hidden: { opacity: 0, y: -16, transition: { duration: 0.25 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
}

/* Componente wrapper que dispara la animación al entrar al viewport */
function ViewportCard({ children, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

function Projects() {
  const { t } = useTranslation()
  const [selectedTab, setSelectedTab] = useState(0)

  const webProjects = getWebProjects(t)
  const webStats    = getWebStats(t)

  const personalProjects = webProjects.filter(p => p.projectType === 'personal')
  const companyProjects  = webProjects.filter(p => p.projectType === 'company' || p.projectType === 'freelance')
  const scrollRef = useRef(null)

  const filterTabs = [
    { label: t('projects.companyProjects'),  icon: <BusinessIcon sx={{ fontSize: 18 }} />,  color: 'var(--color-4)' },
    { label: t('projects.personalProjects'), icon: <PersonIcon sx={{ fontSize: 18 }} />,    color: 'var(--color-3)' },
  ]

  const handleScrollLeft  = () => scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' })
  const handleScrollRight = () => scrollRef.current?.scrollBy({ left:  150, behavior: 'smooth' })

  const getCurrentProjects = () => (selectedTab === 0 ? companyProjects : personalProjects)

  const getCurrentStats = () => webStats

  const currentProjects = getCurrentProjects()
  const currentStats    = getCurrentStats()

  const getProjectTypeLabel = (type) => {
    switch (type) {
      case 'personal':  return { label: t('projects.personal'),  color: 'var(--color-3)' }
      case 'company':   return { label: t('projects.company'),   color: 'var(--color-4)' }
      case 'freelance': return { label: t('projects.freelance'), color: 'var(--color-2)' }
      default:          return { label: 'Project',               color: 'var(--text-muted)' }
    }
  }

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orbs */}
      <Box aria-hidden sx={{ position: 'absolute', top: '5%', right: '12%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,130,176,0.10) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 14s ease-in-out infinite', zIndex: 0, pointerEvents: 'none' }} />
      <Box aria-hidden sx={{ position: 'absolute', bottom: '8%', left: '8%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,89,140,0.12) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 18s ease-in-out infinite', animationDelay: '4s', zIndex: 0, pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ textAlign: 'center', mb: 7, mt: 4 }}>
            <Box
              sx={{
                display: 'inline-block',
                px: 3, py: 1,
                mb: 3,
                borderRadius: '100px',
                background: 'rgba(167,157,195,0.07)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(167,157,195,0.2)',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.18em',
                  fontSize: '0.72rem',
                  background: 'linear-gradient(135deg, var(--color-2) 0%, var(--color-5) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                }}
              >
                {t('projects.badge')}
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.4rem', md: '3.6rem' },
                background: 'linear-gradient(135deg, var(--color-1) 0%, var(--color-3) 50%, var(--color-5) 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 8s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-1px',
              }}
            >
              {t('projects.title')}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.8,
                mb: 5,
                fontWeight: 400,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
              }}
            >
              {t('projects.subtitle')}
            </Typography>

            {/* Filter tabs */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, width: '100%' }}>
              <IconButton
                onClick={handleScrollLeft}
                sx={{ display: { xs: 'flex', md: 'none' }, color: 'var(--text-muted)', background: 'rgba(167,157,195,0.08)', border: '1px solid rgba(167,157,195,0.15)', width: 36, height: 36, '&:hover': { background: 'rgba(167,157,195,0.15)' } }}
              >
                <ChevronLeftIcon fontSize="small" />
              </IconButton>

              <Box
                ref={scrollRef}
                sx={{
                  display: 'flex', gap: 0.75, p: 0.75,
                  borderRadius: '16px',
                  background: 'rgba(167,157,195,0.05)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(167,157,195,0.14)',
                  overflowX: 'auto',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                  flexShrink: 1, minWidth: 0,
                }}
              >
                {filterTabs.map((tab, idx) => (
                  <Button
                    key={idx}
                    startIcon={tab.icon}
                    onClick={() => setSelectedTab(idx)}
                    sx={{
                      fontFamily: 'var(--font-body)',
                      color: selectedTab === idx ? '#fff' : 'var(--text-muted)',
                      fontWeight: 500,
                      fontSize: { xs: '0.8rem', md: '0.88rem' },
                      letterSpacing: '0.03em',
                      py: { xs: 1, md: 1.2 },
                      px: { xs: 2, md: 2.5 },
                      minWidth: 'max-content',
                      borderRadius: '12px',
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                      background: selectedTab === idx
                        ? 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)'
                        : 'transparent',
                      boxShadow: selectedTab === idx
                        ? '0 4px 16px rgba(74,89,140,0.4)'
                        : 'none',
                      '&:hover': {
                        color: selectedTab === idx ? '#fff' : 'var(--color-2)',
                        background: selectedTab === idx
                          ? 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)'
                          : 'rgba(167,157,195,0.08)',
                      },
                    }}
                  >
                    {tab.label}
                  </Button>
                ))}
              </Box>

              <IconButton
                onClick={handleScrollRight}
                sx={{ display: { xs: 'flex', md: 'none' }, color: 'var(--text-muted)', background: 'rgba(167,157,195,0.08)', border: '1px solid rgba(167,157,195,0.15)', width: 36, height: 36, '&:hover': { background: 'rgba(167,157,195,0.15)' } }}
              >
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </motion.div>

        {/* ── Projects grid ──────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            variants={tabExitVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Stack spacing={4}>
              {currentProjects.map((project, cardIndex) => {
                const typeInfo      = getProjectTypeLabel(project.projectType)
                const IconComponent = project.icon

                return (
                  <ViewportCard key={project.id} index={cardIndex}>
                    <Card
                      sx={{
                        position: 'relative',
                        overflow: 'visible',
                        borderRadius: '20px',
                        /* ── Glassmorphism exacto pedido ── */
                        background: 'rgba(167,157,195,0.08)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(125,130,176,0.25)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.20)',
                        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease',
                        /* Gradient border reveal on hover */
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '20px',
                          padding: '1px',
                          background: 'linear-gradient(135deg, rgba(125,130,176,0.6) 0%, rgba(74,89,140,0.5) 100%)',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          opacity: 0,
                          transition: 'opacity 0.35s ease',
                          pointerEvents: 'none',
                        },
                        /* ── Hover glow en #7d82b0 ── */
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.006)',
                          background: 'rgba(167,157,195,0.13)',
                          border: '1px solid rgba(125,130,176,0.45)',
                          boxShadow: `
                            0 20px 48px rgba(0,0,0,0.28),
                            0 0 0 1px rgba(125,130,176,0.15),
                            0 0 32px rgba(125,130,176,0.22),
                            0 0 64px rgba(74,89,140,0.12)
                          `,
                          '&::before': { opacity: 1 },
                        },
                      }}
                    >
                      {/* Status + type badges */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: -12, md: -16 },
                          right: { xs: 8, md: 20 },
                          zIndex: 2,
                          display: 'flex',
                          gap: { xs: 0.5, md: 1 },
                          flexWrap: 'wrap',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <Chip
                          icon={project.status === 'completed'
                            ? <CheckCircleIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
                            : <AccessTimeIcon  sx={{ fontSize: { xs: 14, md: 18 } }} />
                          }
                          label={project.status === 'completed' ? t('projects.completed') : t('projects.inProgress')}
                          sx={{
                            fontFamily: 'var(--font-body)',
                            background: project.status === 'completed'
                              ? 'linear-gradient(135deg, #2d9e6b 0%, #1a7a50 100%)'
                              : 'linear-gradient(135deg, #b07a2a 0%, #8a5e1a 100%)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { xs: '0.62rem', md: '0.8rem' },
                            letterSpacing: '0.04em',
                            height: { xs: 24, md: 32 },
                            boxShadow: project.status === 'completed'
                              ? '0 4px 12px rgba(45,158,107,0.45)'
                              : '0 4px 12px rgba(176,122,42,0.45)',
                            border: 'none',
                            '& .MuiChip-icon': { ml: { xs: 0.3, md: 0.5 } },
                          }}
                        />
                        {project.projectType && (
                          <Chip
                            icon={project.projectType === 'personal'
                              ? <PersonIcon   sx={{ fontSize: { xs: 14, md: 18 } }} />
                              : <BusinessIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
                            }
                            label={typeInfo.label}
                            sx={{
                              fontFamily: 'var(--font-body)',
                              background: 'rgba(167,157,195,0.12)',
                              backdropFilter: 'blur(8px)',
                              color: typeInfo.color,
                              fontWeight: 600,
                              fontSize: { xs: '0.62rem', md: '0.8rem' },
                              letterSpacing: '0.04em',
                              height: { xs: 24, md: 32 },
                              border: `1px solid ${alpha(project.color, 0.3)}`,
                              '& .MuiChip-icon': { ml: { xs: 0.3, md: 0.5 }, color: typeInfo.color },
                            }}
                          />
                        )}
                      </Box>

                      <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4.5 }, pt: { xs: 3.5, md: 4.5 } }}>
                        <Grid container spacing={3}>
                          {/* Icon */}
                          <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: { xs: 'flex-start', md: 'center' } }}>
                            <Box
                              sx={{
                                width: { xs: 58, md: 80 },
                                height: { xs: 58, md: 80 },
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: `linear-gradient(135deg, ${project.color} 0%, ${alpha(project.color, 0.55)} 100%)`,
                                color: '#fff',
                                boxShadow: `0 8px 28px ${alpha(project.color, 0.45)}`,
                                flexShrink: 0,
                              }}
                            >
                              <IconComponent sx={{ fontSize: { xs: 28, md: 40 } }} />
                            </Box>
                          </Grid>

                          {/* Content */}
                          <Grid size={{ xs: 12, md: 10 }}>
                            <Box sx={{ mb: 2 }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  fontFamily: 'var(--font-display)',
                                  fontWeight: 700,
                                  color: 'var(--text-primary)',
                                  mb: 0.5,
                                  fontSize: { xs: '1.4rem', md: '1.7rem' },
                                  letterSpacing: '-0.3px',
                                }}
                              >
                                {project.title}
                              </Typography>
                              {project.subtitle && (
                                <Typography variant="subtitle1" sx={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--text-muted)', mb: 1, fontWeight: 400 }}>
                                  {project.subtitle}
                                </Typography>
                              )}
                              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                                <Stack direction="row" spacing={0.8} alignItems="center">
                                  <CalendarTodayIcon sx={{ fontSize: 15, color: 'var(--color-4)' }} />
                                  <Typography variant="body2" sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.82rem' }}>
                                    {project.period}
                                  </Typography>
                                </Stack>
                                {project.company && (
                                  <Stack direction="row" spacing={0.8} alignItems="center">
                                    <BusinessIcon sx={{ fontSize: 15, color: 'var(--color-4)' }} />
                                    <Typography variant="body2" sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.82rem' }}>
                                      {project.company}
                                    </Typography>
                                  </Stack>
                                )}
                              </Stack>
                            </Box>

                            <Divider sx={{ my: 2.5, borderColor: `${alpha(project.color, 0.2)}`, borderWidth: 1 }} />

                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: 'var(--font-body)',
                                color: 'var(--text-secondary)',
                                mb: 3,
                                lineHeight: 1.85,
                                fontSize: '0.98rem',
                              }}
                            >
                              {project.description}
                            </Typography>

                            {/* Responsibilities */}
                            {project.responsibilities && (
                              <Box sx={{ mb: 3 }}>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                                  <WorkIcon sx={{ color: 'var(--color-4)', fontSize: 18 }} />
                                  <Typography variant="h6" sx={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', letterSpacing: '0.02em' }}>
                                    {t('projects.responsibilities')}
                                  </Typography>
                                </Stack>
                                <Stack spacing={0.8}>
                                  {project.responsibilities.map((resp, idx) => (
                                    <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                                      <Box sx={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--color-4)', mt: 1, flexShrink: 0, boxShadow: '0 0 6px rgba(125,130,176,0.5)' }} />
                                      <Typography variant="body2" sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.88rem' }}>
                                        {resp}
                                      </Typography>
                                    </Stack>
                                  ))}
                                </Stack>
                              </Box>
                            )}

                            {/* Technologies */}
                            <Box sx={{ mb: project.githubLink ? 3 : 0 }}>
                              <Stack direction="row" spacing={0.8} alignItems="center" sx={{ mb: 1.5 }}>
                                <CodeIcon sx={{ color: 'var(--color-4)', fontSize: 18 }} />
                                <Typography variant="h6" sx={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', letterSpacing: '0.02em' }}>
                                  {t('projects.technologies')}
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                                {project.technologies.map((tech) => (
                                  <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    sx={{
                                      fontFamily: 'var(--font-body)',
                                      background: `${alpha(project.color, 0.1)}`,
                                      backdropFilter: 'blur(8px)',
                                      color: 'var(--text-secondary)',
                                      fontWeight: 500,
                                      fontSize: '0.78rem',
                                      letterSpacing: '0.04em',
                                      border: `1px solid ${alpha(project.color, 0.25)}`,
                                      transition: 'all 0.25s ease',
                                      '&:hover': {
                                        background: `${alpha(project.color, 0.22)}`,
                                        color: project.color,
                                        boxShadow: `0 0 10px ${alpha(project.color, 0.3)}`,
                                        transform: 'translateY(-2px)',
                                      }
                                    }}
                                  />
                                ))}
                              </Stack>
                            </Box>

                            {/* GitHub button */}
                            {project.githubLink && (
                              <Box sx={{ mt: 2.5 }}>
                                <Button
                                  variant="outlined"
                                  startIcon={<GitHubIcon />}
                                  href={project.githubLink === 'coming-soon' ? undefined : project.githubLink}
                                  target={project.githubLink === 'coming-soon' ? undefined : '_blank'}
                                  rel="noopener noreferrer"
                                  disabled={project.githubLink === 'coming-soon'}
                                  sx={{
                                    fontFamily: 'var(--font-body)',
                                    borderColor: `${alpha(project.color, 0.5)}`,
                                    color: project.color,
                                    borderWidth: 1.5,
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.05em',
                                    px: 2.5, py: 0.9,
                                    borderRadius: '10px',
                                    textTransform: 'none',
                                    backdropFilter: 'blur(8px)',
                                    '&:hover': {
                                      borderColor: project.color,
                                      background: `${alpha(project.color, 0.1)}`,
                                      boxShadow: `0 0 16px ${alpha(project.color, 0.3)}`,
                                      transform: 'translateY(-2px)',
                                    },
                                    '&.Mui-disabled': {
                                      borderColor: `${alpha(project.color, 0.2)}`,
                                      color: `${alpha(project.color, 0.4)}`,
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
                  </ViewportCard>
                )
              })}
            </Stack>
          </motion.div>
        </AnimatePresence>

        {/* ── Stats ──────────────────────────────────────── */}
        <Box sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 4, md: 8 }, textAlign: 'center' }}>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {currentStats.map((stat, idx) => {
              const Icon = stat.IconComponent
              return (
                <Grid size={{ xs: 6, md: 4 }} key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 2.5, md: 4 },
                        borderRadius: '16px',
                        background: `rgba(167,157,195,0.05)`,
                        backdropFilter: 'blur(16px)',
                        border: `1px solid ${alpha(stat.color, 0.22)}`,
                        height: '100%',
                        display: 'flex', minWidth: 0,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 16px 40px ${alpha(stat.color, 0.25)}`,
                          border: `1px solid ${alpha(stat.color, 0.4)}`,
                          background: `rgba(167,157,195,0.09)`,
                        }
                      }}
                    >
                      <Icon sx={{ fontSize: { xs: 28, md: 44 }, color: stat.color, mb: { xs: 1, md: 1.5 } }} />
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          color: stat.color,
                          mb: 0.5,
                          fontSize: { xs: '1.5rem', md: '2.4rem' },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body1" sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontWeight: 500, fontSize: { xs: '0.8rem', md: '0.95rem' } }}>
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
    </motion.div>
  )
}

export default Projects
