import api from './api'

const TeamService = {
    getTeams: (id: number) => api.get(`/times/${id}`,
    {headers: {
        // Test autorizarion without limit but with only one return
        // 'Authorization': `Bearer test_46659640c665d83009863d2044f2e7`

        // Live authorization bring real result but only 100 requisitions/day
        // That one is mine you should use your own key
        'Authorization': `Bearer live_2f970acbcaa028b7998045708f54a2`
    }})
}

export default TeamService