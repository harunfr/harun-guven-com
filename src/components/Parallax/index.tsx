import React from 'react';

import { ParallaxProps } from '../helpers/definitions';
import {
  Container, Parallaxes, ParallaxWrapper, ParallaxItem,
} from './styles';

function Parallax({ verticalMove, horizontalMove }: ParallaxProps) {
  return (
    <Container>
      <Parallaxes>
        <ParallaxWrapper
          front
          verticalMove={verticalMove}
          horizontalMove={horizontalMove}
        >
          <ParallaxItem front />
        </ParallaxWrapper>
        <ParallaxWrapper
          middle
          verticalMove={verticalMove}
          horizontalMove={horizontalMove}
        >
          <ParallaxItem middle />
        </ParallaxWrapper>
        <ParallaxWrapper
          back
          verticalMove={verticalMove}
          horizontalMove={horizontalMove}
        >
          <ParallaxItem back />
        </ParallaxWrapper>
      </Parallaxes>
    </Container>
  );
}

export default Parallax;
