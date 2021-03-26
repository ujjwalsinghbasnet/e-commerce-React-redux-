import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userCreated(state,action){
            state.user = action.payload
        },
        userLoggedout(state,action){
            state.user = []
        }
    }
})

export const { userCreated,userLoggedout } = userSlice.actions;

export default userSlice.reducer;