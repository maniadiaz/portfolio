import { Link, useLocation } from 'react-router-dom'
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useTheme, useMediaQuery, Container, Menu, MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import DescriptionIcon from '@mui/icons-material/Description'
import LanguageIcon from '@mui/icons-material/Language'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, LayoutGroup } from 'framer-motion'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'),     path: '/',           icon: <HomeIcon sx={{ fontSize: 18 }} /> },
    { name: t('nav.projects'), path: '/proyectos',  icon: <CodeIcon sx={{ fontSize: 18 }} /> },
    { name: t('nav.skills'),   path: '/habilidades', icon: <EmojiObjectsIcon sx={{ fontSize: 18 }} /> },
    { name: t('nav.about'),    path: '/about',       icon: <DescriptionIcon sx={{ fontSize: 18 }} /> },
  ]

  const handleDrawerToggle  = () => setMobileOpen(!mobileOpen)
  const handleLanguageClick = (e) => setAnchorEl(e.currentTarget)
  const handleLanguageClose = () => setAnchorEl(null)
  const changeLanguage      = (lng) => { i18n.changeLanguage(lng); handleLanguageClose() }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: '100%',
        background: 'rgba(13,11,20,0.97)',
        backdropFilter: 'blur(24px)',
        borderRight: '1px solid rgba(167,157,195,0.12)',
        pt: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 3,
          mx: 3,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          letterSpacing: '0.06em',
          background: 'linear-gradient(135deg, var(--color-2) 0%, var(--color-5) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Alexis Diaz
      </Typography>

      <List sx={{ px: 1.5 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={isActive}
                sx={{
                  borderRadius: '10px',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  background: isActive
                    ? 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)'
                    : 'transparent',
                  boxShadow: isActive ? '0 4px 16px rgba(74,89,140,0.4)' : 'none',
                  '&:hover': {
                    background: isActive
                      ? 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)'
                      : 'rgba(167,157,195,0.08)',
                    color: '#fff',
                  },
                  '&.Mui-selected': { background: 'none' },
                }}
              >
                <Box sx={{ mr: 2, display: 'flex', color: isActive ? '#fff' : 'var(--color-3)' }}>{item.icon}</Box>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem' }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}

        <ListItem disablePadding sx={{ mt: 1 }}>
          <ListItemButton
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            sx={{
              borderRadius: '10px',
              color: 'var(--text-secondary)',
              border: '1px solid rgba(167,157,195,0.15)',
              '&:hover': { background: 'rgba(167,157,195,0.08)', color: '#fff' },
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', color: 'var(--color-3)' }}><LanguageIcon sx={{ fontSize: 18 }} /></Box>
            <ListItemText
              primary={i18n.language === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
              primaryTypographyProps={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component={motion.div}
        initial={false}
        animate={{
          background: scrolled
            ? 'rgba(13,11,20,0.80)'
            : 'rgba(13,11,20,0.0)',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'blur(0px)',
          borderBottom: scrolled
            ? '1px solid rgba(125,130,176,0.18)'
            : '1px solid transparent',
          boxShadow: scrolled
            ? '0 1px 0 rgba(125,130,176,0.08), 0 4px 24px rgba(0,0,0,0.30)'
            : 'none',
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        sx={{ WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'blur(0px)', }}
      >
        <Container maxWidth="100wv">
          <Toolbar disableGutters sx={{ minHeight: 68 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  color: 'var(--color-3)',
                  '&:hover': { background: 'rgba(167,157,195,0.1)' }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.3rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                background: 'linear-gradient(135deg, var(--color-1) 0%, var(--color-4) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'filter 0.3s ease',
                '&:hover': { filter: 'brightness(1.2)' },
              }}
            >
              Alexis Diaz
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                <LayoutGroup id="navbar">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Box key={item.name} sx={{ position: 'relative', pb: '4px' }}>
                      <Button
                        component={Link}
                        to={item.path}
                        startIcon={item.icon}
                        sx={{
                          fontFamily: 'var(--font-body)',
                          color: isActive ? 'var(--color-1)' : 'var(--text-secondary)',
                          fontWeight: isActive ? 600 : 500,
                          fontSize: '0.88rem',
                          letterSpacing: '0.04em',
                          px: 2,
                          py: 1,
                          borderRadius: '10px',
                          textTransform: 'none',
                          background: 'transparent',
                          transition: 'color 0.25s ease, background 0.25s ease, font-weight 0.1s',
                          '&:hover': {
                            color: '#fff',
                            background: 'rgba(167,157,195,0.08)',
                          },
                          '& .MuiButton-startIcon': {
                            color: isActive ? 'var(--color-3)' : 'var(--text-muted)',
                            transition: 'color 0.25s ease',
                          },
                        }}
                      >
                        {item.name}
                      </Button>

                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            x: '-50%',
                            width: '55%',
                            height: 2,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #a79dc3, #7d82b0, #4a598c)',
                            boxShadow: '0 0 10px rgba(125,130,176,0.65)',
                            display: 'block',
                          }}
                        />
                      )}
                    </Box>
                  )
                })}
                </LayoutGroup>

                {/* Language toggle */}
                <IconButton
                  onClick={handleLanguageClick}
                  sx={{
                    ml: 1,
                    color: 'var(--text-secondary)',
                    '&:hover': { color: '#fff', background: 'rgba(167,157,195,0.1)' }
                  }}
                >
                  <LanguageIcon sx={{ fontSize: 20 }} />
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleLanguageClose}
                  PaperProps={{
                    sx: {
                      background: 'rgba(13,11,20,0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(167,157,195,0.15)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                      borderRadius: '12px',
                      mt: 1,
                    }
                  }}
                >
                  {[
                    { code: 'es', label: '🇪🇸 Español' },
                    { code: 'en', label: '🇺🇸 English' },
                  ].map((lang) => (
                    <MenuItem
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      selected={i18n.language === lang.code}
                      sx={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        borderRadius: '8px',
                        mx: 0.5,
                        my: 0.25,
                        '&:hover': { background: 'rgba(167,157,195,0.1)', color: '#fff' },
                        '&.Mui-selected': {
                          background: 'linear-gradient(135deg, var(--color-4) 0%, var(--color-5) 100%)',
                          color: '#fff',
                          '&:hover': { background: 'linear-gradient(135deg, var(--color-3) 0%, var(--color-4) 100%)' },
                        }
                      }}
                    >
                      {lang.label}
                    </MenuItem>
                  ))}
                </Menu>
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
            width: 270,
            background: 'transparent',
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar sx={{ minHeight: 68 }} />
    </>
  )
}

export default Navbar
