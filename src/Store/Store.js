import { configureStore } from "@reduxjs/toolkit";
import ChatUserSlice from "./Slices/ChatUserSlice";
import DropDownTask from "./Slices/DropDownSlice";
const store = configureStore({
    reducer: {
        user: ChatUserSlice,
        dropdownTask: DropDownTask
    },
})
export default store;