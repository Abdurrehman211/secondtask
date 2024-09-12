import React from "react";
import './portfolio.css';
import portfolio from './images/Portfolio.jpg';
import Portfolio1 from './images/porfolio2.png';
import Portfolio2 from './images/Portfolio2.jpg';
import Portfolio3 from './images/porfolio3.png';
import Portfolio4 from './images/porfolio4.png';
import Portfolio5 from './images/porfolio5.png';
import Rectangle1 from './images/Rectangle1.png';
import Half from './images/halfcircle.png';
import Footer from './Footer'
function Portfolio(){
    return (
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12" id="Contact-col">
                        <h1>
                            Portfolio
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section id="Pics">
            <div className="container">
                <div className="row" id="convert">
                    <div className="Upper-row">
                    <div className="Port-row">
                    <div className="col-lg-6 col-md-6 col-sm-12" id="Port-col">
                        <img src={portfolio} alt="Portfolio" id="Portfolio1" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" id="Port-col1">
                        <img src={Portfolio1} alt="Portfolio" id="Portfolio2" />
                        <img src={Portfolio2} alt="Any pic" id="Laptop" />
                    </div>
                    </div>
                 <div className="col-lg-6 col-md-6 col-sm-12"></div>
                 <img src={Portfolio3} alt="Nothing" id="Portfolio3"/>
                </div>
                <div className="lower-row">
                    <div className="full">
                        <img src={Portfolio4} alt="full img" id="full" />
                    </div>
                    <div className="half-img" style={{width:'45%'}}>
                        <img src={Portfolio5} alt="Port-img" id="lower" />
                        <img src={Rectangle1} alt="women" id="rectangle" />
                    </div>
                </div>
                </div>
            </div>
            <img src={Half} alt="Half circle" id="h-circle" />
        </section>
        <br /><br /><br />
        <section id="footer">
            <Footer/>
        </section>
        </>
    )
}
export default Portfolio;