import React, {useState} from 'react';

function Project({project}) {

  return (
  <div>
<h1>{project.name}</h1>
<h3>{project.description}</h3>
<img style={{width:"200px"}} src={project.image}></img>
<a href={project.github}></a>
<a href={project.livesite}></a>

  </div>
  );
}

export default Project;