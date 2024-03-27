import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Chats/Home";
import {Provider} from "react-redux";

import React from "react";
import NotFound from "../pages/NotFound/NotFound";
import {STORE} from "./store/store";
import GetStarted from "../pages/getStarted/getStarted";

import SwitchChat__widget from "../widgets/SwitchChat/SwitchChat";
import NotFoundChat_routes from "./routes/NotFoundChat_routes";
import PleaseSelectChat_routes from "./routes/PleaseSelectChat_routes";
import {getGroupChat, getRecentChat} from "../functionsAPI/requestAPI";

import {getAllUsersAPI} from "./slice/usersSlice";
import {getAllGroupChatAPI} from "./slice/groupChatSlice";
import {getAllRecentChatAPI} from "./slice/recentChatSlice";

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
                {index: true, element: <PleaseSelectChat_routes />},
                {
                    errorElement: <NotFoundChat_routes />,
                    children: [
                        {
                            path: '/chats',
                            element: <NotFoundChat_routes />,
                            errorElement: <NotFound />,

                        },
                        {
                            path: '/chats/group/:chatId',
                            errorElement: <NotFoundChat_routes />,
                            element: <SwitchChat__widget type={false}/>,
                            loader: getGroupChat
                        },
                        {
                            path: '/chats/recent/:chatId',
                            errorElement: <NotFoundChat_routes />,
                            element: <SwitchChat__widget type={true}/>,
                            loader: getRecentChat
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}