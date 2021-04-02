import React from 'react';
import { useSelector } from 'react-redux';
import AllTypesReducer from '../../../store/ducks/AllTypesReducer';
import { TeamType } from '../../../store/ducks/myTeams/types';
import TeamTrack from '../TeamTrack';

import { Container } from './styles';

const TeamsList = () => {

  const myTeams = useSelector((state: AllTypesReducer) => state.reducerMyTeams.myTeams)

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
        {
          myTeams?.map((i: TeamType) => (
            <TeamTrack name={i.name} description={i.description} key={i.name}/>
          ))
        }
      </div>
    </Container>
  )
}

export default TeamsList;