import React from 'react';
import ThreeFourThree from '../formations/3-4-3';

import { Container } from './styles';

const ConfigureSquadField = () => {
  return (
    <Container>
      <div className="squad">
        <ThreeFourThree/>        
      </div>

      <div className="line"/>
      <div className="circle"/>
    </Container>
  )
}

export default ConfigureSquadField;