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

    const pills = [
        `${data.playerAmount} / ${data.maxPlayers} players`,
    ].filter(Boolean)

    return <ServerCard
        name={data.server}
        flag="br"
        thumbnailUrl={data.url}
        details={details}
        pills={pills}
    />
}
