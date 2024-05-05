import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: true,
    userName: "Kapish Patel",
    email: "kpatel3@seattleu.edu",
    password: "password",
    phoneNumber: "123-456-7890",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Edit user details
        editUser: (state, action) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
        },

        // Log in
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        // Log out
        logOut: (state) => {
            state.isLoggedIn = false;   // start workinf grom here ** need to update the state.
        },
    },
});

export const { editUser, logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
