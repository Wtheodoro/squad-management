import React from 'react';
import GradientButton from '../../GradientButton';
import TeamsList from '../TeamsList';

import { Container } from './styles';

const MyTeams = () => {
  return (
    <Container>
      <div className="top">
        <h1>My Teams</h1>
        <GradientButton> + </GradientButton>
      </div>
      <TeamsList />
    </Container>
  )
}

export default MyTeams;