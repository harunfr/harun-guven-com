import React from 'react';

import { Container, SlidingWrapper } from './styles';

const usedTechnologies = 'Typescript,\u00A0Javascript,\u00A0React,\u00A0MongoDB,\u00A0Express,\u00A0Node,\u00A0Git,\u00A0Figma\u00A0|\u00A0'.repeat(
  15,
);

function Technologies() {
  return (
    <Container>
      <SlidingWrapper>{usedTechnologies}</SlidingWrapper>
    </Container>
  );
}

export default Technologies;
