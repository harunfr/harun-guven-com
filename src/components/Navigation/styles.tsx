import styled from 'styled-components/macro';
import { Link as ScrollLink } from 'react-scroll';

import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.nav<{ isViewingHeader: boolean }>`
  overflow: auto;
  position: sticky;
  z-index: 3;
  width: 100%;
  top: 0;
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.875rem;
  padding: 0 1rem;
  background-color: ${(props) =>
    props.isViewingHeader ? 'transparent' : '#ffffffe5'};
  border-bottom: ${(props) =>
    props.isViewingHeader ? 'none' : '1px solid #eee'};
  transition: background-color 0.5s ease-in;

  & a {
    color: ${(props) => (props.isViewingHeader ? '#eee' : '#0AA0D0')};
  }
`;
export const Wrapper = styled(ItemWrapper)``;

//
// page text
//

export const Logo = styled.div`
  // change this to img or smt.
  color: #eee;
  /* padding-left: 1rem; */
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const ListItem = styled.li``;
export const Link = styled(ScrollLink)`
  color: #eee;
  text-decoration: none;
  border: none;
  font-family: 'Lato', Helvetica, sans-serif;
  /* padding: 18px 14px; */
  display: inline-block;
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: uppercase;
`;
