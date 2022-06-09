import styled, { keyframes } from 'styled-components/macro';
import { Link as ScrollLink } from 'react-scroll';
import { GiCurledLeaf } from 'react-icons/gi';
import { NavProps } from '../helpers/definitions';

const fadein = keyframes`
  0%{
    opacity: 0;
  }
  20%{
    opacity: 0.7;
  }
  100%{
    opacity: 1;
  }
`;
export const Container = styled.nav<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  max-width: 100%;
  top: 0;
  margin: 0 1rem;
  height: 3.875rem;
  z-index: 3;
  background-color: ${(props) =>
    props.isViewingHeader ? 'transparent' : '#ffffffe5'};
  border-bottom: ${(props) =>
    props.isViewingHeader ? 'none' : '1px solid #eee'};
  transition: background-color 0.5s ease-in;

  & a {
    color: ${(props) => (props.isViewingHeader ? '#ddd' : 'var(--main-text)')};
  }

  & a:hover {
    color: ${(props) => (props.isViewingHeader ? '#fff' : '#147191')};
  }
`;
export const Logo = styled(GiCurledLeaf)`
  font-size: 2rem;
`;
export const LogoWrapper = styled.a`
  cursor: pointer;
  padding: 1rem;
  transition: color 1s ease;
  && {
    color: #19a519;
  }
  &&:hover {
    color: goldenrod;
  }
`;
export const NavList = styled.ul`
  display: flex;
  list-style: none;

  & .last {
    padding-right: 0;
  }
`;
export const ListItem = styled.li`
  position: relative;

  &:hover {
    > .tooltip {
      display: block;
    }
  }
`;
export const Link = styled(ScrollLink)`
  text-decoration: none;
  font-family: 'Lato', Helvetica, sans-serif;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
`;
export const Tooltip = styled.div`
  display: none;
  opacity: 0;
  white-space: nowrap;
  position: absolute;
  border: 1px solid #fff;
  color: #fff;
  background-color: #333;
  top: 160%;
  left: 30%;
  width: auto;
  padding: 0.2rem;
  text-align: center;
  animation: ${fadein} 2s ease 500ms 1 forwards;
`;
