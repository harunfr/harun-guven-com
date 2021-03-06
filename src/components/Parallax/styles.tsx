import styled from 'styled-components/macro';

import { ParallaxProps } from '../helpers/definitions';
import parallaxBackground from '../../assets/parallax-bg.png';

/** horizontal factor is 5.66 for front, 5.66 * 3 / 2 for middle --- */
/* --- and 5.66 * 3 / 1 for back. */

/** vertical factor is 8.4 for front, 8.4 * 3 / 2 for middle --- */
/* --- and 8.4 * 3 / 1 for back. */

export const Container = styled.div`
  z-index: -1;
  position: absolute;
  background: linear-gradient(to bottom right, #4f00bc 10%, #29abe2 100%);
  left: 0;
  top: 0;
  width: 100%;
  height: 550px;
  overflow: hidden;
`;
export const Parallaxes = styled.ul`
  position: relative;
  transform: translate3d(0px, 0px, 0px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  width: 100%;
  height: 92%;
  opacity: 1;
`;
export const ParallaxWrapper = styled.li.attrs<ParallaxProps>((props) => ({
  style: {
    transform: `translate3d(${
      props.front
        ? props.verticalMove / 5.66
        : props.middle
          ? props.verticalMove / 8.475
          : props.verticalMove / 16.98
    }px, ${
      props.front
        ? props.horizontalMove / 5.66
        : props.middle
          ? props.horizontalMove / 8.475
          : props.horizontalMove / 16.98
    }px, 0)`,
  },
}))<ParallaxProps>`
  position: absolute;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  display: block;
  list-style: none;
  height: 100%;
  width: 120%;
  left: 0px;
  top: 0px;
  transition: transform 0.5s ease-out;
`;

interface ILayer {
  front?: boolean;
  middle?: boolean;
  back?: boolean;
}

export const ParallaxItem = styled.div<ILayer>`
  background-image: url('${parallaxBackground}');
  background-repeat: repeat;
  display: block;
  width: 140%;
  height: 110%;
  position: relative;
  opacity: ${(props) => (props.back ? '0.6' : props.middle ? '0.8' : 1)};
  filter: ${(props) =>
    props.back ? 'blur(3px)' : props.middle ? 'blur(2px)' : 1};
  background-position: ${(props) =>
    props.back ? 'top center' : props.middle ? 'top right' : 'top left'};
  transform: ${(props) =>
    props.back ? 'scale(0.8)' : props.middle ? 'scale(0.9)' : 'scale(1)'};
  top: ${(props) => (props.back ? '-5%' : props.middle ? '15%' : '0')};
  left: ${(props) => (props.back ? '-15%' : props.middle ? '10%' : '0')};
`;
