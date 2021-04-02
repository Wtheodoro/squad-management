import React from 'react';
import { Container } from './styles';
import { MdDelete, MdEdit } from "react-icons/md";


const TeamTrack = () => {
  return (
    <Container>
      <div className="team-name">
        Ponte Preta
      </div>
      <div className="team-description">
        Time da macaca
        <div className="icons">
          <MdDelete/>
          <MdEdit />
        </div>
      </div>
    </Container>
  )
}

export default TeamTrack;