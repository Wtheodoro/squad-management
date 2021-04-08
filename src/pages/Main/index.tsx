import BottomBar from '../../components/BottomBar';
import FootballField from '../../components/FootballField';
import MyTeams from '../../components/MyTeamsSet/MyTeams';
import TopBar from '../../components/TopBar';
import TopFive from '../../components/TopFiveSet/TopFive';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <TopBar />
      
      <div className="content">
        <MyTeams />
        <div className="right-side">
          <TopFive />
          <FootballField />
        </div>
      </div>

      <BottomBar />
    </Container>
  )
}

export default Main;