import styled from 'styled-components/macro';
import testBg from '../../assets/testBg.png';

export const Container = styled.header`
  margin-top: -100px;
  min-height: 550px;
  padding: 120px 10px 150px 16px;
  background-color: transparent;

  @media (max-width: 500px) {
    margin-top: -160px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 420px;
    left: 0px;
    height: 130px;
    width: 100%;
    z-index: 2;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background-color: #ffffff;
    @media (max-width: 850px) {
      top: 421px;
    }
  }
`;

export const MyName = styled.h1`
  color: #0aa0d0;
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Lato', Helvetica, sans-serif;
  line-height: 1.4;
`;

export const Intro = styled.div`
  color: #eee;
  margin-top: 1.5rem;
  margin-bottom: 1.375rem;
  /* font-family: 'Times New Roman'; */
  /* font-family: 'WWWWWWWWWWWW'; */
  /* font-family: 'Georgia'; v */
  font-family: 'American Typewriter';

  font-size: 1.7rem;
  line-height: 1.5;

  font-weight: 300;
  /* padding-bottom: 90px; */
  /* font-family: "Merriweather",serif; */
`;
// linear-gradient(to bottom right, #4F00BC 10%, #29ABE2 100%)
