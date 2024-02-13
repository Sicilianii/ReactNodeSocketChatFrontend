import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetStarted from "./pages/getStarted/getStarted";
import Home from "./pages/home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/e404/NotFound";


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
                element: ''
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
  </React.StrictMode>
);


