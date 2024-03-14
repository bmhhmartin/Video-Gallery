import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import videosReducer from "./video/videoSlice";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        videos: videosReducer
    }
})

export  default  store;