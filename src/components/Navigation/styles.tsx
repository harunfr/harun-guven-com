import styled from 'styled-components/macro';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.nav`
  position: sticky;
  width: 100%;
  top: 0;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.875rem;
`;
export const Wrapper = styled(ItemWrapper)``;

//
// page text
//

export const Logo = styled.div`
  // change this to img or smt.
  color: #eee;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const ListItem = styled.li``;
export const Link = styled.a`
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
