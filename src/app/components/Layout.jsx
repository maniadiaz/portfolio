import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        minWidth: '100vw',
      }}
    >
      <Navbar />

      <Container
        component="main"
        maxWidth="100vw"
        sx={{
          flex: 1,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Outlet />
      </Container>

      <Footer />
    </Box>
  )
}

export default Layout