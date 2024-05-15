import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    // {
    //     id: 1,
    //     productName: "Product 1",
    //     quantity: 10,
    //     price: 50,
    //     description: "Description of Product 1",
    //     category: "Category A",
    //     ratings: 4.5,
    //     bestSeller: true
    // },
]

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    }
})

export default productsSlice.reducer