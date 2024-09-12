import React from "react";
import './contact.css';
import Phone from './images/phone.png';
import fax from './images/fax.png';
import email from './images/email.png';
import Noone from './images/irregular.png';
import Footer from './Footer';
import Brutal from './images/coneshape.png';
function Contact (){
    const HandleForm = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
try{
        const response = await fetch("https://formspree.io/f/myzgnerz", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Email sent successfully!');
            form.reset();
        } else {
            alert('Failed to send email.');
        }
        }catch (error) {
            console.error('Error:', error);
        }
    };
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12" id="Contact-col">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
        </section>
        <section id="Form">
            <div className="container">
            <img src={Noone} alt="IRDK" id="nothing"/>
                <div className="row"  id="AfterForm">
                    
                    <div className="col-lg-6 col-md-6 col-sm-12" id="Form-col">
                        <h1>Get in <span style={{color:'green'}}>Touch</span></h1>
                        <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                        <form  onSubmit={HandleForm}>
                            <input type="text" name="name" id="t1" placeholder="Name"/>
                            <input type="email" id="t2" placeholder="Email"/>
                            <input type="text" id="t3" placeholder="Phone number"/>
                            <select defaultValue={"Linkedin"} id="t2">
                                <option value="Linkedin">Linkedin</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Youtube">Youtube</option>
                            </select>
                            <button type="submit">Submit</button>
                        </form>
                        <div className="row" id="icons1">
                            <div className="col-lg-4 col-md-4 col-sm-12" id="icons">
                                <img src={Phone} alt="Phone" id="phone"/>
                                <div className="text-emd">
                                <p>Phone</p>
                                <p>123-456-7890</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12" id="icons">
                                <img src={fax} alt="Phone" id="phone"/>
                                <div className="text-emd">
                                <p>Fax</p>
                                <p>123-456-7890</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12" id="icons">
                                <img src={email} alt="Phone" id="phone"/>
                                <div className="text-emd">
                                <p>Email</p>
                                <p>info@mcc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="main23123">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12968.694996365033!2d71.50813543521005!3d30.16680532641088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa99f2c1b8eb5cdbb%3A0x7fa0a9d7917eceda!2sMarketBrains%20Co!5e1!3m2!1sen!2s!4v1726083469423!5m2!1sen!2s" width="545" height="700" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                    </div>
                </div>
            </div>
        </section>
<section style={{height:'130px',textAlign:'left'}}>
<img src={Brutal} alt="V-brutal"  id="Cone1222"/>
</section>
        <section id="Footer">
            <Footer/>
        </section>
        </>
    )
}
export default Contact;