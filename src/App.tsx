import React, { useEffect, useState } from 'react';

import GlobalStyle from './styles/global';
import MainContainer from './styles/MainContainer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Technologies from './components/Technologies';
import MyJourney from './components/MyJourney';
import Projects from './components/Projects';
import Parallax from './components/Parallax';

function App() {
  // console.log('I am rendered --> APPPPPP');

  // polygon height: 130;
  const [isViewingHeader, setIsViewingHeader] = useState(true);
  const [cursorMovement, setCursorMovement] = useState({
    deltaX: 0,
    deltaY: 0,
  });

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

  /// //////////////

  useEffect(() => {
    const onMouseMove = (event: any) => {
      const middleX = event.view.innerWidth / 2;
      const middleY = event.view.innerHeight / 2;
      // console.log(event);
      const deltaX = middleX - event.pageX;
      const deltaY = middleY - event.pageY;
      setCursorMovement({ deltaX, deltaY });
    };
    // clean up code
    window.removeEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [cursorMovement]);

  /// //////////

  return (
    <>
      <GlobalStyle />

      <MainContainer>
        <Parallax
          verticalMove={cursorMovement.deltaX}
          horizontalMove={cursorMovement.deltaY}
        />
        <Navigation isViewingHeader={isViewingHeader} />
        <Header />
        {/* <main> */}
        <Projects />
        <Technologies />
        <MyJourney />
        {/* </main> */}
        <footer id="contact">contact</footer>
      </MainContainer>
    </>
  );
}

export default App;
