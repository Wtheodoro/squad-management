import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import ConfigureSquadField from '../../components/CreateTeamSet/ConfigureSquad/ConfigureSquadField';
import GradientButton from '../../components/GradientButton';
import TopBar from '../../components/TopBar';
import { loadPostMyTeams } from '../../store/ducks/myTeams/actions';
import { TeamType } from '../../store/ducks/myTeams/types';
import { club_cast } from '../../utils/clubCast'
import { Container } from './styles';
import AthleteTrack from '../../components/CreateTeamSet/AthleteTrack';
import TagsInput from '../../components/CreateTeamSet/TagsInput';

const AddTeam = () => {
  const [athletes, setAthletes] = useState<any>(club_cast)
  const [tags, setTags] = useState<string[]>(['Ponte preta', 'Macaca', 'TJP'])
  const { register, handleSubmit, formState:{ errors } } = useForm()

  const dispatch = useDispatch()
  const history = useHistory()

  const registerTeam = (team: TeamType) => {
    team.tags = tags
    dispatch(loadPostMyTeams(team))
    history.push('/')
  }

  const checkKeyDown = (e: any) => {
    if (e.code === 'Enter') e.preventDefault()
  }

  const searchAthlete = (e: string) => {
    return club_cast.filter(function(el) {
      return el.name.toLowerCase().indexOf(e) > -1
    })
  }

  const filterAthlete = (e: string) => {
    setAthletes(searchAthlete(e.toLowerCase()))
  }  

  const selectedTags = (tags: any) => {
    setTags(tags)
  }

  return (
    <Container>
      <TopBar />
      <div className="content">
        <div className="top">
          <h1>Create your team</h1>
          <Link to="/">
            <GradientButton>Home</GradientButton>
          </Link>
        </div>

          <form onSubmit={handleSubmit(registerTeam)} onKeyDown={(e) => checkKeyDown(e)}>
          <h2>Team information</h2>

            <div className="team-information">
            <div className="left">
              <div className="label-input">
                <label htmlFor="">Team Name</label><br/>
                <input type="text" {...register("name", { required: true })}/>
                {
                  errors.name &&
                  <p className="error">Team name required</p>
                }
              </div>

              <div className="label-input">
                <label htmlFor="">Description</label><br/>
                <textarea rows={10} cols={40}  {...register("description", { required: true })}/>
                {
                  errors.description &&
                  <p className="error">Team name required</p>
                }
              </div>
          </div>
          
          <div className="right">
            <div className="label-input">
                <label htmlFor="">Team website</label><br/>
                <input type="url" {...register("website", { required: true })}
                />
                {
                  errors.website &&
                  <p className="error">Website required</p>
                }
            </div>

            <div className="label-input">
              <p>Team Type</p>

              <label htmlFor="">Real</label>
              <input type="radio" value="real" checked {...register("type")}/>

              <label htmlFor="">Fantasy</label>
              <input type="radio" value="fantasy" {...register("type")}/>
            </div>

            <div className="label-input">
                <label htmlFor="">Tags</label><br/>
                <TagsInput selectedTags={selectedTags} predefinedTags={tags}/>
            </div>
          </div>
        </div>

            <h2>Configure Squad</h2>
            <div className="configure-squad">
              <div className="left">
                <ConfigureSquadField />
                <GradientButton width="100%">Save</GradientButton>
              </div>
              <div className="right">
                <label htmlFor="">Search Player</label><br/>
                <input type="text" placeholder="ex: Ramiro"
                onChange={(e) => filterAthlete(e.target.value)}
                />
                <div className="search-athlete">
                  {
                    athletes?.map((i: any) => (
                      <AthleteTrack name={i.name} age={i.age} nacionality={i.nacionality} key={i.name}/>
                    ))
                  }
                </div>
              </div>
            </div>

          </form>

        </div>
    </Container>
  )
}

export default AddTeam;