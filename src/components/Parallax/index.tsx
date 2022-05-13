import React from 'react';

import {
  Container, Parallaxes, ParallaxWrapper, ParallaxItem,
} from './styles';
/**
 * first parallax item is the front one.
 */

interface Props {
  front?: boolean;
  middle?: boolean;
  back?: boolean;
  verticalMove: number;
  horizontalMove: number;
}

function Parallax({ verticalMove, horizontalMove }: Props) {
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
