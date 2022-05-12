import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 111px;

  border: 5px solid goldenrod;
  > * {
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
    &:nth-child(even) {
      /* flex-direction: row; */
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 469px;
    left: 0px;
    height: 130px;
    width: 99vw;
    z-index: 2;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background-color: gray;
    background-color: #ffffff;
  }
`;
export const ProjectContainer = styled.article`
  border: 1px solid greenyellow;
  display: flex;
  align-items: center;
`;
export const ProjectScreenShot = styled.img`
  width: 550px;
  /* max-height: 285px; */
  @media (max-width: 1015px) {
    width: 53vw;
  } ;
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 4px solid brown; */
  row-gap: 30px;
  padding: 16px;
  /* justify-content: space-between; */
`;
export const ProjectName = styled.h4`
  align-self: center;
  font-size: 1.25rem;
  color: #0aa0d0;
  font-weight: 400;
`;
export const ProjectLinks = styled.div``;
export const Link = styled.a`
  /* display: block; */
  margin-right: 25px;
  color: #0aa0d0;
  color: '#0AA0D0';
  text-decoration: 'none';
  position: 'relative';
  border-bottom: '1px solid rgba(10,160,208,0.2)';
`;
export const ProjectDescription = styled.p``;

export const Footer = styled.footer`
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 0.8125rem;
  font-weight: 400;
  font-style: italic;
  color: #777;
  border-top: 1px solid #ccc;
  margin-top: 1.25rem;
`;
