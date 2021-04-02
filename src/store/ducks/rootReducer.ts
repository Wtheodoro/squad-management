import { combineReducers } from 'redux'
import reducerMyTeams from './myTeams/reducer'

const createRootReducer = () => combineReducers({
    reducerMyTeams,
})

export default createRootReducer