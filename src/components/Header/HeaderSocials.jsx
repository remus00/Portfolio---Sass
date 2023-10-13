import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/marian-remus-burlacu-8b6407274/"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/remus00" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/remus_burlacu/" target="_blank" rel="noreferrer">
                <BsInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;
