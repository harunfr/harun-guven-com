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
  screenshotSource: string;
  sourceSubDir: string;
  liveLinkSubDir: string;
  description: string;
  usedTechnologies: string;
}

const myGithubBaseURL = 'https://github.com/harunfr/';
const myLiveLinkBaseURL = 'https://harunfr.github.io/';

function Project({
  name,
  screenshotSource,
  sourceSubDir,
  liveLinkSubDir,
  description,
  usedTechnologies,
}: ProjectProps) {
  return (
    <ProjectContainer>
      <ProjectScreenShot src={screenshotSource} alt="Screenshot of project." />
      <ProjectInfo>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinks>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            className="source-code-link"
            href={`${myGithubBaseURL + sourceSubDir}`}
          >
            Live Link
          </Link>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            className="source-code-link"
            href={`${myLiveLinkBaseURL + liveLinkSubDir}`}
          >
            Source Code
          </Link>
        </ProjectLinks>
        <Footer>{usedTechnologies}</Footer>
      </ProjectInfo>
    </ProjectContainer>
  );
}

export default Project;
