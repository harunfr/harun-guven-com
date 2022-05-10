import React from 'react';

// import projectPhoto from '../../assets/test.png';

import {
  ProjectContainer,
  ProjectScreenShot,
  ProjectInfo,
  ProjectNameAndLinks,
  ProjectName,
  ProjectLinks,
  Link,
  ProjectDescription,
  GithubIcon,
  LiveLink,
} from './styles';

interface ProjectProps {
  name: string;
  screenshotSource: string;
  sourceSubDir: string;
  liveLinkSubDir: string;
  description: string;
}

const myGithubBaseURL = 'https://github.com/harunfr/';
const myLiveLinkBaseURL = 'https://harunfr.github.io/';

function Project({
  name,
  screenshotSource,
  sourceSubDir,
  liveLinkSubDir,
  description,
}: ProjectProps) {
  return (
    <ProjectContainer>
      <ProjectScreenShot src={screenshotSource} alt="Screenshot of project." />
      <ProjectInfo>
        <ProjectNameAndLinks>
          <ProjectName>{name}</ProjectName>
          <ProjectLinks>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              className="source-code-link"
              href={`${myGithubBaseURL + sourceSubDir}`}
            >
              <GithubIcon />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              className="source-code-link"
              href={`${myLiveLinkBaseURL + liveLinkSubDir}`}
            >
              <LiveLink />
            </Link>
          </ProjectLinks>
        </ProjectNameAndLinks>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectInfo>
    </ProjectContainer>
  );
}

export default Project;
