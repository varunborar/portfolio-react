import React, {Component} from 'react';

import ProjectCard from './ProjectCard';
import Projects from '../assets/data/projects.json';
class Project extends Component{


    render(){
        return( 
            <div className="project row justify-content-around align-items-center">
            {
                Projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project._id}
                            name={project.name} 
                            repoLink={project.repoLink}
                            activeLink={project.activeLink}
                            backgroundColor={project.color}
                        />
                    )
                })
            }
            </div>
        )
    } 
}
export default Project;