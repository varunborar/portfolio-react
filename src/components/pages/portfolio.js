import React, { Component } from 'react';

import '../assets/styles/portfolio.css';
import skills from '../assets/data/skills.json';

import Section from '../common/Section';
import Banner from '../common/Banner';
import Company from '../common/Company';
import Project from '../common/Project';
import Carousel from '../common/Carousel';

class Portfolio extends Component {


    render() {
        return (
            <div className="portfolio">

                <div className="header row justify-content-center align-item-center">
                    <div className="left col-lg-5 col-md-10 col-sm-12 align-text-right">
                        <span className="color">Automating</span><br />
                        Chaos
                    </div>
                    <div className="right col-lg-5 col-md-10 col-sm-12 align-text-left">
                        Efficiency <br />
                        In <br />
                        Every <br />
                        <span className="color">Pipeline.</span>
                    </div>
                </div>
                <Banner
                    id="introduction"
                    header="Hi, I am Varun. Nice to see you here!"
                    message="I'm a Automation-savvy software engineer who transforms ideas into robust, scalable solutions. I am passionate about building things that make a difference."
                />

                <div className="title-container row justify-content-center align-content-center">
                    <div className="title col-lg-4 col-md-12 col-sm-12">
                        <div className="skill">
                            <div className="fas fa-drafting-compass skill-icon"></div>
                        </div>
                        <h2>Solutions Architect</h2>
                        <p className="quote">Blueprinting Success, One System at a Time.</p>
                        <h3>Architecting</h3>
                        <p className="content">
                            Automations, Microservices, Cloud Solutions, Network Designs, Continuous Integration and Deployment.
                        </p>
                        <h3> Tools</h3>
                        <p className="content">
                            Jenkins & Github Actions <br />
                            Helm Charts <br />
                            Terraform & Terragrunt <br />
                            Docker & Kubernetes <br />
                            AWS SSM <br />
                            ArgoCD <br />
                            ISTIO & Kiali <br />
                            Prometheus <br />
                            Splunk and CloudWatch
                        </p>
                    </div>
                    <div className="title col-lg-4 col-md-12 col-sm-12">
                        <div className="skill">
                            <div className="fas fa-terminal skill-icon"></div>
                        </div>
                        <h2>Development</h2>
                        <p className="quote">What's better than a cup of coffee and clean code on monday morning?</p>
                        <h3>Languages</h3>
                        <p className="content">
                            Python, Javascript, Rust, Shell scripting. <br />
                            But not afraid to jump to a new one.
                        </p>
                        <h3> Developing</h3>
                        <p className="content">
                            Automation Scripts <br />
                            RESTful APIs <br />
                            CI/CD Pipelines <br />
                            Slack Bots <br />
                            Command Line Tools <br />
                            Serverless Functions <br />
                        </p>
                    </div>

                    <div className="title col-lg-4 col-md-12 col-sm-12">
                        <div className="skill">
                            <div className="fas fa-microchip skill-icon"></div>
                        </div>
                        <h2>SRE and Tech-Enthusiast</h2>
                        <p className="quote">Learning things everyday. Upgrading things quaterly!</p>
                        <h3>Technology</h3>
                        <p className="content">
                            Clouds, Containers, DevOps, Security,<br />
                            Networking, Databases
                        </p>
                        <h3> Hands on with</h3>
                        <p className="content">
                            Amazon Web Services & Azure<br />
                            MongoDB Atlas, MySQL, Redis and DynamoDB<br />
                            Snowflake<br />
                            EKS & AKS<br />
                            GitOps & SRE Practices<br />
                            Qualys & WAF<br />
                        </p>
                    </div>
                </div>

                <Section id="skills" name="Skills">
                    <Carousel data={skills} />
                </Section>

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