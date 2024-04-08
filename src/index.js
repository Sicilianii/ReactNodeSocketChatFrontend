import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import {STORE, persistor} from "./app/store/store";
import {getAllUsersAPI} from "./app/slice/usersSlice";
import {getAllGroupChatAPI} from "./app/slice/groupChatSlice";
import {getAllRecentChatAPI} from "./app/slice/recentChatSlice";
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PersistGate persistor={persistor}>
        <Provider store={ STORE }>
          <App />
        </Provider>
    </PersistGate>
);


