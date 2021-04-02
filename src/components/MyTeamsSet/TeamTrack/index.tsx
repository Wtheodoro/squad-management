import React from 'react';
import { Container } from './styles';
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { loadDeleteMyTeams } from '../../../store/ducks/myTeams/actions';

interface TeamProps {
  name: string
  description: string
}
const TeamTrack = (props: TeamProps) => {

  const { name, description } = props
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
          <MdEdit />
          <MdDelete onClick={()=>deleteTeam(name)}/>
        </div>
      </div>
    </Container>
  )
}

export default TeamTrack;