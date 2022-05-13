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
          <Link href="projects">Projects</Link>
        </ListItem>
        <ListItem>
          <Link href="#about">About</Link>
        </ListItem>
        <ListItem>
          <Link href="#contact">Contact</Link>
        </ListItem>
      </NavList>
    </Container>
  );
}

export default Navigation;
