import '../css/Contact.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

require('dotenv').config()

export const ContactUs = () => {
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_USER)
      .then((result) => {
        toast.success('Merci, votre message à bien été envoyé ! ')
        history.push('/')
          console.log(result.text);
      }, (error) => {
          toast.error(error.text)
         
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="containerCard">
          <div className="card">
             <div className="envelope"></div>
             <h1>Contact Us</h1>
                <label>Name</label>
                <input type="text" name="name" required />
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Message</label>
                <textarea name="message" className='ContactMessage' required />
                <input type="submit" value="Send" />
          </div>
          </div>
    </form>
  );
};

export default ContactUs;


