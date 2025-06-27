import Bf3 from "../resources/bf3.png";
import {Loading} from "../components/loading";
import {Bf3ServerCard} from "../components/bf3-card";
import React from "react";
import {useInterval} from "usehooks-ts";
import {sortBy} from "lodash";
import {useBf3Servers} from "../queries/bf3";

export const Bf3Lane = () => {
    const {data, isLoading} = useBf3Servers();

    const brServers = data?.data.servers.filter((server) => server.region === 'SAm');
    const servers = sortBy(brServers, 'playerAmount').reverse();

    return <div>
        <img
            className="mx-auto h-16 mb-8"
            src={Bf3}
            alt="Battlefield 3"
        />

        {isLoading && <Loading/>}
        {!isLoading && <div className="flex flex-col gap-4">
            {servers && servers.map((server) => (
                <Bf3ServerCard
                    key={server.gameId}
                    data={server}
                />
            ))}
        </div>}
    </div>
}
