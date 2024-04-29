import {createBrowserRouter, LoaderFunction, RouterProvider} from "react-router-dom";
import React from 'react';
import {Layout} from "../layout";
import NotFound from "../../pages/NotFound/NotFound";
import GetStarted from "../../pages/getStarted/getStarted";
import SingUp from "../../pages/SingUp/SingUp";
import SingIn from "../../pages/SingIn/SingIn";
import Chats from "../../pages/Chats/Chats";
import PleaseSelectChat from "./routes/PleaseSelectChat/PleaseSelectChat.route";
import NotFoundChat from "./routes/NotFoundChat/NotFoundChat.route";
import MyProfile from "../../pages/MyProfile/MyProfile";
import OtherProfile from "../../pages/OtherProfile/OtherProfile";
import Chat from "../../widgets/Chat/Chat";
import {getGroupChat, getProfileInfoById, getRecentChat} from "../../shareds/lib/helpers";

export const router = createBrowserRouter(
[
            {
                path: '/',
                element: <Layout />,
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
                element: <Chats />,
                errorElement: <NotFound />,
                children: [
                    {index: true, element: <PleaseSelectChat />},
                    {
                        errorElement: <NotFoundChat />,
                        children: [
                            {
                                path: '/home/chats',
                                element: <NotFoundChat />,
                                errorElement: <NotFound />,

                            },
                            {
                                path: '/home/chats/group/:chatId',
                                errorElement: <NotFoundChat />,
                                element: <Chat type={false}/>,
                                loader: getGroupChat
                            },
                            {
                                path: '/home/chats/recent/:chatId',
                                errorElement: <NotFoundChat />,
                                element: <Chat type={true}/>,
                                loader: getRecentChat
                            }
                        ]
                    }
                ]
            },
            {
                path: '/profile/my',
                element: <MyProfile />,
                errorElement: <NotFound />,
            },
            {
                path: '/profile/:profileID',
                element: <OtherProfile />,
                errorElement: <NotFound />,
                loader: getProfileInfoById
            }
]);

function RootRouter() {
    return <RouterProvider router={router} />
}

export default RootRouter;