import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.08) 0%, transparent 50%)',
        backgroundAttachment: 'fixed',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }
      }}
    >
      <Navbar />
      
      <Container 
        component="main" 
        maxWidth="xl"
        sx={{ 
          flex: 1, 
          py: 5,
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