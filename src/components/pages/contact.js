import React, { Component } from 'react';
import '../assets/styles/contact.css';
// import axios from 'axios';

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
            "name": this.state.from,
            "email": this.state.email,
            "subject": this.state.subject,
            "message": this.state.message
        }

        const messageString = JSON.stringify(message);

        // axios.post("https://script.google.com/macros/s/AKfycbz2FOcX582I8H7Zexl2eF7ef3RcjxavR1O-yPVa1Lmo8sdwkvxkQfvZ_zP7epKmXUcrDg/exec",{
        //     headers: {
        //         "Content-Type": "text/plain"
        //     },
        //     redirect: "follow",
        //     messageString
        // });

        fetch("https://script.google.com/macros/s/AKfycbz2FOcX582I8H7Zexl2eF7ef3RcjxavR1O-yPVa1Lmo8sdwkvxkQfvZ_zP7epKmXUcrDg/exec", {
            redirect: "follow",
            method: "POST",
            body: messageString,
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
        });

        this.setState({
            from: "",
            email: "",
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
                                placeholder="Your Name"
                                onChange={this.onStateChange}
                                value={this.state.from}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="How should I reach out to you?"
                                onChange={this.onStateChange}
                                value={this.state.email}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="What do you want to talk about?"
                                onChange={this.onStateChange}
                                value={this.state.subject}
                            />
                            <textarea
                                rows="6"
                                type="text"
                                name="message"
                                placeholder="Your message"
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