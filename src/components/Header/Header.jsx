import React from 'react';
import CTA from './CTA';
import photo from '../../assets/photo.png';
import HeaderSocials from './HeaderSocials';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';

const Header = ({ currentTheme, changeTheme }) => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Marian Remus Burlacu</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={photo} alt="me" />
                </div>

                <a href="#contacts" className="scroll__down">
                    Scroll Down
                </a>

                <div className="theme-toggler" onClick={changeTheme}>
                    {currentTheme === 'dark' ? (
                        <ImSun className="light" />
                    ) : (
                        <BsFillMoonFill className="dark" />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
