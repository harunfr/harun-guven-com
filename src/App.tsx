import React from 'react';

import Header from './components/Header';
import Projects from './components/Projects';
import GlobalStyle from './styles/global';
import MainContainer from './styles/MainContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Projects />
      </MainContainer>
    </>
  );
}

export default App;
