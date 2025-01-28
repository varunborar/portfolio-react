import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

import LandingAnimation from '../common/LandingAnimation';
import '../assets/styles/home.css';
import bannerImage from '../assets/images/banner-image.png';

class Home extends Component {

    constructor() {
        super();
    }

    type = (typewriter) => {
        const skills = [ 'Cloud computing', 'DevOps', 'SRE', 'Command Line Tools', 'Web Development', 'Automation'];
        for (var skill of skills) {
            typewriter
                .typeString(skill)
                .pauseFor(3000)
                .deleteAll()
                .start();
        }
    }

    render() {
        return (
            <div className="home">
                <LandingAnimation></LandingAnimation>
                <div className="row d-flex justify-content-center pt-10">
                    <div className="col-lg-6 col-md-12 my-auto">
                        <div className="section">
                            <h3 className="greeting">
                                Hey!
                            </h3>
                            <h1 className="name">
                                <span className="rubber-letter">I</span>
                                <span className=""> </span>
                                <span className="rubber-letter">a</span>
                                <span className="rubber-letter">m</span>
                                <span className=""> </span>
                                <span className="rubber-letter">V</span>
                                <span className="rubber-letter">a</span>
                                <span className="rubber-letter">r</span>
                                <span className="rubber-letter">u</span>
                                <span className="rubber-letter">n</span>
                                <span className=""> </span>
                                <span className="rubber-letter">B</span>
                                <span className="rubber-letter">o</span>
                                <span className="rubber-letter">r</span>
                                <span className="rubber-letter">a</span>
                                <span className="rubber-letter">r</span>
                            </h1>
                            <h5 className="type-writer">
                                And I like {' '}

                                <Typewriter onInit={this.type} options={{ loop: true, wrapperClassName: "type-text", delay: 70 }} />

                            </h5>
                            <a href={process.env.PUBLIC_URL + "/assets/docs/Varun-Borar.pdf"} download>
                                <button type="button" className="btn btn-primary"><span className="">Get Resume</span></button>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center">
                        <img src={bannerImage} alt="banner-img" className="img-fluid banner-img" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;