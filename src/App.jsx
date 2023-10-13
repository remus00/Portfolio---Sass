import React, { useState } from 'react';
import './scss/index.scss';
import Header from './components/Header/Header';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contacts from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
    const [theme, setTheme] = useState('dark');
    const changeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };
    return (
        <div className="app-container" data-theme={theme}>
            <Header currentTheme={theme} changeTheme={changeTheme} />
            <Navbar />
            <About />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    );
};

export default App;
