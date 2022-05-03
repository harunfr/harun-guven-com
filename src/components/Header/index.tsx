import React from 'react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
// import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
// import {
//   SiJavascript,
//   SiMongodb,
//   SiExpress,
//   SiTypescript,
//   SiStyledcomponents,
//   SiVsco,
// } from 'react-icons/si';
// import { DiSizzlejs } from 'react-icons/di';
import avatar from '../../assets/avatar.jpeg';

import {
  Container,
  Wrapper,
  Avatar,
  Name,
  AboutMe,
  Intro,
  MySocials,
  LanguagesAndTools,
  Languages,
  Tools,
} from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Avatar src={avatar} alt="portrait of developer" />
        <Name>Harun Guven</Name>
      </Wrapper>

      <AboutMe>
        <Intro>
          Coming from a background of continuous practice, performance and
          collaboration, I was immediately enthralled by the similarity in
          development in creating new products and experiences in a satisfyingly
          tangible manner.
          <MySocials>
            <BsGithub />
            <BsLinkedin />
          </MySocials>
        </Intro>

        <LanguagesAndTools>
          <Languages>
            <span>
              Languages & Libraries: Typescript, Javascript, Node, React,
              Express ,MongoDB, Webpack
            </span>
            <Wrapper>
              {/* <SiMongodb />
              <SiExpress />
              <FaReact />
              <FaNodeJs />
              <SiJavascript />x
              <SiTypescript />x
              <DiSizzlejs />
              <SiStyledcomponents />
              <FaReact />
              <FaReact /> */}
            </Wrapper>
          </Languages>

          <Tools>
            <p>Tools: Git, VS Code,</p>
            {/* <FaGitAlt />
            <SiVsco />
            <FaReact />
            <FaNodeJs />
            <SiJavascript />
            <SiTypescript />
            <FaReact />
            <FaReact />
            <FaReact />
            <FaReact /> */}
          </Tools>
        </LanguagesAndTools>
      </AboutMe>
    </Container>
  );
}

export default Header;
