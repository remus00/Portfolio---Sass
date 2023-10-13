import React from 'react';
import data from './experienceData';

const Experience = () => {
    const { frontEndData, backEndData } = data;

    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontEndData.map(({ id, title, experience, icon }) => (
                            <article className="experience__details" key={id}>
                                {icon}
                                <div>
                                    <h4>{title}</h4>
                                    <small className="text-light">{experience}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                {/* END OF FRONT END */}

                <div className="experience__backend">
                    <h3>Other Languages</h3>
                    <div className="experience__content">
                        {backEndData.map(({ id, title, experience, icon }) => (
                            <article className="experience__details" key={id}>
                                {icon}
                                <div>
                                    <h4>{title}</h4>
                                    <small className="text-light">{experience}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
