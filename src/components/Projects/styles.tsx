import styled from 'styled-components';

import { BsGithub } from 'react-icons/bs'; // BsLinkedin
import { FaExternalLinkAlt } from 'react-icons/fa'; //

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30%); /**column-gap */
  justify-content: space-between;
`;
export const ProjectContainer = styled.div`
  border: 3px solid red;
  border-radius: 10px;
  margin-bottom: 4.2vw; /**row-gap */
`;
export const ProjectScreenShot = styled.img`
  width: 100%;
  border-radius: 2px;
  border: 2px solid green;
`;
export const ProjectInfo = styled.div`
  padding: 1.2rem;
`;
export const ProjectNameAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProjectName = styled.div``;
export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Link = styled.a``;
export const ProjectDescription = styled.div``;
export const WWWWWWW = styled.div``;

export const GithubIcon = styled(BsGithub)`
  font-size: 1.5rem;
  transform: translate(0, -30%);
`;

export const LiveLink = styled(FaExternalLinkAlt)`
  font-size: 1.5rem;
  transform: translate(0, -30%);
`;
