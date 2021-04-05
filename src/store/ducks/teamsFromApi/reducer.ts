import { ApiTeamsEnumType, ApiTeamsInitialState } from './types'

const INITIAL_TEAMS_STATE: ApiTeamsInitialState = {
    errorMessage: '',
    loading: false,
    teams: []
}

const reducerApiTeams = (state = INITIAL_TEAMS_STATE, action: any) => {
    switch(action.type) {
        case ApiTeamsEnumType.GET_TEAMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case  ApiTeamsEnumType.GET_TEAMS_SUCCESS:
            return {
                ...state,
                loading: false,
                teams: action.payload
            }
        case ApiTeamsEnumType.GET_TEAMS_FAILURE:
            return {
                ...state,
                errorMessage: 'Error on GET, from reducer.',
                loading: false,
            }
        default:
            return state
    }
}

export default reducerApiTeams