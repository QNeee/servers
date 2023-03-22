import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { HOST } from '../host';
axios.defaults.baseURL = HOST;
const setToken = (token: string) => {
    if (token) {
        return axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    axios.defaults.headers.common.authorization = '';
};
export interface IResult {
    name: string,
    rates: string,
    date: Date,
    owner: number,
    serverUrl: string,
    likes: number,
    disslikes: number
}
export const postServer = createAsyncThunk<IResult, object>(
    'auth/servers/post',
    async (data, { rejectWithValue, getState }) => {
        try {
            const state: any = getState();
            setToken(state.servers.token);
            const result: IResult = await axios.post('servers', data);
            return result;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);
export const postImage = createAsyncThunk<IResult, object>(
    'auth/servers/post/img',
    async (data, { rejectWithValue, getState }) => {
        console.log(data);
        try {
            const state: any = getState();
            setToken(state.servers.token);
            const formData = new FormData();
            formData.append('file', data as Blob);
            const result: IResult = await axios.post('servers/img', formData);
            return result;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);