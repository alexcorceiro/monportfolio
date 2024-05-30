import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import { SiReact,  SiMongodb } from 'react-icons/si'; 
import { FaNodeJs, FaChrome } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import "./css/profile.css"

const Profile = () => {
  const theme = useTheme();

  const skills = [
    { name: "Frontend Developer", Icon: SiReact, color: theme.palette.primary.light },
    { name: "Developer Web", Icon: FaChrome, color: theme.palette.error.main },
    { name: "Backend Developer", Icon: FaNodeJs, color: theme.palette.success.main },
    { name: "Full Stack Developer", Icon: DiVisualstudio, color: theme.palette.warning.main }
  ];
  return (
  <div className='profile'>
    <div className='profile-container'>
      <div className='profile-header'>
        <h1 className='profile-title'>A Propos de Moi</h1>
        <p>Passionné par la création de technologies qui améliorent de manière significative l'usage quotidien des utilisateurs, <br/>
         je suis spécialisé dans le développement Full Stack avec une forte compétence en JavaScript. <br/>
         Expert en frameworks tels que React et Express.js, et familier avec les services cloud AWS, <br/>
          je développe des solutions logicielles qui sont non seulement efficaces et performantes, mais aussi évolutives.
   </p>
      </div>
      <div className='profile-body'>
      <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {skills.map((skill, index) => (
          <Card key={index} sx={{ minWidth: 275, m: 1, bgcolor: skill.color, color: 'white', p: 2, boxShadow: 3 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <skill.Icon size="3em" />
              <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>{skill.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      </div>
    </div>
  </div>
  );
};

export default Profile;
