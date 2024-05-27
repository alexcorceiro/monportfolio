import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { DiJavascript1, DiPython, DiReact, DiNodejsSmall, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiMongodb, SiMysql } from 'react-icons/si';  // Exemple d'importation d'autres icônes
import { FaAws, FaDatabase } from 'react-icons/fa'; // Ajouter des icônes pour les technologies manquantes
import './css/language.css';

const Language = () => {
  const skills = [
    { name: "JavaScript", level: 85, Icon: DiJavascript1 },
    { name: "Python", level: 60, Icon: DiPython },
    { name: "React", level: 80, Icon: DiReact },
    { name: "Node.js", level: 75, Icon: DiNodejsSmall },
    { name: "HTML", level: 75, Icon: DiHtml5 },
    { name: "CSS", level: 90, Icon: DiCss3 },
    { name: "AWS", level: 40, Icon: FaAws },
    { name: "SQL", level: 70, Icon: SiMysql },
    { name: "MongoDB", level: 70, Icon: SiMongodb }
  ];

  return (
    <div className="language">
      <h2>Compétences Techniques</h2>
      <div className='language-container'>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, p: 2 }}>
        {skills.map((skill, index) => (
          <Card key={index} sx={{ minWidth: 275, maxWidth: 300 }}>
            <div className='language-card'>
            <div className='language-body-card'>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {skill.name}
              </Typography>
              <Box>
                <CircularProgress className='language-circular' variant="determinate" value={skill.level} size={75} thickness={5} />
                <Box
                  sx={{
                    position: 'relative',
                    bottom: 55, 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',                
                  }}
                >
                  <Typography variant="caption" component="div" color="text.secondary" sx={{ fontSize: '1.2em' }}>
                    {`${skill.level}%`}
                  </Typography>
                </Box>
              </Box>  
              </div>
            <div className='language-card-right'>
              {skill.Icon && <skill.Icon size="5em" />}
              </div>
            </div>
          </Card>
        ))}
      </Box>
      </div>
    </div>
  );
};

export default Language;
