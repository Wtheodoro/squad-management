import React from 'react';

import { Container } from './styles';

const ThreeFourThree = () => {
  return (
    <Container>
      <div className="atk">
          <div className="player nine">+</div>
          <div className="player ten">+</div>
          <div className="player eleven">+</div>
        </div> 

        <div className="middle-two">
          <div className="player eight">+</div>
        </div>

        <div className="middle-one">
          <div className="player five">+</div>
          <div className="player six">+</div>
          <div className="player seven">+</div>
        </div>

        <div className="def">
          <div className="player two">+</div>
          <div className="player three">+</div>
          <div className="player four">+</div>
        </div>

        <div className="player one">+</div>
    </Container>
  )
}

export default ThreeFourThree;