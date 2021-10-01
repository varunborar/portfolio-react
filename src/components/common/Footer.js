import React, { Component } from 'react';


import '../assets/styles/footer.css';

class Footer extends Component {


    render() {
        return (
            <div className="footer">
                <h2> Improvise. Update. Evolve.</h2>
                <h5> That is how code works!</h5>

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
                <h5 className="muted">&#169; Varun Borar</h5>
            </div>
        )
    }
}
export default Footer;