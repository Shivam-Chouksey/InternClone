import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: { loginPage: false },
    reducers: {
        toogleshowPage(state) {
            state.loginPage = !state.loginPage;
        },
      
    }
})
export const loginActions=loginSlice.actions;
export default loginSlice.reducer;