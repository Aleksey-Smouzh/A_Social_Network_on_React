const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT ";
const SEND_MESSAGE = "SEND-MESSAGE";

const MessageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTexts;
            return state
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = " ";
            state.messageData.push({ id: 7, message: newMessage });
            return state
        default:
            return state

    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    };
};

export const updateNewMessageTextCreator = (newTexts) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newTexts: newTexts };
};

export default MessageReducer;