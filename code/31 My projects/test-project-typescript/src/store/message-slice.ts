import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Message from "./model/message";

// Define the shape of a message
// interface Message {
//     id: string;
//     text: string;
// }

// Define the initial state shape
interface MessageState {
    messages: Message[];
}

const initialState: MessageState = {
    messages: []
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        sendMessage(state, action: PayloadAction<{ text: string }>) {
            const newItem = action.payload;

            state.messages.push({
                id: new Date().toISOString(),
                text: newItem.text
            });
        },
        deleteMessage(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.messages = state.messages.filter((item) => item.id !== id);
        },
    },
});

export const messageActions = messageSlice.actions;

export default messageSlice;