import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    search: '',
    serchBool: false,
  },
  reducers: {
    setSearchBool: (state, action) => {
        state.serchBool = action.payload;
    },
    set: (state, action) => {
        if(action.payload.name == 'search'){
            state.search = action.payload.value;
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const { set , setSearchBool } = counterSlice.actions;

export default counterSlice.reducer;
