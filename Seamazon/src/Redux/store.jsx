import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './slice/productsSlice';
import userSlice from './slice/userSlice';

const store = configureStore({
    reducer: {
        products: productsSlice,
        user: userSlice
    }
});

export default store;