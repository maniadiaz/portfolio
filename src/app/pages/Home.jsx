import { useEffect, useRef, useState } from 'react'
import { Box, Typography, Button, Container, Stack, Chip, Grid, Card, CardContent, IconButton } from '@mui/material'
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
import { motion, useInView } from 'framer-motion'

/* ─── Typewriter hook ─────────────────────────────────── */
function useTypewriter(text, speed = 55, startDelay = 800) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

/* ─── Tech chips stagger ──────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

/* ─── Scroll-triggered section wrapper ───────────────── */
function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Name reveal: staggerChildren container ─────────── */
const nameContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.14,
    },
  },
}

const nameWord = {
  hidden: {
    opacity: 0,
    y: 52,
    rotateX: -45,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function WordReveal({ text }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const words = text.split(' ')
  return (
    <motion.span
      ref={ref}
      variants={nameContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ display: 'inline-block' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={nameWord}
          style={{
            display: 'inline-block',
            marginRight: '0.22em',
            transformOrigin: 'bottom center',
            background: 'linear-gradient(135deg, #d8c5d5 0%, #a79dc3 40%, #7d82b0 70%, #4a598c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

function Home() {
  const { t } = useTranslation()
  const { displayed: typeTitle, done: typeDone } = useTypewriter(t('home.title'), 48, 1100)

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

  const handleProjectsClick = () => ReactGA.event({ category: 'Navigation', action: 'Click', label: 'View Projects Button' })
  const handleSkillsClick   = () => ReactGA.event({ category: 'Navigation', action: 'Click', label: 'View Skills Button' })
  const handleAboutClick    = () => ReactGA.event({ category: 'Navigation', action: 'Click', label: 'About Me (CV) Button' })
  const handleSocialClick   = (platform) => ReactGA.event({ category: 'Social', action: 'Click', label: platform })

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── Mesh gradient background ─────────────────────────
           5 blobs animados con los colores exactos de la paleta.
           Cada blob usa un color distinto y posición diferente
           para crear el efecto mesh. meshMove los desplaza lentamente. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 65% 50% at 10% 12%,  rgba(216,197,213,0.16) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 88% 80%,  rgba(74,89,140,0.18)   0%, transparent 60%),
            radial-gradient(ellipse 50% 42% at 52% 48%,  rgba(167,157,195,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 82% 12%,  rgba(198,178,215,0.13) 0%, transparent 60%),
            radial-gradient(ellipse 45% 38% at 15% 82%,  rgba(125,130,176,0.12) 0%, transparent 60%)
          `,
          animation: 'meshMove 20s ease-in-out infinite',
        }}
      />

      {/* ── Floating orbs (depth layer) ──────────────────── */}
      <Box aria-hidden sx={{ position: 'absolute', top: '6%', right: '7%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(216,197,213,0.10) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite', zIndex: 0, pointerEvents: 'none' }} />
      <Box aria-hidden sx={{ position: 'absolute', bottom: '15%', left: '3%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,89,140,0.14) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 13s ease-in-out infinite', animationDelay: '3.5s', zIndex: 0, pointerEvents: 'none' }} />
      <Box aria-hidden sx={{ position: 'absolute', top: '45%', left: '50%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,130,176,0.08) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'float 16s ease-in-out infinite', animationDelay: '7s', zIndex: 0, pointerEvents: 'none' }} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            minHeight: '92vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: 10,
          }}
        >

          {/* ── "Disponible para proyectos" badge ──────────
               Aparece primero con spring bounce. El punto verde
               tiene pulse-ring en --color-4 (azul lavanda). */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                px: 2.5,
                py: 1,
                mb: 5,
                borderRadius: '100px',
                background: 'rgba(125,130,176,0.10)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(125,130,176,0.32)',
                boxShadow: '0 0 28px rgba(125,130,176,0.16), inset 0 1px 0 rgba(255,255,255,0.06)',
                position: 'relative',
                userSelect: 'none',
              }}
            >
              {/* Dot + pulse ring */}
              <Box sx={{ position: 'relative', width: 10, height: 10, flexShrink: 0 }}>
                {/* Expanding ring */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'var(--color-4)',
                    animation: 'pulse-ring 1.8s ease-out infinite',
                  }}
                />
                {/* Solid dot on top */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'var(--color-4)',
                    boxShadow: '0 0 6px rgba(125,130,176,0.8)',
                    zIndex: 1,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-2)',
                  lineHeight: 1,
                }}
              >
                Disponible para proyectos
              </Typography>
            </Box>
          </motion.div>

          {/* ── Name — staggerChildren word-by-word reveal ──
               nameContainer dispara staggerChildren: 0.14 entre
               palabras. Cada nameWord sube desde y:52 con blur. */}
          <Typography
            component="h1"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: { xs: '3rem', sm: '4.4rem', md: '6.2rem', lg: '7.2rem' },
              lineHeight: 1.05,
              letterSpacing: { xs: '-1px', md: '-2.5px' },
              mb: 2.5,
              perspective: '800px',
              transformStyle: 'preserve-3d',
            }}
          >
            <WordReveal text={t('home.name')} />
          </Typography>

          {/* ── Typewriter subtitle ─────────────────────────
               Fade-in del contenedor a los 0.6s. El texto se
               escribe letra a letra desde startDelay=1100ms.
               El cursor parpadea con step-end al terminar. */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              component="p"
              sx={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: { xs: '1.05rem', sm: '1.3rem', md: '1.55rem' },
                color: 'var(--color-2)',
                letterSpacing: '0.05em',
                mb: 4.5,
                minHeight: { xs: '1.8em', md: '2em' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
              }}
            >
              {typeTitle}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1em',
                  ml: '2px',
                  background: 'var(--color-4)',
                  borderRadius: '1px',
                  verticalAlign: 'middle',
                  animation: typeDone ? 'typewriterBlink 1s step-end infinite' : 'none',
                  opacity: 1,
                }}
              />
            </Typography>
          </motion.div>

          {/* ── Tagline card ────────────────────────────────  */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                maxWidth: 660,
                mx: 'auto',
                mb: 5,
                p: { xs: 2.5, md: 3.5 },
                borderRadius: '16px',
                background: 'rgba(167,157,195,0.06)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(167,157,195,0.16)',
                boxShadow: '0 8px 40px rgba(74,89,140,0.16)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: { xs: '0.98rem', md: '1.15rem' },
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                  fontWeight: 400,
                }}
              >
                "{t('home.tagline')}"
              </Typography>
            </Box>
          </motion.div>

          {/* ── Chips: degree + location ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.45 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 5, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
              {[
                { icon: <SchoolIcon sx={{ fontSize: 17 }} />, label: t('home.degree'), color: 'var(--color-3)' },
                { icon: <LocationOnIcon sx={{ fontSize: 17 }} />, label: t('home.location'), color: 'var(--color-4)' },
              ].map((item) => (
                <Chip
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  sx={{
                    fontFamily: 'var(--font-body)',
                    background: 'rgba(167,157,195,0.08)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    fontSize: { xs: '0.75rem', md: '0.87rem' },
                    letterSpacing: '0.03em',
                    px: { xs: 1, md: 1.5 },
                    py: { xs: 2, md: 2.5 },
                    height: 'auto',
                    '& .MuiChip-label': { whiteSpace: 'normal', textAlign: 'center' },
                    '& .MuiChip-icon': { color: item.color },
                    border: '1px solid rgba(167,157,195,0.20)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(167,157,195,0.14)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(125,130,176,0.22)',
                    }
                  }}
                />
              ))}
            </Stack>
          </motion.div>

          {/* ── CTA Buttons (sin cambios) ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.55 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 5, flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {[
                {
                  to: '/proyectos', label: t('home.viewProjects'), icon: <CodeIcon />, onClick: handleProjectsClick,
                  bg: 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)',
                  shadow: 'rgba(74,89,140,0.45)',
                },
                {
                  to: '/habilidades', label: t('home.viewSkills'), icon: <EmojiObjectsIcon />, onClick: handleSkillsClick,
                  bg: 'linear-gradient(135deg, var(--color-3) 0%, var(--color-4) 100%)',
                  shadow: 'rgba(125,130,176,0.4)',
                },
                {
                  to: '/about', label: t('home.aboutMe'), icon: <ArticleIcon />, onClick: handleAboutClick,
                  bg: 'linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%)',
                  shadow: 'rgba(167,157,195,0.35)',
                },
              ].map((btn) => (
                <Button
                  key={btn.to}
                  component={Link}
                  to={btn.to}
                  onClick={btn.onClick}
                  variant="contained"
                  size="large"
                  startIcon={btn.icon}
                  sx={{
                    fontFamily: 'var(--font-body)',
                    background: btn.bg,
                    color: '#fff',
                    px: 4,
                    py: 1.6,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderRadius: '12px',
                    boxShadow: `0 8px 28px ${btn.shadow}`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0, left: '-100%',
                      width: '100%', height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.03)',
                      boxShadow: `0 14px 36px ${btn.shadow}`,
                      '&::before': { left: '100%' },
                    },
                  }}
                >
                  {btn.label}
                </Button>
              ))}
            </Stack>
          </motion.div>

          {/* ── Social links (sin cambios) ────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.65 }}
          >
            <Stack direction="row" spacing={2}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1, type: 'spring', stiffness: 220, damping: 14 }}
                >
                  <IconButton
                    aria-label={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick(social.label)}
                    sx={{
                      width: 52, height: 52,
                      color: 'var(--color-2)',
                      background: 'rgba(167,157,195,0.08)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(167,157,195,0.22)',
                      '&:hover': {
                        color: '#fff',
                        background: 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)',
                        border: '1px solid transparent',
                        transform: 'translateY(-6px) scale(1.12)',
                        boxShadow: '0 10px 28px rgba(74,89,140,0.45)',
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

        {/* ── Stats ──────────────────────────────────────── */}
        <RevealSection>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ mb: 10 }}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 4, md: 4 }} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(167,157,195,0.05)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(167,157,195,0.15)',
                      borderRadius: '16px',
                      height: '100%',
                      display: 'flex',
                      minWidth: 0,
                      flexDirection: 'column',
                      transition: 'all 0.35s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 40px rgba(74,89,140,0.28)',
                        border: '1px solid rgba(125,130,176,0.35)',
                        background: 'rgba(167,157,195,0.09)',
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: { xs: 2.5, md: 4 }, px: { xs: 1, md: 2 }, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Box sx={{ color: 'var(--color-4)', mb: 1.5, '& svg': { fontSize: { xs: 22, md: 30 } } }}>
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h2"
                        sx={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3rem' },
                          background: 'linear-gradient(135deg, var(--color-2) 0%, var(--color-5) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="h6" sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontWeight: 600, mb: 0.5, fontSize: { xs: '0.65rem', sm: '0.8rem', md: '1rem' } }}>
                        {stat.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: { xs: '0.55rem', sm: '0.7rem', md: '0.82rem' } }}>
                        {stat.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </RevealSection>

        {/* ── Tech showcase ──────────────────────────────── */}
        <RevealSection delay={0.1}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                display: 'block',
                mb: 3,
              }}
            >
              {t('home.technologiesTitle')}
            </Typography>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1.2 }}>
                {technologies.map((tech, i) => (
                  <motion.div key={tech} variants={fadeUp}>
                    <Chip
                      label={tech}
                      sx={{
                        fontFamily: 'var(--font-body)',
                        background: 'rgba(167,157,195,0.07)',
                        color: 'var(--text-secondary)',
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        letterSpacing: '0.04em',
                        px: 1.5,
                        py: 2.5,
                        border: '1px solid rgba(167,157,195,0.18)',
                        backdropFilter: 'blur(8px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(125,130,176,0.18)',
                          color: 'var(--color-2)',
                          transform: 'translateY(-4px)',
                          boxShadow: '0 6px 20px rgba(74,89,140,0.3)',
                          border: '1px solid rgba(125,130,176,0.35)',
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Box>
        </RevealSection>
      </Container>
    </Box>
    </motion.div>
  )
}

export default Home
