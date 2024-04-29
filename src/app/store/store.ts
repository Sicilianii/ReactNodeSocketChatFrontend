import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {GroupChatReducer} from "./slices/group.slice";
import {profileReducer} from "./slices/profile.slice";
import {RecentChatReducer} from "./slices/recent.slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    group: GroupChatReducer,
    recent: RecentChatReducer,
    profile: profileReducer
});

export type RootReducer = ReturnType<typeof rootReducer>

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const STORE = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(STORE);
