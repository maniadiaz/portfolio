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

function About() {

    const highlights = [
        { icon: <WorkIcon sx={{ fontSize: 40 }} />, title: 'Full Stack Developer', description: 'Frontend & Backend expertise', color: '#667eea' },
        { icon: <SchoolIcon sx={{ fontSize: 40 }} />, title: 'B.S. in Information Systems', description: 'Engineering degree', color: '#764ba2' },
        { icon: <CodeIcon sx={{ fontSize: 40 }} />, title: '20+ Technologies', description: 'Mastered and growing', color: '#d946ef' }
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
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                        <DescriptionIcon sx={{ fontSize: 50, background: 'linear-gradient(135deg, #667eea 0%, #d946ef 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                        <Typography variant="h2" sx={{ fontWeight: {xs:300, lg:800}, background: 'linear-gradient(135deg, #667eea 0%, #d946ef 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            About Me
                        </Typography>
                    </Stack>
                    <Typography variant="h6" sx={{ color: '#808080', mb: 3 }}>
                        View my professional information
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center" sx={{ flex: 1 }}>
                    {highlights.map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ background: `linear-gradient(135deg, ${alpha(item.color, 0.05)} 0%, ${alpha(item.color, 0.02)} 100%)`, border: `1px solid ${alpha(item.color, 0.2)}`, borderRadius: 3, transition: 'all 0.3s ease', height: '100%', '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 12px 30px ${alpha(item.color, 0.3)}` } }}>
                                <CardContent sx={{ p: 2.5 }}>
                                    <Stack spacing={2} alignItems="center" textAlign="center">
                                        <Box sx={{ width: 60, height: 60, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${item.color} 0%, ${alpha(item.color, 0.6)} 100%)`, color: '#fff', boxShadow: `0 4px 12px ${alpha(item.color, 0.4)}` }}>
                                            {item.icon}
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
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2.5, background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%)', border: '1px solid rgba(118, 75, 162, 0.2)', borderRadius: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#e0e0e0', mb: 2 }}>Key Skills</Typography>
                                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill) => (
                                        <Chip key={skill} label={skill} icon={<CheckCircleIcon />} size="small" sx={{ backgroundColor: alpha('#764ba2', 0.15), color: '#b0b0b0', fontWeight: 600, border: '1px solid rgba(118, 75, 162, 0.3)', '&:hover': { backgroundColor: alpha('#764ba2', 0.25), color: '#764ba2' } }} />
                                    ))}
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Contact Section */}
                <Box pb={3} mx={1}>
                    <Grid container spacing={3} justifyContent="center">
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
                </Box>
            </Container>
        </Box>
    );
}

export default About;