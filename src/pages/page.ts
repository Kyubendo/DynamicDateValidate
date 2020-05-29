import React from "react";

export type Page = React.FC<{}> & {
    path: string;
    title: string;
}
