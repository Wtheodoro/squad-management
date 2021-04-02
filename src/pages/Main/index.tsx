import React from 'react';
import BottomBar from '../../components/BottomBar';
import MyTeams from '../../components/MyTeamsSet/MyTeams';
import TopBar from '../../components/TopBar';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <TopBar />
      
      <div className="content">
        <MyTeams />
        <MyTeams />
      </div>

      <BottomBar />
    </Container>
  )
}

export default Main;