import React from 'react';
import { motion } from 'framer-motion';
import "./css/contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <motion.div 
          className='contact-left' 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <form className='contact-form'>
            <h1 className='contact-title'>Me contacter : </h1>
            <input className="contact-input" type="text" placeholder='votre nom ...'/>
            <input className='contact-input' type="email" placeholder='email expediteur ...'/>
            <textarea className='contact-textarea' type="text" placeholder='Votre message ...'/>
            <button type="submit" className='contact-btn'>Envoyer</button>
          </form>
        </motion.div>
        <motion.div 
          className='contact-right'
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <img src="https://img.freepik.com/vecteurs-libre/fond-hexagonal-degrade_23-2148957715.jpg" alt="image" className='contact-image' />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
