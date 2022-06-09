import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
:root {
  /* Text Colors */
  --main-text: #0aa0d0;
}
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
  margin:0 auto;
  display:grid;
  grid-template-columns: minmax(0,190px) 972px minmax(0,204px);
  @media (max-width: 990px) {
    grid-template-columns: 0 minmax(0, 900px) 0;
  };
}
`;
