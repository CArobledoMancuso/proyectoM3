import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    user: null,
};

export const userSlice = createSlice({
    name:'userState',
    initialState,
    reducers: {
        loginUser:(state, action) => {
            state.login = action.payload.login;
            state.user = action.payload.user;
        },

        logoutUser: (state, action) => {
            state.login = false;
            state.user = null;
        }
    }
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
