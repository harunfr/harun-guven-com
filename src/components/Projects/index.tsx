import React from 'react';

import Project from './Project';
import projectsData from './ProjectsData';
import { Container, Title } from './styles';

function Projects() {
  return (
    <Container id="projects">
      <Title>My Projects</Title>
      {projectsData.map(
        ({
          id, name, src, repo, liveDemo, description, usedStack,
        }) => (
          <Project
            key={id}
            name={name}
            src={src}
            repo={repo}
            liveDemo={liveDemo}
            description={description}
            usedStack={usedStack}
          />
        ),
      )}
    </Container>
  );
}

export default Projects;
