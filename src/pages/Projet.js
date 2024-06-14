import React, { useState } from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import './css/projet.css';

const theme = createTheme();

const projects = [
  {
    url: `${process.env.PUBLIC_URL}/asset/manga.webp`,
    title: 'Manga Connect',
    description: 'Un réseau social dynamique dédié aux passionnés de manga.',
    techStack: ['#react', '#nodejs', '#sql', '#python', '#aws']
  },
  {
    url: `${process.env.PUBLIC_URL}/asset/prodigeo.png`,
    title: 'Prodigeo',
    description: "Conception et implémentation de systèmes pour la génération dynamique de PDF, intégration de tarification basée sur la sélection d'options par l'utilisateur.",
    techStack: ['#react', '#aws']
  },
  {
    url: `${process.env.PUBLIC_URL}/asset/eleveur.webp`,
    title: 'Le Petit Éleveur',
    description: 'Une application innovante pour les éleveurs, facilitant la gestion des perruches et autres animaux de compagnie avec des fonctionnalités comme le suivi de la santé, et une base de données complète des aliments.',
    techStack: ['#react', '#sql', '#nodejs']
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  width: '100%',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Projet() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project === selectedProject ? null : project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='projet'>
        <div className='projet-container'>
          <h1 className='projet-title'>Mes Projets :</h1>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <ImageButton focusRipple onClick={() => handleClick(project)}>
                    <ImageSrc style={{ backgroundImage: `url(${project.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%',
                        color: theme.palette.common.white,
                      }}
                    >
                      {project.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </ImageButton>
                </motion.div>
                {selectedProject === project && (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="project-details"
                  >
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body1">{project.description}</Typography>
                    <div className="tech-stack">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-item">{tech}</span>
                      ))}
                    </div>
                    <button className="project-close-button" onClick={handleClose}>Fermer</button>
                  </motion.div>
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}
