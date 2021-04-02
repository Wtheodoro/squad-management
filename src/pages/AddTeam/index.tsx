import React from 'react';
import BottomBar from '../../components/BottomBar';
import TopBar from '../../components/TopBar';
import { Container } from '../../components/TopBar/styles';

// import { Container } from './styles';

const AddTeam = () => {
  return (
    <Container>
      <TopBar />
      <h1>hi from addTeam</h1>
      <BottomBar />
    </Container>
  )
}

export default AddTeam;