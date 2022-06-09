import styled from 'styled-components/macro';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.3rem;
  grid-column: 1 / 4;
  column-gap: 1rem;
  background-color: #0a9fd0cc;
  padding: 0.5rem 0;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
const Link = styled.a`
  color: #ddd;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.34s ease-in-out;

  &:hover {
    color: #c420da;
  }
`;
export const Github = styled(Link)``;
export const Email = styled(Link)``;
export const Linkedin = styled(Link)``;
