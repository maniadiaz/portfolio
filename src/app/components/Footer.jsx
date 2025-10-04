import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Footer() {
  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/maniadiaz', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/miguel-alexis-diaz-diaz-aa0279315/', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:miguelalexisdi18@gmail.com', label: 'Email' },
    { icon: <TwitterIcon />, href: 'https://x.com/MiguelAlex2813', label: 'Twitter' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
        borderTop: '1px solid rgba(236, 72, 153, 0.2)',
        boxShadow: '0 -4px 30px rgba(139, 92, 246, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          {/* Redes sociales */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                aria-label={social.label}
                sx={{ 
                  color: '#cbd5e1',
                  backgroundColor: 'rgba(236, 72, 153, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                    color: '#fff',
                    transform: 'translateY(-5px) scale(1.1)',
                    boxShadow: '0 8px 25px rgba(236, 72, 153, 0.5)',
                    borderColor: 'transparent',
                  }
                }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>

          <Divider sx={{ borderColor: 'rgba(236, 72, 153, 0.15)' }} />

          {/* Copyright */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#94a3b8',
                fontWeight: 400,
                textAlign: 'center'
              }}
            >
              © {new Date().getFullYear()} My portfolio. Made with
            </Typography>
            <FavoriteIcon 
              sx={{ 
                background: 'linear-gradient(135deg, #ff0984ff 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 18 
              }} 
            />
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#94a3b8',
                fontWeight: 400,
              }}
            >
              and lots of code
            </Typography>
          </Stack>

          {/* Texto adicional */}
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#64748b',
              textAlign: 'center',
              fontStyle: 'italic'
            }}
          >
            Designed and developed with React + Material UI
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer