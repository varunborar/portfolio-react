import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../assets/styles/navbar.css";

class Navbar extends Component {
    
    constructor(){
        super();

        this.state = {
            "activePath":"home"
        }
    }

    handleNavigation = (event)=>{
        document.title = "Varun Borar | " + event.currentTarget.name.charAt(0).toUpperCase() + event.currentTarget.name.slice(1);
        this.setState({
            "activePath":event.currentTarget.name
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span className="logo">varun.</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-list">
                            <li className="nav-item ">
                                <Link className={this.state.activePath==="home" ? "nav-link active" : "nav-link"} onClick={this.handleNavigation} name="home" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={this.state.activePath==="portfolio" ? "nav-link active" : "nav-link"} onClick={this.handleNavigation} name="portfolio" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={this.state.activePath==="contact" ? "nav-link active" : "nav-link"} onClick={this.handleNavigation} name="contact" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;