import React, { useState, useEffect, useRef } from "react";
//FORM
import { useForm, ValidationError } from '@formspree/react';
import emailjs from '@emailjs/browser';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();




function SkillsSection() {





    
    



    return (
        <section className="skills-section">
            <div className="curve-skills"></div>
            <div className="skills-body">
                <div>
                    <h1 id="skills-intro">MY EXPERIENCE</h1>
                </div>

                    <div className="skills-container" data-aos="fade-up-right">
                        <div className="skills-texts" >
                            <div className="skills-box">
                                <div className="skill-set"
                                    data-aos="fade-left"
                                    data-aos-delay="0"
                                    data-aos-duration="500">
                                    <div className="skill-check"><i className='bx bx-badge-check'></i></div>
                                    <div>
                                        <h1>HTML</h1>
                                        <p>Experienced</p>
                                    </div>
                                </div>
                                <div className="skill-set"
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                    data-aos-duration="500">
                                    <div className="skill-check"><i className='bx bx-badge-check'></i></div>
                                    <div>
                                        <h1>JavaScript</h1>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className="skill-set"
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                    data-aos-duration="500">
                                    <div className="skill-check"><i className='bx bx-badge-check'></i></div>
                                    <div>
                                        <h1>Python</h1>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="skills-box">
                                <div className="skill-set"
                                    data-aos="fade-left"
                                    data-aos-delay="0"
                                    data-aos-duration="500">
                                    <div className="skill-check"><i className='bx bx-badge-check'></i></div>
                                    <div>
                                        <h1>CSS</h1>
                                        <p>Experienced</p>
                                    </div>
                                </div>
                                <div className="skill-set"
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                    data-aos-duration="500">
                                    <div className="skill-check"><i className='bx bx-badge-check'></i></div>
                                    <div>
                                        <h1>React</h1>
                                        <p>Experienced</p>
                                    </div>
                                </div>
                                <div className="skill-set"
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                    data-aos-duration="500">
                                    <div className="skill-check"><i className='bx bx-badge-check'></i></div>
                                    <div>
                                        <h1>Redux</h1>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </section>
    )
}


export default SkillsSection;