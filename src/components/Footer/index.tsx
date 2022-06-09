import React from 'react';

import {
  Container, Github, Email, Linkedin,
} from './styles';

function Footer(): JSX.Element {
  return (
    <Container id="contact">
      <Github
        target="_blank"
        rel="noreferrer noopener"
        className="source-code-link"
        href="https://github.com/harunfr"
        title="Harun Guven's Github Profile"
      >
        Github
      </Github>
      <Email href="mailto:harun-626@hotmail.com" title="harun-626@hotmail.com">
        Email
      </Email>
      <Linkedin
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/harunfr/"
        title="Harun Guven's Linkedin"
      >
        Linkedin
      </Linkedin>
    </Container>
  );
}

export default Footer;
