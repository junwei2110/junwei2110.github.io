import React from 'react';

import "./styles.css";
import { projectArray } from '../../userInput';

type ProjectArrayDesc = {
    title: string;
    body: string;
    techStack: string[];
}

export default function Projects() {

    return (
        <>
            <div className={"projects-title"}>My Featured Picks</div>
            <div className={"projects-container"}>
                {projectArray.map((project, idx) => (
                    <div key={idx} className={"individual-project-grid"}>
                        <ProjectTile title={project.title} imgUrl={project.image} desc={project.desc} />
                    </div>
                ))}

            </div>
        </>
    )
}


const ProjectTile = ({title, imgUrl, desc} : {
    title: string;
    imgUrl: string;
    desc: ProjectArrayDesc;
}) => {

    return (
        <div className={"project-tile-container"}>
            <img 
            className={"project-tile-image"} 
            style={{ backgroundImage: `url(${imgUrl})` }}
            loading={"lazy"}
            />
                
            <div className={"project-tile-desc"}>
                <div className={"project-desc-title"}>
                    {desc.title}
                </div>
                <div className={"project-desc-body"}>
                    {desc.body}
                </div>
                <div className={"project-desc-techstack"}>
                    {desc.techStack.map((skill: string, idx) => (
                        <div key={idx} className={"techstack-skill"} style={{ marginRight: idx%2===0 ? "5px" : 0 }}>{skill}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}