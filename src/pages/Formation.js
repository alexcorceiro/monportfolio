import React, { useState } from 'react';
import { Grid, Card, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { motion, AnimatePresence } from 'framer-motion';
import './css/formation.css';

const Formation = () => {
  let timelineEntries = [
    {
      year: "2022 - 2024",
      title: "Mastère - Manager Développeur Full Stack",
      subtitle: "Efrei Paris - Villejuif",
      description: "Formation en gestion de projets de développement logiciel avec un focus sur le développement Full Stack.",
      icon: "🎓",
      category: "formation"
    },
    {
      year: "2021 - 2022",
      title: "Bachelor - Concepteur Développeur Web & Mobile",
      subtitle: "Efrei Paris - Villejuif",
      description: "Formation spécialisée en développement Web et Mobile, couvrant des technologies comme React et Node.js.",
      icon: "🎓",
      category: "formation"
    },
    {
      year: "2018 - 2021",
      title: "BTS - Systèmes Numériques Option Informatique & Réseaux",
      subtitle: "Lycée Parc Vilgénis - Massy",
      description: "Formation en systèmes numériques avec une spécialisation en informatique et réseaux.",
      icon: "🎓",
      category: "formation"
    },
    {
      year: "2022 - 2024",
      title: "Développeur Web (Full Stack)",
      subtitle: "PRO BTP (Vincennes) - Alternance",
      description: "Développement de l'application Deviseur pour simplifier et accélérer la création de devis pour les équipes commerciales de PRO BTP, incluant une gestion des tarifs dynamiques.",
      icon: "💼",
      category: "entreprise"
    },
    {
      year: "2021 - 2022",
      title: "Développeur Web (Full Stack)",
      subtitle: "Mairie de Chilly-Mazarin - Alternance",
      description: "Développement et maintenance de solutions web complètes. Optimisation des performances et des fonctionnalités des plateformes existantes.",
      icon: "💼",
      category: "entreprise"
    },
    {
      year: "2018 - 2021",
      title: "Technicien Informatique",
      subtitle: "Mairie de Chilly-Mazarin - Alternance",
      description: "Support technique pour les utilisateurs, installation d'équipements informatiques et formation sur de nouvelles technologies.",
      icon: "💼",
      category: "entreprise"
    }
  ];

  timelineEntries = timelineEntries.sort((a, b) => b.year.localeCompare(a.year));
  const [visibleDescription, setVisibleDescription] = useState(null);

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { 
        duration: 0.7, 
        delay: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: 'spring', 
        stiffness: 100 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      rotate: 10, 
      transition: { 
        duration: 0.5, 
        ease: 'easeInOut' 
      } 
    }
  };

  const cardHoverEffect = {
    hover: {
      boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.4)", 
      transition: { duration: 0.5 },
    }
  };

  return (
    <div className='formation'>
      <div className='formation-container'>
        <h2 className='formation-title'>Formations & Expériences :</h2>
        <Grid>
          {timelineEntries.map((entry, index) => (
            <Grid.Row key={index}>
              <Grid.Column width={8} floated={entry.category === "formation" ? 'left' : 'right'}>
                <motion.div
                  whileHover="hover" 
                  variants={cardHoverEffect}
                >
                  <Card
                    fluid
                    onMouseEnter={() => setVisibleDescription(index)}
                    onMouseLeave={() => setVisibleDescription(null)}
                  >
                    <Card.Content>
                      <Label className='formation-year' ribbon={entry.category === "formation" ? 'right' : 'left'}>
                        {entry.year}
                      </Label>
                      <Card.Header><h3 className='formation-header'>{entry.title}</h3></Card.Header>
                      <Card.Meta>{entry.subtitle}</Card.Meta>
                      <AnimatePresence>
                        {visibleDescription === index && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={descriptionVariants}
                            className="formation-description"
                          >
                            <Card.Description style={{ color: 'white', marginTop: '10px' }}>
                              {entry.description}
                            </Card.Description>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card.Content>
                  </Card>
                </motion.div>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Formation;
