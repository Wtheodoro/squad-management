import { action } from 'typesafe-actions'
import { MyTeamsEnumTypes, TeamType } from './types'

export const loadGetMyTeams = () => action(MyTeamsEnumTypes.GET_TEAMS)

export const loadPostMyTeams = (payload: TeamType) => action(MyTeamsEnumTypes.POST_TEAMS, payload)

export const loadDeleteMyTeams = (name: string) => action(MyTeamsEnumTypes.DELETE_TEAMS, name)