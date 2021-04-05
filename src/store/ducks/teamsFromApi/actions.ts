import { action } from 'typesafe-actions'
import { ApiTeamsEnumType, ApiTeams } from './types'

export const loadGetTeamsRequest = () => action(ApiTeamsEnumType.GET_TEAMS_REQUEST)

export const loadGetTeamsSuccess = (payload: ApiTeams[]) => action(ApiTeamsEnumType.GET_TEAMS_SUCCESS, payload)

export const loadGetTeamsFailure = () => action(ApiTeamsEnumType.GET_TEAMS_FAILURE)