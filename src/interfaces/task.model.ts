export interface taskRequest {
    "name": string,
    "description": string,
    "priority": number
}

export interface taskResponse {
    "cdId": number,
    "name": string,
    "description": string,
    "finish": boolean,
    "priority": number
}