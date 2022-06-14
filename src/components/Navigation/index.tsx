import React from 'react';

import { NavProps } from '../helpers/definitions';
import {
  Container,
  Logo,
  LogoWrapper,
  NavList,
  ListItem,
  Link,
  Tooltip,
} from './styles';

function Navigation({ isViewingHeader }: NavProps) {
  return (
    <Container isViewingHeader={isViewingHeader}>
      <LogoWrapper
        target="_blank"
        rel="noreferrer noopener"
        href="https://harunfr.github.io/digital-garden"
        title="Harun Guven's Digital Garden"
      >
        <Logo />
      </LogoWrapper>
      <NavList>
        <ListItem>
          <Link to="projects" offset={-140} smooth spy>
            Projects
          </Link>
          <Tooltip className="tooltip">Harun Guven&apos;s Projects</Tooltip>
        </ListItem>
        <ListItem>
          <Link to="about" smooth spy>
            About
          </Link>
          <Tooltip className="tooltip">About Harun Guven</Tooltip>
        </ListItem>
        <ListItem>
          <Link to="contact" smooth spy className="last">
            Contact
          </Link>
          <Tooltip className="tooltip">Contact Him</Tooltip>
        </ListItem>
      </NavList>
    </Container>
  );
}

export default Navigation;
