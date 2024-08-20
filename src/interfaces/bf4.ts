export interface ServerDetails {
    prefix: string;
    description: string;
    playerAmount: number;
    maxPlayers: number;
    inSpectator: number;
    inQue: number;
    serverInfo: string;
    url: string;
    mode: string;
    currentMap: string;
    ownerId?: any;
    country: string;
    region: string;
    platform: string;
    serverId: string;
    isCustom: boolean;
    smallMode: string;
    teams?: any;
    serverLink: string;
    official: boolean;
    battlelogId: string;
    gameId: string;
}

export type Response = {servers: ServerDetails[]};
