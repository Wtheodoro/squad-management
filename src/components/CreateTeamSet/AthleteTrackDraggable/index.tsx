import React from 'react';
import { Container } from './styles';

interface AthleteTrackProps {
  name: string
  age: number
  nacionality: string
  innerRef?: any
  provided?: any
}

const AthleteTrack = (props: AthleteTrackProps) => {

  const { name, age, nacionality, innerRef, provided } = props

  return (
    <Container 
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={innerRef}>
      <div className="name-age">
        <p>Name: <strong>{name}</strong></p>
        <p>Age: <strong>{age}</strong></p>
      </div>
      <p>Nacionality: <strong>{nacionality}</strong></p>
    </Container>
  )
}

export default AthleteTrack;