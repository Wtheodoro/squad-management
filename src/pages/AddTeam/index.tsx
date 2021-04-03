import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import BottomBar from '../../components/BottomBar';
import ConfigureSquadField from '../../components/ConfigureSquad/ConfigureSquadField';
import TopBar from '../../components/TopBar';

import { Container } from './styles';

const AddTeam = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const registerTeam = (data: any) => {
    console.log(data)
  }

  return (
    <Container>
      <TopBar />
      <div className="content">
        <h1>Create your team</h1>
        
        <div className="from">
          <form onSubmit={handleSubmit(registerTeam)}>
            <div className="team-information">

            </div>
            <div className="configure-squad">
              <ConfigureSquadField />
            </div>

          </form>
        </div>
        
      </div>
      {/* <BottomBar /> */}
    </Container>
  )
}

export default AddTeam;