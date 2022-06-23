import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UsersState } from './types';


const initialState: UsersState = {
    currentUser: {},
    isAuthenticated: false,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
})
