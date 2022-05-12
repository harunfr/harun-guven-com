import React from 'react';

import GlobalStyle from './styles/global';
import MainContainer from './styles/MainContainer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Technologies from './components/Technologies';
import MyJourney from './components/MyJourney';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <GlobalStyle />

      <MainContainer>
        <Navigation />
        <Header />

        {/* <main> */}
        <Projects />
        <Technologies />
        <MyJourney />
        {/* </main> */}
        <footer>contact</footer>
      </MainContainer>
    </>
  );
}

export default App;
