export enum ApiTeamsEnumType {
    GET_TEAMS_REQUEST = '@GET_TEAMS_REQUEST',
    GET_TEAMS_SUCCESS = '@GET_TEAMS_SUCCESS',
    GET_TEAMS_FAILURE = '@GET_TEAMS_FAILURE'
}

export interface ApiTeamsInitialState {
    errorMessage: string
    loading: boolean
    teams: ApiTeams[]
}

export interface ApiTeams {
    time_id: number
    nome_popular: string
    sigla: string
    escudo: string
    nome: string
    apelido: string
}

export interface ApiTeamsData {
    data: ApiTeams
}