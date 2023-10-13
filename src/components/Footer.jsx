import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                REMUS
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                {/* <li>
                    <a href="#services">Services</a>
                </li> */}
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contacts">Contacts</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/remus00" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/marian-remus-burlacu-8b6407274/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GrLinkedinOption />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; M. Remus Burlacu</small>
            </div>
        </footer>
    );
};

export default Footer;
