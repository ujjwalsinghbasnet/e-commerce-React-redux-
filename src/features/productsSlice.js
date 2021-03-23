import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { data } from '../data'

const initialState = {
    products:[]
}
export const fetch = createAsyncThunk('products',async () => {
    const products = data;
    return  products
})
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        
    },
    extraReducers: {
        [fetch.pending]: (state, action) => {
            state.status = 'loading'
          },
          [fetch.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products = state.products.concat(action.payload)
          },
          [fetch.rejected]: (state, action) => {
            state.status = 'failed'
          },
    } 
})
// export const { addToCart,removeItemFromCart,changeQuantity } = cartSlice.actions

export default productSlice.reducer;