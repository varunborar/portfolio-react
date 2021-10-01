import React, { Component } from 'react';

import '../assets/styles/companycard.css'
class CompanyCard extends Component {


    render() {
        return (
            <div className="company-card col-lg-4 col-md-4 col-sm-10">
                <img src={process.env.PUBLIC_URL + "/assets/images/" + this.props.logo} alt={this.props.name + " logo"}></img>
                <h2>{this.props.name}</h2>
                <p>{this.props.work}</p>
            </div>
        )
    }
}
export default CompanyCard;