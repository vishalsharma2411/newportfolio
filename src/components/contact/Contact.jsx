import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ce0pdd', 'template_wmxbewm', form.current, '2438ha5C3qKonzaoE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'></MdOutlineEmail>
            <h4>Email</h4>
            <h5>vishal sharma</h5>
            <a href="mailto:vishaksharma10128@gmail.com">Send A message</a>
          </article>

          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'></BsLinkedin>
            <h4>LinkedIN</h4>
            <h5>Vishal</h5>
            <a href="https://www.linkedin.com/in/vishal-sharma-87aa97171/" target='_blank'>Lets Connect</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'></BsWhatsapp>
            <h4>Whatsapp</h4>
            <h5>Vishal Sharma</h5>
            <a href="https://api.whatsapp.com/send?phone=7306091228" target='_blank'>Send A message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email'  required/>
          <textarea name='message' rows='7' placeholder='Your Message'  required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact