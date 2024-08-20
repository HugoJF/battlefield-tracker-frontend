import {ServerCard} from "./server-card";
import React, {FC} from "react";
import {ServerDetails} from "../interfaces/bf4";

interface Bf4CardProps {
    data: ServerDetails
}

export const Bf4Card: FC<Bf4CardProps> = ({data}) => {
    return <ServerCard
        name={data.prefix + data.description}
        flag="br"
        thumbnailUrl={data.url}
        thumbnailAlt={data.currentMap}
        details={[
            data.mode,
            data.currentMap,
        ]}
        pills={[
            `${data.playerAmount} / ${data.maxPlayers} + ${data.inQue} players`,
        ]}
    />
}
