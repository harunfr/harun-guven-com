import React from 'react';

import {
  Container, Logo, NavLinks, Link,
} from './styles';

function Navigation() {
  return (
    <Container>
      <Logo>H + G</Logo>
      <NavLinks>
        <Link>
          <a href="projects">Projects</a>
        </Link>
        <Link>
          <a href="#about">About</a>
        </Link>
        <Link>
          <a href="#contact">Contact</a>
        </Link>
      </NavLinks>
    </Container>
  );
}

export default Navigation;
