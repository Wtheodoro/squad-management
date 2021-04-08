import React from 'react';
import ThreeFourThree from '../formations/3-4-3';

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
        <ThreeFourThree squad={props.squad}/>        
      </div>

      <div className="line"/>
      <div className="circle"/>
    </Container>
  )
}

export default ConfigureSquadField;