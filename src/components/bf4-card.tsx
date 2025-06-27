import {ServerCard} from "./server-card";
import React, {FC} from "react";
import {ServerDetails} from "../interfaces/bf4";

interface Bf4CardProps {
    data: ServerDetails
}

export const Bf4Card: FC<Bf4CardProps> = ({data}) => {
    return <ServerCard
        name={data.prefix}
        flag="br"
        thumbnailUrl={data.url}
        thumbnailAlt={data.currentMap}
        href={data.serverLink}
        playerCount={data.playerAmount}
        maxPlayers={data.maxPlayers}
        inQue={data.inQue}
        details={[
            data.mode,
            data.currentMap,
        ]}
    />
}
