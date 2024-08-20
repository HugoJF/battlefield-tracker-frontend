import {Loading} from "../components/loading";
import React from "react";
import {useInterval} from "usehooks-ts";
import {sortBy} from "lodash";
import Bf4 from "../resources/bf4.png";
import {useBf4Servers} from "../queries/bf4";
import {Bf4Card} from "../components/bf4-card";

export const Bf4Lane = () => {
    const {data, refetch, isLoading} = useBf4Servers();

    const servers = sortBy(data?.data.servers, 'playerAmount').reverse();

    useInterval(() => {
        void refetch()
    }, 30000);

    return <div>
        <img
            className="mx-auto h-16 mb-4"
            src={Bf4}
            alt="Battlefield 4"
        />

        {isLoading && <Loading/>}
        {!isLoading && <div className="flex flex-col gap-4">
            {servers.map(server => (
                <Bf4Card
                    key={server.gameId}
                    data={server}
                />
            ))}
        </div>}
    </div>
}
