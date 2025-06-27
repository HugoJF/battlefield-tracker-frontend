import {ServerCard} from "./server-card";
import React, {FC} from "react";
import * as bf5 from "../interfaces/bf5";

interface Bf5CardProps {
    data: bf5.ServerDetails
}

export const Bf5Card: FC<Bf5CardProps> = ({data}) => {
    return <ServerCard
        name={data.prefix + data.description}
        flag="br"
        thumbnailUrl={data.url}
        thumbnailAlt={data.currentMap}
        playerCount={data.playerAmount}
        maxPlayers={data.maxPlayers}
        details={[
            data.mode,
            data.currentMap,
        ]}
    />
}
