import React from 'react';

import {
  Container, Logo, NavList, ListItem, Link,
} from './styles';

interface NavProps {
  isViewingHeader: boolean;
}

function Navigation({ isViewingHeader }: NavProps) {
  return (
    <Container isViewingHeader={isViewingHeader}>
      <Logo>H + G</Logo>
      <NavList>
        <ListItem>
          <Link to="projects" offset={-140} smooth spy>
            Projects
          </Link>
        </ListItem>
        <ListItem>
          <Link to="about" smooth spy>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link to="contact" smooth spy>
            Contact
          </Link>
        </ListItem>
      </NavList>
    </Container>
  );
}

export default Navigation;
