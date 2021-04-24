import React from 'react';
import SoccerPlayer from '../../../assets/soccer-player.svg'
import { Container, 
  CardBody,
  PositionLabel,
  NameLabel,
  AgeTeamCountry,
} from './styles';

interface IPlayerCardProps {
  name: string
  age: string
  position: string
}

const PlayerCard: React.FC<IPlayerCardProps> = ({ name, age, position }) => {

  const frstName = (fullName: string) => {
    const splitName = fullName.split(" ")
    return splitName[0]
  }

  return (
    <Container>

      <CardBody>
        <PositionLabel>{position}</PositionLabel>

        <img src={SoccerPlayer} alt=""/>
        <AgeTeamCountry>
          <p>{age}</p>

          <img src="https://imagepng.org/wp-content/uploads/2017/04/bandeira-do-brasil.png" alt="country"/>

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Escudo_Oficial_Ponte_Preta.png/491px-Escudo_Oficial_Ponte_Preta.png" alt="team"/>


        </AgeTeamCountry>

        <NameLabel>{frstName(name)}</NameLabel>
      </CardBody>

    </Container>
  )
}
export default PlayerCard;