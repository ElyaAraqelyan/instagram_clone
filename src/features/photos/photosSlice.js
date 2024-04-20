import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import fetchPhotos from "./photosAPI"

const initialState = {
    photos: [],
    status: "idle",
    error: null,
    page: 1,
    limit: 10
}

export const fetchPhotosAsync = createAsyncThunk(
    'photos/fetchPhotos',
    async ({page, limit}) => {
        try {
            const photos = await fetchPhotos.getAll(page, limit)
            return photos
        } catch (error) {
            throw error
        }
    }
)

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPhotosAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPhotosAsync.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.photos = action.payload
        })
        .addCase(fetchPhotosAsync.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = photosSlice.actions

export const selectPhotos = (state) => state.photos.photos
export const selectStatus = (state) => state.photos.status
export const selectPagePhotos = (state) => state.photos.page
export const selectLimitPhotos = (state) => state.photos.limit


export const photosReducer = photosSlice.reducer