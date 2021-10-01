import React, { Component } from 'react';

import '../assets/styles/portfolio.css'

import Section from '../common/Section';
import Banner from '../common/Banner';
import Company from '../common/Company';
import Project from '../common/Project';

class Portfolio extends Component {


    render() {
        return (
            <div className="portfolio">

                <div className="header row justify-content-center align-item-center">
                    <div className="left col-lg-4 col-md-10 col-sm-12">
                        Stand<br />
                        <span className="color">Out</span>
                    </div>
                    <div className="right col-lg-4 col-md-10 col-sm-12">
                        Away <br />
                        From <br />
                        The <br />
                        <span className="color">Ordinary.</span>
                    </div>
                </div>
                <Banner
                    id="introduction"
                    header="Hi, I am Varun. Nice to see you here!"
                    message="It's been long since I discovered about my passion to build. I can grasp ideas faster, understand concepts quicker and design things naturally.
                     I'm quite confident, prefer things simple and keep calm when situations get messy."
                />

                <div className="title-container row justify-content-center align-content-center">
                    <div className="title col-lg-4 col-md-12 col-sm-12">
                        <div className="skill">
                            <div className="fas fa-drafting-compass skill-icon"></div>
                        </div>
                        <h2>Designer</h2>
                        <p className="quote">Simple structure, Clean pattern and Thoughful interactions.</p>
                        <h3>Things I Design</h3>
                        <p className="content">
                            Logo's, Business Cards, Websites, Apps and more.
                        </p>
                        <h3> Design Tools</h3>
                        <p className="content">
                            Adobe Illustrator <br />
                            Adobe Xd <br />
                            Bootstrap Studio <br />
                        </p>
                    </div>
                    <div className="title col-lg-4 col-md-12 col-sm-12">
                        <div className="skill">
                            <div className="fas fa-terminal skill-icon"></div>
                        </div>
                        <h2>Software Developer</h2>
                        <p className="quote">What's better than a cup of coffee and clean code on monday morning?</p>
                        <h3>Languages</h3>
                        <p className="content">
                            C/C++, Python, Java, Javascript, HTML, CSS. <br />
                            But not afraid to jump to a new one.
                        </p>
                        <h3> Frameworks and Tools</h3>
                        <p className="content">
                            Bootstrap <br />
                            Express.js <br />
                            React.js <br />
                            JavaFX <br />
                            PyQt5 <br />
                            Git and GitHub <br />
                            Vs Code <br />
                            Intellij Idea<br />
                            PyCharm <br />
                        </p>
                    </div>

                    <div className="title col-lg-4 col-md-12 col-sm-12">
                        <div className="skill">
                            <div className="fas fa-microchip skill-icon"></div>
                        </div>
                        <h2>Tech-enthusiast</h2>
                        <p className="quote">Learning things everyday.</p>
                        <h3>Technology</h3>
                        <p className="content">
                            Cloud computing, Machine learning, Android and Web-development.
                        </p>
                        <h3> Hands on with</h3>
                        <p className="content">
                            Amazon Web Services <br />
                            Google Cloud Platform <br />
                            Heroku <br />
                            Android <br />
                            Linear Regression <br />
                            Classification <br />
                            MySQL Server<br />
                            MongoDB Atlas<br />
                        </p>
                    </div>
                </div>

                <Section id="companies" name="Experience">
                    <Company/>
                </Section>

                <Section id="projects" name="Projects">
                    <h5>Here are a few projects that I am working on. Want to learn more? <a href="mailto:varunborar@gmail.com">Email me.</a></h5>
                    <Project />
                    <button className="btn btn-primary" onClick={()=>{window.location = "https://github.com/varunborar"}}>View More on GitHub</button>
                </Section>
            </div>
        )
    }
}
export default Portfolio;