import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        username: "Kapish",
        email: "kpatel3@seattleu.edu",
        phoneNumber: "1234567890",
    }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
});

export default userSlice.reducer;
