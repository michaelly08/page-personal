import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1Img from "./img/ecom.png";
import project2Img from "./img/fitness.png";
import project3Img from "./img/yt.png";
import project4Img from "./img/coin.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


function ProjectSection() {
    



    return(  
        <section className="projects-section" id="Projects">
                <div className="curve"></div>
                <div>
                    <h1 id="project-intro">PROJECTS</h1>
                </div>
                <div>
                    <div data-aos="zoom-in">
                        <Swiper
                                spaceBetween={10}
                                centeredSlides={true}
                                autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                loop={true}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                            



                            <SwiperSlide  className="swiper-slide">
                                <div className="tiles-box">
                                    <div className="tiles">
                                        <div className="tiles-img">
                                            <img src={project2Img}></img>
                                        </div>
                                        <div className="tiles-texts">
                                            <h1 className="project-title">Exercise Guide</h1>
                                            <p>Built with React, Material Ui, and fetched API from RapidApi. Users are able to search for exercise-related terms. When click on an exercise, users will be provided more information about the exercise.</p>
                                            <div className="tiles-language">
                                                <div className="tiles-buttons">
                                                    <a href="https://michaellyfitness.netlify.app" target="_blank">Demo</a>
                                                    <a href="https://github.com/michaelly08/exercise-guide" target="_blank">Source</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide  className="swiper-slide">
                                <div className="tiles-box">
                                    <div className="tiles">
                                        <div className="tiles-img">
                                            <img src={project3Img}></img>
                                        </div>
                                        <div className="tiles-texts">
                                            <h1 className="project-title">Media Streaming Site</h1>
                                            <p>Built with React, API fetched from RapidAPI. Users are able to search for videos, either by text or category. Play the video when clicked on and similar videos will also be suggested.</p>
                                            <div className="tiles-language">
                                                <div className="tiles-buttons">
                                                    <a href="https://michaelly-yt.netlify.app" target="_blank">Demo</a>
                                                    <a href="https://github.com/michaelly08/yt-clone" target="_blank">Source</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide  className="swiper-slide">
                                <div className="tiles-box">
                                    <div className="tiles">
                                        <div className="tiles-img">
                                            <img src={project4Img}></img>
                                        </div>
                                        <div className="tiles-texts">
                                            <h1 className="project-title">Crypto Price Checker</h1>
                                            <p>Built with React, API fetched with Redux. Shows the top 100 cryptocurrencies, current price and in-depth information about the coin when clicked on. Latest news about crypto is also displayed and can be searched.</p>
                                            <div className="tiles-language">
                                                <div className="tiles-buttons">
                                                    <a href="https://michaelly-coin.netlify.app" target="_blank">Demo</a>
                                                    <a href="https://github.com/michaelly08/coin-checker" target="_blank">Source</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="tiles-box">
                                    <div className="tiles">
                                        <div className="tiles-img">
                                            <img src={project1Img}></img>
                                        </div>
                                        <div className="tiles-texts">
                                            <h1 className="project-title">E-Commerce Store</h1>
                                            <p>Built with Next.js, Redux, Stripe, Material Ui for the frontend and Node Js, Express, MongoDb, JWT for the backend. Users are able to register, sign in and add items to cart and checkout.</p>
                                            <div className="tiles-language">
                                                <div className="tiles-buttons">
                                                    <a href="https://michaelly-ecom.netlify.app/" target="_blank">Demo</a>
                                                    <a href="https://github.com/michaelly08/ecom-store" target="_blank">Source</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>   
                    </div>
                </div>

        </section>

    )
}

export default ProjectSection;


