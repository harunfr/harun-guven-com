import React, { useEffect, useState } from 'react';

import GlobalStyle from './styles/global';
import MainContainer from './styles/MainContainer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Technologies from './components/Technologies';
import MyJourney from './components/MyJourney';
import Projects from './components/Projects';

function App() {
  // polygon height: 130;
  const [isViewingHeader, setIsViewingHeader] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 410) {
        setIsViewingHeader(false);
      } else {
        setIsViewingHeader(true);
      }
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isViewingHeader]);

  return (
    <>
      <GlobalStyle />

      <MainContainer>
        <Navigation isViewingHeader={isViewingHeader} />
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
