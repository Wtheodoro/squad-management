import { action } from 'typesafe-actions'
import { MyTeamsEnumTypes, TeamActionObjectTpe, TeamType } from './types'

export const loadChangeMyTeam = (payload: TeamActionObjectTpe) => action(MyTeamsEnumTypes.PATCH_TEAMS, payload)
// export const loadChangeMyTeams = (newArray: TeamType[]) => action(MyTeamsEnumTypes.GET_TEAMS, newArray)

export const loadPostMyTeams = (payload: TeamType) => action(MyTeamsEnumTypes.POST_TEAMS, payload)

export const loadDeleteMyTeams = (name: string) => action(MyTeamsEnumTypes.DELETE_TEAMS, name)