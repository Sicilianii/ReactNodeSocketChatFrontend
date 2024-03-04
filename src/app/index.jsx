import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Chats/Home";
import { Provider } from "react-redux";
import React from "react";

import NotFound from "../pages/NotFound/NotFound";
import {STORE} from "./store/store";
import GetStarted from "../pages/getStarted/getStarted";
import Chat from "../widgets/Chat/Chat";
import Loading from "../pages/Loading/Loading";
import PlaceHolderForChat__shared from "../shared/ui/PlaceHolderForChat/PlaceHolderForChat";

import Chat__widget from "../widgets/Chat/Chat";

export default function App() {

    const router = createBrowserRouter([
        {
            path: '/start',
            element: <GetStarted />,
        },
        {
            path: '/',
            element: <Home />,
            errorElement: <NotFound />,
            // loader: <Loading />,
            children: [
                {
                    path: '/chats/:chatId',
                    errorElement: <PlaceHolderForChat__shared />,
                    element: <Chat__widget />,
                },
                {
                    path: '/chats',
                    element: <PlaceHolderForChat__shared />
                }
            ]
        },
    ]);

    return (
        <Provider store={ STORE }>
            <RouterProvider router={router}>
                <Home />
            </RouterProvider >
        </Provider>
    );
}