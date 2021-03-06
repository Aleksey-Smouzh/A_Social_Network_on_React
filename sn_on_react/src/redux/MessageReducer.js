const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT ";
const SEND_MESSAGE = "SEND-MESSAGE";



let initialState ={
    dialogsData: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Kolya" },
        { id: 1, name: "Marysya" },
        { id: 1, name: "Dima" },
        { id: 1, name: "Zorro" },
    ],

    messageData: [
        { id: 1, message: " Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "What's up?" },
        { id: 4, message: "Hello" },
        { id: 5, message: "Have are you?" },
        { id: 6, message: "Nothing, never mind" },
    ],
    newMessageText: " ",
}


const MessageReducer = (state = initialState, action) => {
let stateCopy =  {...state};
// stateCopy.messageData = [...state.messageData]


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newTexts;
            return stateCopy
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            stateCopy.newMessageText = " ";
            stateCopy.messageData.push({ id: 7, message: newMessage });
            return stateCopy
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