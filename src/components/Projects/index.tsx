import React from 'react';

import Project from './Project';
import projectsData from './ProjectsData';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      {projectsData.map((project) => (
        <Project
          name={project.name}
          screenshotSource={project.screenshotSource}
          sourceSubDir={project.sourceSubDir}
          liveLinkSubDir={project.liveLinkSubDir}
          description={project.description}
        />
      ))}
    </Container>
  );
}

export default Projects;
