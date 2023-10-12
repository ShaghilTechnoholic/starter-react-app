import { createSlice } from "@reduxjs/toolkit";
const DropDownTask = createSlice({
    name: "dropdown",
    initialState: false,
    reducers: {
        taskDropDown(state, action) {
            state.push(action.payload);
            alert("hello")
        },
    }
})
// Export slice
export default DropDownTask.reducer;
// Export function
export const { taskDropDown } = DropDownTask.actions