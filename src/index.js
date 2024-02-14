import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetStarted from "./pages/getStarted/getStarted";
import Home from "./pages/home/Home";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/e404/NotFound";
import {Provider} from "react-redux";
import {store} from "./store/store";


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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);


