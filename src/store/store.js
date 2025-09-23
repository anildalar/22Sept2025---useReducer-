import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";


 let store = configureStore({
    reducer: {
        user: userReducer,
    },
 });

 export default store;