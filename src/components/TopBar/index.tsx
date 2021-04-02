import React from 'react';
import { Container } from './styles';
import { GiSoccerKick } from 'react-icons/gi'

const TopBar = () => {
  return (
    <Container>
      <div className="header-content">
        <div className="left">
          <GiSoccerKick />
          <p>Squad Manegement Tool</p>
        </div>
        <div className="right">
          <p>Oliver Sykes</p>
        </div>
      </div>
    </Container>
  )
}

export default TopBar;