import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 111px;
  padding: 0 1rem;

  > * {
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
    &:nth-child(even) {
      /* flex-direction: row; */
    }
  }
`;

export const Title = styled.h2`
  position: relative;
  margin: -60px 0 -20px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 1.5px;

  &::after {
    content: '';
    position: absolute;
    border: none;
    border-radius: 3px;
    width: 40px;
    height: 4px;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #0aa0d0;
  }
`;

export const ProjectContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 650px) {
    flex-direction: column !important;
  }
`;
export const ProjectScreenShot = styled.img`
  width: 550px;
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 26px 49px -27px #cccccc;
  }

  @media (max-width: 990px) {
    width: 53vw;
  }
  @media (max-width: 650px) {
    width: 90vw;
  }
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
export const ProjectName = styled.h4`
  align-self: center;
  font-size: 1.25rem;
  color: #0aa0d0;
  font-weight: 400;
`;
export const ProjectLinks = styled.div``;
export const Link = styled.a`
  margin-right: 25px;
  color: #0aa0d0;
  color: '#0AA0D0';
  text-decoration: 'none';
  position: 'relative';
  border-bottom: '1px solid rgba(10,160,208,0.2)';
`;
export const ProjectDescription = styled.p`
  line-height: 1.6;
`;

export const Footer = styled.footer`
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 0.8125rem;
  font-weight: 400;
  font-style: italic;
  color: #777;
  border-top: 1px solid #ccc;
  margin-top: 1.25rem;
`;
