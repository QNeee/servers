

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../host';
interface IAuthData {
    email: string;
    password: string;
}
interface IResult {
    data: any;
    email: string,
    token: string,
    owner: string
}
axios.defaults.baseURL = HOST;
const setToken = (token: string) => {
    if (token) {
        return axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    axios.defaults.headers.common.authorization = '';
};
export const register = createAsyncThunk(
    'auth/register',
    async (data: IAuthData, { rejectWithValue }) => {
        try {
            const result: IResult = await axios.post('auth/register', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
interface IResult {
    email: string,
    token: string,
    owner: string
}
export const login = createAsyncThunk<IResult, IAuthData, { rejectValue: string }>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const result: IResult = await axios.post('auth/login', data);
            return result;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: any = getState();
            setToken(state.servers.token);
            const result: IResult = await axios.post('auth/logout');
            return result;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);
export const refresh = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: any = getState();
            setToken(state.servers.token);
            const result: IResult = await axios.post('auth/current');
            return result;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);