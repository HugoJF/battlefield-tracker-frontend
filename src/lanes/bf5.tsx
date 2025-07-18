import {Loading} from "../components/loading";
import React from "react";
import {sortBy} from "lodash";
import Bf5 from "../resources/bf5.png";
import {Bf5Card} from "../components/bf5-card";
import {useBf5Servers} from "../queries/bf5";

export const Bf5Lane = () => {
    const {data, isLoading} = useBf5Servers();

    const servers = sortBy(data?.data.servers, 'playerAmount').reverse();

    return <div>
        <img
            className="mx-auto h-16 mb-8"
            src={Bf5}
            alt="Battlefield V"
        />

        {isLoading && <Loading/>}
        {!isLoading && <div className="flex flex-col gap-4">
            {servers.map(server => (
                <Bf5Card
                    key={server.gameId}
                    data={server}
                />
            ))}
        </div>}
    </div>
}
