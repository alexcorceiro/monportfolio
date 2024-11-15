import React from 'react';
import {  LinearProgress} from '@mui/material';
import { DiJavascript1, DiPython, DiReact, DiNodejsSmall, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { motion } from 'framer-motion';
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJira } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";


import './css/language.css';

const skills = [
  { name: "JavaScript", Icon: DiJavascript1, genre: 'frontend', level: 70 },
  { name: "Python", Icon: DiPython, genre: 'backend', level: 65 },
  { name: "React", Icon: DiReact, genre: 'frontend', level: 85 },
  { name: "Node.js", Icon: DiNodejsSmall, genre: 'backend', level: 75 },
  { name: "HTML", Icon: DiHtml5, genre: 'frontend', level: 75 },
  { name: "CSS", Icon: DiCss3, genre: 'frontend', level: 90 },
  { name: "AWS", Icon: FaAws, genre: "autres", level: 70 },
  { name: "MySQL", Icon: SiMysql, genre: 'databases', level: 85 },
  { name: "PostgeSQL", Icon: BiLogoPostgresql, genre: 'databases', level: 65 },
  { name: "MongoDB", Icon: SiMongodb, genre: "databases", level: 80 },
  { name: "Git", Icon: FaGithub, genre: "autres", level: 88 },
  { name: "Prisma", Icon: SiPrisma, genre: "backend", level: 65 },
  { name: "Jira", Icon: FaJira, genre: 'autres', level: 50 },
  { name: "Express", Icon: SiExpress, genre: "backend", level: 80 },
  { name: "Trello", Icon: FaTrello, genre: "autres", level: 75 },
  {name: "Typescript", Icon: SiTypescript, genre: 'autres', level: 70}
];

const groupedSkills = {
  frontend: skills.filter(skill => skill.genre === 'frontend'),
  backend: skills.filter(skill => skill.genre === 'backend'),
  databases: skills.filter(skill => skill.genre === 'databases'),
  devops: skills.filter(skill => skill.genre === 'autres')
}

const Language = () => {
  
  return (
    <div className="language" > 
      <div className="language-container">
      <h2 className='language-title'>Compétences Techniques</h2>
          <div className='language-body'>
            <div className='language-line'>
            <motion.div
              className='language-container-frontend'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='language-subtitle'>Front-End</h2>
              {groupedSkills.frontend.map((skill, index) => (
                <div className='language-item' key={index}>
                  <div className="language-icon-container">
                    <div className='language-icon-name'>
                      <skill.Icon size={30} />
                      <label>{skill.name}</label>
                    </div>
                    <p className="progress-label">{skill.level}%</p>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level} className='custom-linear-progress'
                      style={{ backgroundColor: '#fffb90', padding: '0.3rem', width: "35vw" }}  
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className='language-container-backend'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className='language-subtitle'>Back-End</h2>
              {groupedSkills.backend.map((skill, index) => (
                <div className='language-item' key={index}>
                  <div className="language-icon-container">
                    <div className='language-icon-name'>
                      <skill.Icon size={30} />
                      <label>{skill.name}</label>
                    </div>
                    <p className="progress-label">{skill.level}%</p>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level}  className='custom-linear-progress'
                      style={{ backgroundColor: '#fffb90', padding: '0.3rem', width: "35vw" }}  
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
            </div>
            <div className='language-line'>
            <motion.div
              className='language-container-databases'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className='language-subtitle'>Databases</h2>
              {groupedSkills.databases.map((skill, index) => (
                <div className='language-item' key={index}>
                  <div className="language-icon-container">
                    <div className='language-icon-name'>
                      <skill.Icon size={30} />
                      <label>{skill.name}</label>
                    </div>
                    <p className="progress-label">{skill.level}%</p>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level}  className='custom-linear-progress'
                      style={{ backgroundColor: '#fffb90', padding: '0.3rem', width: "35vw" }}  
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className='language-container-orders'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className='language-subtitle'>Autres</h2>
              {groupedSkills.devops.map((skill, index) => (
                <div className='language-item' key={index}>
                  <div className="language-icon-container">
                    <div className='language-icon-name'>
                      <skill.Icon size={30} />
                      <label>{skill.name}</label>
                    </div>
                    <p className="progress-label">{skill.level}%</p>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.4 
                    }}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level} 
                      className='custom-linear-progress'
                      style={{ backgroundColor: '#fffb90', padding: '0.3rem', width: "35vw" }}  
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Language;
