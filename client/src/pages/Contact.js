import React from 'react'
import "./css/contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <div className='contact-left'>
               <form className='contact-form'>
                <h1 className='contact-title'>Me contacter : </h1>
                <input className="contact-input" type="text" placeholder='votre nom ...'/>
                <input className='contact-input' type="email" placeholder='email expediteur ...'/>
                <textarea className='contact-textarea' type="text"/>
                <button type="submit" className='contact-btn'>Envoyer</button>
               </form>
            </div>
            <div className='contact-right'>
               <img src="https://img.freepik.com/vecteurs-libre/fond-hexagonal-degrade_23-2148957715.jpg" alt="image" className='contact-image' />
            </div>
        </div>
    </div>
  )
}

export default Contact