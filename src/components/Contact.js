import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        message: '',
    
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_4tioc87',
            'template_0easznj',
            toSend,
            'user_bIpcsLeetHnvJCPDuvE6N'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


   return(
   <section id="contact">
        <div className="inner">
            <section>
                <form onSubmit={onSubmit}>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="from name"  onChange={handleChange} />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <input type="text" rows="5" name="email" id="message" onChange={handleChange} />
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:liamaspell123@gmail.com">liamaspell123@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-linkedin"></span>
                        <h3>LinkedIn</h3>
                        <span>https://www.linkedin.com/in/liam-aspell-969822160/</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Website</h3>
                        <span><br />
                            You are here already!</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
    )
}



export default Contact