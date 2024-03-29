import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Chats/Home";
import React from "react";
import NotFound from "../pages/NotFound/NotFound";
import GetStarted from "../pages/getStarted/GetStarted";
import SwitchChat__widget from "../widgets/SwitchChat/SwitchChat";
import NotFoundChat_routes from "./routes/NotFoundChat_routes";
import PleaseSelectChat_routes from "./routes/PleaseSelectChat_routes";
import Main from "../pages/Main/Main";

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
                            path: '/register',
                            element: <h1>Hello its page register</h1>,
                            // loader: getGroupChat
                        },
                        {
                            path: '/logIn',
                            element: <h1>Hello its page LogIn</h1>,
                            // loader: getRecentChat
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
                            // loader: getGroupChat
                        },
                        {
                            path: '/home/chats/recent/:chatId',
                            errorElement: <NotFoundChat_routes />,
                            element: <SwitchChat__widget type={true}/>,
                            // loader: getRecentChat
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}