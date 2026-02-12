import { Box, Container, Typography, Stack, Paper, Chip, Grid, Card, CardContent, alpha, IconButton } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    const highlights = [
        { icon: <WorkIcon sx={{ fontSize: 40 }} />, title: t('about.highlights.fullstack'), description: t('about.highlights.fullstackDesc'), color: '#667eea' },
        { icon: <SchoolIcon sx={{ fontSize: 40 }} />, title: t('about.highlights.degree'), description: t('about.highlights.degreeDesc'), color: '#764ba2' },
        { icon: <CodeIcon sx={{ fontSize: 40 }} />, title: t('about.highlights.technologies'), description: t('about.highlights.technologiesDesc'), color: '#d946ef' }
    ];

    const skills = ['React', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'PHP', 'C#', '.NET', 'MySQL', 'Supabase', 'Ionic', 'Git', 'REST API', 'MVC'];

    const socialLinks = [
        {
            icon: <LinkedInIcon />,
            href: 'https://www.linkedin.com/in/alexisdiaz18/',
            label: 'LinkedIn',
            color: '#0077b5',
            hoverColor: '#667eea'
        },
        {
            icon: <EmailIcon />,
            href: 'mailto:miguelalexisdi18@gmail.com',
            label: 'Email',
            color: '#EA4335',
            hoverColor: '#d946ef'
        },
        {
            icon: <LocationOnIcon sx={{ fontSize: 50 }} />,
            href: 'https://maps.google.com/?q=Mazatlan,Sinaloa,Mexico',
            label: 'Location',
            color: '#61fabfff',
            hoverColor: '#54bdafff'
        }
    ];

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            {/* Animated Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.12) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                    animation: 'float 10s ease-in-out infinite',
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '8%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(217, 70, 239, 0.12) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                    animation: 'float 13s ease-in-out infinite',
                    animationDelay: '3s',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 6 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Box
                        sx={{
                            display: 'inline-block',
                            px: 4,
                            py: 1.5,
                            mb: 3,
                            borderRadius: 4,
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(217, 70, 239, 0.15) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(102, 126, 234, 0.3)',
                            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)',
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                background: 'linear-gradient(135deg, #667eea 0%, #d946ef 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700,
                                letterSpacing: 3,
                                fontSize: '0.9rem',
                            }}
                        >
                            {t('about.badge')}
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                        <DescriptionIcon sx={{ fontSize: 60, background: 'linear-gradient(135deg, #667eea 0%, #d946ef 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                        <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' }, background: 'linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #d946ef 100%)', backgroundSize: '200% 200%', animation: 'gradientShift 5s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: -1 }}>
                            {t('about.heading')}
                        </Typography>
                    </Stack>
                    <Typography variant="h6" sx={{ color: '#a0a0a0', mb: 3, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                        {t('about.description')}
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center" sx={{ flex: 1 }}>
                    {highlights.map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ background: `linear-gradient(135deg, ${alpha(item.color, 0.08)} 0%, ${alpha(item.color, 0.03)} 100%)`, backdropFilter: 'blur(20px)', border: `2px solid ${alpha(item.color, 0.25)}`, borderRadius: 4, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', height: '100%', boxShadow: `0 8px 32px ${alpha(item.color, 0.15)}`, '&:hover': { transform: 'translateY(-8px) scale(1.02)', boxShadow: `0 20px 40px ${alpha(item.color, 0.35)}`, border: `2px solid ${alpha(item.color, 0.5)}` } }}>
                                <CardContent sx={{ p: 3.5 }}>
                                    <Stack spacing={2} alignItems="center" textAlign="center">
                                        <Box sx={{ width: 70, height: 70, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${item.color} 0%, ${alpha(item.color, 0.6)} 100%)`, color: '#fff', boxShadow: `0 8px 24px ${alpha(item.color, 0.5)}`, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: `radial-gradient(circle, ${alpha('#fff', 0.2)} 0%, transparent 70%)`, animation: 'float 6s ease-in-out infinite' } }}>
                                            <Box sx={{ position: 'relative', zIndex: 1 }}>{item.icon}</Box>
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#e0e0e0', mb: 0.5 }}>{item.title}</Typography>
                                            <Typography variant="body2" sx={{ color: '#808080' }}>{item.description}</Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box pb={3} py={3} mx={1}>
                    <Grid container spacing={3} justifyContent="center" sx={{ flex: 1, }}>
                        <Grid size={12}>
                            <Paper sx={{ p: 3.5, background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.08) 0%, rgba(217, 70, 239, 0.08) 100%)', backdropFilter: 'blur(20px)', border: '2px solid rgba(118, 75, 162, 0.25)', borderRadius: 4, boxShadow: '0 8px 32px rgba(118, 75, 162, 0.15)' }}>
                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#f0f0f0', mb: 3, fontSize: '1.25rem' }}>{t('about.keySkills')}</Typography>
                                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill) => (
                                        <Chip key={skill} label={skill} icon={<CheckCircleIcon />} size="medium" sx={{ backgroundColor: alpha('#764ba2', 0.2), color: '#d0d0d0', fontWeight: 600, fontSize: '0.9rem', py: 2.5, border: '2px solid rgba(118, 75, 162, 0.3)', boxShadow: '0 4px 15px rgba(118, 75, 162, 0.2)', transition: 'all 0.3s ease', '&:hover': { backgroundColor: alpha('#764ba2', 0.35), color: '#764ba2', transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(118, 75, 162, 0.4)' } }} />
                                    ))}
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Contact Section */}
                <Box pb={3} mx={1}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Paper
                                sx={{
                                    p: 4.5,
                                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(217, 70, 239, 0.08) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    border: '2px solid rgba(102, 126, 234, 0.25)',
                                    borderRadius: 4,
                                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
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
                                        {t('about.connectTitle')}
                                    </Typography>
                                </Stack>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#909090',
                                        mb: 3,
                                    }}
                                >
                                    {t('about.connectDescription')}
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
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper
                                sx={{
                                    p: 4.5,
                                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.08) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    border: '2px solid rgba(16, 185, 129, 0.35)',
                                    borderRadius: 4,
                                    boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)',
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
                                    {t('about.availableTitle')}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#909090',
                                        mb: 1,
                                    }}
                                >
                                    {t('about.availableDescription')}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#707070',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {t('about.availableTagline')}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default About;