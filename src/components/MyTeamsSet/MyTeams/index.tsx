import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '../../GradientButton';
import TeamsList from '../TeamsList';

import { Container } from './styles';

const MyTeams = () => {
  return (
    <Container>
      <div className="top">
        <h1>My Teams</h1>

        <Link to='/create'>
          <GradientButton> + </GradientButton>
        </Link>
      </div>
      <TeamsList />
    </Container>
  )
}

export default MyTeams;