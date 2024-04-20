import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import fetchPosts from "./postsAPI"

const initialState = {
    posts: [],
    status: "idle",
    error: null,
    page: 1,
    limit: 10
}

export const fetchPostsAsync = createAsyncThunk(
    'posts/fetchPosts',
    async ({page, limit}) => {
        try {
            const posts = await fetchPosts.getAll(page, limit)
            return posts
        } catch (error) {
            throw error
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPostsAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPostsAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload
        })
        .addCase(fetchPostsAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})

export const {} = postsSlice.actions

export const selectPosts = (state) => state.posts.posts
export const selectStatus = (state) => state.posts.status
export const selectPage = (state) => state.posts.page
export const selectLimit = (state) => state.posts.limit

export const postsReducer = postsSlice.reducer