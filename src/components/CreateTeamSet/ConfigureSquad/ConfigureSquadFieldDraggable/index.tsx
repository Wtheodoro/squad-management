import React from 'react';
import ThreeFourThreeDraggable from '../formations/3-4-3Draggable';

import { Container } from './styles';

interface ConfigureSquadFieldProps {
  squad?: any
}

const ConfigureSquadField = (props: ConfigureSquadFieldProps) => {
  // if (props.squad) {
  //   console.log('field',props.squad)
  // }
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