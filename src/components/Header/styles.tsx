import styled from 'styled-components/macro';
import testBg from '../../assets/testBg.png';

export const Container = styled.header`
  margin-top: -100px;
  height: 550px;
  padding: 120px 0 150px 0;
  background-color: transparent;
  color: #f00;

  /* &::after {
    clear: both;
    content: " ";
    display: table;
  }
  &::before {
    content: " ";
    display: table;
  } */
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
  font-size: 1.5625rem;
  line-height: 2.5rem;
  font-weight: 300;
  /* font-family: "Merriweather",serif; */
`;
// linear-gradient(to bottom right, #4F00BC 10%, #29ABE2 100%)
