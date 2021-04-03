export enum MyTeamsEnumTypes {
    GET_TEAMS = '@GET_TEAMS',
    POST_TEAMS = '@POST_TEAMS',
    DELETE_TEAMS = '@DELETE_TEAMS'
}

export interface MyTeamsInitialState {
    myTeams: TeamType[]
}

export interface TeamType {
    name: string
    description?: string
    website?: string
    type: string
    tags?: string | string[]
    athlete?: any
}