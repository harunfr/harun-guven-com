import styled, { keyframes } from 'styled-components/macro';

const slideLeft = keyframes`
  from {
    transform: translateX(0rem);
  }

  to {
    transform: translateX(-25rem);
  }
`;

export const Container = styled.section`
  position: relative;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 4.5rem;
  width: 65vw;
`;
export const SlidingWrapper = styled.div`
  position: absolute;
  left: 0;
  font-weight: 500;
  color: #eee;
  background-color: #111;
  padding: 0.5rem 0;
  border-top: 5px solid #ffffff;
  border-bottom: 4px solid #ffffff;
  animation: ${slideLeft} 20s linear infinite forwards;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    transform: translateY(150%);
    height: 30%;
    background-color: #111;
    bottom: 0;
    left: 0;
  }
  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    transform: translateY(-145%);
    height: 30%;
    background-color: #111;
    top: 0;
    left: 0;
  }
`;
