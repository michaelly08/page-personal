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




function ContactSection() {


    const [visible, setVisible] = useState(false);
    const [float, setFloat] = useState(false)


    const [confirmation, setConfirmation] = useState("")
    const [success, setSuccess] = useState(false);





    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }

    const floatToggle = () => {
        setFloat(!float);
    }




    
    

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }

    }, [])

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ymynsad', 'template_tslvy6m', e.target, 'yqLTK2ecL74UcQOYy')
          .then((result) => {
                document.querySelector(".confirmation").classList.add("btnEntrance-3");
                document.querySelector(".confirmation").classList.add("success");
                setConfirmation("Message Sent");
                setSuccess(true);
                setTimeout(function(){
                    document.querySelector(".confirmation").classList.remove("btnEntrance-3");
                    document.querySelector(".confirmation").classList.remove("success");
                }, 4000)
                console.log(result.text);
          }, (error) => {
                setConfirmation("Failed to send, please try again")
                setSuccess(false)
                document.querySelector(".confirmation").classList.add("btnEntrance-3");
                document.querySelector(".confirmation").classList.add("failed");
                setTimeout(function(){
                    document.querySelector(".confirmation").classList.remove("btnEntrance-3");
                    document.querySelector(".confirmation").classList.remove("failed");
                }, 4000)
                console.log(error.text);
          });
          e.target.reset()
    }

    
    return (
        <div className="contact-section" id="Contact-Section">
            <div className="curve-skills"></div>
            <div className="skills-body">
                <div>
                    <h1 id="skills-intro">CONTACT ME</h1>
                </div>
            </div>
            <div className="contact-container" data-aos="fade-right">
                <div className="contact-whole">
                    <div className="contact-box">
                        <a className="contact-option" href="tel:+61 414-722-216">
                            <i className='bx bxs-phone'></i>Call Me
                        </a>
                        <a className="contact-option" href="mailto: michael.ly2002@gmail.com">
                        <i className='bx bxs-envelope' ></i>Email Me
                        </a>
                    </div>
                    <div className="contact-box">
                    <div className="form-title">
                            <span>Send Me A Message</span>
                        </div>
                    <div className="contact-me-form">
                            <form onSubmit={sendEmail}>

                                <input type="text" name="name" placeholder="Full Name" required></input>

                                <input type="email" name="email" id="email" placeholder="Email" required></input>


                                <textarea name="message" id="message" placeholder="Message..." required></textarea>


                                <input type="hidden" name="_captcha" value="false"></input>

                                <button type="submit" href="#">Send</button>

                            </form>
                        </div>
                        
                    </div>

                </div>
                
            </div>























            <div  className={`contact-float-button ${visible ? "btnEntrance" : "btnExit"} `} style={{visibility: visible ? "visible" : "hidden"}} onClick={floatToggle}>
                <i className='bx bx-envelope'></i>
            </div>

            <div className={`contact-float-container ${float ? "btnEntrance-2" : "btnExit-2"} `} style={{visibility: float ? "visible" : "hidden"}}>
                <div className="contact-float-whole">
                    <div className="contact-float-title">
                        <span>Get In Touch</span>
                    </div>
                    <div className="close-float">
                        <span className='bx bx-x' onClick={floatToggle}></span>
                    </div>


                    <div className="contact-float-boxes">
                        <a className="contact-float-info" href="mailto: michael.ly2002@gmail.com">
                            <i className='bx bxs-envelope' ></i>
                            <span>michael.ly2002@gmail.com</span>
                        </a>
                        <a className="contact-float-info" href="tel:+61 414-722-216">
                            <i className='bx bxs-phone'></i>
                            <span>+61 414722216</span>
                        </a>
                    </div>

                    <div className="contact-float-form">
                        <div className="contact-form-title">
                            <span>Quick Send Message</span>
                        </div>
                        <div className="contact-form-fill">
                            <form onSubmit={sendEmail}>

                                <input type="text" name="name" placeholder="Full Name" required></input>



                                <input type="email" name="email" id="email" placeholder="Email" required></input>

                                

                                <textarea name="message" id="message" placeholder="Message..." required></textarea>


                                <input type="hidden" name="_captcha" value="false"></input>

                                <button type="submit" href="#">Send</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="confirmation" id="message-confirmation">
                <span>{confirmation}</span>
                <div className="error-sign">{success ? <i className='bx bx-check'></i> : <i className='bx bx-error-circle'></i>}</div>
            </div>
        </div>
    )
}


export default ContactSection;