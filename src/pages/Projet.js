import React, { useState } from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import './css/projet.css';
import { Box, Button, Chip, Dialog, DialogContent, Tab, Tabs } from '@mui/material';
import { Github, OpenInNew } from '@mui/icons-material';

const theme = createTheme();

const projects = [
  {
    url: `${process.env.PUBLIC_URL}/asset/manga.webp`,
    title: 'Manga Connect',
    description: 'Un réseau social dynamique dédié aux passionnés de manga.',
    generalDetails: {
      detailedDescription: "Manga Connect est une plateforme sociale conçue pour les amateurs de manga. Elle permet aux utilisateurs de créer un profil, de partager des mangas, de commenter et d'interagir avec une communauté partageant la même passion. L'interface est simple et conviviale, favorisant une expérience utilisateur fluide.",
      keyFeatures: [
        "Création de profil utilisateur avec personnalisation",
        "Flux social avec options de partage, commentaires, et réactions",
        "Fonctionnalités de recherche et de recommandation de mangas",
        "Notifications en temps réel",
        "Conception responsive adaptée aux mobiles et aux desktops"
      ],
      challenges: "Un défi majeur a été l'implémentation des notifications en temps réel pour une expérience interactive. Nous avons utilisé WebSocket pour une communication en direct et optimisé l'interface pour gérer un flux d'activités dense.",
      futureImprovements: "Prévoir un système de notation des mangas, un algorithme de recommandation avancé basé sur les préférences de l'utilisateur, et une messagerie instantanée pour renforcer l'interaction sociale.",
      projectGoals: "Créer une communauté en ligne pour les passionnés de manga en offrant un espace interactif pour partager et discuter de mangas.",
      impact: "L'application a enregistré plus de 10 000 utilisateurs actifs au cours des trois premiers mois, renforçant la communauté autour des mangas.",
      methodology: "Nous avons utilisé une approche Agile avec des sprints de deux semaines pour développer et intégrer des fonctionnalités au fur et à mesure des retours d'utilisateurs.",
      lessonsLearned: "Le projet m'a permis de maîtriser l'implémentation de notifications en temps réel avec WebSocket et d'optimiser l’expérience utilisateur sur des flux sociaux complexes."
    },
    techDetails: [
      "L'interface est construite avec React, avec une architecture modulaire et des composants réutilisables.",
      "Le backend utilise Node.js et Express pour la gestion des API.",
      "MongoDB est utilisé pour le stockage des données utilisateur et des mangas.",
      "WebSocket est intégré pour les notifications en temps réel."
    ],    
    renderDetails: {
      description: "Design responsive avec animations Framer Motion pour un rendu moderne et dynamique, adapté aux appareils mobiles et ordinateurs.",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect-home.jpg`,
          alt: "Page d'accueil de Manga Connect",
          caption: "Page d'accueil permettant de découvrir les mangas populaires."
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect-profile.jpg`,
          alt: "Page de profil utilisateur",
          caption: "Profil utilisateur avec informations et préférences de mangas."
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect-feed.jpg`,
          alt: "Fil d'actualité",
          caption: "Fil d'actualité avec options de partage, commentaires et réactions."
        }
      ]
    },
    techStack: ['#react', '#nodejs', '#mongodb']
  },
  {
    url: `${process.env.PUBLIC_URL}/asset/probtp.jpg`,
    title: 'Deviseur',
    description: "Application de création de devis pour les équipes commerciales de PRO BTP, avec gestion des tarifs dynamiques.",
    generalDetails: {
      detailedDescription: "Deviseur est une application innovante conçue pour automatiser la création de devis au sein de PRO BTP. Elle facilite le processus de devis pour les équipes commerciales, en permettant une gestion flexible des tarifs en fonction des régions et des promotions spécifiques. Grâce à son interface intuitive, Deviseur assure une utilisation simple et rapide par les collaborateurs.",
      keyFeatures: [
        "Interface intuitive pour la création de devis",
        "Gestion dynamique des tarifs selon les régions et les promotions",
        "Génération automatique de documents PDF personnalisés",
        "Suivi en temps réel des devis",
        "Accès sécurisé pour les collaborateurs de PRO BTP"
      ],
      challenges: "Un des principaux défis a été de concevoir un système de tarification dynamique capable de gérer les différences régionales et les promotions. Nous avons mis en place une logique de calcul complexe et optimisé la base de données pour des réponses rapides malgré les variations des tarifs.",
      futureImprovements: "Ajouter un tableau de bord analytique pour le suivi des performances et une IA pour des recommandations de prix basées sur les données historiques.",
      projectGoals: "Automatiser la création de devis pour les équipes commerciales afin de réduire le temps de traitement et d’améliorer la précision.",
      impact: "L'application Deviseur a réduit le temps de création de devis de 30% et a contribué à une amélioration de la satisfaction des clients en raison d'une plus grande réactivité.",
      methodology: "Le projet a été mené selon une méthodologie Agile avec des sprints de deux semaines, ce qui a permis des itérations fréquentes et l’intégration des retours d’utilisateurs.",
      lessonsLearned: "Ce projet m'a permis d'approfondir mes compétences en serverless avec AWS Lambda et en gestion de tarification dynamique. J'ai également acquis une meilleure compréhension de l'optimisation de calculs complexes dans un contexte en temps réel."
    },
    techDetails: [
      "Développé en React pour le front-end avec une interface utilisateur réactive et moderne.",
      "Utilisation d'AWS Lambda pour les services serverless, offrant flexibilité et évolutivité.",
      "Gestion des calculs complexes de tarification via des fonctions serverless.",
      "Génération dynamique de documents PDF personnalisés pour les devis.",
      "Sécurisation des accès utilisateurs avec authentification et autorisation basées sur les rôles."
    ],    
    renderDetails: {
      description: "Interface utilisateur professionnelle et sobre, avec une navigation fluide et une adaptation parfaite aux besoins des équipes commerciales.",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/asset/deviseur-dashboard.jpg`,
          alt: "Tableau de bord de l'application Deviseur",
          caption: "Vue du tableau de bord pour la création et le suivi des devis."
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/deviseur-pdf.jpg`,
          alt: "Aperçu du document PDF généré",
          caption: "Document PDF personnalisé généré automatiquement pour les devis."
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/deviseur-settings.jpg`,
          alt: "Paramètres de tarification dynamique",
          caption: "Gestion des tarifs dynamiques par région et promotion dans les paramètres."
        }
      ]
    },
    techStack: ['#react', '#aws', '#serverless']
  },
  {
    url: `${process.env.PUBLIC_URL}/asset/eleveur.webp`,
    title: 'Le Petit Éleveur',
    description: 'Une application innovante pour les éleveurs, facilitant la gestion des perruches et autres animaux de compagnie.',
    generalDetails: {
      detailedDescription: "Le Petit Éleveur est une application destinée aux éleveurs d'animaux, particulièrement adaptée pour la gestion des perruches. Elle permet de suivre la santé, les informations de reproduction, l’alimentation et d’autres besoins des animaux, facilitant le travail des éleveurs tout en garantissant le bien-être de leurs animaux.",
      keyFeatures: [
        "Suivi de la santé avec enregistrement des visites vétérinaires",
        "Gestion des informations de reproduction et de généalogie",
        "Suivi de l'alimentation et des besoins nutritionnels",
        "Alertes personnalisées pour les soins réguliers et les vaccinations",
        "Interface intuitive et adaptée aux appareils mobiles"
      ],
      challenges: "Le principal défi a été de structurer une base de données qui puisse gérer les informations spécifiques à chaque espèce d’animal, tout en assurant une interface simple pour l’utilisateur.",
      futureImprovements: "Ajouter un module de recommandations nutritionnelles basées sur les antécédents de santé et un tableau de bord analytique pour une vue d'ensemble des besoins des animaux.",
      projectGoals: "Faciliter la gestion des soins et de la santé des animaux pour les éleveurs afin d'assurer un suivi rigoureux et efficace.",
      impact: "L'application a amélioré la gestion des éleveurs en réduisant de 40% le temps nécessaire pour suivre et organiser les soins des animaux.",
      methodology: "Utilisation de la méthodologie Agile, permettant des ajustements rapides des fonctionnalités en fonction des retours d'éleveurs sur le terrain.",
      lessonsLearned: "Ce projet m'a permis d'améliorer mes compétences en gestion de bases de données SQL complexes et en développement d'applications mobiles réactives."
    },
    techDetails: [
      "Développement front-end en React pour une interface réactive et intuitive.",
      "Backend en Node.js avec une architecture modulaire pour la gestion des services.",
      "Base de données SQL pour stocker et gérer les données de santé et de généalogie des animaux.",
      "Alertes automatiques intégrées pour rappeler les soins et suivis.",
      "Fonctionnalités d'interface adaptées aux appareils mobiles pour une utilisation facile sur le terrain."
    ],    
    renderDetails: {
      description: "Conception conviviale et optimisée pour une utilisation sur mobile, avec des éléments graphiques simples pour une navigation intuitive même pour les utilisateurs non techniques.",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/asset/eleveur-dashboard.jpg`,
          alt: "Tableau de bord de suivi des animaux",
          caption: "Vue générale du tableau de bord pour le suivi des animaux."
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/eleveur-health.jpg`,
          alt: "Section de suivi de la santé",
          caption: "Suivi de la santé des animaux avec un historique des visites vétérinaires."
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/eleveur-alerts.jpg`,
          alt: "Gestion des alertes pour les soins",
          caption: "Alertes automatiques pour les soins récurrents et vaccinations."
        }
      ]
    },
    techStack: ['#react', '#nodejs', '#sql']
  }
];


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  borderRadius: "3rem",
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
  const [expandedProject, setExpandedProject] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const handleClick = (project) => {
    setExpandedProject(project === expandedProject ? null : project )
  };

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setTabValue(0); 
  };

   const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='projet'>
        <div className='projet-container'>
          <h1 className='projet-title' style={{ fontSize: '3rem' }}>Mes Projets :</h1>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  style={{ borderRadius: '3rem' }}
                >
                  <ImageButton focusRipple onClick={() => handleClick(project)} >
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
                {expandedProject === project && (
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
                        <Chip key={index} label={tech} style={{marginRight:'1 rem.', marginBottom: '1rem'}} />
                      ))}
                    </div>
                    <div>
                      {project.title !== 'Deviseur' && (
                        <Button 
                        href={project.githubUrl}
                        target="_blank"
                        variant='autlined'
                        size="small">
                          Github Source
                          </Button>
                      )}
                      <Button startIcon={<OpenInNew/>} variant='contained' size="small" onClick={() => handleOpenDialog(project)}>
                        En savoir plus
                      </Button>
                    </div>
                  </motion.div>
                )}
              </Grid>
            ))}
          </Grid>

          {selectedProject && (
            <Dialog
              open={Boolean(selectedProject)}
              onClose={handleCloseDialog}
              fullWidth
              maxWidth="md"
            >
              <DialogContent>
                <h2>{selectedProject.title}</h2>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor='primary' maxWidth='md'fullWidth>
                  <Tab label='Details Generale'/>
                  <Tab label='Details Technique'/>
                  <Tab label="Capture d'ecran "/>
                </Tabs>
                {tabValue === 0 && selectedProject.generalDetails &&(
                  <Box>
                    <lu>
                      <li>
                        <p>{selectedProject.generalDetails.detailedDescription}</p>
                      </li>
                      <li>
                        <h4>Objectif :</h4>
                        <p>{selectedProject.generalDetails.projectGoals}</p>
                      </li>
                      <li>
                        <h4>Impact :</h4>
                        <p>{selectedProject.generalDetails.impact}</p>
                      </li>
                      <li>
                        <h4>méthodologie :</h4>
                        <p>{selectedProject.generalDetails.methodology}</p>
                      </li>
                      <li>
                        <h4>Lecon Apprise :</h4>
                        <p>{selectedProject.generalDetails.lessonsLearned}</p>
                      </li>
                    </lu>
                  </Box>
                )}
             {tabValue === 1 && (
                    <Box>
                      <Typography variant="subtitle1" gutterBottom>Détails Techniques :</Typography>
                      <ul>
                        {selectedProject.techDetails && selectedProject.techDetails.map((detail, index) => (
                          <li key={index}>
                            <Typography variant="body2">{detail}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                {tabValue === 2 && (
                  <Box>
                    images
                  </Box>
                )}
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
