import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type User = {
    id: number
    title: string
}

type InitialState = {
    users: User[]
}

const initialState: InitialState = {
    users: []
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // fill in primary logic here
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        })
    }
})

export default userSlice.reducer