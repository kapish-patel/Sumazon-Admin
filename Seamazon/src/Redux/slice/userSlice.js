import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getEmptyUserDetails = () => ({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
});

// Async functions for fetching  api data
export const loginUser = createAsyncThunk(
    'users/loginUser', async ({ userEmail, userPassword }) => {
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
        if (response.status === 200) {
            return response.json()
        }
        else {
            return {validity: false}
        }
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

        return response.json()
    }
)


export const editUser = createAsyncThunk(
    'users/editUser', async ({userName, email, phoneNumber, id, originalEmail, password}) => {
        const body = {
            name: userName,
            email: email,
            phone: phoneNumber,
            id: id,
            password: password,
        }
        const response = await fetch(`api/users/${originalEmail}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return response.json()
    }
)


const initialState = {
    userDetails: {
        user_id: "",
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
    },
    isLoggedIn: false,
    userStatus: 'idle',
    isRegistered: false,
    registrationError: '',
    loginError: '',
    updateError: ''
};


// Check local storage for persisted user data
const persistedUser = JSON.parse(localStorage.getItem('user'));
const persistedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

if (persistedUser && persistedIsLoggedIn) {
    initialState.userDetails = persistedUser;
    initialState.isLoggedIn = true;
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Log out
        logOut: (state) => {
            // Clear local storage
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('selectedProduct');
            localStorage.removeItem('selectedProduct');
            
            // Reset state to initialState
            state.userDetails = getEmptyUserDetails();
            state.isLoggedIn = false;
            state.userStatus = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.userStatus = 'Loading';
            })

            .addCase(loginUser.fulfilled, (state, actions) => {
                if (actions.payload.validity === true) {
                    state.userDetails.user_id = actions.payload.user.user_id;
                    state.userDetails.email = actions.payload.user.email;
                    state.userDetails.password = actions.payload.user.password;
                    state.userDetails.phoneNumber = actions.payload.user.phone;
                    state.userDetails.userName = actions.payload.user.name;
                    state.isLoggedIn = true
                    state.userStatus = 'Succeeded'

                    localStorage.setItem('user', JSON.stringify(state.userDetails));
                    localStorage.setItem('isLoggedIn', true);
                }
                else {
                    state.userStatus = 'Failed';
                    state.loginError = "Invalid email or password";
                }
                state = initialState
            })


            .addCase(loginUser.rejected, (state) => {
                state.userStatus = 'Failed';
                state.loginError = "Invalid email or password";
            })

            .addCase(editUser.pending, (state) => {
                state.userStatus = 'Loading';
            })

            .addCase(editUser.fulfilled, (state, actions) => {
                if (actions.payload.message === "User updated") {
                    state.userDetails.email = actions.payload.user.email;
                    state.userDetails.password = actions.payload.user.password;
                    state.userDetails.phoneNumber = actions.payload.user.phone;
                    state.userDetails.userName = actions.payload.user.name;
                    state.isLoggedIn = true
                    state.userStatus = 'Successeded'

                    localStorage.setItem('user', JSON.stringify(state.userDetails));
                    localStorage.setItem('isLoggedIn', true);
                }
                else {
                    state.userStatus = 'Failed';
                    state.updateError = "Failed to update user a user with similar Email exists";
                }
                state = initialState
            })

            .addCase(editUser.rejected, (state) => {
                state.userStatus = 'Failed';
            })

            .addCase(addNewUser.rejected, (state) => {
                state.isRegistered = false;
                state.registrationError = "User already exists";
            })

            .addCase(addNewUser.fulfilled, (state, actions) => {
                console.log(actions.payload)
                if (actions.payload.message === "User created")
                    state.isRegistered = true;    
                else {
                    state.isRegistered = false;
                    state.registrationError = "User already exists";
                }
            })
    }
});

export const {logOut} = userSlice.actions;
export default userSlice.reducer;
