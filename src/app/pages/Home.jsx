import { Box, Typography, Button, Container, Stack, Chip, Grid, Card, CardContent, IconButton, Fade, Zoom } from '@mui/material'
import { Link } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article'
import CodeIcon from '@mui/icons-material/Code'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import EmojiObjectsIcon from '@mui/icons-material/EmojiEmotions'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ReactGA from 'react-ga4'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function Home() {
  const { t } = useTranslation()

  const technologies = [
    'React', 'Angular', 'JavaScript', 'TypeScript',
    'Node.js', 'Express', 'Sequelize', 'C#',
    '.NET', 'PHP', 'MySQL', 'Supabase',
    'Ionic', 'Git'
  ]

  const stats = [
    { label: t('home.stats.experience'), value: t('home.stats.experienceValue'), subtitle: t('home.stats.experienceSubtitle'), icon: <WorkIcon /> },
    { label: t('home.stats.technologies'), value: t('home.stats.technologiesValue'), subtitle: t('home.stats.technologiesSubtitle'), icon: <CodeIcon /> },
    { label: t('home.stats.projects'), value: t('home.stats.projectsValue'), subtitle: t('home.stats.projectsSubtitle'), icon: <RocketLaunchIcon /> },
  ]

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/maniadiaz', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/alexisdiaz18/', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:miguelalexisdi18@gmail.com', label: 'Email' },
  ]

  // Funciones para tracking de eventos
  const handleProjectsClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click',
      label: 'View Projects Button'
    })
  }

  const handleSkillsClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click',
      label: 'View Skills Button'
    })
  }

  const handleContactClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click',
      label: 'Contact Me Button'
    })
  }

  const handleAboutClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click',
      label: 'About Me (CV) Button'
    })
  }

  const handleSocialClick = (platform) => {
    ReactGA.event({
      category: 'Social',
      action: 'Click',
      label: platform
    })
  }

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s',
          zIndex: 0,
        }}
      />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Box
            sx={{
              minHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              py: 8,
            }}
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
              <Box
                sx={{
                  display: 'inline-block',
                  px: 3,
                  py: 1,
                  mb: 2,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(102, 126, 234, 0.3)',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                  }}
                >
                  {t('home.greeting')}
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, type: 'spring', stiffness: 80 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  mb: 1,
                  fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                  background: 'linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #d946ef 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 5s ease infinite',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
                  textShadow: '0 0 80px rgba(102, 126, 234, 0.5)',
                  letterSpacing: -2,
                }}
              >
                {t('home.name')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#d0d0d0',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2.25rem' },
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: 3,
                    background: 'linear-gradient(90deg, transparent, #667eea, #8b5cf6, transparent)',
                    borderRadius: 2,
                  }
                }}
              >
                {t('home.title')}
              </Typography>
            </motion.div>

            {/* Subtitle/Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box
                sx={{
                  maxWidth: 700,
                  mx: 'auto',
                  mb: 5,
                  p: 3,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#a0a0a0',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    fontWeight: 400,
                  }}
                >
                  "{t('home.tagline')}"
                </Typography>
              </Box>
            </motion.div>

            {/* Location & Degree */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Chip
                  icon={<SchoolIcon />}
                  label={t('home.degree')}
                  sx={{
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(102, 126, 234, 0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    color: '#d0d0d0',
                    fontWeight: 600,
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                    px: { xs: 1, md: 2 },
                    py: { xs: 2, md: 2.5 },
                    maxWidth: { xs: '100%', sm: 'auto' },
                    height: 'auto',
                    '& .MuiChip-label': { whiteSpace: 'normal', textAlign: 'center' },
                    border: '1px solid rgba(102, 126, 234, 0.4)',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(102, 126, 234, 0.15) 100%)',
                    }
                  }}
                />
                <Chip
                  icon={<LocationOnIcon />}
                  label={t('home.location')}
                  sx={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    color: '#d0d0d0',
                    fontWeight: 600,
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                    px: { xs: 1, md: 2 },
                    py: { xs: 2, md: 2.5 },
                    maxWidth: { xs: '100%', sm: 'auto' },
                    height: 'auto',
                    '& .MuiChip-label': { whiteSpace: 'normal', textAlign: 'center' },
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)',
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.15) 100%)',
                    }
                  }}
                />
              </Stack>
            </motion.div>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 5, flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Button
                component={Link}
                to="/proyectos"
                onClick={handleProjectsClick}
                variant="contained"
                size="large"
                startIcon={<CodeIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  px: 5,
                  py: 2,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.05)',
                    boxShadow: '0 15px 40px rgba(102, 126, 234, 0.7)',
                    background: 'linear-gradient(135deg, #764ba2 0%, #8b5cf6 100%)',
                    '&::before': {
                      left: '100%',
                    }
                  }
                }}
              >
                {t('home.viewProjects')}
              </Button>

              <Button
                component={Link}
                to="/habilidades"
                onClick={handleSkillsClick}
                variant="contained"
                size="large"
                startIcon={<EmojiObjectsIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #764ba2 0%, #d946ef 100%)',
                  color: '#fff',
                  px: 5,
                  py: 2,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(139, 92, 246, 0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.05)',
                    boxShadow: '0 15px 40px rgba(217, 70, 239, 0.7)',
                    background: 'linear-gradient(135deg, #d946ef 0%, #a855f7 100%)',
                    '&::before': {
                      left: '100%',
                    }
                  }
                }}
              >
                {t('home.viewSkills')}
              </Button>

              <Button
                component={Link}
                to="/about"
                onClick={handleAboutClick}
                variant="contained"
                size="large"
                startIcon={<ArticleIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #ffcb71ff 0%, #f0942bff 100%)',
                  color: '#fff',
                  px: 5,
                  py: 2,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(245, 158, 11, 0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.05)',
                    boxShadow: '0 15px 40px rgba(245, 158, 11, 0.7)',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #ffcb71ff 100%)',
                    '&::before': {
                      left: '100%',
                    }
                  }
                }}
              >
                {t('home.aboutMe')}
              </Button>
            </Stack>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                  >
                    <IconButton
                      aria-label={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleSocialClick(social.label)}
                      sx={{
                        width: 60,
                        height: 60,
                        color: '#a0a0a0',
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(102, 126, 234, 0.3)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          color: '#fff',
                          background: 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)',
                          border: '1px solid rgba(102, 126, 234, 0.6)',
                          transform: 'translateY(-8px) scale(1.15) rotate(5deg)',
                          boxShadow: '0 12px 30px rgba(102, 126, 234, 0.5)',
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Box>
        </Fade>

        {/* Stats Section */}
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 4, md: 4 }} key={stat.label}>
              <Zoom in timeout={1000 + (index * 200)}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    minWidth: 0,
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(102, 126, 234, 0.3)',
                      border: '1px solid rgba(102, 126, 234, 0.4)',
                    }
                  }}
                >
                  <CardContent sx={{
                    textAlign: 'center',
                    py: { xs: 2, md: 4 },
                    px: { xs: 1, md: 2 },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <Box sx={{ color: '#667eea', mb: 2 }}>
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#b0b0b0', fontWeight: 600, mb: 0.5, fontSize: { xs: '0.7rem', sm: '0.85rem', md: '1.1rem' } }}>
                      {stat.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#808080', fontSize: { xs: '0.6rem', sm: '0.75rem', md: '0.875rem' } }}>
                      {stat.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Technologies Section */}
        <Fade in timeout={1500}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#b0b0b0',
              }}
            >
              {t('home.technologiesTitle')}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    color: '#b0b0b0',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 2,
                    py: 2.5,
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                      color: '#667eea',
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Home