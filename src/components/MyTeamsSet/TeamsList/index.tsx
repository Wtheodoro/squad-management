import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllTypesReducer from '../../../store/ducks/AllTypesReducer';
import { TeamType } from '../../../store/ducks/myTeams/types';
import TeamTrack from '../TeamTrack';
import { TiArrowUnsorted } from "react-icons/ti";
import { Container } from './styles';
import sort from '../../../hooks/sortHook';

const TeamsList = () => {
  const myTeams = useSelector((state: AllTypesReducer) => state.reducerMyTeams.myTeams)
  const [list, setList] = useState<TeamType[]>()

  useEffect(() => {
    setList(myTeams)
  }, [])


  const sortByName = () => {
    setList(sort(myTeams, 'name'))
  }

  const sortByDescription = () => {
    setList(sort(myTeams, 'description'))
  }

  return (
    <Container>
      <div className="top-list">
        <div className="name">
          <p>Name</p> <TiArrowUnsorted onClick={sortByName}/>
        </div>
        <div className="description">
          <p>Description</p> <TiArrowUnsorted onClick={sortByDescription}/>
        </div>
      </div>
      
      <div className="bottom-list">
        {
          list?.map((i: TeamType) => (
            <TeamTrack name={i.name} description={i.description} key={i.name}/>
          ))
        }
      </div>
    </Container>
  )
}

export default TeamsList;

function loadChangeMyTeams(newList: void): any {
  throw new Error('Function not implemented.');
}
