import { useRef } from 'react'
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

function Footer() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const socialLinks = [
    { icon: <GitHubIcon />,   href: 'https://github.com/maniadiaz',                   label: 'GitHub'   },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/alexisdiaz18/',       label: 'LinkedIn' },
    { icon: <EmailIcon />,    href: 'mailto:miguelalexisdi18@gmail.com',               label: 'Email'    },
  ]

  return (
    <Box
      ref={ref}
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(135deg, rgba(74,89,140,0.15) 0%, rgba(125,130,176,0.08) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(167,157,195,0.25)',
        boxShadow: '0 -4px 30px rgba(125,130,176,0.15)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Stack spacing={3}>

            {/* ── Redes sociales ─────────────────────────── */}
            <motion.div variants={fadeUp}>
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                {socialLinks.map((social) => (
                  /* motion.div wrapper: maneja la animación de entrada sin
                     interferir con el transform de MUI en el hover del IconButton */
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <IconButton
                      aria-label={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'var(--color-1)',
                        backgroundColor: 'rgba(167,157,195,0.08)',
                        border: '1px solid rgba(125,130,176,0.25)',
                        transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #7d82b0 0%, #4a598c 100%)',
                          color: '#fff',
                          transform: 'translateY(-5px) scale(1.1)',
                          boxShadow: '0 8px 25px rgba(125,130,176,0.4)',
                          borderColor: 'transparent',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* ── Divider ────────────────────────────────── */}
            <motion.div variants={fadeUp}>
              <Divider sx={{ borderColor: 'rgba(125,130,176,0.20)' }} />
            </motion.div>

            {/* ── Copyright ──────────────────────────────── */}
            <motion.div variants={fadeUp}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-2)',
                    fontWeight: 400,
                    textAlign: 'center',
                  }}
                >
                  © {new Date().getFullYear()} My portfolio. Made with
                </Typography>

                <FavoriteIcon
                  sx={{
                    background: 'linear-gradient(135deg, var(--color-2) 0%, var(--color-5) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: 18,
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-2)',
                    fontWeight: 400,
                  }}
                >
                  and lots of code
                </Typography>
              </Stack>
            </motion.div>

            {/* ── Caption ────────────────────────────────── */}
            <motion.div variants={fadeUp}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-3)',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  display: 'block',
                  letterSpacing: '0.04em',
                }}
              >
                Designed and developed with React + Material UI
              </Typography>
            </motion.div>

          </Stack>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Footer
