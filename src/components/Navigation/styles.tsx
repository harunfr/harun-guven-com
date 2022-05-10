import styled from 'styled-components/macro';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.nav`
  position: fixed;
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
`;

export const NavLinks = styled.ul`
  // change this to img or smt.
  display: flex;
  gap: 2rem;
  list-style: none;
  text-transform: uppercase;
`;

export const Link = styled.li``;
