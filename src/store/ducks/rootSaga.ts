import { all, takeLatest } from 'redux-saga/effects'
import { ApiTeamsEnumType } from './teamsFromApi/types'
import { getApiTeams } from './teamsFromApi/saga'

export default function* rootSaga(): any {
    return yield all ([
        takeLatest(ApiTeamsEnumType.GET_TEAMS_REQUEST, getApiTeams)
    ])
}