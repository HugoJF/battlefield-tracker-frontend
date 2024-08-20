import {FC, useMemo} from "react";
import {ServerCard} from "./server-card";
import {GameType, Map, ServerDetails, TeamInfo} from "../interfaces/bf3";

function gametype(type: keyof typeof GameType) {
    if (type in GameType) {
        return GameType[type];
    }

    return type;
}

function map(map: keyof typeof Map) {
    if (map in Map) {
        return Map[map];
    }

    return map;
}

function duration(duration: number) {
    duration = Math.ceil(duration ?? 0 / 60);

    if (duration < 120) {
        return `${duration} min`;
    }

    duration = Math.ceil(duration / 60);

    return `${duration} hours`
}

function tickets(teams: TeamInfo[]) {
    if (!Array.isArray(teams)) {
        teams = [];
    }
    const tickets = teams.map(team => team.tickets);

    if (tickets.filter(Boolean).length !== 2) {
        return undefined;
    }

    return tickets;
}

type Bf3CardProps = {
    data: ServerDetails;
    href: string;
}

export const Bf3ServerCard: FC<Bf3CardProps> = ({href, data}) => {
    const details = useMemo(() => [
        gametype(data.raw?.gametype),
        map(data.map),
        duration(data.raw?.roundtime),
    ].filter(Boolean), [data]);

    const pills = useMemo(() => {
        const scores = tickets(data?.raw?.teams);

        return [
            `${data.raw?.numplayers} / ${data.maxplayers} players`,
            scores && scores.map(score => `${Math.round(score)} tickets`).join(' × '),
        ].filter(Boolean) as string[];
    }, [data]);

    return <ServerCard
        name={data.name}
        flag={data.raw?.country}
        thumbnailUrl={`https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/base/bf3/map_images/146x79/${data.map?.toLowerCase()}.jpg`}
        thumbnailAlt={data?.raw?.country}
        href={href}
        details={details}
        pills={pills}
    />
}
