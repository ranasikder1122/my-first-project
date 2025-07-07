import { createSlice } from "@reduxjs/toolkit";
const initialState =[
  {
    id:1,
value:78534
  },
  {
    id:2,
value:7845
  },
  {
    id:3,
    value:98
  }
  
  ]


const countersSlice = createSlice({
    name:'counters',
    initialState,
    reducers: {
        increment:(state,action)=>{
            const counterIndex = state.findIndex(counter =>counter.id===action.payload);
            state[counterIndex].value++;

        },
           decrement:(state,action)=>{
                const counterIndex = state.findIndex(counter =>counter.id===action.payload);
            state[counterIndex].value--;

        },
    }

});
export default countersSlice.reducer;
export const {increment,decrement} = countersSlice.actions;