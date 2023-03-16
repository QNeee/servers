import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from './store';

interface IServer {
    name: string,
    date: Date,
    rates: string,
    likes: number,
    disslikes: number
}
interface IAuthState {
    user: { id: string, email: string };
    admin: { id: string, email: string, name: string };
    servers: IServer[];
}

interface IRootState {
    auth: IAuthState;
    token: string | null;
    adminToken: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: boolean | null;
    modal: boolean
}
const initialState: IRootState = {
    auth: {
        user: { id: '', email: '' },
        admin: { id: '', email: '', name: '' },
        servers: [],
    },
    modal: false,
    token: null,
    adminToken: null,
    isLoggedIn: false,
    loading: false,
    error: null
}

const serversSlice = createSlice({
    name: 'servers',
    initialState,
    reducers: {

        setModal: (state, action: PayloadAction<boolean>): void => {
            state.modal = action.payload;
        }
    },
    extraReducers: {}
})
const persistConfig = {
    key: 'local-key',
    storage,
    whitelist: ['isLoggedIn', 'token', 'adminToken']
}
export const serversReducer = persistReducer(
    persistConfig,
    serversSlice.reducer
);
export const { setModal } = serversSlice.actions;
export const getModal = (state: RootState) => state.servers.modal;