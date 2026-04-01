import { useState, useRef } from 'react'
import {
  Box, Container, Typography, Card, CardContent, Chip,
  Stack, Grid, Divider, alpha, Button, IconButton,
  Modal, Drawer, useTheme, useMediaQuery,
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
import CloseIcon from '@mui/icons-material/Close'
import { getWebProjects, getWebStats } from '../data/projectsData'

const tabExitVariants = {
  hidden: { opacity: 0, y: -12, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.2 } },
}

/* ── Contenido del detalle (reutilizado en Modal y Drawer) ── */
function ProjectDetail({ project, t, onClose }) {
  const IconComponent = project.icon
  const getTypeInfo = (type) => {
    switch (type) {
      case 'personal':  return { label: t('projects.personal'),  color: 'var(--color-3)' }
      case 'company':   return { label: t('projects.company'),   color: 'var(--color-4)' }
      case 'freelance': return { label: t('projects.freelance'), color: 'var(--color-2)' }
      default:          return { label: 'Project',               color: 'var(--text-muted)' }
    }
  }
  const typeInfo = getTypeInfo(project.projectType)

  return (
    <Box
      sx={{
        background: 'linear-gradient(160deg, rgba(13,11,20,0.98) 0%, rgba(30,25,50,0.98) 100%)',
        backdropFilter: 'blur(24px)',
        borderRadius: { xs: '20px 20px 0 0', md: '20px' },
        border: '1px solid rgba(125,130,176,0.22)',
        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: { xs: '90vh', md: '85vh' },
      }}
    >
      {/* Header del modal */}
      <Box
        sx={{
          p: { xs: 2.5, md: 3.5 },
          pb: 2,
          background: `linear-gradient(135deg, ${alpha(project.color, 0.12)} 0%, rgba(13,11,20,0) 60%)`,
          borderBottom: `1px solid ${alpha(project.color, 0.15)}`,
          flexShrink: 0,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Box
            sx={{
              width: { xs: 52, md: 64 }, height: { xs: 52, md: 64 }, flexShrink: 0,
              borderRadius: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `linear-gradient(135deg, ${project.color} 0%, ${alpha(project.color, 0.55)} 100%)`,
              color: '#fff',
              boxShadow: `0 6px 24px ${alpha(project.color, 0.45)}`,
            }}
          >
            <IconComponent sx={{ fontSize: { xs: 26, md: 32 } }} />
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }} flexWrap="wrap" useFlexGap>
              <Chip
                label={project.status === 'completed' ? t('projects.completed') : t('projects.inProgress')}
                icon={project.status === 'completed'
                  ? <CheckCircleIcon sx={{ fontSize: '13px !important' }} />
                  : <AccessTimeIcon  sx={{ fontSize: '13px !important' }} />
                }
                sx={{
                  fontFamily: 'var(--font-body)',
                  background: project.status === 'completed'
                    ? 'linear-gradient(135deg, #2d9e6b 0%, #1a7a50 100%)'
                    : 'linear-gradient(135deg, #b07a2a 0%, #8a5e1a 100%)',
                  color: '#fff', fontWeight: 700,
                  fontSize: '0.65rem', letterSpacing: '0.06em',
                  height: 22, border: 'none',
                  '& .MuiChip-icon': { ml: 0.4 },
                }}
              />
              <Chip
                label={typeInfo.label}
                icon={project.projectType === 'personal'
                  ? <PersonIcon sx={{ fontSize: '12px !important' }} />
                  : <BusinessIcon sx={{ fontSize: '12px !important' }} />
                }
                sx={{
                  fontFamily: 'var(--font-body)',
                  background: 'rgba(167,157,195,0.1)',
                  border: `1px solid ${alpha(project.color, 0.3)}`,
                  color: typeInfo.color, fontWeight: 600,
                  fontSize: '0.65rem', height: 22,
                  '& .MuiChip-icon': { color: typeInfo.color, ml: 0.4 },
                  '& .MuiChip-label': { px: 0.8 },
                }}
              />
            </Stack>

            <Typography
              sx={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.3px',
                mb: 0.5,
              }}
            >
              {project.title}
            </Typography>
            {project.subtitle && (
              <Typography sx={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {project.subtitle}
              </Typography>
            )}
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 0.5 }} flexWrap="wrap" useFlexGap>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CalendarTodayIcon sx={{ fontSize: 13, color: 'var(--color-4)' }} />
                <Typography sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                  {project.period}
                </Typography>
              </Stack>
              {project.company && (
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <BusinessIcon sx={{ fontSize: 13, color: 'var(--color-4)' }} />
                  <Typography sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    {project.company}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Box>

          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              color: 'var(--text-muted)', flexShrink: 0,
              background: 'rgba(167,157,195,0.08)',
              border: '1px solid rgba(167,157,195,0.15)',
              '&:hover': { background: 'rgba(167,157,195,0.16)', color: 'var(--text-primary)' },
            }}
          >
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Cuerpo scrollable */}
      <Box sx={{ overflowY: 'auto', p: { xs: 2.5, md: 3.5 }, flex: 1 }}>
        {/* Descripción completa */}
        <Typography
          sx={{
            fontFamily: 'var(--font-body)',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          {project.description}
        </Typography>

        <Divider sx={{ borderColor: `${alpha(project.color, 0.15)}`, mb: 3 }} />

        {/* Tecnologías */}
        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={0.8} alignItems="center" sx={{ mb: 1.5 }}>
            <CodeIcon sx={{ color: 'var(--color-4)', fontSize: 17 }} />
            <Typography sx={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem', letterSpacing: '0.03em' }}>
              {t('projects.technologies')}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', gap: 0.7 }}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontFamily: 'var(--font-body)',
                  background: `${alpha(project.color, 0.12)}`,
                  color: 'var(--text-secondary)',
                  fontWeight: 500, fontSize: '0.78rem',
                  height: 26,
                  border: `1px solid ${alpha(project.color, 0.28)}`,
                  transition: 'all 0.2s ease',
                  '&:hover': { background: `${alpha(project.color, 0.24)}`, color: project.color },
                  '& .MuiChip-label': { px: 1.2 },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Responsabilidades */}
        {project.responsibilities?.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Stack direction="row" spacing={0.8} alignItems="center" sx={{ mb: 1.5 }}>
              <WorkIcon sx={{ color: 'var(--color-4)', fontSize: 17 }} />
              <Typography sx={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem', letterSpacing: '0.03em' }}>
                {t('projects.responsibilities')}
              </Typography>
            </Stack>
            <Stack spacing={0.8}>
              {project.responsibilities.map((resp, idx) => (
                <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--color-4)', mt: '7px', flexShrink: 0, boxShadow: '0 0 6px rgba(125,130,176,0.5)' }} />
                  <Typography sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.88rem' }}>
                    {resp}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        )}

        {/* GitHub */}
        {project.githubLink && (
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
              fontWeight: 600, fontSize: '0.88rem',
              px: 3, py: 1,
              borderRadius: '10px',
              textTransform: 'none',
              '&:hover': { borderColor: project.color, background: `${alpha(project.color, 0.1)}`, boxShadow: `0 0 16px ${alpha(project.color, 0.3)}` },
              '&.Mui-disabled': { borderColor: `${alpha(project.color, 0.2)}`, color: `${alpha(project.color, 0.4)}` },
            }}
          >
            {project.githubLink === 'coming-soon' ? t('projects.comingSoon') : t('projects.viewGithub')}
          </Button>
        )}
      </Box>
    </Box>
  )
}

/* ── Card compacta ── */
function ProjectCard({ project, index, t }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const IconComponent = project.icon

  const getTypeInfo = (type) => {
    switch (type) {
      case 'personal':  return { label: t('projects.personal'),  color: 'var(--color-3)' }
      case 'company':   return { label: t('projects.company'),   color: 'var(--color-4)' }
      case 'freelance': return { label: t('projects.freelance'), color: 'var(--color-2)' }
      default:          return { label: 'Project',               color: 'var(--text-muted)' }
    }
  }
  const typeInfo = getTypeInfo(project.projectType)

  const detailContent = <ProjectDetail project={project} t={t} onClose={() => setOpen(false)} />

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: '100%' }}
      >
        <Card
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '18px',
            background: 'rgba(167,157,195,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(125,130,176,0.25)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
            transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease',
            '&::before': {
              content: '""',
              position: 'absolute', inset: 0,
              borderRadius: '18px', padding: '1px',
              background: 'linear-gradient(135deg, rgba(125,130,176,0.55) 0%, rgba(74,89,140,0.45) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor', maskComposite: 'exclude',
              opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none',
            },
            '&:hover': {
              transform: 'translateY(-6px)',
              border: '1px solid rgba(125,130,176,0.45)',
              boxShadow: '0 16px 40px rgba(0,0,0,0.24), 0 0 28px rgba(125,130,176,0.18)',
              background: 'rgba(167,157,195,0.12)',
              '&::before': { opacity: 1 },
            },
          }}
        >
          <CardContent sx={{ p: 3, pt: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Status badge — inline al tope */}
            <Box sx={{ mb: 1.5 }}>
              <Chip
                icon={project.status === 'completed'
                  ? <CheckCircleIcon sx={{ fontSize: 13 }} />
                  : <AccessTimeIcon  sx={{ fontSize: 13 }} />
                }
                label={project.status === 'completed' ? t('projects.completed') : t('projects.inProgress')}
                sx={{
                  fontFamily: 'var(--font-body)',
                  background: project.status === 'completed'
                    ? 'linear-gradient(135deg, #2d9e6b 0%, #1a7a50 100%)'
                    : 'linear-gradient(135deg, #b07a2a 0%, #8a5e1a 100%)',
                  color: '#fff', fontWeight: 700,
                  fontSize: '0.65rem', letterSpacing: '0.06em',
                  height: 24, border: 'none',
                  '& .MuiChip-icon': { ml: 0.4 },
                }}
              />
            </Box>

            {/* Header */}
            <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
              <Box
                sx={{
                  width: 54, height: 54, flexShrink: 0,
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `linear-gradient(135deg, ${project.color} 0%, ${alpha(project.color, 0.55)} 100%)`,
                  color: '#fff',
                  boxShadow: `0 6px 18px ${alpha(project.color, 0.45)}`,
                }}
              >
                <IconComponent sx={{ fontSize: 28 }} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700, color: 'var(--text-primary)',
                    fontSize: '1.1rem', lineHeight: 1.25,
                    letterSpacing: '-0.2px', mb: 0.4,
                  }}
                >
                  {project.title}
                </Typography>
                <Stack direction="row" spacing={0.6} alignItems="center" flexWrap="wrap" useFlexGap>
                  <Chip
                    label={typeInfo.label}
                    icon={project.projectType === 'personal'
                      ? <PersonIcon sx={{ fontSize: '11px !important' }} />
                      : <BusinessIcon sx={{ fontSize: '11px !important' }} />
                    }
                    sx={{
                      height: 18, fontSize: '0.6rem', fontFamily: 'var(--font-body)',
                      fontWeight: 600, color: typeInfo.color,
                      background: 'rgba(167,157,195,0.1)',
                      border: `1px solid ${alpha(project.color, 0.28)}`,
                      '& .MuiChip-icon': { color: typeInfo.color, ml: 0.3 },
                      '& .MuiChip-label': { px: 0.7 },
                    }}
                  />
                  <Stack direction="row" spacing={0.4} alignItems="center">
                    <CalendarTodayIcon sx={{ fontSize: 11, color: 'var(--color-4)' }} />
                    <Typography sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.68rem' }}>
                      {project.period}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            {/* Descripción truncada */}
            <Typography
              sx={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                fontSize: '0.82rem', lineHeight: 1.6,
                mb: 1.5, flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.description}
            </Typography>

            {/* Tech chips — primeras 4 */}
            <Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {project.technologies.slice(0, 5).map((tech) => (
                <Chip
                  key={tech} label={tech} size="small"
                  sx={{
                    fontFamily: 'var(--font-body)',
                    background: `${alpha(project.color, 0.1)}`,
                    color: 'var(--text-secondary)',
                    fontWeight: 500, fontSize: '0.72rem', height: 22,
                    border: `1px solid ${alpha(project.color, 0.22)}`,
                    '& .MuiChip-label': { px: 0.9 },
                  }}
                />
              ))}
              {project.technologies.length > 5 && (
                <Chip
                  label={`+${project.technologies.length - 5}`} size="small"
                  sx={{
                    fontFamily: 'var(--font-body)',
                    background: 'rgba(125,130,176,0.1)',
                    color: 'var(--text-muted)',
                    fontSize: '0.68rem', height: 20,
                    border: '1px solid rgba(125,130,176,0.2)',
                    '& .MuiChip-label': { px: 0.8 },
                  }}
                />
              )}
            </Stack>

            {/* Botón Ver más */}
            <Button
              size="small"
              onClick={() => setOpen(true)}
              sx={{
                mt: 'auto',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.04em',
                textTransform: 'none',
                color: project.color,
                background: `${alpha(project.color, 0.08)}`,
                border: `1px solid ${alpha(project.color, 0.3)}`,
                borderRadius: '10px',
                py: 0.7,
                transition: 'all 0.25s ease',
                '&:hover': {
                  background: `${alpha(project.color, 0.18)}`,
                  border: `1px solid ${alpha(project.color, 0.55)}`,
                  boxShadow: `0 4px 16px ${alpha(project.color, 0.25)}`,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('projects.seeMore')}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Modal desktop */}
      {!isMobile && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
          slotProps={{ backdrop: { sx: { backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.65)' } } }}
        >
          <Box sx={{ width: '100%', maxWidth: 680, outline: 'none' }}>
            {detailContent}
          </Box>
        </Modal>
      )}

      {/* Drawer mobile — sube desde abajo */}
      {isMobile && (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              background: 'transparent',
              boxShadow: 'none',
              maxHeight: '90vh',
            }
          }}
        >
          {/* Handle */}
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1.5, pb: 0.5, background: 'transparent' }}>
            <Box sx={{ width: 40, height: 4, borderRadius: 2, background: 'rgba(167,157,195,0.35)' }} />
          </Box>
          {detailContent}
        </Drawer>
      )}
    </>
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
            {/* Desktop: grid auto-fill máx 4 columnas | Mobile: lista vertical */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'grid' },
                flexDirection: { xs: 'column' },
                gridTemplateColumns: {
                  md: 'repeat(auto-fill, minmax(340px, 1fr))',
                  lg: 'repeat(3, 1fr)',
                },
                gap: { xs: 2.5, md: 3 },
                alignItems: 'start',
              }}
            >
              {currentProjects.map((project, cardIndex) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={cardIndex}
                  t={t}
                />
              ))}
            </Box>
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
