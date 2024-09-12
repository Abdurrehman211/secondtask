import React, {useEffect} from "react";
import './About.css';
import Landing from './images/Aboutus-Land.jpg';
import Desktop from './images/Desktop.jpg';
import Presentation from './images/About-servises.jpg';
import Brutal from './images/coneshape.png';
import image1 from './images/Rectangle119.png';
import image2 from './images/Rectangle121.png';
import image3 from './images/Rectangle123.png';
import image4 from './images/Rectangle127.png';
import image5 from './images/Rectangle128.png';
import image6 from './images/Rectangle129.png';
import Sparkle from './images/sparkle.png';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 200,
            mirror: true
        });
    },[]);
    return (
        <>
            <section id="Landing-page">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12" id="About-col" data-aos="fade-up">
                                <h1>Your Choice is our First & Foremost <span style={{ color: "cornflowerblue" }}>priority</span></h1>
                                <p>The Real Creative Potential</p>
                                <p>
                                    We craft innovative digital solutions and designs that drive your business forward and captivate your audience.
                                </p>
                                <div className="Above" data-aos="fade-up">
                                    <div className="first" style={{ padding: '20px 0px' }}>
                                        <p style={{ padding: '5px 0px' }}>1- Consulting</p>
                                        <p style={{ padding: '5px 0px' }}>3- Concept Design</p>

                                    </div>
                                    <div className="second" style={{ padding: '20px 0px' }} data-aos="fade-up">
                                        <p style={{ padding: '5px 0px' }} >2- Construction</p>
                                        <p style={{ padding: '5px 0px' }}>4- Design Development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up"> 
                                <img src={Landing} alt="Business" id="Business" />
                                <img src={Desktop} alt="Desktop" id="Desktop" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="About">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-up">
                            <h1  className="H2221">12+ Years of <span style={{ color: "cornflowerblue" }}>Experience</span></h1>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 col-md-12 col-sm-12" align="center">
                            <p id="Passionate"  align="center">
                                At Market Brains, we are passionate about blending creativity with strategy to elevate brands. Our team of experts combines innovative design with data-driven insights to deliver exceptional digital solutions tailored to your unique needs.
                            </p>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 col-md-12 col-sm-12" align="center">
                            <div className="img-block">
                                <img src={Presentation} alt="presentation" id="presentation" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Team">
                <img src={Brutal} alt="Cone Shaped" id="Cone12" data-aos="fade-up" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-up">
                            <h1 className="Team">Our <span style={{ color: "cornflowerblue" }}>Team</span></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-left">
                            <div className="card">
                                <img src={image1} alt="Profile" id="profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Marvin McKinney</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                        <div className="card">
                                <img src={image2} alt="Profile" id="profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Wade Warren</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-right">
                        <div className="card">
                                <img src={image3} alt="Profile" id="profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Jerome Bell</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-left">
                            <div className="card">
                                <img src={image4} alt="Profile" id="profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Arlene McCoy</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down">
                        <div className="card">
                                <img src={image5} alt="Profile" id="profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Brooklyn Simmons</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-right">
                        <div className="card">
                                <img src={image6} alt="Profile" id="profile"/>
                                <div className="card-body" align="center">
                                    <h5 className="card-title" align="center">Leslie Alexander</h5>
                                </div>
                            </div>
                        </div>
                    </div>
               
                </div>
                <div className="footer321">
                    <h3>Branding</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Development</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Agency</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Design</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Marketing</h3>
                </div>
            </section>
            <section id="footer">
                <Footer/>
            </section>
        </>
    )
}