import React from 'react';

import { Container, StackWrapper, BoldText } from './styles';

function Technologies() {
  return (
    <Container>
      <StackWrapper>
        <BoldText>Languages:</BoldText>
        {' '}
        Typescript, Javascript.
      </StackWrapper>
      <StackWrapper>
        <BoldText>FrontEnd:</BoldText>
        {' '}
        HTML, CSS, Webpack, React.
      </StackWrapper>
      <StackWrapper>
        <BoldText>Others & Tools:</BoldText>
        {' '}
        MongoDB, Express, Node, Git, Figma,
        VS Code.
      </StackWrapper>
    </Container>
  );
}

export default Technologies;
