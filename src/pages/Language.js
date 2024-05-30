import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DiJavascript1, DiPython, DiReact, DiNodejsSmall, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './css/language.css';

const skills = [
  { name: "JavaScript", Icon: DiJavascript1 },
  { name: "Python", Icon: DiPython },
  { name: "React", Icon: DiReact },
  { name: "Node.js", Icon: DiNodejsSmall },
  { name: "HTML", Icon: DiHtml5 },
  { name: "CSS", Icon: DiCss3 },
  { name: "AWS", Icon: FaAws },
  { name: "SQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb }
];

const Language = () => {
  return (
    <div className="language">
      <h2>Compétences Techniques</h2>
      <div className='language-container'>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, p: 2 }}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Card sx={{ minWidth: 275, maxWidth: 300 , backgroundColor: "#383636", color: "white"}} className="language-card">
                <div className='language-card-content'>
                  {skill.Icon && <skill.Icon size="5em" />}
                  <Typography variant="h6" component="div">
                    {skill.name}
                  </Typography>
                </div>
              </Card>
            </motion.div>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Language;
