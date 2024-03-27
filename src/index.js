import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import {STORE} from "./app/store/store";
import {getAllUsersAPI} from "./app/slice/usersSlice";
import {getAllGroupChatAPI} from "./app/slice/groupChatSlice";
import {getAllRecentChatAPI} from "./app/slice/recentChatSlice";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ STORE }>
      <App />
    </Provider>
);


