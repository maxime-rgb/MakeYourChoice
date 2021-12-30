import {Card} from 'react-bootstrap';
import '../css/Contact.css';
import emailjs from '@emailjs/browser';

import React, { useRef } from 'react';

require('dotenv').config()

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_USER)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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


