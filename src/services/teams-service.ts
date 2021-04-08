import api from './api'
// import { LIVE_AUTH, TEST_AUTH } from '../utils/KEYS'

const TeamService = {
    getTeams: (id: number) => api.get(`/times/${id}`,
    {headers: {

        'Authorization': `Bearer test_46659640c665d83009863d2044f2e7`

        // Test autorizarion without limit but with only one return
        // 'Authorization': `Bearer ${TEST_AUTH}`

        // Live authorization bring real result but only 100 requisitions/day
        // you should use your own key
        // 'Authorization': `Bearer ${LIVE_AUTH}`
    }})
}

export default TeamService