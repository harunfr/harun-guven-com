import React from 'react';

import { Container, SlidingWrapper } from './styles';

const usedTechnologies = 'Typescript,\u00A0Javascript,\u00A0Webpack,\u00A0React,\u00A0MongoDB,\u00A0Express,\u00A0Node,\u00A0Git,\u00A0Figma\u00A0|\u00A0'.repeat(
  2,
);

function Technologies() {
  return (
    <Container>
      {/* <FixedWrapper> */}
      <SlidingWrapper>{usedTechnologies}</SlidingWrapper>
      {/* </FixedWrapper> */}
    </Container>
  );
}
// FixedWrapper
export default Technologies;
