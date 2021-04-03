import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import BottomBar from '../../components/BottomBar';
import ConfigureSquadField from '../../components/ConfigureSquad/ConfigureSquadField';
import GradientButton from '../../components/GradientButton';
import TopBar from '../../components/TopBar';
import { loadPostMyTeams } from '../../store/ducks/myTeams/actions';
import { TeamType } from '../../store/ducks/myTeams/types';

import { Container } from './styles';

const AddTeam = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const registerTeam = (team: TeamType) => {
    dispatch(loadPostMyTeams(team))
  }

  return (
    <Container>
      <TopBar />
      <div className="content">
        <h1>Create your team</h1>

        <div className="from">

          <form onSubmit={handleSubmit(registerTeam)}>
            <div className="team-information">

              <div>
                <label htmlFor="">Team Name</label><br/>
                <input type="text" {...register("name")}/>
              </div>

              <div>
                <label htmlFor="">Description</label><br/>
                <input type="text" {...register("description")}/>
              </div>

              <div>
                <label htmlFor="">Team website</label><br/>
                <input type="text" placeholder="only if it exists" {...register("website")}/>
              </div>

              <div>
                <p>Team Type</p>

                <label htmlFor="">Real</label>
                <input type="radio" value="real" {...register("type")}/>

                <label htmlFor="">Fantasy</label>
                <input type="radio" value="fantasy" {...register("type")}/>
              </div>
              

            </div>
            <div className="configure-squad">
              <div className="left">
                <ConfigureSquadField />
                <GradientButton width="100%">Enviar</GradientButton>
                <Link to='/'>
                  <GradientButton>Voltar</GradientButton>
                </Link>

              </div>
            </div>

          </form>

        </div>
        
      </div>
      {/* <BottomBar /> */}
    </Container>
  )
}

export default AddTeam;