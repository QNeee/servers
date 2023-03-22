import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { serversReducer } from './serversSlice';

export const store = configureStore({
    reducer: {
        servers: serversReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);