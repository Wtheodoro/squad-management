import React from 'react';
import TeamTrack from '../TeamTrack';

import { Container } from './styles';

const TeamsList = () => {
  return (
    <Container>
      <div className="top-list">
        <div className="name">
          <p>Name</p>
        </div>
        <div className="description">
          <p>Description</p>
        </div>
      </div>
      <div className="bottom-list">
        <TeamTrack />
        <TeamTrack />
        <TeamTrack />
        <TeamTrack />
        <TeamTrack />
      </div>
    </Container>
  )
}

export default TeamsList;