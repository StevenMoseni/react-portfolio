import React, {useState} from 'react';
import project1 from "../images/IMG_3344.PNG";
import Project from './Project';
function Portfolio() {
const [projects, setProjects] = useState([
    {
        name: "Project 1",
        description: "My Project 1",
        image: project1, 
        github: "link",
        livesite: "link2"
    }
])
  return (
  <div>
{projects.map(project => (
<Project project ={project}/>
))}
  </div>
  );
}

export default Portfolio;