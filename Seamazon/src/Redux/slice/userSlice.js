import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async functions for fetching  api data

export const fetchUser = createAsyncThunk(
    'users/fetchUser', async ({userEmail, userPassword}) => {
        const body = {
            email: userEmail,
            password: userPassword
        }
        const response = await fetch('api/users/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const result = await response.json();
        return result
    }
)

export const addNewUser = createAsyncThunk(
    'users/addNewUser', async (userFormData) => {
        const newUser = {
            email: userFormData.userEmail,
            password: userFormData.userPassword,
            userName: userFormData.userName
        }
        const response = await fetch('api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) throw new Error("Data not saved")
    })

const initialState = {
    userDetails: {
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
    },
    isLoggedIn: false,
    userStatus: 'idle'
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Log out
        logOut: () => {
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.userStatus = 'Loading';
            })

            .addCase(fetchUser.fulfilled, (state, action) => {
                state.userDetails = {
                    email: action.payload.email,
                    userName: action.payload.name,
                    password: action.payload.password,
                    phoneNumber: action.payload.phone
                };
                state.isLoggedIn = true;
                state.userStatus = 'Succeeded';
            })
            

            .addCase(fetchUser.rejected, (state) => {
                state.userStatus = 'Failed';
            });
    }
});

export const { editUser, logIn, logOut, addUser } = userSlice.actions;
export default userSlice.reducer;
