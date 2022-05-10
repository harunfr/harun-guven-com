import React from 'react';

// import Projects from './components/Projects';
import GlobalStyle from './styles/global';
import MainContainer from './styles/MainContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <nav>
          <div className="my-necessary-icon">H + G</div>
          <ul>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <header>
          <h1 className="my-name">Harun Guven</h1>
          <div className="intro">
            Self-taught software developer. Loves gardening, distilling &
            programming. I’m passionate about learning new things, I love
            JavaScript and I am also interested in other parts of software
            developments.
          </div>
        </header>
        <main>
          <section className="languages & tools">
            <div className="languages">
              <span>Languages:</span>
              {' '}
              Typescript, Javascript.
            </div>
            <div className="front-end">
              <span>FrontEnd:</span>
              {' '}
              HTML, CSS, Webpack, React.
            </div>
            <div className="others-and-tools">
              <span>Others & Tools:</span>
              {' '}
              MongoDB, Express, Node, Git, Figma,
              VS Code.
            </div>
          </section>
          <section>my projects projects.map(...): JSX</section>
          <section className="my-journey">
            <h2>My journey</h2>
            <div className="starting-out">
              <h3>Starting Out</h3>
              <div>
                <span>2016:</span>
                {' '}
                I graduated from university and completed
                military service.
              </div>
              <div>
                <span>2017:</span>
                {' '}
                I started working as Chemical Engineer.
              </div>
            </div>
            <div className="starting-out">
              <h3>First Impressions</h3>
              <div>
                <span>2018:</span>
                {' '}
                I started learning python but after 3 months
                of studying I didn’t found it appealing and quit learning it.
                2021 & 2022: New years deserve new decisions, so I decided
                learning programming again, but this time I started with
                freeCodeCamp and then continued on The Odin Project. Completed
                nearly all of projects on them.
              </div>
              <div>
                <span>2019:</span>
                {' '}
                I was curious about content creating, learned
                basic image and video editing.
              </div>
              <div>
                <span>2020:</span>
                {' '}
                Corona virus prime time.
              </div>
            </div>
            <div className="starting-out">
              <h3>Learning Seriously</h3>
              <div>
                <span>2021 & 2022:</span>
                {' '}
                New years deserve new decisions, so I
                decided learning programming again, but this time I started with
                freeCodeCamp and then continued on The Odin Project. Completed
                nearly all of projects on them.
              </div>
            </div>
          </section>
          <footer>contact</footer>
        </main>
      </MainContainer>
    </>
  );
}

export default App;
