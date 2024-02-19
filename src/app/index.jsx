import {BrowserRouter, createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home";
import {Provider} from "react-redux";
import React from "react";
import GetStarted from "../pages/getStarted/getStarted";
import NotFound from "../pages/e404/NotFound";

export default function App() {

    const router = createBrowserRouter([
    {
        path: '/getStarted',
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

    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>
}