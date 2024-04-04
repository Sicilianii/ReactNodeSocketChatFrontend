import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Chats/Home";
import React from "react";
import NotFound from "../pages/NotFound/NotFound";
import GetStarted from "../pages/getStarted/GetStarted";
import SwitchChat__widget from "../widgets/SwitchChat/SwitchChat";
import NotFoundChat_routes from "./routes/NotFoundChat_routes";
import PleaseSelectChat_routes from "./routes/PleaseSelectChat_routes";
import Main from "../pages/Main/Main";
import SingIn from "../pages/SingIn/SingIn";
import SingUp from "../pages/SingUp/SingUp";
import { getGroupChat } from "../shared/lib/helpers/getGroupChat";
import { getRecentChat } from "../shared/lib/helpers/getRecentChat";
import MyProfile from "../pages/MyProfile/MyProfile";
import {getProfileInfoById} from "../shared/lib/helpers/getProfileInfoById";

export default function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    errorElement: <NotFound />,
                    children: [
                        {
                            index: true,
                            element: <GetStarted />
                        },
                        {
                            path: '/singUp',
                            element: <SingUp />,
                        },
                        {
                            path: '/singIn',
                            element: <SingIn />,
                        }
                    ]
                }
            ]
        },
        {
            path: '/home',
            element: <Home />,
            errorElement: <NotFound />,
            // loader: <Loading />,
            children: [
                {index: true, element: <PleaseSelectChat_routes />},
                {
                    errorElement: <NotFoundChat_routes />,
                    children: [
                        {
                            path: '/home/chats',
                            element: <NotFoundChat_routes />,
                            errorElement: <NotFound />,

                        },
                        {
                            path: '/home/chats/group/:chatId',
                            errorElement: <NotFoundChat_routes />,
                            element: <SwitchChat__widget type={false}/>,
                            loader: getGroupChat
                        },
                        {
                            path: '/home/chats/recent/:chatId',
                            errorElement: <NotFoundChat_routes />,
                            element: <SwitchChat__widget type={true}/>,
                            loader: getRecentChat
                        }
                    ]
                }
            ]
        },
        {
            path: '/profile/:profileID',
            element: <MyProfile />,
            errorElement: <NotFound />,
            loader: getProfileInfoById
        }
    ]);

    return <RouterProvider router={router} />;
}