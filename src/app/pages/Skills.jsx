import { useState } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, LinearProgress, Chip, Stack, Tab, Tabs, alpha, Paper, Tooltip } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import WebIcon from '@mui/icons-material/Web'
import CloudIcon from '@mui/icons-material/Cloud'
import BuildIcon from '@mui/icons-material/Build'
import DevicesIcon from '@mui/icons-material/Devices'
import ApiIcon from '@mui/icons-material/Api'
import TerminalIcon from '@mui/icons-material/Terminal'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Skills() {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const skillCategories = [
    {
      id: 0,
      name: 'Frontend',
      icon: <WebIcon />,
      color: '#667eea',
      skills: [
        { name: 'React', level: 85, experience: '7 months', icon: '⚛️' },
        { name: 'JavaScript', level: 90, experience: '18+ months', icon: '📜' },
        { name: 'TypeScript', level: 75, experience: '5 months', icon: '💎' },
        { name: 'HTML5', level: 95, experience: '18+ months', icon: '🌐' },
        { name: 'CSS3', level: 90, experience: '18+ months', icon: '🎨' },
        { name: 'Vite', level: 85, experience: '7 months', icon: '⚡' },
        { name: 'Material UI', level: 80, experience: '6 months', icon: '🎭' },
      ]
    },
    {
      id: 1,
      name: 'Backend',
      icon: <ApiIcon />,
      color: '#764ba2',
      skills: [
        { name: 'Node.js', level: 80, experience: '8 months', icon: '🟢' },
        { name: 'Express', level: 85, experience: '8 months', icon: '🚂' },
        { name: 'PHP', level: 85, experience: '8 months', icon: '🐘' },
        { name: 'C#', level: 70, experience: '3 months', icon: '#️⃣' },
        { name: '.NET', level: 70, experience: '3 months', icon: '🔷' },
        { name: 'Sequelize', level: 80, experience: '6 months', icon: '🔗' },
      ]
    },
    {
      id: 2,
      name: 'Database',
      icon: <StorageIcon />,
      color: '#d946ef',
      skills: [
        { name: 'MySQL', level: 90, experience: '18+ months', icon: '🐬' },
        { name: 'MariaDB', level: 85, experience: '12 months', icon: '🦭' },
        { name: 'SQLite', level: 80, experience: '8 months', icon: '📦' },
        { name: 'SQL', level: 90, experience: '18+ months', icon: '📊' },
      ]
    },
    {
      id: 3,
      name: 'DevOps & Tools',
      icon: <CloudIcon />,
      color: '#10b981',
      skills: [
        { name: 'Git', level: 85, experience: '18+ months', icon: '🔀' },
        { name: 'VPS Management', level: 75, experience: '3 months', icon: '☁️' },
        { name: 'Nginx', level: 70, experience: '3 months', icon: '🌐' },
        { name: 'Bind9 (DNS)', level: 65, experience: '2 months', icon: '🔗' },
      ]
    }
  ]

  const architectureSkills = [
    { name: 'MVC Architecture', icon: '🏗️', color: '#667eea' },
    { name: 'REST API', icon: '🔌', color: '#764ba2' },
    { name: 'SPA', icon: '📱', color: '#d946ef' },
    { name: 'PWA', icon: '⚡', color: '#10b981' },
    { name: 'Responsive Design', icon: '📐', color: '#f59e0b' },
    { name: 'CRUD Operations', icon: '✏️', color: '#667eea' },
  ]

  const currentCategory = skillCategories[selectedTab]

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
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
          Technical Skills
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
          A comprehensive overview of my technical expertise across different domains of full-stack development
        </Typography>
      </Box>

      {/* Category Tabs */}
      <Paper
        sx={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(102, 126, 234, 0.2)',
          borderRadius: 3,
          mb: 5,
          overflow: 'hidden',
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant={isMobile ? 'scrollable' : 'fullWidth'}
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="skill categories tabs"
          sx={{
            '& .MuiTab-root': {
              color: '#909090',
              fontWeight: 600,
              fontSize: '1rem',
              py: 2.5,
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#b0b0b0',
                backgroundColor: 'rgba(102, 126, 234, 0.05)',
              },
              '&.Mui-selected': {
                color: '#fff',
              }
            },
            '& .MuiTabs-indicator': {
              height: 3,
              background: `linear-gradient(90deg, ${currentCategory.color} 0%, ${alpha(currentCategory.color, 0.6)} 100%)`,
              boxShadow: `0 0 20px ${alpha(currentCategory.color, 0.6)}`,
            }
          }}
        >
          {skillCategories.map((category) => (
            <Tab
              key={category.id}
              icon={category.icon}
              label={category.name}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Paper>

      {/* Skills Grid */}
      <Box sx={{ mb: 6 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${currentCategory.color} 0%, ${alpha(currentCategory.color, 0.6)} 100%)`,
              color: '#fff',
              boxShadow: `0 4px 20px ${alpha(currentCategory.color, 0.4)}`,
            }}
          >
            {currentCategory.icon}
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#e0e0e0',
            }}
          >
            {currentCategory.name} Development
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {currentCategory.skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={skill.name}>
              <Card
                sx={{
                  background: `linear-gradient(135deg, ${alpha(currentCategory.color, 0.05)} 0%, ${alpha(currentCategory.color, 0.02)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(currentCategory.color, 0.2)}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 12px 30px ${alpha(currentCategory.color, 0.3)}`,
                    border: `1px solid ${alpha(currentCategory.color, 0.4)}`,
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Typography sx={{ fontSize: '2rem' }}>{skill.icon}</Typography>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#e0e0e0',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#808080',
                            fontStyle: 'italic',
                          }}
                        >
                          {skill.experience}
                        </Typography>
                      </Box>
                    </Stack>
                    <Chip
                      label={`${skill.level}%`}
                      sx={{
                        mx: 1,
                        background: `linear-gradient(135deg, ${currentCategory.color} 0%, ${alpha(currentCategory.color, 0.7)} 100%)`,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                      }}
                    />
                  </Stack>

                  <Box sx={{ position: 'relative' }}>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 10,
                        borderRadius: 2,
                        backgroundColor: alpha(currentCategory.color, 0.1),
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(90deg, ${currentCategory.color} 0%, ${alpha(currentCategory.color, 0.6)} 100%)`,
                          borderRadius: 2,
                          boxShadow: `0 0 10px ${alpha(currentCategory.color, 0.5)}`,
                        }
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Architecture & Concepts */}
      <Box sx={{ mt: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#e0e0e0',
            }}
          >
            Architecture & Concepts
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#808080',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Additional expertise in modern development patterns and methodologies
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {architectureSkills.map((skill) => (
            <Grid item xs={6} sm={4} md={2} key={skill.name}>
              <Tooltip title={skill.name} arrow>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${alpha(skill.color, 0.05)} 0%, ${alpha(skill.color, 0.02)} 100%)`,
                    border: `1px solid ${alpha(skill.color, 0.2)}`,
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) translateY(-5px)',
                      boxShadow: `0 12px 30px ${alpha(skill.color, 0.4)}`,
                      background: `linear-gradient(135deg, ${alpha(skill.color, 0.15)} 0%, ${alpha(skill.color, 0.05)} 100%)`,
                    }
                  }}
                >
                  <Typography sx={{ fontSize: '3rem', mb: 1 }}>
                    {skill.icon}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#909090',
                      fontWeight: 600,
                      display: 'block',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Paper>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Summary Stats */}
      <Box sx={{ mt: 8 }}>
        <Card
          sx={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <CodeIcon sx={{ fontSize: 50, color: '#667eea', mb: 1 }} />
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea' }}>
                    12+
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#909090' }}>
                    Technologies
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <TerminalIcon sx={{ fontSize: 50, color: '#764ba2', mb: 1 }} />
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#764ba2' }}>
                    4
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#909090' }}>
                    Categories
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <BuildIcon sx={{ fontSize: 50, color: '#d946ef', mb: 1 }} />
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#d946ef' }}>
                    18+
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#909090' }}>
                    Months Experience
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <DevicesIcon sx={{ fontSize: 50, color: '#10b981', mb: 1 }} />
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#10b981' }}>
                    Full
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#909090' }}>
                    Stack Developer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Skills;