import loginSliceReducer from './loginstate.jsx' 

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: { loginPageState:loginSliceReducer}
});

export default store;