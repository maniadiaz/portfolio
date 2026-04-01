import { Box, Container, Typography, Stack, Paper, Chip, Grid, Card, CardContent, alpha, IconButton } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import CodeIcon from '@mui/icons-material/Code'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

function About() {
  const { t } = useTranslation()

  const highlights = [
    {
      icon: <WorkIcon sx={{ fontSize: 36 }} />,
      title: t('about.highlights.fullstack'),
      description: t('about.highlights.fullstackDesc'),
      colorHex: '#7d82b0',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 36 }} />,
      title: t('about.highlights.degree'),
      description: t('about.highlights.degreeDesc'),
      colorHex: '#a79dc3',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 36 }} />,
      title: t('about.highlights.technologies'),
      description: t('about.highlights.technologiesDesc'),
      colorHex: '#c6b2d7',
    },
  ]

  const skills = [
    'React', 'Angular', 'JavaScript', 'TypeScript',
    'Node.js', 'Express', 'PHP', 'C#', '.NET',
    'MySQL', 'Supabase', 'Ionic', 'Git', 'REST API', 'MVC',
  ]

  const socialLinks = [
    { icon: <LinkedInIcon sx={{ fontSize: 28 }} />, href: 'https://www.linkedin.com/in/alexisdiaz18/', label: 'LinkedIn', colorHex: '#7d82b0' },
    { icon: <EmailIcon sx={{ fontSize: 28 }} />,    href: 'mailto:miguelalexisdi18@gmail.com',         label: 'Email',    colorHex: '#a79dc3' },
    { icon: <LocationOnIcon sx={{ fontSize: 28 }} />, href: 'https://maps.google.com/?q=Mazatlan,Sinaloa,Mexico', label: 'Location', colorHex: '#c6b2d7' },
  ]

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Ambient orbs */}
      <Box aria-hidden sx={{ position: 'absolute', top: '8%', right: '8%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,157,195,0.10) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 11s ease-in-out infinite', zIndex: 0, pointerEvents: 'none' }} />
      <Box aria-hidden sx={{ position: 'absolute', bottom: '12%', left: '6%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,89,140,0.12) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 15s ease-in-out infinite', animationDelay: '4s', zIndex: 0, pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: 6 }}>

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div {...fadeUp(0)}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                display: 'inline-block',
                px: 3, py: 0.9, mb: 3,
                borderRadius: '100px',
                background: 'rgba(167,157,195,0.07)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(167,157,195,0.18)',
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
                {t('about.badge')}
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
              <DescriptionIcon
                sx={{
                  fontSize: 52,
                  background: 'linear-gradient(135deg, var(--color-3) 0%, var(--color-5) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: { xs: '2.4rem', md: '3.4rem' },
                  background: 'linear-gradient(135deg, var(--color-1) 0%, var(--color-3) 50%, var(--color-5) 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 8s ease infinite',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-1px',
                }}
              >
                {t('about.heading')}
              </Typography>
            </Stack>

            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                mb: 3,
                fontWeight: 400,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.8,
              }}
            >
              {t('about.description')}
            </Typography>
          </Box>
        </motion.div>

        {/* ── Highlight cards ────────────────────────────── */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          {highlights.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div {...fadeUp(index * 0.1)}>
                <Card
                  sx={{
                    position: 'relative',
                    background: `${alpha(item.colorHex, 0.05)}`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${alpha(item.colorHex, 0.18)}`,
                    borderRadius: '18px',
                    height: '100%',
                    boxShadow: `0 8px 32px ${alpha(item.colorHex, 0.12)}`,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    /* Gradient border on hover */
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '18px',
                      padding: '1.5px',
                      background: `linear-gradient(135deg, ${item.colorHex}66, var(--color-5)44)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.01)',
                      boxShadow: `0 20px 44px ${alpha(item.colorHex, 0.28)}`,
                      border: `1px solid ${alpha(item.colorHex, 0.35)}`,
                      background: `${alpha(item.colorHex, 0.09)}`,
                      '&::before': { opacity: 1 },
                    }
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Box
                        sx={{
                          width: 64, height: 64,
                          borderRadius: '14px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: `linear-gradient(135deg, ${item.colorHex} 0%, ${alpha(item.colorHex, 0.55)} 100%)`,
                          color: '#fff',
                          boxShadow: `0 6px 22px ${alpha(item.colorHex, 0.45)}`,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            mb: 0.5,
                            fontSize: '1rem',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--text-muted)',
                            lineHeight: 1.7,
                            fontSize: '0.88rem',
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* ── Key skills ─────────────────────────────────── */}
        <motion.div {...fadeUp(0.2)}>
          <Box sx={{ mb: 4 }}>
            <Paper
              sx={{
                p: 3.5,
                background: 'rgba(167,157,195,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(167,157,195,0.15)',
                borderRadius: '18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  mb: 2.5,
                  fontSize: '1rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {t('about.keySkills')}
              </Typography>
              <Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    icon={<CheckCircleIcon sx={{ fontSize: '14px !important' }} />}
                    size="medium"
                    sx={{
                      fontFamily: 'var(--font-body)',
                      background: 'rgba(125,130,176,0.1)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                      fontSize: '0.82rem',
                      letterSpacing: '0.03em',
                      py: 2.5,
                      border: '1px solid rgba(125,130,176,0.22)',
                      '& .MuiChip-icon': { color: 'var(--color-4)' },
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: 'rgba(125,130,176,0.2)',
                        color: 'var(--color-2)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 6px 18px rgba(74,89,140,0.3)',
                        border: '1px solid rgba(125,130,176,0.4)',
                      }
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Box>
        </motion.div>

        {/* ── Contact + Availability ─────────────────────── */}
        <Grid container spacing={3} justifyContent="center">
          {/* Contact card */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div {...fadeUp(0.1)}>
              <Paper
                sx={{
                  p: { xs: 3, md: 4.5 },
                  background: 'rgba(167,157,195,0.04)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(167,157,195,0.15)',
                  borderRadius: '18px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  /* Gradient border accent */
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--color-3), var(--color-5), var(--color-3))',
                    backgroundSize: '200% 100%',
                    animation: 'gradientShift 4s ease infinite',
                  }
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      width: 46, height: 46,
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)',
                      color: '#fff',
                      boxShadow: '0 4px 16px rgba(74,89,140,0.4)',
                    }}
                  >
                    <ConnectWithoutContactIcon sx={{ fontSize: 22 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                    }}
                  >
                    {t('about.connectTitle')}
                  </Typography>
                </Stack>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-muted)',
                    mb: 3.5,
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('about.connectDescription')}
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        width: 64, height: 64,
                        color: 'var(--text-secondary)',
                        background: `${alpha(social.colorHex, 0.08)}`,
                        backdropFilter: 'blur(8px)',
                        border: `1px solid ${alpha(social.colorHex, 0.22)}`,
                        borderRadius: '14px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: `linear-gradient(135deg, ${social.colorHex} 0%, var(--color-5) 100%)`,
                          color: '#fff',
                          transform: 'translateY(-6px) scale(1.08)',
                          boxShadow: `0 10px 24px ${alpha(social.colorHex, 0.45)}`,
                          border: '1px solid transparent',
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

          {/* Availability card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div {...fadeUp(0.2)}>
              <Paper
                sx={{
                  p: { xs: 3, md: 4.5 },
                  background: 'rgba(74,89,140,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(74,89,140,0.25)',
                  borderRadius: '18px',
                  boxShadow: '0 8px 32px rgba(74,89,140,0.15)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--color-4), var(--color-5))',
                  }
                }}
              >
                {/* Pulse indicator */}
                <Box
                  sx={{
                    position: 'relative',
                    width: 72, height: 72,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 3,
                    boxShadow: '0 6px 24px rgba(74,89,140,0.5)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: 'var(--color-4)',
                      animation: 'pulse-ring 2s ease-out infinite',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 28, height: 28,
                      borderRadius: '50%',
                      background: '#fff',
                      position: 'relative', zIndex: 1,
                    }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--color-2)',
                    mb: 1.5,
                    fontSize: { xs: '1.4rem', md: '1.7rem' },
                  }}
                >
                  {t('about.availableTitle')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-muted)',
                    mb: 1,
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                  }}
                >
                  {t('about.availableDescription')}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                  }}
                >
                  {t('about.availableTagline')}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </motion.div>
  )
}

export default About
