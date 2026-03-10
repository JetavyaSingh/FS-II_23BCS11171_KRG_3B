import {configureStore} from "@reduxjs/toolkit";
import logsReducer from "./logSlice";

const store = configStore({
    reducer: {
        logs: logsReducer ,
    },
});

export default store;