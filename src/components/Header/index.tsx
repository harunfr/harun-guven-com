import React from 'react';

import {
  Container, MyName, Intro, Connections, Github, Email,
} from './styles';

function Header(): JSX.Element {
  return (
    <Container>
      <MyName>Harun Guven</MyName>
      <Intro>
        Self-taught software developer. Loves gardening, distilling &
        programming. I’m passionate about learning new things, I love JavaScript
        and I am also interested in other parts of software development.
      </Intro>
      <Connections>
        <Github
          target="_blank"
          rel="noreferrer noopener"
          className="source-code-link"
          href="https://github.com/harunfr"
          title="Harun Guven's Github Profile"
        >
          Github
        </Github>
        <Email
          href="mailto:harun-626@hotmail.com"
          title="harun-626@hotmail.com"
        >
          Email
        </Email>
      </Connections>
    </Container>
  );
}

export default Header;
