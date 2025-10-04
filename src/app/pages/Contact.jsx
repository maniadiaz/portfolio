import { useState } from 'react'
import { Box, Container, Typography, Stack, IconButton, Alert, Snackbar, alpha, Paper, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'

function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const socialLinks = [
    { 
      icon: <GitHubIcon />, 
      href: 'https://github.com/maniadiaz', 
      label: 'GitHub',
      color: '#333',
      hoverColor: '#667eea'
    },
    { 
      icon: <LinkedInIcon />, 
      href: 'https://www.linkedin.com/in/miguel-alexis-diaz-diaz-aa0279315/', 
      label: 'LinkedIn',
      color: '#0077b5',
      hoverColor: '#667eea'
    },
    { 
      icon: <TwitterIcon />, 
      href: 'https://x.com/MiguelAlex2813', 
      label: 'Twitter',
      color: '#1DA1F2',
      hoverColor: '#667eea'
    },
    { 
      icon: <EmailIcon />, 
      href: 'mailto:miguelalexisdi18@gmail.com', 
      label: 'Email',
      color: '#EA4335',
      hoverColor: '#d946ef'
    },
  ]

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 50 }} />,
      title: 'Location',
      value: 'Sinaloa, México',
      color: '#667eea',
      link: 'https://maps.google.com/?q=Mazatlan,Sinaloa,Mexico'
    },
    {
      icon: <AlternateEmailIcon sx={{ fontSize: 50 }} />,
      title: 'Email',
      value: 'miguelalexisdi18@gmail.com',
      color: '#d946ef',
      link: 'mailto:miguelalexisdi18@gmail.com'
    }
  ]

  const handleShare = async (social) => {
    navigator.clipboard.writeText(social.href)
    setOpenSnackbar(true)
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #d946ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#808080',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and collaborations.
          </Typography>
        </Box>

        {/* Contact Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                component="a"
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 4,
                  background: `linear-gradient(135deg, ${alpha(info.color, 0.05)} 0%, ${alpha(info.color, 0.02)} 100%)`,
                  border: `1px solid ${alpha(info.color, 0.2)}`,
                  borderRadius: 3,
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 15px 35px ${alpha(info.color, 0.4)}`,
                    border: `1px solid ${alpha(info.color, 0.5)}`,
                  }
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, ${info.color} 0%, ${alpha(info.color, 0.6)} 100%)`,
                    color: '#fff',
                    boxShadow: `0 8px 24px ${alpha(info.color, 0.4)}`,
                    margin: '0 auto',
                    mb: 3,
                  }}
                >
                  {info.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#e0e0e0',
                    mb: 1,
                  }}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#b0b0b0',
                    fontWeight: 500,
                  }}
                >
                  {info.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Social Links */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                  }}
                >
                  <ConnectWithoutContactIcon />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#e0e0e0',
                  }}
                >
                  Connect with me
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                sx={{
                  color: '#909090',
                  mb: 3,
                }}
              >
                Follow me on social media to stay updated with my latest projects and professional journey
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                flexWrap="wrap"
                useFlexGap
              >
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 70,
                      height: 70,
                      color: '#e0e0e0',
                      backgroundColor: alpha(social.color, 0.1),
                      border: `2px solid ${alpha(social.color, 0.2)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: social.hoverColor,
                        color: '#fff',
                        transform: 'translateY(-8px) scale(1.1)',
                        boxShadow: `0 12px 24px ${alpha(social.hoverColor, 0.5)}`,
                        borderColor: 'transparent',
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Availability */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: '#10b981',
                    animation: 'pulse 2s infinite',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': {
                      opacity: 1,
                      transform: 'scale(1)',
                    },
                    '50%': {
                      opacity: 0.5,
                      transform: 'scale(1.2)',
                    },
                  }
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: '#10b981',
                  mb: 2,
                }}
              >
                Available for Work
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#909090',
                  mb: 1,
                }}
              >
                Open to freelance projects and full-time opportunities
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#707070',
                  fontStyle: 'italic',
                }}
              >
                Let's build something amazing together!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact