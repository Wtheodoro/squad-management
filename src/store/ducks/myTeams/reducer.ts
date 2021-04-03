import { MyTeamsEnumTypes, MyTeamsInitialState, TeamType} from './types'

const time1 = {
    name: 'Walison Futebol Clube',
    description: 'Time de pernas de pal',
    website: 'www.faketime.com',
    type: 'Fantasy'
}

const time2 = {
    name: 'Ponte preta',
    description: 'Melhor time do interior',
    website: 'www.pontepreta.com',
    type: 'Real'
}

const time3 = {
    name: 'Tabajara',
    description: 'A só pra ser primeiro',
    website: 'www.cacetaeplanta.com',
    type: 'Fantas'
}


const INITIAL_MYTEAMS_STATE: MyTeamsInitialState = {
    myTeams:[time1, time2, time3]
}

const reducerMyTeams = (state = INITIAL_MYTEAMS_STATE, action: any) => {
    switch(action.type) {
        case MyTeamsEnumTypes.GET_TEAMS:
            return {
                myTeams: action.payload
            }
        case MyTeamsEnumTypes.POST_TEAMS:
            return {
                myTeams: [...state.myTeams, action.payload]
            }
        case MyTeamsEnumTypes.DELETE_TEAMS:
            const indexOfItem = state.myTeams.findIndex((e: TeamType) => e.name === action.payload)
            state.myTeams.splice(indexOfItem, 1)
            return {
                myTeams: [...state.myTeams]
            }
        default:
            return state
    }
}

export default reducerMyTeams