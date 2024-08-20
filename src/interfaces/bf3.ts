/**
 * @deprecated
 */
export enum GameType {
    ConquestSmall0 = 'Conquest',
    ConquestLarge0 = 'Conquest Large',
    ConquestSmall1 = 'Conquest Assault',
    TeamDeathMatch0 = 'Team Deathmatch',
    RushLarge0 = 'Rush',
    SquadRush0 = 'Squad Rush',
    SquadDeathMatch0 = 'Squad Deathmatch',
}

/**
 * @deprecated
 */
export enum Map {
    MP_001 = 'Grand Bazaar',
    MP_003 = 'Tehran Highway',
    MP_007 = 'Caspian Border',
    MP_011 = 'Seine Crossing',
    MP_012 = 'Operation Firestorm',
    MP_013 = 'Damavand Peak',
    MP_017 = 'Noshahr Canals',
    MP_018 = 'Kharg Island',
    MP_Subway = 'Operation Metro',
    XP1_001 = 'Strike at Karkand',
    XP1_002 = 'Gulf of Oman',
    XP1_003 = 'Sharqi Peninsula',
    XP1_004 = 'Wake Island',
    XP2_Factory = 'Scrapmetal',
    XP2_Office = 'Operation 925',
    XP2_Palace = 'Donya Fortress',
    XP2_Skybar = 'Ziba Tower',
    XP3_Alborz = 'Alborz Mountains',
    XP3_Desert = 'Bandar Desert',
    XP3_Shield = 'Armored Shield',
    XP3_Valley = 'Death Valley',
    XP4_FD = 'Markaz Monolith',
    XP4_Quake = 'Epicenter',
    XP4_Rubble = 'Talah Market',
    XP4_Parl = 'Azadi Palace',
    XP5_001 = 'Operation Riverside',
    XP5_002 = 'Nebandan Flats',
    XP5_003 = 'Kiasar Railroad',
    XP5_004 = 'Sabalan Pipeline',
}

export interface ServerDetails {
    url: string;
    server: string;
    map: string;
    playerAmount: number;
    maxPlayers: number;
    inQueue: number;
    serverLink: string;
    mode: string;
    smallMode: string;
    region: string;
    gameId: string;
}
export type Response = { servers: ServerDetails[] };
