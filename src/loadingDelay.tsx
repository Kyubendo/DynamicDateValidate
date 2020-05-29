import * as React from "react";
import {Loading} from "./loading";

export const LoadingDelay: React.FC<{onRequest: () => Promise<object>, onFinish: (result: object) => void}> = ({ onRequest, onFinish }) => {
    const promise = React.useMemo<Promise<undefined>>(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }, []);
    const onFinishNew = async (result: object) => {
        await promise;
        onFinish(result);
    };
    return (
        <Loading onRequest={onRequest} onFinish={onFinishNew} />
    );
}