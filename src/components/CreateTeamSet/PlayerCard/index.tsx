import React from 'react';
import SoccerPlayer from '../../../assets/soccer-player.svg'
import { Container, 
  CardBody,
  CountryLabel,
  NameLabel,
  AgeTeamCountry,
 } from './styles';

const PlayerCard: React.FC = () => (
  <Container>

    <CardBody>
      <CountryLabel>Atacante</CountryLabel>

      <img src={SoccerPlayer} alt=""/>
      <AgeTeamCountry>
        <p>27</p>

        <img src="https://imagepng.org/wp-content/uploads/2017/04/bandeira-do-brasil.png" alt="country"/>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Escudo_Oficial_Ponte_Preta.png/491px-Escudo_Oficial_Ponte_Preta.png" alt="team"/>


      </AgeTeamCountry>

      <NameLabel>Walison</NameLabel>
    </CardBody>

  </Container>
)

export default PlayerCard;