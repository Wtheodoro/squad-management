import api from './api'
import { LIVE_AUTH, TEST_AUTH } from '../utils/KEYS'

const TeamService = {
    getTeams: (id: number) => api.get(`/times/${id}`,
    {headers: {

        // Test autorizarion without limit but with only one return
        'Authorization': `Bearer ${TEST_AUTH}`

        // Live authorization bring real result but only 100 requisitions/day
        // you should use your own key
        // 'Authorization': `Bearer ${LIVE_AUTH}`
    }})
}

export default TeamService