import React, { Component } from 'react';

import '../assets/styles/projectcard.css';
class ProjectCard extends Component {


    render() {
        return (
            <div className="project-card col-lg-3 col-md-4 col-sm-10" style={{ backgroundColor: this.props.backgroundColor }}>
                <h2>{this.props.name}</h2>

                <div className="overlay">
                    {
                        this.props.repoLink ?
                            <a href={this.props.repoLink}>
                                <div className="icon fab fa-github"></div>
                            </a>
                            :
                            null
                    }
                    {this.props.activeLink ?
                        <a href={this.props.activeLink}>
                            <div className="icon fas fa-link"></div>
                        </a>
                        :
                        null
                    }

                </div>
            </div>
        )
    }
}
export default ProjectCard;