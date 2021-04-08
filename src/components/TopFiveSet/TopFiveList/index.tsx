import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllTypesReducer from '../../../store/ducks/AllTypesReducer';
import { loadGetTeamsRequest } from '../../../store/ducks/teamsFromApi/actions';
import TopFiveTrack from '../TopFiveTrack';
import { ApiTeams } from '../../../store/ducks/teamsFromApi/types'
import { Container } from './styles';

const TopFiveList = () => {
  const myTeams = useSelector((state: AllTypesReducer) => state.reducerApiTeams.teams)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGetTeamsRequest())
  }, [])

  return (
    <Container>
      <div className="left-list">
        <p>Highest avg age</p>
        <div className="list">
          {
            myTeams?.map((team: ApiTeams) => (
             <TopFiveTrack nome={team.nome} escudo={team.escudo}/>
            ))
          }
        </div>
      </div>

      <div className="right-list">
        <p>Lowest avg age</p>
        <div className="list">
          {
            myTeams?.reverse().map((team: ApiTeams) => (
             <TopFiveTrack nome={team.nome} escudo={team.escudo}/>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default TopFiveList;