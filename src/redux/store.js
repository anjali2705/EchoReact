
import rootReducers from "./reducers";
import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

//const store = configureStore(rootReducers);

export default configureStore({
    reducer:{
        user: userReducer,
    },
});