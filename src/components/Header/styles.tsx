import styled from 'styled-components';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.div`
  background-color: rgba(229, 255, 0, 0.199);
  display: grid;
  grid-template-columns: 15rem 0.95fr; /* there can be better solution using align and justify-content: ; */
  justify-content: space-between;
  /* grid-template-columns: minmax(300px, max-content); */
`;
export const Wrapper = styled(ItemWrapper)`
  position: relative;
  display: flex;
  gap: 0.4rem;
`;
export const Avatar = styled.img`
  width: 15rem;
  border: 2px solid blue;
  background-color: azure;
  opacity: 1;
`;

export const Name = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: red;
  font-size: 1.5rem;
`;

export const AboutMe = styled.div`
  /* border: 3px solid pink; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Intro = styled.p``;
export const MySocials = styled.span``;
export const LanguagesAndTools = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Languages = styled.div`
  display: flex;
`;
export const Tools = styled.div`
  /* display: flex;
  gap: 0.4rem; */
  font-size: 1rem;
`;
