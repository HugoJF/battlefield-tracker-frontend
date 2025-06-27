import React from 'react';
import {Bf3Lane} from "./lanes/bf3";
import {Bf5Lane} from "./lanes/bf5";
import {Bf4Lane} from "./lanes/bf4";
import {useInterval} from "usehooks-ts";
import {useQueryClient} from "@tanstack/react-query";

const INTERVAL = 30000; // 30 seconds

function App() {
    const queryClient = useQueryClient();
    const [nextRefetch, setNextRefetch] = React.useState(Date.now() + INTERVAL);
    const [progress, setProgress] = React.useState(0);

    useInterval(() => {
        void queryClient.refetchQueries();
        setNextRefetch(Date.now() + INTERVAL);
    }, INTERVAL);

    useInterval(() => {
        const remaining = nextRefetch - Date.now();
        const progress = Math.max(0, Math.min(1, remaining / INTERVAL));

        setProgress(1 - progress);
    }, 1000 / 60);

    const style = {width: `${progress * 100}%`};

    return <>
        <div className="fixed inset-x-0 top-0 h-px bg-gray-400" style={style}/>
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
            <Bf3Lane/>
            <Bf4Lane/>
            <Bf5Lane/>
        </div>
    </>;
}

export default App;
