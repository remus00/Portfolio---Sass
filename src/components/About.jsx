import React from 'react';
import square from '../assets/square.png';
import { FaAward } from 'react-icons/fa';
import { LuFolderCheck } from 'react-icons/lu';
import { MdOutlineVolunteerActivism } from 'react-icons/md';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={square} alt="about" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>I'm currently a front-end intern working in a startup</small>
                        </article>

                        <article className="about__card">
                            <MdOutlineVolunteerActivism className="about__icon" />
                            <h5>Volunteering</h5>
                            <small>Worked on a next.js form for an insurance company</small>
                        </article>

                        <article className="about__card">
                            <LuFolderCheck className="about__icon" />
                            <h5>Projects</h5>
                            <small>You can see my project on GitHub</small>
                        </article>
                    </div>

                    <p>
                        Hi my name is Marian Remus Burlacu but you can just call me Remus.
                        <br />
                        I'm a front end developer based in Turin with a keen eye for designing good
                        looking and user friendly web application.
                        <br />I would love to expand my horizons by gaining experience, improving
                        and becoming the best version of myself.
                    </p>

                    <a href="#contacts" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
