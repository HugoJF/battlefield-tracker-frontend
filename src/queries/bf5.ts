import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Response} from "../interfaces/bf5";

async function getBf5Servers() {
    return await axios.get<Response>('https://api.gametools.network/bfv/servers', {
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

export const useBf5Servers = () => {
    return useQuery({
        queryKey: ['bf5'],
        queryFn: getBf5Servers,
    })
}
