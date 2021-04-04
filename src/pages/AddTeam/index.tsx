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

        {/* <div className="form"> */}

          <form onSubmit={handleSubmit(registerTeam)}>
          <h2>Team information</h2>

            <div className="team-information">
            <div className="left">
              <div className="label-input">
                <label htmlFor="">Team Name</label><br/>
                <input type="text" {...register("name")}/>
              </div>

              <div className="label-input">
                <label htmlFor="">Description</label><br/>
                <textarea rows={10} cols={40}  {...register("description")}></textarea>
              </div>
          </div>
          
          <div className="right">
            <div className="label-input">
                <label htmlFor="">Team website</label><br/>
                <input type="url" placeholder="only if it exists" {...register("website")}/>
            </div>

            <div className="label-input">
              <p>Team Type</p>

              <label htmlFor="">Real</label>
              <input type="radio" value="real" {...register("type")}/>

              <label htmlFor="">Fantasy</label>
              <input type="radio" value="fantasy" {...register("type")}/>
            </div>

            <div className="label-input">
                <label htmlFor="">Tags</label><br/>
                <textarea rows={6} cols={40} {...register("website")}></textarea>
            </div>
          </div>

              
              

            </div>
          <h2>Configure Squad</h2>

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
        
      {/* </div> */}
      {/* <BottomBar /> */}
    </Container>
  )
}

export default AddTeam;