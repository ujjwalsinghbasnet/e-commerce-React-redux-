import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartContent:[],
    itemNumber: 0
}
export const fetchCart = createAsyncThunk('cart',async () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart)
    return  cart
})
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.cartContent.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.cartContent))
        },
        removeItemFromCart(state,action){
            state.cartContent = state.cartContent.filter(item => item.id !== action.payload)
            
        },
        changeQuantity(state,action){
            const id = action.payload.id;
            const selected_item = state.cartContent.find(item => item.id === id)
            const initialPrice = selected_item.unitCost;
            action.payload.incOrDec === 'inc' ? ++selected_item.quantity : --selected_item.quantity
            selected_item.price = Number(selected_item.quantity) * initialPrice
        },
        numberOfItemsChanged(state,action){
            const number = state.cartContent.length;

            state.itemNumber = number;
        },
        cartCleared(state,action){
            state.cartContent = []
            state.itemNumber=0
            localStorage.removeItem('cart')
        }
    },
    extraReducers: {
          [fetchCart.pending]: (state, action) => {
            state.status = 'loading'
          },
          [fetchCart.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.cartContent = state.cartContent.concat(action.payload)
            state.itemNumber = state.cartContent.length
          },
          [fetchCart.rejected]: (state, action) => {
            state.status = 'failed'
          },
    }
})
export const { addToCart,removeItemFromCart,changeQuantity, numberOfItemsChanged, cartCleared} = cartSlice.actions

export default cartSlice.reducer;