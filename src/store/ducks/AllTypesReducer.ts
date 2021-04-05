import { MyTeamsInitialState } from './myTeams/types'
import { ApiTeamsInitialState } from './teamsFromApi/types'

interface AllTypesReducer {
    reducerMyTeams: MyTeamsInitialState
    reducerApiTeams: ApiTeamsInitialState
}

export default AllTypesReducer