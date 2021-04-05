import { put, call } from 'redux-saga/effects'
import TeamService from '../../../services/teams-service'
import { ApiTeamsData } from './types'
import { loadGetTeamsSuccess, loadGetTeamsFailure } from './actions'
import randomNumbers from '../../../utils/randomNumber'

export function* getApiTeams() {
    try {
        const response0: ApiTeamsData = yield call(TeamService.getTeams, randomNumbers[0])
        const response1: ApiTeamsData = yield call(TeamService.getTeams, randomNumbers[1])
        const response2: ApiTeamsData = yield call(TeamService.getTeams, randomNumbers[2])
        const response3: ApiTeamsData = yield call(TeamService.getTeams, randomNumbers[3])
        const response4: ApiTeamsData = yield call(TeamService.getTeams, randomNumbers[4])
     
        yield put(loadGetTeamsSuccess([response0.data, response1.data, response2.data, response3.data, response4.data]))
    } catch (error) {
        console.log(error)
        yield put(loadGetTeamsFailure())
    }
}