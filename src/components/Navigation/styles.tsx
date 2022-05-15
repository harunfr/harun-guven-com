import styled from 'styled-components/macro';
import { Link as ScrollLink } from 'react-scroll';

export const Container = styled.nav<{ isViewingHeader: boolean }>`
  position: sticky;
  max-width: 100%;
  top: 0;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.875rem;
  /* padding-left: 1rem; */
  background-color: ${(props) =>
    props.isViewingHeader ? 'transparent' : '#ffffffe5'};
  border-bottom: ${(props) =>
    props.isViewingHeader ? 'none' : '1px solid #eee'};
  transition: background-color 0.5s ease-in;

  & a {
    color: ${(props) => (props.isViewingHeader ? '#ddd' : '#0AA0D0')};
  }

  & a:hover {
    color: ${(props) => (props.isViewingHeader ? '#fff' : '#147191')};
  }
`;

export const Logo = styled.div`
  color: #eee;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  > * {
    &:last-child {
      padding-right: 0;
    }
  }
`;
export const Link = styled(ScrollLink)`
  text-decoration: none;
  font-family: 'Lato', Helvetica, sans-serif;
  padding: 2rem;
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
`;
