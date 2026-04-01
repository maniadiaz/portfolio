import { useState, useRef } from 'react'
import {
  Box, Container, Typography, Grid, Card, CardContent,
  LinearProgress, Chip, Stack, Tab, Tabs, alpha,
  Paper, Tooltip
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import WebIcon from '@mui/icons-material/Web'
import CloudIcon from '@mui/icons-material/Cloud'
import BuildIcon from '@mui/icons-material/Build'
import DevicesIcon from '@mui/icons-material/Devices'
import ApiIcon from '@mui/icons-material/Api'
import TerminalIcon from '@mui/icons-material/Terminal'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTranslation } from 'react-i18next'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ─── Animated progress bar ─────────────────────────────── */
function AnimatedBar({ value, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <Box ref={ref} sx={{ position: 'relative' }}>
      <LinearProgress
        variant="determinate"
        value={inView ? value : 0}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: `${alpha(color, 0.1)}`,
          transition: 'value 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          '& .MuiLinearProgress-bar': {
            background: `linear-gradient(90deg, ${color} 0%, ${alpha(color, 0.65)} 100%)`,
            borderRadius: 4,
            boxShadow: `0 0 10px ${alpha(color, 0.5)}`,
            transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) !important',
          }
        }}
      />
    </Box>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }
  }),
}

function Skills() {
  const { t } = useTranslation()
  const [selectedTab, setSelectedTab] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const skillCategories = [
    {
      id: 0,
      name: t('skills.categories.frontend'),
      icon: <WebIcon />,
      color: 'var(--color-3)',
      colorHex: '#a79dc3',
      skills: [
        { name: 'React',       level: 85, experience: '12 months',  icon: '⚛️' },
        { name: 'Angular',     level: 75, experience: '6 months',   icon: '🅰️' },
        { name: 'JavaScript',  level: 90, experience: '18 months',  icon: '📜' },
        { name: 'TypeScript',  level: 80, experience: '12 months',  icon: '💎' },
        { name: 'HTML5',       level: 95, experience: '18 months',  icon: '🌐' },
        { name: 'CSS3',        level: 90, experience: '18 months',  icon: '🎨' },
        { name: 'Vite',        level: 85, experience: '12 months',  icon: '⚡' },
        { name: 'Ionic',       level: 75, experience: '6 months',   icon: '📱' },
        { name: 'Material UI', level: 80, experience: '12 months',  icon: '🎭' },
      ]
    },
    {
      id: 1,
      name: t('skills.categories.backend'),
      icon: <ApiIcon />,
      color: 'var(--color-4)',
      colorHex: '#7d82b0',
      skills: [
        { name: 'Node.js',    level: 80, experience: '12 months', icon: '🟢' },
        { name: 'Express',    level: 85, experience: '12 months', icon: '🚂' },
        { name: 'PHP',        level: 85, experience: '12 months', icon: '🐘' },
        { name: 'C#',         level: 70, experience: '6 months',  icon: '#️⃣' },
        { name: '.NET',       level: 70, experience: '6 months',  icon: '🔷' },
        { name: 'Sequelize',  level: 80, experience: '12 months', icon: '🔗' },
      ]
    },
    {
      id: 2,
      name: t('skills.categories.database'),
      icon: <StorageIcon />,
      color: 'var(--color-2)',
      colorHex: '#c6b2d7',
      skills: [
        { name: 'MySQL',    level: 90, experience: '18+ months', icon: '🐬' },
        { name: 'MariaDB',  level: 85, experience: '12 months',  icon: '🦭' },
        { name: 'Supabase', level: 75, experience: '6 months',   icon: '⚡' },
        { name: 'SQLite',   level: 80, experience: '8 months',   icon: '📦' },
        { name: 'SQL',      level: 90, experience: '18+ months', icon: '📊' },
      ]
    },
    {
      id: 3,
      name: t('skills.categories.devops'),
      icon: <CloudIcon />,
      color: 'var(--color-5)',
      colorHex: '#4a598c',
      skills: [
        { name: 'Git',            level: 85, experience: '12+ months', icon: '🔀' },
        { name: 'VPS Management', level: 75, experience: '12 months',  icon: '☁️' },
        { name: 'Nginx',          level: 70, experience: '12 months',  icon: '🌐' },
        { name: 'Bind9 (DNS)',    level: 65, experience: '12 months',  icon: '🔗' },
      ]
    }
  ]

  const architectureSkills = [
    { name: 'MVC Architecture',  icon: '🏗️', colorHex: '#a79dc3' },
    { name: 'REST API',          icon: '🔌', colorHex: '#7d82b0' },
    { name: 'SPA',               icon: '📱', colorHex: '#c6b2d7' },
    { name: 'PWA',               icon: '⚡', colorHex: '#4a598c' },
    { name: 'Responsive Design', icon: '📐', colorHex: '#d8c5d5' },
    { name: 'CRUD Operations',   icon: '✏️', colorHex: '#a79dc3' },
  ]

  const summaryStats = [
    { IconComponent: CodeIcon,     colorHex: '#a79dc3', value: '20+',  label: t('skills.summaryStats.technologies') },
    { IconComponent: TerminalIcon, colorHex: '#7d82b0', value: '4',    label: t('skills.summaryStats.categories') },
    { IconComponent: BuildIcon,    colorHex: '#c6b2d7', value: '18+',  label: t('skills.summaryStats.monthsExperience') },
    { IconComponent: DevicesIcon,  colorHex: '#4a598c', value: 'Full', label: t('skills.summaryStats.stackDeveloper') },
  ]

  const currentCategory = skillCategories[selectedTab]

  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
    <Container maxWidth="lg">

      {/* ── Header ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box sx={{ textAlign: 'center', mb: 6, mt: 2 }}>
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
              {t('skills.badge') || 'TECH STACK'}
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.4rem', md: '3.4rem' },
              background: 'linear-gradient(135deg, var(--color-1) 0%, var(--color-3) 50%, var(--color-5) 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 8s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1px',
            }}
          >
            {t('skills.title')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-body)',
              color: 'var(--text-muted)',
              maxWidth: 680,
              mx: 'auto',
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
            }}
          >
            {t('skills.subtitle')}
          </Typography>
        </Box>
      </motion.div>

      {/* ── Category Tabs ──────────────────────────────── */}
      <Paper
        sx={{
          background: 'rgba(167,157,195,0.04)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(167,157,195,0.14)',
          borderRadius: '16px',
          mb: 5,
          overflow: 'hidden',
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={(_, v) => setSelectedTab(v)}
          variant={isMobile ? 'scrollable' : 'fullWidth'}
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="skill categories tabs"
          sx={{
            '& .MuiTab-root': {
              fontFamily: 'var(--font-body)',
              color: 'var(--text-muted)',
              fontWeight: 500,
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              letterSpacing: '0.03em',
              py: 2.5,
              textTransform: 'none',
              transition: 'color 0.25s ease',
              '&:hover': { color: 'var(--text-secondary)', background: 'rgba(167,157,195,0.05)' },
              '&.Mui-selected': { color: '#fff', fontWeight: 600 },
            },
            '& .MuiTabs-indicator': {
              height: 2,
              background: `linear-gradient(90deg, ${currentCategory.colorHex} 0%, ${alpha(currentCategory.colorHex, 0.5)} 100%)`,
              boxShadow: `0 0 12px ${alpha(currentCategory.colorHex, 0.6)}`,
              borderRadius: 2,
            },
          }}
        >
          {skillCategories.map((cat) => (
            <Tab key={cat.id} icon={cat.icon} label={cat.name} iconPosition="start" />
          ))}
        </Tabs>
      </Paper>

      {/* ── Skills Grid ────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ mb: 6 }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <Box
                sx={{
                  width: 46, height: 46,
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `linear-gradient(135deg, ${currentCategory.colorHex} 0%, ${alpha(currentCategory.colorHex, 0.55)} 100%)`,
                  color: '#fff',
                  boxShadow: `0 4px 18px ${alpha(currentCategory.colorHex, 0.4)}`,
                }}
              >
                {currentCategory.icon}
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontSize: { xs: '1.4rem', md: '1.8rem' },
                }}
              >
                {currentCategory.name} {t('skills.development')}
              </Typography>
            </Stack>

            <Grid container spacing={2.5}>
              {currentCategory.skills.map((skill, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={skill.name}>
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Card
                      sx={{
                        background: `${alpha(currentCategory.colorHex, 0.04)}`,
                        backdropFilter: 'blur(12px)',
                        border: `1px solid ${alpha(currentCategory.colorHex, 0.16)}`,
                        borderRadius: '14px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 12px 32px ${alpha(currentCategory.colorHex, 0.25)}`,
                          border: `1px solid ${alpha(currentCategory.colorHex, 0.35)}`,
                          background: `${alpha(currentCategory.colorHex, 0.08)}`,
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <Typography sx={{ fontSize: '1.8rem', lineHeight: 1 }}>{skill.icon}</Typography>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily: 'var(--font-body)',
                                  fontWeight: 600,
                                  color: 'var(--text-primary)',
                                  fontSize: '0.95rem',
                                  letterSpacing: '0.02em',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  fontFamily: 'var(--font-body)',
                                  color: 'var(--text-muted)',
                                  fontStyle: 'italic',
                                  fontSize: '0.75rem',
                                }}
                              >
                                {skill.experience}
                              </Typography>
                            </Box>
                          </Stack>
                          <Chip
                            label={`${skill.level}%`}
                            sx={{
                              fontFamily: 'var(--font-body)',
                              background: `linear-gradient(135deg, ${currentCategory.colorHex} 0%, ${alpha(currentCategory.colorHex, 0.65)} 100%)`,
                              color: '#fff',
                              fontWeight: 700,
                              fontSize: '0.8rem',
                              height: 28,
                              boxShadow: `0 2px 8px ${alpha(currentCategory.colorHex, 0.4)}`,
                            }}
                          />
                        </Stack>

                        <AnimatedBar value={skill.level} color={currentCategory.colorHex} />
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* ── Architecture & Concepts ────────────────────── */}
      <Box sx={{ mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                mb: 1.5,
                color: 'var(--text-primary)',
                fontSize: { xs: '1.6rem', md: '2rem' },
              }}
            >
              {t('skills.architectureTitle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                maxWidth: 560,
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: '0.95rem',
              }}
            >
              {t('skills.architectureSubtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={2} justifyContent="center">
          {architectureSkills.map((skill, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Tooltip title={skill.name} arrow>
                  <Paper
                    sx={{
                      p: 2.5,
                      textAlign: 'center',
                      background: `${alpha(skill.colorHex, 0.05)}`,
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${alpha(skill.colorHex, 0.18)}`,
                      borderRadius: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.08) translateY(-6px)',
                        boxShadow: `0 12px 32px ${alpha(skill.colorHex, 0.35)}`,
                        background: `${alpha(skill.colorHex, 0.12)}`,
                        border: `1px solid ${alpha(skill.colorHex, 0.4)}`,
                      }
                    }}
                  >
                    <Typography sx={{ fontSize: '2.4rem', mb: 1 }}>{skill.icon}</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        letterSpacing: '0.04em',
                        display: 'block',
                        lineHeight: 1.3,
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Paper>
                </Tooltip>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── Summary Stats ──────────────────────────────── */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card
            sx={{
              background: 'rgba(167,157,195,0.04)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(167,157,195,0.15)',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Grid container spacing={4} justifyContent="center">
                {summaryStats.map((stat, i) => {
                  const Icon = stat.IconComponent
                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 56, height: 56,
                              borderRadius: '14px',
                              background: `${alpha(stat.colorHex, 0.12)}`,
                              border: `1px solid ${alpha(stat.colorHex, 0.25)}`,
                              mb: 1.5,
                            }}
                          >
                            <Icon sx={{ fontSize: 28, color: stat.colorHex }} />
                          </Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 700,
                              color: stat.colorHex,
                              fontSize: { xs: '2rem', md: '2.6rem' },
                              mb: 0.5,
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'var(--font-body)',
                              color: 'var(--text-muted)',
                              fontWeight: 500,
                              fontSize: '0.88rem',
                              letterSpacing: '0.03em',
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  )
                })}
              </Grid>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Container>
    </motion.div>
  )
}

export default Skills
