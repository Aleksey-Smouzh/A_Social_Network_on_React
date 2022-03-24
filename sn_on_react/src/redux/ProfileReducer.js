const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };
            state.postData.push(newPost);
            state.newPostText = " ";
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};
export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST, newText: text };
};

export default ProfileReducer;
