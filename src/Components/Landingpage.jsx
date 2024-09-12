import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import Arrow from './images/arrow.gif';
import Sparkle from './images/sparkle.png';
import Canva from './images/Canva.jpg';
import Design from './images/design.jpg';
import content from './images/content.jpg';
import website from './images/website.jpg';
import marketing from './images/marketing.jpg';
import Brutal from './images/coneshape.png';
import Rectangle from './images/Rectangle.png';
import Rectangle1 from './images/Rectangle1.png';
import Half from './images/halfcircle.png';
import Testimonial from "./testimonial.jsx";
import Footer from "./Footer.jsx";
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Landingpage() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 200,
            mirror: true
        });
    },[]);
    // const sliderRef = useRef(null);

    // Function to move to the next slide
    // const nextSlide = () => sliderRef.current.slickNext();
    // const prevSlide = () => sliderRef.current.slickPrev();
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };
const BackToTop = () =>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}
    return (
        <>
        <button className="Btn" onClick={BackToTop}>
  <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
<p class="text">Back to Top</p>
</button>
            <section id="home">
                <div className="container">
                    <div className="row" style={{ marginBottom: "50px" }}>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 id="h122" data-aos="fade-up">
                                Elevate Your Brand With <br />
                                <span id="text" style={{ fontWeight: 200 }}>Creative &nbsp;Design &nbsp;and &nbsp;Strategy</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row"  id="roooow" data-aos="fade-up">
                        <div className="col1 col-lg-4 col-md-4 col-sm 12">
                            <div className="circle">
                                <span className="text12">M</span>
                                <span className="text12">A</span>
                                <span className="text12">R</span>
                                <span className="text12">K</span>
                                <span className="text12">E</span>
                                <span className="text12">T</span>
                                <span className="text12">B</span>
                                <span className="text12">R</span>
                                <span className="text12">A</span>
                                <span className="text12">I</span>
                                <span className="text12">N</span>
                            </div>
                            <div className="Story" data-aos="fade-up">
                                <h3 id="story">Our Story <span id="story1"></span></h3>
                                <p id="story2">
                                    We blend creativity with strategy to bring your brand to life.
                                </p>
                                <div className="main">
                                    <button className="btn23" id="arrow-btn"> <img src={Arrow} alt="Arrow" id="arrow" /></button>
                                    <p id="Paragraph" >
                                        Our mission is to create impactful digital experiences that resonate and drive success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-12 col-md-12 col-sm 12" >
                            <div className="button">
                                <button id="arrow-btn1">Know More <img src={Arrow} alt="Arrow" id="arrow" /></button>
                            </div>
                        </div>
                        <div className="col2 col-lg-4 col-md-4 col-sm 12" data-aos="fade-up">
                            <div className="text123">
                                <h1 style={{ fontWeight: "normal", fontSize: "60px" }}>12<span style={{ color: "cornflowerblue" }}>+</span></h1>
                                <p style={{ fontSize: "20px" }}>Years of experience</p>
                                <h1 style={{ fontWeight: "normal", fontSize: "60px" }}>50<span style={{ color: "cornflowerblue" }}>+</span></h1>
                                <p style={{ fontSize: "20px" }}>Years of experience</p>
                                <h1 style={{ fontWeight: "normal", fontSize: "60px" }}>100<span style={{ color: "cornflowerblue" }}>+</span></h1>
                                <p style={{ fontSize: "20px" }}>Years of experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <div className="footer32">
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

            <section id="About-us">
                <div className="wrapper">
                    <div className="container12">
                        <div className="row" id="row1">
                            <div className="col-lg-6 col-md-6 col-sm-12" id="about" data-aos="fade-up">
                                <h1 className="title mb-5">
                                    Who we are ?
                                </h1>
                                <p>
                                    At Market Brains, we are passionate about blending creativity with strategy to elevate brands. Our team of experts combines innovative design with data-driven insights to deliver exceptional digital solutions tailored to your unique needs.
                                </p>
                                <p>
                                    With a global perspective and local expertise, we bring a fresh approach to every project. Our commitment is to create impactful experiences that drive success and resonate with audiences worldwide.
                                </p>
                                <p>
                                    Driven by innovation and collaboration, we transform ideas into compelling digital experiences that leave a lasting impact.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
                                <div className="Canva">
                                    <img src={Canva} alt="Canva" id="Canva" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Service">
                <div className="wrapper12">
                    <img src={Brutal} alt="Cone Shaped" id="Cone" data-aos="fade-up"/>
                </div>
                <div className="container122">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-up">
                            <h1 style={{ fontWeight: "bolder", fontSize: "60px" }}>Start Exploring <span style={{ color: "cornflowerblue" }}>Services</span></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" >
                            <div className="card mt-5"  data-aos="fade-up">
                                <img src={Design} alt="design" id="design" data-aos="fade-up" />

                            </div>
                            <p style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "30px" }}>Brand Identity Design</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12"  data-aos="fade-up" data-aos-delay="6000">
                            <div className="card mt-5">
                                <img src={marketing} alt="Marketing" id="design" />
                            </div>
                            <p style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "30px" }}>Digital Marketing Strategy</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12"  data-aos="fade-up" data-aos-delay="6000">
                            <div className="card mt-5">
                                <img src={website} alt="website" id="design" />
                            </div>
                            <p style={{ fontWeight: "bolder", fontSize: "19px", marginTop: "30px" }}>Web Design & Development</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12"  data-aos="fade-up" data-aos-delay="5000">
                            <div className="card mt-5">
                                <img src={content} alt="content" id="design" />
                            </div>
                            <p style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "30px" }}>Content & Management</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Project">
                <div className="container">
                    <img src={Half} alt="Half" id="Half" />
                    <div className="row" id="Project-row">
                        <div className="col-lg-6 col-md-6 col-sm-12" id="picture" data-aos="fade-up">
                            <div className="rect1" data-aos="fade-up">
                                <img src={Rectangle1} alt="Woman" id="rect" />
                            </div>
                            <div className="rect" data-aos="fade-up">
                                <img src={Rectangle} alt="Women holding Laptop" id="rect12" />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12" id='Text1' data-aos="fade-up">
                            <h1>Project We <br /> Have <span style={{ color: 'cornflowerblue' }}>Completed</span></h1>
                            <p id="p">
                                At Market Brains, we are passionate about blending creativity with strategy to elevate brands. Our team of experts combines innovative design with data-driven insights to deliver exceptional digital solutions tailored to your unique needs.
                            </p>
                            <p id="p1">
                                With a global perspective and local expertise, we bring a fresh approach to every project. Our commitment is to create impactful experiences that drive success and resonate with audiences worldwide.
                            </p>
                            <button id="btn">View All Work</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <br /><br /><br /><br /> */}
            <section id="Testimonial" data-aos="fade-up">
                <Testimonial />
            </section>
            <br /><br />
            <footer className="Footer">
               <Footer/>
            </footer>
        </>
    )
}