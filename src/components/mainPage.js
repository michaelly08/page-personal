import React, { useState, useEffect } from "react";
import mainImg from "./img/main2.png";
import 'boxicons';

function Header() {

    useEffect(()=> {
        document.querySelector(".header-moon").onclick = function() {
            document.querySelector("body").classList.toggle("is-dark");
        }
        

    }, [])

    let show = () => {
            document.querySelector(".header-menu-container").classList.toggle("is-active");
    }

    let hide = () => {
        if (document.querySelector(".header-menu-container").classList.contains("is-active")) { 
            document.querySelector(".header-menu-container").classList.toggle("is-active");
        }
    }


    return(
        <div className="top-section">
            {/* HEADER SECTION */}
            <header className="header">
                <div className="header-container">
                    <div className="header-body">
                        <div><a className="header-left logo"href="#">MICHAEL LY</a></div>
                        <div className="header-right menu">
                            <div className="header-menu-container">
                                <ul className="header-menu">
                                    <li className="nav-button">
                                        <a className="top-button" href="#" onClick={hide}>About Me</a>
                                    </li>
                                    <li className="nav-button">
                                        <a className="top-button" href="#Projects" onClick={hide}>Projects</a>
                                    </li>
                                    <li className="nav-button">
                                        <a className="top-button" href="#Contact-Section" onClick={hide}>Contact Me</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-icon header-moon">
                                <i className="bx bx-moon"></i>
                            </div>
                            <div className="menu-icon burger-icon" onClick={show}>
                                <i className="bx bx-menu"></i>
                            </div>
                        </div>

                    </div>

                </div>

            </header>
            {/* HEADER SECTION */}



            {/* ABOUT SECTION  */}
            <div className="about-section">
                <div className="about-container">
                    <div className="about-body">
                        <div className="about-txt">
                        
                            <div id="intro-txt">
                                <h1>Hey, I'm <span className="name-txt">Michael</span></h1>

                                <div id="role-txt">
                                    <ul className="dynamic-txts">
                                        <li><span>UI/UX Designer</span></li>
                                        <li><span>Web Developer</span></li>
                                        <li><span>UI/UX Designer</span></li>
                                    </ul>  
                                </div>
                                <p>Knowledgable in user interface, testing and debugging processes. Equiped with a diverse and promising skill-set. Results-driven web developer dedicated to building and optimizing user-focused websites and applications. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.</p>
                            </div>
                            
                            <div className="social-container">
                                <a id="contact-me-button" href="#Contact-Section" className="btn">Contact Me<i className='bx bx-right-arrow-alt'></i></a>
                                <a href="https://www.linkedin.com/in/michael-ly-738735248/" className="social-button btn" target="_blank"><i className='bx bxl-linkedin'></i></a>
                                <a href="https://github.com/michaelly08" className="social-button btn" target="_blank"><i className='bx bxl-github'></i></a>
                            </div>
                        </div>
                        <div className="about-img">
                            <img id="main-img" src={mainImg} alt="Self Portrait"></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT SECTION */}

            <div className="animation-area">
                <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;


