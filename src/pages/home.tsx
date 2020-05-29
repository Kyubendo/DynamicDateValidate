import React from 'react';
import {LoadingDelay} from "../loadingDelay";
import {getApi} from "../getApi";
import { Page } from "./page";

export const Home: Page = () => {
    const [ data, setData ] = React.useState<object | undefined>(undefined);
    return (
        <div className="App">
            {(data !== undefined) ? <span>{data}</span> : <LoadingDelay onRequest={getApi} onFinish={setData} />}
        </div>
    );
}

Home.path = "/";
Home.title = "Home";