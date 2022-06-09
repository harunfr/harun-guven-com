import React from 'react';

import {
  Container, Bold, MainTitle, Journey, Title, Body,
} from './styles';

function Technologies(): JSX.Element {
  return (
    <Container id="about">
      <MainTitle>My journey</MainTitle>
      <Journey>
        <Title>Starting Out</Title>
        <Body>
          <Bold>2016:</Bold>
          {' '}
          I graduated from university and completed military
          service.
        </Body>
        <Body>
          <Bold>2017:</Bold>
          {' '}
          I started working as Chemical Engineer.
        </Body>
      </Journey>
      <Journey>
        <Title>First Impressions</Title>
        <Body>
          <Bold>2018:</Bold>
          {' '}
          I started learning python but after 3 months of
          studying, I didn’t find it appealing and quit learning it.
        </Body>
        <Body>
          <Bold>2019:</Bold>
          {' '}
          I was curious about content creating, learned basic
          image and video editing.
        </Body>
        <Body>
          <Bold>2020:</Bold>
          {' '}
          Corona virus prime time.
        </Body>
      </Journey>
      <Journey>
        <Title>Learning Seriously</Title>
        <Body>
          <Bold>2021 & 2022:</Bold>
          {' '}
          New years deserve new decisions, so I
          decided learning programming again, but this time I started with
          freeCodeCamp and then continued on The Odin Project. Completed nearly
          all of projects on them.
        </Body>
      </Journey>
    </Container>
  );
}

export default Technologies;
