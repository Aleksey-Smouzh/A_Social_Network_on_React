
const SET_USER_DATA = "SET_USER_DATA";
// const UNFOLLOW = "UNFOLLLOW";


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
       
      return {
        ...state,
        ...action.data,
        isAuth: true        //двойная деструктизация
      };

    
    default:
      return state;
  }
};
// export const followActionCreator = (userId) => {
//   return {
//     type: FOLLOW,
//     userId,
//   };
// };
export const setAuthUserData = (id, email, login) => {
  return { type:SET_USER_DATA, data: id, email, login};
};


export default AuthReducer;
