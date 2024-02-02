import { createSlice } from "@reduxjs/toolkit";


export const WishListSlice=createSlice({
    name:'wishlist',
    initialState:{
        data:[]
    },
    reducers:{
        addToWishList(state,action){
            state.data.push(action.payload);

        },

        deletecart:(state,action)=>{
         
            const num=state.data.findIndex((item)=>item.name==action.payload)
            state.data.splice(num,1)
              console.log(num)
            
          
           
          }
       
    },
})


export const {addToWishList,deletecart}=WishListSlice.actions;
export default WishListSlice.reducer;