import React, {useEffect, useState} from 'react';
import {useInterval} from "usehooks-ts";
import axios from "axios";
import {Bf3ServerCard} from "./components/bf3-card";
import * as bf3 from "./interfaces/bf3";
import * as bf5 from "./interfaces/bf5";
import {Bf5Card} from "./components/bf5-card";
import {Loading} from "./components/loading";
import Bf3 from './resources/bf3.png';
import Bf5 from './resources/bf5.png';
import {sortBy} from "lodash";

const servers: Record<string, string> = {
    '68.232.174.155:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/f11676dd-89fc-4795-97a2-44d7c727037c/BEER-RUSH-24-7-CLASSIC-MAPS-Noobs-Pros/',
    '192.223.26.100:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/595db209-f43d-4673-8128-44f5f16e4e23/METRO-NO-LAG-ALL-WEAPONS-TBGCLAN-COM/',
    '189.1.172.33:25210': 'https://battlelog.battlefield.com/bf3/servers/show/pc/7cdd6fb2-b58c-4366-8ec2-9e2610649464/BF3ZAO-SEM-MIMIMI-TODOS-OS-MAPAS/',
    '189.1.172.36:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/23b75f36-733c-46ba-9239-98104c2a89c0/INFANTARIA-BRASIL-TDM-e-OP-Metro-Explosives-Limited/',
    '189.1.172.35:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/6968e632-140e-4a9e-b46a-766f1ae506c6/BIENVENIDOS-A-CAHOS-GAMING-ARGENTINA-METRO-BAZAR-SENA/',
    '189.1.172.36:25210': 'https://battlelog.battlefield.com/bf3/servers/show/pc/ca00886b-991a-4586-ab71-e3817d28bf3e/JRGAMESX-AO-VIVO-AS-8-30-COROLHO-ARMADO/',
    // '185.50.104.68:25502': 'https://battlelog.battlefield.com/bf3/servers/show/pc/47029fcf-563f-4aa3-91da-d5910c7f7cd8/TODOS-OS-MAPAS-Battlefield-da-Depressao-i3D-net/',
    '189.1.172.117:25200': 'https://battlelog.battlefield.com/bf3/servers/show/pc/7ee2e8c8-0e51-41b8-96c3-380d312d4db3/TDM-NOSHAHR-CANALS-1000-TICKETS-64P/',
};

function App() {
    const [bf3, setBf3] = useState<[string, bf3.ServerDetails][] | undefined>(undefined);
    const [bf5, setBf5] = useState<bf5.ServerDetails[] | undefined>(undefined);

    async function fetchBf3() {
        const search = Object.keys(servers).map(server => `address=${server}`).join('&')
        const bf3 = await axios.get<bf3.Response>(`https://bf3.aws.hugo.dev.br?${search}`)

        const data = Object.entries(bf3.data);
        const cleanData = data.filter(([ip, data]) => typeof data !== 'string');

        setBf3(cleanData);
    }

    async function fetchBf5() {
        const bf5 = await axios.get<bf5.Response>('https://api.gametools.network/bfv/servers', {
            params: {
                name: '',
                experiencename: '',
                lang: 'en',
                region: 'sam',
                platform: 'pc',
                service: undefined,
                limit: 100,
            }
        });

        const data = bf5.data.servers
        setBf5(sortBy(data, 'playerAmount').reverse());
    }

    function refresh() {
        fetchBf3();
        fetchBf5();
    }

    useEffect(() => {
        refresh();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useInterval(() => {
        refresh()
    }, 30000);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div>
                <img className="mx-auto h-16" src={Bf3} alt="Battlefield 3"/>

                {!bf3 && <Loading/>}
                <div className="flex flex-col gap-4">
                    {bf3 && bf3.map(([address, data]) => (
                        <Bf3ServerCard key={address} data={data} href={servers[address]}/>
                    ))}
                </div>
            </div>

            <div>
                <img className="mx-auto h-16" src={Bf5} alt="Battlefield V"/>

                {!bf5 && <Loading/>}
                <div className="flex flex-col gap-4">
                    {bf5 && bf5.map(server => (
                        <Bf5Card key={server.gameId} data={server}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
