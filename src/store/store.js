import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import { api } from "../services/api";

 let store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware) ,
 });

 export default store;