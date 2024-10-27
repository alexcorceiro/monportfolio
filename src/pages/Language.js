import React, { useRef, useEffect, useState } from 'react';
import { Typography, Box, LinearProgress, Grid } from '@mui/material';
import { DiJavascript1, DiPython, DiReact, DiNodejsSmall, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './css/language.css';

const skills = [
  { name: "JavaScript", Icon: DiJavascript1, percentage: 90 },
  { name: "Python", Icon: DiPython, percentage: 55 },
  { name: "React", Icon: DiReact, percentage: 85 },
  { name: "Node.js", Icon: DiNodejsSmall, percentage: 80 },
  { name: "HTML", Icon: DiHtml5, percentage: 95 },
  { name: "CSS", Icon: DiCss3, percentage: 90 },
  { name: "AWS", Icon: FaAws, percentage: 70 },
  { name: "SQL", Icon: SiMysql, percentage: 80 },
  { name: "MongoDB", Icon: SiMongodb, percentage: 75 }
];

const Language = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="language" ref={ref}> 
      <div className="language-container">
        <h2 style={{ fontSize: '3vw', textAlign: 'center' }}>Compétences Techniques</h2>
        <Grid container spacing={6} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}> 
              <motion.div
                className="skill-wrapper"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <Box className="skill" sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="div" className="skill-name" sx={{ fontSize: '1.5vw' }}>
                    {skill.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: 'center' }}>
                    <skill.Icon size="10rem" className="skill-icon" />
                    <Box sx={{ width: '28vw', ml: 2, position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: '100%', mr: 2, position: 'relative' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.percentage}%` } : {}}
                          transition={{ duration: 2, delay: skills.length * 0.5 + index * 0.5 }}
                          className="progress-bar-container"
                        >
                          <LinearProgress variant="determinate" value={skill.percentage} className="progress-bar" />
                        </motion.div>
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        <span className="skill-percentage" style={{ fontSize: '1rem' }}>{`${skill.percentage}%`}</span>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Language;
