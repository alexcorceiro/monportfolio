import React, { useState } from 'react';
import { Grid, Card, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { motion } from 'framer-motion';
import './css/formation.css';

const Formation = () => {
  let timelineEntries = [
    { year: "2022 - 2024", title: "Mastère - Manager Développeur", subtitle: "Efrei Paris - Villejuif", description: "Spécialisation en gestion de projets de développement logiciel.", icon: "🎓", category: "formation" },
    { year: "2021 - 2022", title: "Bachelor - Concepteur Développeur Web & Mobile", subtitle: "Efrei Paris - Villejuif", description: "Formation approfondie en développement Web et Mobile.", icon: "🎓", category: "formation" },
    { year: "2018 - 2021", title: "BTS - Digital Systems Option Informatique & Réseaux", subtitle: "Lycée Dorian (Vincennes - Massy)", description: "Formation en systèmes numériques, spécialisation en informatique et réseaux.", icon: "🎓", category: "formation" },
    { year: "2022 - 2024", title: "Développeur web (Full Stack) Caniberra - PRO BTP (Vincennes - Alternance)", subtitle: "Vincennes, Alternance", description: "Conception d'un système automatisé de propositions commerciales PDF avec tarification dynamique, optimisant le processus commercial et réduisant le temps de création des devis.", icon: "💼", category: "entreprise" },
    { year: "2021 - 2022", title: "Développeur web (Full Stack) Marie-Chilly-Mazarin - Alternance", subtitle: "Chilly-Mazarin, Alternance", description: "Développement et maintenance de solutions web complètes.", icon: "💼", category: "entreprise" },
    { year: "2018 - 2021", title: "Technicien informatique Marie-Chilly-Mazarin - Alternance", subtitle: "Chilly-Mazarin, Alternance", description: "Support technique, maintenance des systèmes informatiques, installation de logiciels, formation des utilisateurs sur de nouvelles technologies.", icon: "💼", category: "entreprise" }
  ];

  // Trier les entrées par date de manière décroissante
  timelineEntries = timelineEntries.sort((a, b) => b.year.localeCompare(a.year));
  const [visibleDescription, setVisibleDescription] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: 10 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 80 } },
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }
  };

  return (
    <div className='formation'>
      <div className='formation-container'>
      <h2 className='formation-title'> Formations Professionnelles :</h2>
      <motion.div className='formation-body' variants={containerVariants} initial="hidden" animate="visible">
        <Grid>
          {timelineEntries.map((entry, index) => (
            <Grid.Row key={index}>
              <Grid.Column width={8} floated={entry.category === "formation" ? 'left' : 'right'}>
                <motion.div
                  animate={{ x: [0, 100, 0] }}
                >
                  <Card
                    fluid
                    onMouseEnter={() => setVisibleDescription(index)} // Afficher la description au survol
                    onMouseLeave={() => setVisibleDescription(null)} // Masquer la description lorsque la souris quitte la carte
                  >
                    <Card.Content>
                      <Label className='formation-year' ribbon={entry.category === "formation" ? 'right' : 'left'}>{entry.year}</Label>
                      <Card.Header><h3 className='formation-header'>{entry.title}</h3></Card.Header>
                      <Card.Meta>{entry.subtitle}</Card.Meta>
                      {visibleDescription === index && (
                        <Card.Description style={{ color: 'white' }}>{entry.description}</Card.Description>
                      )}
                    </Card.Content>
                  </Card>
                </motion.div>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </motion.div>
        </div>
    </div>
  );
};

export default Formation;
