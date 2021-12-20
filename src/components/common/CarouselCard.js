import React, {Component} from 'react';

import '../assets/styles/carouselcard.css';


class CarouselCard extends Component{

    render(){
        return( 
            <div className="carousel-card">
                <div className="image-container">
                    <img className="carousel-card-image" src={process.env.PUBLIC_URL + "/assets/images/" + this.props.path} alt={this.props.alt + " Logo"}/>
                </div>
            </div>
        )
    } 
}
export default CarouselCard;