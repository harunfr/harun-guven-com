import styled from 'styled-components/macro';

export const Container = styled.header`
  margin-top: -1rem;
  min-height: 550px;
  padding: 0 10px 150px 16px;
  background-color: transparent;

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
  @media (max-width: 525px) {
    margin-top: -3.1rem;
  }
`;
export const MyName = styled.h1`
  color: var(--main-text);
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Lato', Helvetica, sans-serif;
  line-height: 1.4;
`;
export const Intro = styled.div`
  color: #ddd;
  margin-top: 1.5rem;
  margin-bottom: 1.375rem;
  font-family: 'American Typewriter';
  font-size: 1.7rem;
  line-height: 1.5;
  font-weight: 300;

  @media (max-width: 525px) {
    margin-top: 0.35rem;
  }
`;
export const Connections = styled.div`
  display: flex;
  column-gap: 1rem;
`;
const Link = styled.a`
  color: #ddd;
  font-size: 1.3rem;
  text-decoration: underline dotted #ddd;
  margin-top: -1rem;
  cursor: pointer;
  transition: color 1s ease, text-decoration-color 1s ease;

  &:hover {
    color: var(--main-text);
    text-decoration-color: goldenrod;
  }
`;
export const Github = styled(Link)``;
export const Email = styled(Link)``;
