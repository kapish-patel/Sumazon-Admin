import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (userId) => {
        const response = await fetch(`/api/products/${userId}`);
        return response.json();
    }
);

export const getProduct = createAsyncThunk(
    'products/getProduct',
    async (productId) => {
        const response = await fetch(`/api/products/detail/${productId}`);
        return response.json();
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product) => {
        const response = await fetch(`/api/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        return response.json();
    }
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId) => {
        const response = await fetch(`/api/products/${productId}`, {
            method: 'DELETE',
        });
        return response.json();
    }

);

const initialState = {
    productDetails: [],
    selectedProduct: {},
    productStatus: 'Idle', // Correct spelling: Idle
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productStatus = 'Loading';
            })
            .addCase(getProducts.rejected, (state) => {
                state.productStatus = 'Failed';
            })
            .addCase(getProducts.fulfilled, (state, action) => { 
                state.productDetails = action.payload;
                localStorage.setItem('productDetails', JSON.stringify(state.productDetails));
                state.productStatus = 'Succeeded'; 
            })
            .addCase(getProduct.pending, (state) => {
                state.productStatus = 'Loading';
            })
            .addCase(getProduct.fulfilled, (state, action) => { // Correct spelling: action
                state.selectedProduct = action.payload;
                localStorage.setItem('selectedProduct', JSON.stringify(state.selectedProduct));
                state.productStatus = 'Succeeded'; 
            })
            .addCase(getProduct.rejected, (state) => {
                state.productStatus = 'Failed';
            })

            .addCase(updateProduct.pending, (state) => {
                state.productStatus = 'Loading';
            })

            .addCase(updateProduct.fulfilled, (state, action) => {
                state.selectedProduct = action.payload;
                state.productStatus = 'Succeeded';
            })

            .addCase(updateProduct.rejected, (state) => {
                state.productStatus = 'Failed';
            })

            .addCase(deleteProduct.pending, (state) => {
                state.productStatus = 'Loading';
            })

            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.productDetails = state.productDetails.filter((product) => product.id !== action.payload.id);
                // update localStorage
                localStorage.setItem('productDetails', JSON.stringify(state.productDetails));
                state.productStatus = 'Succeeded';
            })

            .addCase(deleteProduct.rejected, (state) => {
                state.productStatus = 'Failed';
            });

    },
});

export default productsSlice.reducer;
