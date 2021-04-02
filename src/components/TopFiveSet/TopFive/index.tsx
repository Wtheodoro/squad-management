import React from 'react';
import TopFiveList from '../TopFiveList';

import { Container } from './styles';

const TopFive = () => {
  return (
    <Container>
      <div className="top">
        <h1>Top 5</h1>
      </div>
      <TopFiveList />
    </Container>
  )
}

export default TopFive;