import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootRouter from "./app/router";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistor, STORE} from "./app/store/store";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

      <PersistGate persistor={persistor}>
          <Provider store={ STORE }>
              <RootRouter />
          </Provider>
      </PersistGate>

  </React.StrictMode>
);

