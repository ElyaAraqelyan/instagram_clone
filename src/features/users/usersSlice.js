import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import fetchUsers from "./usersAPI"

const initialState = {
    users: [],
    status: 'idle',
    error: null
}

export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const users = await fetchUsers.getAll()
            return users
        } catch (error) {
            throw error
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsersAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUsersAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
        })
        .addCase(fetchUsersAsync.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = usersSlice.actions

export const selectUsers = (state) => state.users.users
export const selectStatus = (state) => state.users.status


export const usersReducer = usersSlice.reducer
