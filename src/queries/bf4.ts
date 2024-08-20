import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Response} from "../interfaces/bf4";

async function getBf4Servers() {
    return await axios.get<Response>('https://api.gametools.network/bf4/servers', {
        params: {
            name: '',
            experiencename: '',
            lang: 'en',
            region: 'sam',
            platform: 'pc',
            service: undefined,
            limit: 250,
        },
    });
}

export const useBf4Servers = () => {
    return useQuery({
        queryKey: ['bf4'],
        queryFn: getBf4Servers,
    })
}
