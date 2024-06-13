import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: []
    },
    reducers: {
        sendMessage(state, action) {
            const newItem = action.payload;

            state.messages.push({
                id: new Date().toISOString(),
                text: newItem.text
            })
        },
        deleteMessage(state, action) {
            const id = action.payload;
            state.messages = state.messages.filter((item) => item.id !== id);
        },
    },
});

export const messageActions = messageSlice.actions;

export default messageSlice;
