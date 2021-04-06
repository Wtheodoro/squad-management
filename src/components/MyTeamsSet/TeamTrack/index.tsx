import React from 'react';
import { Container } from './styles';
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { loadDeleteMyTeams } from '../../../store/ducks/myTeams/actions';
import { Link } from 'react-router-dom';
import { TeamType } from '../../../store/ducks/myTeams/types';

interface TeamProps {
  team: TeamType
}
const TeamTrack = (props: TeamProps) => {

  const { name, description } = props.team
  const dispatch = useDispatch()

  const deleteTeam = (name: string) => {
    dispatch(loadDeleteMyTeams(name))
  }

  return (
    <Container>
      <div className="team-name">
        {name}
      </div>
      <div className="team-description">
        {description}
        <div className="icons">

          <Link to={{
            pathname:'/edit',
            state: { team: props}
          }}>
            <MdEdit />
          </Link>
          
          <MdDelete onClick={()=>deleteTeam(name)}/>
        </div>
      </div>
    </Container>
  )
}

export default TeamTrack;