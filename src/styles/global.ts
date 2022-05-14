import { createGlobalStyle } from 'styled-components/macro';

import bgGrid from '../assets/future-grid.webp';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
#root{
  position:relative;
  /* overflow-y: hidden; */
  margin:0 auto;
  display:grid;
  grid-template-columns: minmax(0,190px) 972px minmax(0,204px);
  @media (max-width: 920px) {
    grid-template-columns: 0 minmax(0, 900px) 0;
  };

  /* background-color: #2222ff40; */


  /* &::before {
    content: '';
    position: absolute;
    height: 100%;
    width:100%;
    background-color: blue;
    z-index: -1;
    background-image: url("${bgGrid}");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
  }
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width:100%;
    z-index: -1;

  } */
}
`;
