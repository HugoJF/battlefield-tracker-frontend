export interface ServerDetails {
    prefix: string;
    description: string;
    playerAmount: number;
    maxPlayers: number;
    inQue: number;
    serverInfo: string;
    url: string;
    mode: string; // TODO can be typed
    currentMap: string; // TODO can be typed
    ownerId: string;
    region: string; // TODO can be typed
    playerform: string; // TODO can be typed
    smallMode: string; // TODO can be typed;
    teams: null;
    official: boolean;
    gameId: string;
}

export interface Response {
    servers: ServerDetails[];
}
