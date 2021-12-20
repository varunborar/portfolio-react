import React, { Component } from 'react';

import CarouselCard from './CarouselCard';

import '../assets/styles/carousel.css';


class Carousel extends Component {


    render() {
        return (
            <div className="carousel">
                <div className="scroll-animation">
                    {this.props.data.map((skill) => {
                        return (<CarouselCard
                            key={skill._id}
                            path={skill.path}
                            alt={skill.alt}
                        />)
                    })}
                </div>
            </div>

        )
    }
}
export default Carousel;