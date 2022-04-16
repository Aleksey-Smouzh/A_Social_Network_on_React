const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    postData: [
        { id: 1, message: "Have are you?", likes: "200" },
        { id: 2, message: "Nothing, never mind", likes: "250" },
        { id: 3, message: "What's up?", likes: "300" },
        { id: 4, message: "Hello", likes: "90" },
        { id: 5, message: "Have are you?", likes: "2" },
        { id: 5, message: "Nothing, never mind", likes: "1" },
    ],
    newPostText: "add new post ",
    profile: null
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = " ";
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
           return {...state, profile: action.profile}

        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};
export const setUsersProfile = (profile) => 
    ({type: SET_USER_PROFILE, profile});

export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST, newText: text };
};

export default ProfileReducer;
