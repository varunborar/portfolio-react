import React, {Component} from 'react';

import '../assets/styles/section.css';

class Section extends Component{

    constructor(props){
        super();

        this.state = {
            "id": props.id ? props.id : props.name
        }
    }

    render(){
        return( 
            <div id={this.state.id} className="section">
               <div className="section-header">{this.props.name}</div>
                {this.props.children}
            </div>
        )
    } 
}   
export default Section;