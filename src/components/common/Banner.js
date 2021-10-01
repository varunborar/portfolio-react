import React, {Component} from 'react';

import '../assets/styles/banner.css';

class Banner extends Component{


    render(){
        return( 
            <div className="banner" id={this.props.id}>
                <h2>{this.props.header}</h2>
                <p>{this.props.message}</p>
                {this.props.children}
            </div>
        )
    } 
}
export default Banner;