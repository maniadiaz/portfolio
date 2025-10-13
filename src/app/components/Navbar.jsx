import { Link, useLocation } from 'react-router-dom'
import {AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import DescriptionIcon from '@mui/icons-material/Description'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { useState } from 'react'

const navItems = [
  { name: 'HOME', path: '/', icon: <HomeIcon /> },
  { name: 'PROJECTS', path: '/proyectos', icon: <CodeIcon /> },
  { name: 'SKILLS', path: '/habilidades', icon: <EmojiObjectsIcon /> },
  { name: 'PYTHON', path: '/python', icon: <IntegrationInstructionsIcon /> },
  { name: 'CONTACT', path: '/contacto', icon: <ContactMailIcon /> },
  { name: 'ABOUT ME', path: '/about', icon: <DescriptionIcon /> },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center',
        height: '100%',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          my: 3, 
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 10px rgba(236, 72, 153, 0.3)'
        }}
      >
        Mi Portafolio
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                color: '#e2e8f0',
                mx: 2,
                mb: 1,
                borderRadius: 2,
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(236, 72, 153, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #db2777 0%, #7c3aed 100%)',
                  }
                },
                '&:hover': {
                  backgroundColor: 'rgba(236, 72, 153, 0.15)',
                }
              }}
            >
              <Box sx={{ mr: 2, display: 'flex' }}>{item.icon}</Box>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(236, 72, 153, 0.2)',
          boxShadow: '0 4px 30px rgba(139, 92, 246, 0.2)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 70 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  color: '#ec4899',
                  '&:hover': {
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Typography 
              variant="h5" 
              component={Link}
              to="/"
              sx={{ 
                flexGrow: 1,
                fontWeight: 'bold',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: 2,
                filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.5))',
                }
              }}
            >
              {'<'} DEV PORTFOLIO {' />'}
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{
                      color: location.pathname === item.path ? '#fff' : '#cbd5e1',
                      fontWeight: 600,
                      px: 2.5,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      background: location.pathname === item.path 
                        ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                        : 'transparent',
                      boxShadow: location.pathname === item.path
                        ? '0 4px 20px rgba(236, 72, 153, 0.4)'
                        : 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: location.pathname === item.path
                          ? 'linear-gradient(135deg, #db2777 0%, #7c3aed 100%)'
                          : 'rgba(236, 72, 153, 0.15)',
                        transform: 'translateY(-2px)',
                        color: '#fff',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
            borderRight: '1px solid rgba(236, 72, 153, 0.2)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer para compensar el AppBar fixed */}
      <Toolbar sx={{ minHeight: 70 }} />
    </>
  )
}

export default Navbar