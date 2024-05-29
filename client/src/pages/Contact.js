import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './css/contact.css';
import SphèreOrganic from '../components/SphèreOrganique';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('service_2v6z0mi', 'template_kmc5i3o', templateParams, '3X_lMcFydp2pFJrJi')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSent(true);
        setError(false);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('Failed to send email.', err);
        setSent(false);
        setError(true);
      });
  };

  return (
    <div className='contact'>
      <div className='contact-container'>
        <motion.div 
          className='contact-left' 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <form className='contact-form' onSubmit={sendEmail}>
            <h1 className='contact-title'>Me contacter :</h1>
            <input 
              className='contact-input' 
              type='text' 
              placeholder='Votre nom ...' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <input 
              className='contact-input' 
              type='email' 
              placeholder='Email expéditeur ...' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <textarea 
              className='contact-textarea' 
              placeholder='Votre message ...' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
            <button type='submit' className='contact-btn'>Envoyer</button>
            {sent && <p className='success-message'>Message envoyé avec succès!</p>}
            {error && <p className='error-message'>Erreur lors de l'envoi du message. Veuillez réessayer.</p>}
          </form>
        </motion.div>
        <motion.div 
          className='contact-right'
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <SphèreOrganic />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
