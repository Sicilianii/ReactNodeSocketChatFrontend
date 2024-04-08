import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {UserReducer} from "../slice/usersSlice";
import {RecentChatReducer} from "../slice/recentChatSlice";
import {GroupChatReducer} from "../slice/groupChatSlice";
import {profileReducer} from "../slice/profileInfoSlice";
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
    user: UserReducer,
    group: GroupChatReducer,
    recent: RecentChatReducer,
    profile: profileReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

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


