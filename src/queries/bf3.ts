import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Response} from "../interfaces/bf3";

async function getBf3Servers() {
    return await axios.get<Response>('https://api.gametools.network/bf3/servers', {
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

export const useBf3Servers = () => {
    return useQuery({
        queryKey: ['bf3'],
        queryFn: getBf3Servers,
    })
}
