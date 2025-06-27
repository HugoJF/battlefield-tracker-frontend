import {FC} from "react";
import {ServerCard} from "./server-card";
import {ServerDetails} from "../interfaces/bf3";

type Bf3CardProps = {
    data: ServerDetails;
}

export const Bf3ServerCard: FC<Bf3CardProps> = ({data}) => {
    const details = [
        data.mode,
        data.map,
    ].filter(Boolean);

    return <ServerCard
        name={data.server}
        flag="br"
        thumbnailUrl={data.url}
        href={data.serverLink}
        playerCount={data.playerAmount}
        maxPlayers={data.maxPlayers}
        details={details}
    />
}
