import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Chats/Home";
import { Provider } from "react-redux";
import React from "react";
import GetStarted from "../pages/GetStarted/getStarted";
import NotFound from "../pages/NotFound/NotFound";
import {STORE} from "./store/store";

export default function App() {

    const router = createBrowserRouter([
        {
            path: '/GetStarted',
            element: <GetStarted />
        },
        {
            path: '/',
            element: <Home />,
            errorElement: <NotFound />,
            children: [
                {
                    path: '',
                    element: '',
                }
            ]
        },
    ]);

    return (
        <Provider store={ STORE }>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>
    );
}