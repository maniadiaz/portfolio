import { Box, Container, Typography, Stack, Paper, Chip, Grid, Card, CardContent, alpha } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function About() {

    const highlights = [
        { icon: <WorkIcon sx={{ fontSize: 40 }} />, title: 'Full Stack Developer', description: 'Frontend & Backend expertise', color: '#667eea' },
        { icon: <SchoolIcon sx={{ fontSize: 40 }} />, title: 'B.S. in Information Systems', description: 'Engineering degree', color: '#764ba2' },
        { icon: <CodeIcon sx={{ fontSize: 40 }} />, title: '12+ Technologies', description: 'Mastered and growing', color: '#d946ef' }
    ];

    const quickInfo = [
        { icon: <EmailIcon />, text: 'miguelalexisdi18@gmail.com', color: '#667eea' },
        { icon: <LocationOnIcon />, text: 'Sinaloa, MX', color: '#d946ef' }
    ];

    const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'PHP', 'C#', '.NET', 'MySQL', 'Git', 'REST API', 'MVC'];

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
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={12}>
                                <Stack spacing={2}>
                                    {highlights.map((item, index) => (
                                        <Card key={index} sx={{ background: `linear-gradient(135deg, ${alpha(item.color, 0.05)} 0%, ${alpha(item.color, 0.02)} 100%)`, border: `1px solid ${alpha(item.color, 0.2)}`, borderRadius: 3, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 12px 30px ${alpha(item.color, 0.3)}` } }}>
                                            <CardContent sx={{ p: 2.5 }}>
                                                <Stack direction="row" spacing={2} alignItems="center">
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
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} lg={12}>
                                <Paper sx={{ p: 2.5, background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: 3,minWidth:{xs:'39vh'}, minHeight: {xs:'20vh', md:'42vh'} }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#e0e0e0', mb: 2 }}>Quick Contact</Typography>
                                    <Stack spacing={1.5}>
                                        {quickInfo.map((item, index) => (
                                            <Stack key={index} direction="row" spacing={1.5} alignItems="center">
                                                <Box sx={{ width: 36, height: 36, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${item.color} 0%, ${alpha(item.color, 0.6)} 100%)`, color: '#fff' }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="body2" sx={{ color: '#b0b0b0', fontWeight: 500 }}>{item.text}</Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
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
            </Container>
        </Box>
    );
}

export default About;