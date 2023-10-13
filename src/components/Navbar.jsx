import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { LuFolderCheck } from 'react-icons/lu';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''}
            >
                <LuFolderCheck />
            </a>
            <a
                href="#contacts"
                onClick={() => setActiveNav('#contacts')}
                className={activeNav === '#contacts' ? 'active' : ''}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Navbar;
