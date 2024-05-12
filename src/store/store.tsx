import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./AuthStore/AuthStoreSlice"
import TodoReducer from "./TodoStore/TodoStoreSlice"
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persisr-key',
    storage
}
const reducer = combineReducers({
    Auth: AuthReducer,
    Todo: TodoReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch