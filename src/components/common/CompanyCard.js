import React, { Component } from 'react';

import '../assets/styles/companycard.css'
class CompanyCard extends Component {


    render() {
        return (
            <div className="company-card col-lg-5 col-md-5 col-sm-8">
                <img src={process.env.PUBLIC_URL + "/assets/images/" + this.props.logo} alt={this.props.name + " logo"}></img>
                <h2>{this.props.name}</h2>
                <p>{this.props.work}</p>
            </div>
        )
    }
}
export default CompanyCard;