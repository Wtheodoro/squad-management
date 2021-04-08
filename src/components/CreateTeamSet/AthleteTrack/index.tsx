import { Container } from './styles';

interface AthleteTrackProps {
  name: string
  age: number
  nacionality: string
}

const AthleteTrack = (props: AthleteTrackProps) => {

  const { name, age, nacionality } = props

  return (
    <Container>
      <div className="name-age">
        <p>Name: <strong>{name}</strong></p>
        <p>Age: <strong>{age}</strong></p>
      </div>
      <p>Nacionality: <strong>{nacionality}</strong></p>
    </Container>
  )
}

export default AthleteTrack;