import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getVideos} from "./videosAPI";

const initialState = {
    video: [],
    isLoading: false,
    isError: false,
    error: null
}

export  const videoFetch = createAsyncThunk('videos/videFetch',
async ()=>{
    const videos = await getVideos();
    return videos;
})


const videoSlice = createSlice({
    name: "videos",
    initialState: initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(videoFetch.pending, (state)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(videoFetch.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(videoFetch.rejected, (state, action)=>{
                state.isLoading = false;
                state.video = [];
                state.isError = true;
                state.error = action.error?.message;
            })
    }
});


export default videoSlice.reducer;