import React from 'react';
import {Bf3Lane} from "./lanes/bf3";
import {Bf5Lane} from "./lanes/bf5";
import {Bf4Lane} from "./lanes/bf4";

function App() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Bf3Lane/>
            <Bf4Lane/>
            <Bf5Lane/>
        </div>
    );
}

export default App;
