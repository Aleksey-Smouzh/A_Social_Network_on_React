
import ProfileReducer from "./ProfileReducer"
import MessageReducer from "./MessageReducer"
import ProfileDataReducer from "./ProfileDataReducer"

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Have are you?", likes: "200" },
                { id: 2, message: "Nothing, never mind", likes: "250" },
                { id: 3, message: "What's up?", likes: "300" },
                { id: 4, message: "Hello", likes: "90" },
                { id: 5, message: "Have are you?", likes: "2" },
                { id: 5, message: "Nothing, never mind", likes: "1" },
            ],
            newPostText: "add new post ",
        },
        messagesPage: {
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
        },
        profileData: [
            {
                id: 1,
                name: "Pupkin",
                age: "23",
                country: "Gonduras ",
                city: "Chupacabra",
            },
            // {id:2, name: "Gonza", age: "34", country: "Gorza",city: "Chupxondric"},
            // {id:3, name: "Krukva", age: "73", country: "Nikaragua ",city: "Minskas"},
            // {id:4, name: "Pronya", age: "13", country: "Brazilia ",city: "Prazenbam"},
            // {id:5, name: "Patrik", age: "63", country: "Yotube",city: "Culima"},
        ],
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log(" state changed"); //???????????? ??????????
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    // addMessage(newMessages) {
    //     let newMessage = {
    //         message: newMessages,
    //     };
    //     this._state.messagesPage.messageData.push({ id: 7, message: newMessage });
    //     this._callSubscriber(this._state);
    // },



    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.messagesPage = MessageReducer(this._state.messagesPage, action)
        this._state.profileData = ProfileDataReducer(this._state.profileData, action)
        this._callSubscriber(this._state);


        //action ?????? ???????????? ???????????? ???????????? ?????????? ?????????????? ?? ?????? -> {type: "ADD-POST"}
        // if (action.type === "ADD-POST") {
        //   let newPost = {
        //     id: 5,
        //     message: this._state.profilePage.newPostText,
        //     likes: 0,
        //   };
        //   this._state.profilePage.postData.push(newPost);
        //   this._callSubscriber(this._state);
        // } else if (action.type === "UPDATE-NEW-POST") {
        //   this._state.profilePage.newPostText = action.newText;
        //   this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //   this._state.messagesPage.newMessageText = action.newTexts;
        //   this._callSubscriber(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //   let newMessage = this._state.messagesPage.newMessageText;
        //   this._state.messagesPage.newMessageText = " ";
        //   this._state.messagesPage.messageData.push({ id: 7, message: newMessage });
        //   this._callSubscriber(this._state);
        // }
    },
};

export default store;
window.store = store;
