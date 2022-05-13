import styled from 'styled-components/macro';
import testBg from '../../assets/testBg.png';
//
// import helpers
//

export const Container = styled.header`
  margin-top: -100px;
  /* border: 1px solid blue; */
  height: 550px;
  padding: 120px 0 150px 0;
  background-color: transparent;
  color: #f00;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 600px;
    background: linear-gradient(to bottom right, #4f00bc 10%, #29abe2 100%);
  }
  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 600px;
    background: url(${testBg});
    background-repeat: repeat;
  }
`;
//
// helpers here if needed.
//
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
  font-size: 1.5625rem;
  line-height: 2.5rem;
  font-weight: 300;
  /* font-family: "Merriweather",serif; */
`;
// linear-gradient(to bottom right, #4F00BC 10%, #29ABE2 100%)
