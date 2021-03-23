import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartContent:[],
    itemNumber: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const checkCart = state.cartContent.filter(item => item.id === action.id)
            console.log(checkCart)
            if(checkCart.length === 0){
                state.cartContent.push(action.payload)
            } else {
                return
            }
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
        }
    }
})
export const { addToCart,removeItemFromCart,changeQuantity, numberOfItemsChanged } = cartSlice.actions

export default cartSlice.reducer;