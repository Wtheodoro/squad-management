import React from 'react';

import { Container } from './styles';

interface TopFiveProps {
  nome: string
  escudo: string
}

const TopFiveTrack = (props: TopFiveProps) => {
  const { nome, escudo } = props
  return (
    <Container>
      <div className="name">
        <p>{nome}</p>
      </div>
      <div className="constant">
        <img src={escudo} alt={nome}/>
      </div>
    </Container>
  )
}

export default TopFiveTrack;