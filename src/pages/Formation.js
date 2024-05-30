import React, { useState } from 'react';
import { Grid, Card, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { motion } from 'framer-motion';
import './css/formation.css';

const Formation = () => {
  let timelineEntries = [
    { year: "2022 - 2024", title: "Master - Manager Développeur", subtitle: "Efrei Paris - Villejuif", description: "Spécialisation en gestion de projets de développement logiciel.", color: "red", icon: "🎓", category: "formation" },
    { year: "2021 - 2022", title: "Bachelor - Concepteur Développeur Web & Mobile", subtitle: "Efrei Paris - Villejuif", description: "Formation approfondie en développement Web et Mobile.", color: "#1DA1F2", icon: "🎓", category: "formation" },
    { year: "2018 - 2021", title: "BTS - Digital Systems Option Informatique & Réseaux", subtitle: "Lycée Dorian (Vincennes - Massy)", description: "Formation en systèmes numériques, spécialisation en informatique et réseaux.", color: "#673AB7", icon: "🎓", category: "formation" },
    { year: "2022 - 2024", title: "Développeur web (Full Stack) Caniberra - PRO BTP (Vincennes - Alternance)", subtitle: "Vincennes, Alternance", description: "Conception et implémentation de systèmes pour la génération dynamique de PDF, intégration de tarification basée sur la sélection d'options par l'utilisateur.", color: "#FF5722", icon: "💼", category: "entreprise" },
    { year: "2021 - 2022", title: "Développeur web (Full Stack) Marie-Chilly-Mazarin - Alternance", subtitle: "Chilly-Mazarin, Alternance", description: "Développement et maintenance de solutions web complètes.", color: "#4CAF50", icon: "💼", category: "entreprise" },
    { year: "2018 - 2021", title: "Technicien informatique Marie-Chilly-Mazarin - Alternance", subtitle: "Chilly-Mazarin, Alternance", description: "Support technique, maintenance des systèmes informatiques, installation de logiciels, formation des utilisateurs sur de nouvelles technologies.", color: "#FFC107", icon: "💼", category: "entreprise" }
  ];

  // Trier les entrées par date de manière décroissante
  timelineEntries = timelineEntries.sort((a, b) => b.year.localeCompare(a.year));
  const [visibleDescription, setVisibleDescription] = useState(null);

  return (
    <div className='formation'>
      <h2> Formations Professionnelles :</h2>
      <div className='formation-container'>
        <Grid>
          {timelineEntries.map((entry, index) => (
            <Grid.Row key={index}>
              <Grid.Column width={8} floated={entry.category === "formation" ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
      </div>
    </div>
  );
};

export default Formation;
