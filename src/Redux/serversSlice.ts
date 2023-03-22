import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { login, logOut, refresh, register } from './authOperations';
import { postImage, postServer } from './serversOperations';
import { RootState } from './store';

interface IServer {
    name: string,
    date: Date,
    rates: string,
    likes: number,
    disslikes: number
}
interface IAuthState {
    user: { email: string, id: number | null };
    admin: { id: string, email: string, name: string };
    servers: IServer[];
}

interface IRootState {
    auth: IAuthState;
    token: string | null;
    adminToken: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: unknown;
    modal: boolean
    verify: string | null
}
const initialState: IRootState = {
    auth: {
        user: { email: '', id: null },
        admin: { id: '', email: '', name: '' },
        servers: [],
    },
    verify: null,
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
    extraReducers: builder => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(register.fulfilled, (state, action) => {
            state.loading = false;

        }).addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.auth.user.id = action.payload.data.id;
            state.auth.user.email = action.payload.data.email;
            state.token = action.payload.data.token;

        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(logOut.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(logOut.fulfilled, (state, action) => {
            state.loading = false;
            state.token = null;
            state.auth.user = { email: '', id: null };

        }).addCase(logOut.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(refresh.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(refresh.fulfilled, (state, action) => {
            state.loading = false;
            state.auth.user.id = action.payload.data.id;
            state.auth.user.email = action.payload.data.email;
            state.token = action.payload.data.token;


        }).addCase(refresh.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(postServer.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(postServer.fulfilled, (state, action) => {
            console.log(action.payload);


        }).addCase(postServer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(postImage.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(postImage.fulfilled, (state, action) => {
            console.log('img', action.payload);


        }).addCase(postImage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
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
export const getToken = (state: RootState) => state.servers.token;
export const getUserId = (state: RootState) => state.servers.auth.user.id;