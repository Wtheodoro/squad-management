import { TeamType } from "../store/ducks/myTeams/types"

const sort = (teams: TeamType[], sortParam: string): TeamType[] => {
    for (let j = 0; j < teams.length - 1; j++) {
        let max_obj = teams[j]
        let max_location = j

        let max = getMaxTeamObject(teams, j, sortParam)
        max_obj = max.max_obj
        max_location = max.max_index

        teams[max_location] = teams[j]
        teams[j] = max_obj
    }
    return teams
}

const getMaxTeamObject = (arr: any, start: any, param: any) => {
    let maximum = arr[start]
    let max_location = start

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i][param] < maximum[param]) {
            maximum = arr[i]
            max_location = i
        }
    }
    return {
        max_obj: maximum,
        max_index: max_location
    }
}

export default sort