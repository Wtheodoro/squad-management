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
  const [count, setCount] = useState<any>(0)

  useEffect(() => {

    if (!list) {
      setList(myTeams)   
    }

  }, [count])


  const sortByName = () => {
    if (myTeams) {
      setList(sort(myTeams, 'name'))
      setCount(count+1)
    }
  }

  const sortByDescription = () => {
    if (myTeams) {
      setList(sort(myTeams, 'description'))
      setCount(count+1)
    }
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
            <TeamTrack team={i} key={i.name}/>
          ))
        }
      </div>
    </Container>
  )
}

export default TeamsList;