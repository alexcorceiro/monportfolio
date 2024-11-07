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
    title: "Manga Connect",
    description: "Un réseau social dynamique dédié aux passionnés de manga.",
    githubLink: "https://github.com/alexcorceiro/manga-connect.git",
    generalDetails: {
      detailedDescription: "Manga Connect est une application innovante et immersive conçue pour unir les passionnés de manga dans un environnement interactif et stimulant. Les utilisateurs peuvent explorer, suivre et découvrir de nouveaux mangas tout en partageant leurs impressions et recommandations. Outre les fonctionnalités de base des réseaux sociaux telles que la publication de posts, les commentaires, les likes et les partages, Manga Connect propose des fonctionnalités avancées, y compris la création de groupes de discussion thématiques .",
      keyFeatures: [
        "Création de profil utilisateur personnalisable avec avatars et biographies",
        "Flux social interactif permettant la publication de posts, commentaires et réactions",
        "Recommandations personnalisées basées sur les préférences de l'utilisateur",
        "Création et gestion de groupes de discussion sur des thématiques spécifiques",
        "Notifications en temps réel pour rester informé des nouvelles interactions"
      ],
      challenges: "Le développement en solo a nécessité une gestion approfondie de toutes les étapes, allant de l'architecture backend à la conception de l'interface utilisateur. L'implémentation des notifications en temps réel a été l'un des plus grands défis à surmonter.",
      futureImprovements: "Intégration de systèmes de notation des mangas et d'une messagerie instantanée pour favoriser encore plus l'interaction entre utilisateurs.",
      projectGoals: "Fournir aux passionnés de manga un espace centralisé et moderne pour échanger, découvrir de nouveaux titres et partager leurs expériences.",
      impact: "Bien que le projet soit encore en phase de développement, il démontre la capacité à gérer un projet de bout en bout en intégrant des fonctionnalités interactives et en optimisant l'expérience utilisateur.",
      methodology: "Le projet a été développé selon une méthodologie itérative avec des ajustements réguliers basés sur des tests individuels et des retours des premiers experience personnel.",
      lessonsLearned: "Ce projet a permis de développer une meilleure maîtrise de la gestion complète d'un projet full stack, notamment l'utilisation de technologies modernes telles que React, Node.js, et la gestion des bases de données avec Prisma."
    },
    techDetails: [
      "Le frontend a été réalisé avec React et Material-UI pour un design moderne et responsive.",
      "Le backend utilise Node.js et Express pour la création d'API sécurisées.",
      "Prisma ORM a été utilisé pour simplifier les opérations sur la base de données MySQL.",
      "Intégration de Firebase pour l'authentification des utilisateurs et le stockage de fichiers multimédias.",
      "Explications des choix techniques : Firebase a été choisi pour sa facilité d'intégration et ses fonctionnalités complètes en matière de gestion de l'authentification sécurisée."
    ],
    renderDetails: {
      images: [
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect/home.png`,
          alt: "Page d'accueil"
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect/manga-page.png`,
          alt: "Page dédiée aux mangas"
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect/post-text.png`,
          alt: "Exemple de post"
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect/anime.png`,
          alt: "Section anime"
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect/profile.png`,
          alt: "Profil utilisateur"
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/manga-connect/chat.png`,
          alt: "Exemple de chat"
        }
      ]
    },
    techStack: ["#react", "#nodejs","#express","#prisma","#mysql","#firebase","#mongodb"]
  },  
  {
    url: `${process.env.PUBLIC_URL}/asset/probtp.jpg`,
    title: 'Deviseur',
    description: "Application de création de devis pour les équipes commerciales de PRO BTP, intégrant la gestion des tarifs dynamiques.",
    generalDetails: {
        detailedDescription: "Deviseur est une application innovante conçue pour automatiser la création de devis au sein de PRO BTP. Réalisée de la conception au déploiement durant mon alternance sous la direction de ma manager Sarah Kermadi, cette application a été un projet central de mon expérience chez PRO BTP. L'objectif était de fournir un outil performant et flexible, permettant aux équipes commerciales de gérer les devis avec une prise en compte dynamique des tarifs en fonction des régions et des cas spécifiques. Ce projet m'a permis d'appliquer mes compétences en développement full stack et de découvrir des technologies de pointe telles que les services cloud d'AWS.",
        keyFeatures: [
            "Gestion avancée des devis avec options de personnalisation",
            "Intégration des services AWS pour une performance et une sécurité accrues (Amplify, Lambda, AppSync, Cognito)",
            "Calculs complexes adaptés aux spécificités tarifaires régionales",
            "Génération automatique et sécurisée de fichiers PDF avec le service s3 d'AWS",
            "Interface utilisateur moderne et responsive pour une expérience utilisateur optimale"
        ],
        challenges: "Le principal défi a été d'assurer une intégration fluide des services AWS tout en garantissant la performance et la sécurité, ainsi que de répondre aux retours et ajustements des utilisateurs en temps réel.",
        futureImprovements: "L'ajout d'un module analytique pour suivre la performance des devis, un tableau de bord interactif et des recommandations basées sur l'historique des devis.",
        projectGoals: "Créer une solution complète pour automatiser la création de devis, augmentant ainsi l'efficacité et la précision des équipes commerciales de PRO BTP.",
        impact: "Ce projet a démontré sa valeur ajoutée en simplifiant considérablement le processus de création des devis, tout en assurant une meilleure organisation et réactivité des équipes.",
        methodology: "Le projet a suivi une méthodologie Agile, favorisant le développement itératif et permettant des ajustements constants grâce aux retours des utilisateurs et des équipes. Cette approche a permis d'assurer une collaboration efficace entre les différents services de PRO BTP, optimisant ainsi le processus de mise en œuvre.",
        lessonsLearned: "Mon expérience en alternance chez PRO BTP a été très enrichissante, tant sur le plan professionnel que personnel, grâce à la réalisation du projet Deviseur. J'ai appris l'importance de la collaboration inter-équipes et l'utilisation des technologies AWS pour garantir des performances, la sécurité et la scalabilité de l'application. Ce projet m'a permis de renforcer mes compétences en gestion de projet complet, de la conception à la mise en production, tout en travaillant en équipe et en collaborant avec différents services de l'entreprise."
    },
    techDetails: [
      "Le frontend est développé avec React, utilisant des hooks et des composants Material-UI pour une interface moderne et réactive.",
      "Le backend repose sur AWS Amplify, AppSync pour les requêtes GraphQL et des fonctions serverless Lambda pour des calculs complexes.",
      "L'authentification sécurisée des utilisateurs est assurée par AWS Cognito, garantissant un contrôle précis des accès.",
      "AWS S3 est utilisé pour le stockage sécurisé des documents PDF générés via Puppeteer.",
      "Choix techniques expliqués : L'utilisation de services AWS permet une évolutivité automatique, une sécurité renforcée et une simplification de la gestion des infrastructures. Cette approche garantit que l'application reste performante même en cas d'augmentation de la charge utilisateur."
  ],    
    renderDetails: {
      images: [
        {
          src: `${process.env.PUBLIC_URL}/asset/Deviser/situation.png`,
          alt: "image 1",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/Deviser/amelioration.png`,
          alt: "image 2",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/Deviser/info-client.png`,
          alt: "image 3",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/Deviser/rendu.png`,
          alt: "image 4",
        }
        , {
          src: `${process.env.PUBLIC_URL}/asset/Deviser/branche.png`,
          alt: "image 5",
        }, {
          src: `${process.env.PUBLIC_URL}/asset/Deviser/user.png`,
          alt: "image 6",
        }

      ]
    },
    techStack: ['#react', '#aws', '#serverless']
  },
  {
    url: `${process.env.PUBLIC_URL}/asset/logo-eleveur.webp`,
    title: 'Le Petit Éleveur',
    githubLink: 'https://github.com/alexcorceiro/le_petit_eleveur.git',
    description: "Application web complète pour la gestion des animaux et l'organisation d'événements, offrant aux éleveurs des outils de suivi et de planification avancés.",
    generalDetails: {
      detailedDescription: "Le Petit Éleveur est une application web développée à titre personnel pour offrir aux éleveurs un outil moderne et efficace pour gérer leurs animaux et organiser divers événements. La plateforme permet de centraliser les informations importantes telles que l'historique de la reproduction, l'alimentation, et l'organisation d'événements tels que des bourses, des concours et des expositions. Bien que le projet ait été réalisé en solo, il pourrait être étendu à un cadre professionnel avec des fonctionnalités supplémentaires.",
      keyFeatures: [
        "Suivi complet des événements organisés (bourses, concours, expositions) avec rappels et notifications",
        "Gestion des données de reproduction et de généalogie",
        "Gestion de l'alimentation et des besoins nutritionnels avec suivi des stocks",
        "Interface intuitive et responsive, optimisée pour une utilisation sur mobile",
        "Possibilité d'ajouter et de gérer des participants et des détails pour chaque événement"
      ],
      challenges: "Le principal défi était de structurer une base de données capable de gérer à la fois les informations spécifiques aux animaux et les données des événements, tout en assurant une expérience utilisateur fluide et intuitive.",
      futureImprovements: "Prévoir l'ajout d'une fonctionnalité de suivi des soins médicaux et des visites vétérinaires pour renforcer le bien-être des animaux, ainsi qu'une analyse des données pour anticiper les besoins et optimiser la gestion des ressources.",
      projectGoals: "Créer un outil complet et intuitif pour gérer les activite lier au bien-être et l'alimentation des animaux ainsi que facilitant la planification et le suivi des événements(Bourse, Expossitionn Concours, etc...), tout en offrant une gestion optimisée des stocks, qui pourrait éventuellement évoluer en une solution professionnelle.",
      impact: "Actuellement développé pour un usage personnel, l'application montre déjà des bénéfices significatifs en simplifiant la planification evenement , la gestion des animaux et la gestion des ressources d'alimentations.",
      methodology: "L'approche itérative inspirée des principes Agile m'a permis d'améliorer progressivement l'application et de tester chaque nouvelle fonctionnalité pour une meilleure adaptabilité.",
      lessonsLearned: "Ce projet m'a permis de renforcer mes compétences en développement de bases de données complexes et en gestion de projets autonomes. J'ai également appris à concevoir des interfaces utilisateur intuitives et à gérer des fonctionnalités plus élaborées telles que la gestion d'événements."
    },
    techDetails: [
      "Développement front-end réalisé avec React et des composants Material-UI pour une interface moderne et responsive.",
      "Backend développé avec Node.js et Express.js pour fournir des API REST sécurisées, en utilisant des commandes SQL via le module mysql2.",
      "Base de données SQL utilisée pour gérer des données complexes relatives aux événements, à la reproduction et à la gestion des stocks alimentaires.",
      "Mise en place de notifications automatiques pour rappeler les événements à venir et les besoins de gestion des stocks.",
      "Détails Techniques : Stack technologique (React, Node.js, SQL, Material-UI). Explications des choix techniques : SQL a été utilisé pour garantir la cohérence et la robustesse des données, et l'architecture modulaire a été adoptée pour faciliter la maintenance et l'évolution de l'application."
    ],    
    renderDetails: {
      images: [
        {
          src: `${process.env.PUBLIC_URL}/asset/le-petit-eleveur/home.png`,
          alt: "image 1",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/le-petit-eleveur/home2.png`,
          alt: "image 2",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/le-petit-eleveur/stock.png`,
          alt: "image 3",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/le-petit-eleveur/event.png`,
          alt: "image 4",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/le-petit-eleveur/grid.png`,
          alt: "image 5",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/le-petit-eleveur/grid2.png`,
          alt: "image 6",
        },
        {
          src: `${process.env.PUBLIC_URL}/asset/le-petit-eleveur/coupled.png`,
          alt: "image 7",
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
                        <Chip key={index} label={tech} style={{marginRight:'1 rem.',  color: "white", fontSize: '12px'}} />
                      ))}
                    </div>
                    <div className='project-bottom'>
                      {project.title !== 'Deviseur' && (
                        <Button 
                        href={project.githubLink}
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
              <DialogContent style={{ width: "80vw", height: "70vh", }}
              >
                <h2 className='project-dialog-title'>{selectedProject.title}</h2>
                <>
                        <p className='project-dialog-description'>{selectedProject.generalDetails.detailedDescription}</p>
                </>
                <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                className="tabs-container" 
                indicatorColor='primary'
                textColor="inherit"
                variant="fullWidth"
              >
                <Tab label="Détails Générale" />
                <Tab label="Détails Techniques" />
                <Tab label="Capture d'écran" />
              </Tabs>
                {tabValue === 0 && selectedProject.generalDetails &&(
                  <Box style={{padding: '1rem'}}>
                    <lu className="project-dialog-list">
                      <li className='project-dialog-item'>
                        <h4 className='project-dialog-subtitle'>Objectif :</h4>
                        <p>{selectedProject.generalDetails.projectGoals}</p>
                      </li>
                      <li className='project-dialog-item'>
                        <h4 className='project-dialog-subtitle'>Impact :</h4>
                        <p>{selectedProject.generalDetails.impact}</p>
                      </li>
                      <li className='project-dialog-item'>
                        <h4 className='project-dialog-subtitle'>méthodologie :</h4>
                        <p>{selectedProject.generalDetails.methodology}</p>
                      </li>
                      <li className='project-dialog-item'>
                        <h4 className='project-dialog-subtitle'>Lecon Apprise :</h4>
                        <p>{selectedProject.generalDetails.lessonsLearned}</p>
                      </li>
                      <li className='project-dialog-item'>
                        <h4 className='project-dialog-subtitle'>amelioration futur :</h4>
                        <p>{selectedProject.generalDetails.futureImprovements}</p>
                      </li>
                      
                    </lu>
                  </Box>
                )}
             {tabValue === 1 && (
                    <Box style={{padding: '1rem'}}>
                      <Typography  variant="h5" gutterBottom>Détails Techniques :</Typography>
                      <ul className="project-dialog-list">
                        {selectedProject.techDetails && selectedProject.techDetails.map((detail, index) => (
                          <li key={index}   className='project-dialog-item'>
                            <Typography style={{fontSize: "15px", margin: "0.2rem"}}>{detail}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                {tabValue === 2 && selectedProject.renderDetails && (
                  <Box className="project-images-container">
                    {selectedProject.renderDetails.images.map((image, index) => (
                      <div key={index} className="project-image-item">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="project-image"
                        />
                      </div>
                    ))}
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
