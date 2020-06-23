import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as pages from "./pages";
import {DateInput} from "./DateInput";

const routes: Array<pages.Page> = [
    pages.Home,
    pages.DateValidation
];

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    {routes.map((item) => <li key={item.title}><Link to={item.path}>{item.title}</Link></li>)}
                </ul>
            </nav>
            <div className="container">
                <Switch>
                    {routes.map((page) => <Route key={page.title} path={page.path} exact component={page} /> )}
                </Switch>
            </div>
            <div className="container">
                <DateInput/>
            </div>
        </BrowserRouter>

    );
}

export default App;
