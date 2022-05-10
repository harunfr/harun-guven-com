import React from 'react';

import { Container, MyName, Intro } from './styles';

function Header() {
  return (
    <Container>
      <MyName>Harun Guven</MyName>
      <Intro>
        Self-taught software developer. Loves gardening, distilling &
        programming. I’m passionate about learning new things, I love JavaScript
        and I am also interested in other parts of software developments.
      </Intro>
    </Container>
  );
}

export default Header;
