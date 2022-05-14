import React from 'react';

import Project from './Project';
import projectsData from './ProjectsData';
import { Container, Title } from './styles';

function Projects() {
  return (
    <Container>
      <Title>My Projects</Title>
      {projectsData.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          screenshotSource={project.screenshotSource}
          sourceSubDir={project.sourceSubDir}
          liveLinkSubDir={project.liveLinkSubDir}
          description={project.description}
          usedTechnologies={project.usedTechnologies}
        />
      ))}
    </Container>
  );
}

export default Projects;
