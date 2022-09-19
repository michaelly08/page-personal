import React, { useState, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


function ServiceSection() {
    return(  
        <section className="projects-section" id="Projects">
                <div className="curve"></div>
                <div>
                    <h1 id="project-intro">MY SERVICES</h1>
                </div>
                <div>
                    <div className="services-container-container">
                        <div className="services-container">
                            <div className="services-whole">
                                <div className="services-box" data-aos="flip-down" data-aos-delay="100" data-aos-duration="500">
                                    <div className="service-name">Web Design</div>
                                    <div className="service-description-box">
                                        <i className='bx bx-check-circle'></i>
                                        <div className="service-description">Create eye-catching web designs.</div>
                                    </div>
                                    <div className="service-description-box">
                                        <i className='bx bx-check-circle'></i>
                                        <div className="service-description">Tailor to your brand and individual needs.</div>
                                    </div>
                                </div>
                                <div className="services-box" data-aos="flip-down" data-aos-delay="200" data-aos-duration="500">
                                    <div className="service-name">Ecommerce</div>
                                    <div className="service-description-box">
                                        <i className='bx bx-check-circle'></i>
                                        <div className="service-description">Build a functioning online store.</div>
                                    </div>
                                    <div className="service-description-box">
                                        <i className='bx bx-check-circle'></i>
                                        <div className="service-description">Include shopping carts designed to sell services or products online.</div>
                                    </div>
                                </div>
                                <div className="services-box" data-aos="flip-down" data-aos-delay="300" data-aos-duration="500">
                                    <div className="service-name">Web Developement</div>
                                    <div className="service-description-box">
                                        <i className='bx bx-check-circle'></i>
                                        <div className="service-description">Ensure every website built is unique.</div>
                                    </div>
                                    <div className="service-description-box">
                                        <i className='bx bx-check-circle'></i>
                                        <div className="service-description">Provide a flexible custom web development solution to meet your requirements.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>

    )
}

export default ServiceSection;


