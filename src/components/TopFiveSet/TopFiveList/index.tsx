import React from 'react';
import TopFiveTrack from '../TopFiveTrack';

import { Container } from './styles';

const TopFiveList = () => {
  return (
    <Container>
      <div className="left-list">
        <p>Highest avg age</p>
        <div className="list">
          <TopFiveTrack />
          <TopFiveTrack />
          <TopFiveTrack />
          <TopFiveTrack />
          <TopFiveTrack />
        </div>
      </div>

      <div className="right-list">
        <p>Lowest avg age</p>
        <div className="list">
          <TopFiveTrack />
          <TopFiveTrack />
          <TopFiveTrack />
          <TopFiveTrack />
          <TopFiveTrack />
        </div>
      </div>
    </Container>
  )
}

export default TopFiveList;