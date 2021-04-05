import { combineReducers } from 'redux'
import reducerMyTeams from './myTeams/reducer'
import reducerApiTeams from './teamsFromApi/reducer'

const createRootReducer = () => combineReducers({
    reducerMyTeams,
    reducerApiTeams,
})

export default createRootReducer