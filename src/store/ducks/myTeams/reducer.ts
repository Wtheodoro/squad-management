import { MyTeamsEnumTypes, MyTeamsInitialState, TeamType} from './types'

const INITIAL_MYTEAMS_STATE: MyTeamsInitialState = {
    myTeams:[]
}

const reducerMyTeams = (state = INITIAL_MYTEAMS_STATE, action: any) => {
    switch(action.type) {
        case MyTeamsEnumTypes.PATCH_TEAMS:
            const indexOfPatchedItem = state.myTeams.findIndex((e: TeamType) => e.name === action.payload.oldName)
            state.myTeams.splice(indexOfPatchedItem, 1, action.payload.editedTeam)
            return {
                myTeams: [...state.myTeams]
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