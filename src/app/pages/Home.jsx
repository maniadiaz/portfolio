import { Box, Typography, Button, Container, Stack, Chip, Grid, Card, CardContent, IconButton, Fade, Zoom } from '@mui/material'
import { Link } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X';
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import EmojiObjectsIcon from '@mui/icons-material/EmojiEmotions'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReactGA from 'react-ga4'

function Home() {
  const technologies = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'Express', 'Sequelize', 'C#', '.NET',
    'PHP', 'MySQL', 'MariaDB', 'Git'
  ]

  const stats = [
    { label: 'Experience', value: '10+', subtitle: 'Months Coding', icon: <WorkIcon /> },
    { label: 'Technologies', value: '18+', subtitle: 'Mastered', icon: <CodeIcon /> },
    { label: 'Projects', value: '6+', subtitle: 'Completed', icon: <RocketLaunchIcon /> },
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
    <Box>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box
            sx={{
              minHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              py: 8,
            }}
          >
            {/* Avatar/Profile
            <Zoom in timeout={1200}>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  mb: 3,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                  border: '4px solid rgba(102, 126, 234, 0.3)',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                    animation: 'pulse 3s infinite',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': {
                      opacity: 1,
                      transform: 'scale(1)',
                    },
                    '50%': {
                      opacity: 0.5,
                      transform: 'scale(1.1)',
                    },
                  }
                }}
              >
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Miguel Alexis Díaz Logo"
                  sx={{
                    width: '156%',
                    height: '156%',
                    objectFit: 'contain',
                    position: 'relative',
                    mb: -2,
                    zIndex: 1,
                    filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.6))',
                  }}
                />
              </Box>
            </Zoom> */}

            {/* Main Title */}
            <Typography
              variant="h6"
              sx={{
                color: '#667eea',
                fontWeight: 600,
                mb: 1,
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              Hello, I'm
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '4rem' },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
              }}
            >
              Miguel Alexis Díaz
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: '#b0b0b0',
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Full Stack Developer
            </Typography>

            {/* Subtitle/Tagline */}
            <Typography
              variant="h6"
              sx={{
                color: '#808080',
                maxWidth: 600,
                mb: 4,
                lineHeight: 1.6,
                fontStyle: 'italic',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              "Building modern web solutions with clean code and creative design"
            </Typography>

            {/* Location & Degree */}
            <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Chip
                icon={<SchoolIcon />}
                label="B.S. in Information Systems Engineering"
                sx={{
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  color: '#b0b0b0',
                  fontWeight: 500,
                  px: 1,
                  border: '1px solid rgba(102, 126, 234, 0.3)',
                }}
              />
              <Chip
                icon={<LocationOnIcon />}
                label="Mazatlán, Sinaloa, México"
                sx={{
                  backgroundColor: 'rgba(118, 75, 162, 0.1)',
                  color: '#b0b0b0',
                  fontWeight: 500,
                  px: 1,
                  border: '1px solid rgba(118, 75, 162, 0.3)',
                }}
              />
            </Stack>

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
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 32px rgba(102, 126, 234, 0.6)',
                    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                  }
                }}
              >
                View Projects
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
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(118, 75, 162, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 32px rgba(217, 70, 239, 0.6)',
                    background: 'linear-gradient(135deg, #d946ef 0%, #764ba2 100%)',
                  }
                }}
              >
                View Skills
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
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 32px rgba(245, 158, 11, 0.6)',
                    background: 'linear-gradient(135deg, #f0942bff 0%, #ffcb71ff 100%)',
                  }
                }}
              >
                About Me
              </Button>
            </Stack>

            {/* Social Links */}
            <Stack direction="row" spacing={2}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick(social.label)}
                  sx={{
                    color: '#808080',
                    backgroundColor: 'rgba(102, 126, 234, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#667eea',
                      backgroundColor: 'rgba(102, 126, 234, 0.15)',
                      transform: 'translateY(-5px) scale(1.1)',
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Fade>

        {/* Stats Section */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={stat.label}>
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
                    minWidth: 170,
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
                    py: 4,
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
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#b0b0b0', fontWeight: 600, mb: 0.5 }}>
                      {stat.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#808080' }}>
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
              Technologies I Work With
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