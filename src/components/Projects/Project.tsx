import React from 'react';

// import projectPhoto from '../../assets/test.png';

import {
  ProjectContainer,
  ProjectScreenShot,
  ProjectInfo,
  ProjectName,
  ProjectLinks,
  Link,
  ProjectDescription,
  Footer,
} from './styles';

interface ProjectProps {
  name: string;
  src: string;
  repo: string;
  liveDemo: string;
  description: string;
  usedStack: string;
}

const myGithubBaseURL = 'https://github.com/harunfr/';
const myLiveLinkBaseURL = 'https://harunfr.github.io/';

function Project({
  name,
  src,
  repo,
  liveDemo,
  description,
  usedStack,
}: ProjectProps) {
  return (
    <ProjectContainer>
      <ProjectScreenShot src={src} alt="Screenshot of project." />
      <ProjectInfo>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinks>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            className="source-code-link"
            href={`${myGithubBaseURL + repo}`}
          >
            Live Link
          </Link>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            className="source-code-link"
            href={`${myLiveLinkBaseURL + liveDemo}`}
          >
            Source Code
          </Link>
        </ProjectLinks>
        <Footer>{usedStack}</Footer>
      </ProjectInfo>
    </ProjectContainer>
  );
}

export default Project;
