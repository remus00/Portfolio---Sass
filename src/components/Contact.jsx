import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

import emailjs from 'emailjs-com';

const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zf0fpw8', 'template_g4ptm2k', form.current, 'XYvIalwoyy1SB_hzS');
        e.target.reset();
    };
    return (
        <section id="contacts">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contacts__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>remus.burlacu00@gmail.com</h5>
                        <a href="mailto:remus.burlacu00@gmail.com" target="_blank" rel="noreferrer">
                            Send a Message
                        </a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineLinkedin className="contact__option-icon" />
                        <h4>Linkedin</h4>
                        <h5>Marian Remus Burlacu</h5>
                        <a
                            href="https://www.linkedin.com/in/marian-remus-burlacu-8b6407274/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a Message
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+123.456.7890</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=+393663364248"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a Message
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;
