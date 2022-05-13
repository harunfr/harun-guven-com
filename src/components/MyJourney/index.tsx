import React from 'react';

import {
  Container,
  // StackWrapper,
  BoldText,
  Title,
  JourneyWrapper,
  JourneyTitle,
  JourneyBody,
} from './styles';

function Technologies() {
  return (
    <Container>
      <Title>My journey</Title>
      <JourneyWrapper>
        <JourneyTitle>Starting Out</JourneyTitle>
        <JourneyBody>
          <BoldText>2016:</BoldText>
          {' '}
          I graduated from university and completed
          military service.
        </JourneyBody>
        <JourneyBody>
          <BoldText>2017:</BoldText>
          {' '}
          I started working as Chemical Engineer.
        </JourneyBody>
      </JourneyWrapper>
      <JourneyWrapper>
        <JourneyTitle>First Impressions</JourneyTitle>
        <JourneyBody>
          <BoldText>2018:</BoldText>
          {' '}
          I started learning python but after 3
          months of studying, I didn’t found it appealing and quit learning it.
        </JourneyBody>
        <JourneyBody>
          <BoldText>2019:</BoldText>
          {' '}
          I was curious about content creating,
          learned basic image and video editing.
        </JourneyBody>
        <JourneyBody>
          <BoldText>2020:</BoldText>
          {' '}
          Corona virus prime time.
        </JourneyBody>
      </JourneyWrapper>
      <JourneyWrapper>
        <JourneyTitle>Learning Seriously</JourneyTitle>
        <JourneyBody>
          <BoldText>2021 & 2022:</BoldText>
          {' '}
          New years deserve new decisions, so
          I decided learning programming again, but this time I started with
          freeCodeCamp and then continued on The Odin Project. Completed nearly
          all of projects on them.
        </JourneyBody>
      </JourneyWrapper>
    </Container>
  );
}

export default Technologies;
