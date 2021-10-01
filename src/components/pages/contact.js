import React, { Component } from 'react';
import '../assets/styles/contact.css';
import axios from 'axios';

import Section from '../common/Section';

class Contact extends Component {

    constructor() {
        super();
        this.onStateChange = this.onStateChange.bind(this);
        this.state = {
            "from": "",
            "subject": "",
            "message": "",
            "email": ""
        }
    }

    onStateChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }

    handleSumbit = (event) => {
        event.preventDefault();
        const message = {
            "chatID": 1244515308,
            "from": this.state.from + " " + this.state.email,
            "subject": this.state.subject,
            "message": this.state.message
        }

        axios.post("https://messageapibot.herokuapp.com/message/text", message);

        this.setState({
            from: "",
            subject: "",
            message: ""
        })
    }
    render() {
        return (
            <div className="contact">
                <Section id="contact-section" name="Get In Touch">
                    <div className="row justify-content-center align-item-center" >
                        <div className="social-media d-flex flex-row justify-content-center flex-wrap">
                            <a href="https://www.linkedin.com/in/varun-borar/">
                                <div className="icon fab fa-linkedin-in"></div>
                            </a>
                            <a href="https://github.com/varunborar">
                                <div className="icon fab fa-github"></div>
                            </a>
                            <a href="https://t.me/notthatvarun">
                                <div className="icon fab fa-telegram-plane"></div>
                            </a>
                            <a href="https://www.instagram.com/mr.varunn/">
                                <div className="icon fab fa-instagram"></div>
                            </a>
                            <a href="mailto:varunborar@gmail.com">
                                <div className="icon fas fa-envelope"></div>
                            </a>
                        </div>
                        <form className="contact-form col-lg-4 col-md-6 col-sm-10" onSubmit={this.handleSumbit}>
                            <input
                                type="text"
                                name="from"
                                placeholder="From"
                                onChange={this.onStateChange}
                                value={this.state.from}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                onChange={this.onStateChange}
                                value={this.state.email}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                onChange={this.onStateChange}
                                value={this.state.subject}
                            />
                            <textarea
                                rows="6"
                                type="text"
                                name="message"
                                placeholder="Message"
                                onChange={this.onStateChange}
                                value={this.state.message}
                            />
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                </Section>
            </div>
        )
    }
}
export default Contact;