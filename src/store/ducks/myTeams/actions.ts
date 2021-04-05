import { action } from 'typesafe-actions'
import { MyTeamsEnumTypes, TeamType } from './types'

export const loadChangeMyTeams = (newArray: any) => action(MyTeamsEnumTypes.GET_TEAMS, newArray)
// export const loadChangeMyTeams = (newArray: TeamType[]) => action(MyTeamsEnumTypes.GET_TEAMS, newArray)

export const loadPostMyTeams = (payload: TeamType) => action(MyTeamsEnumTypes.POST_TEAMS, payload)

export const loadDeleteMyTeams = (name: string) => action(MyTeamsEnumTypes.DELETE_TEAMS, name)