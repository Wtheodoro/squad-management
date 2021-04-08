import ThreeFourThreeDraggable from '../formations/3-4-3Draggable';

import { Container } from './styles';

interface ConfigureSquadFieldProps {
  squad?: any
}

const ConfigureSquadField = (props: ConfigureSquadFieldProps) => {
  return (
    <Container>
      <div className="squad">
        <ThreeFourThreeDraggable squad={props.squad}/>        
      </div>

      <div className="line"/>
      <div className="circle"/>
    </Container>
  )
}

export default ConfigureSquadField;