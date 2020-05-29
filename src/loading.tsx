import * as React from "react";
import {getApi} from "./getApi";

export const Loading: React.FC<{onRequest: () => Promise<object>, onFinish: (result: object) => void}> = ({ onRequest, onFinish }) => {
    React.useEffect(() => {
        onRequest().then(onFinish)
    }, [ onRequest, onFinish ]);
    return (
        <span>Loading</span>
    );
}