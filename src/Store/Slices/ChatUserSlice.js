import { createSlice } from "@reduxjs/toolkit";
const ChatUserSlice = createSlice({
    name: "chat_user",
    initialState: [],
    reducers: {
        getChatUsers(state, action) {
            state.push(action.payload);
            alert("hello")
        },
    }
})
// Export slice
export default ChatUserSlice.reducer;
// Export function
export const { getChatUsers } = ChatUserSlice.actions