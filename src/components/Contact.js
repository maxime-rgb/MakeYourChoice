import {Card} from 'react-bootstrap';
import '../css/Contact.css';
import emailjs from '@emailjs/browser';

import React, { useRef } from 'react';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_17av41i', 'template_26y5a1m', form.current, 'user_3RiWHCp91zX5QrUshgJT0')
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


