export enum MyTeamsEnumTypes {
    PATCH_TEAMS = '@PATCH_TEAMS',
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
    tags?: string[]
    athlete?: any
}

export interface TeamActionObjectTpe {
    oldName: string
    editedTeam: TeamType
}

export interface EditTeamLocationProps {
    location: EditTeamStateProps
}

export interface EditTeamStateProps {
    state: EditTeamProps
}

export interface EditTeamProps {
    team: EditEachTeamProps
}

export interface EditEachTeamProps {
    team: TeamType
}