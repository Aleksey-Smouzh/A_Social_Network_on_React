const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //     id: 1, followed: false, fullName: " Tarapunka", status: "I am junior fn",
    //     location: { city: "Minsk", country: "Belarus" }
    // },
    // {
    //     id: 2, followed: false, fullName: "Molya", status: "I am junior fn",
    //     location: { city: "Minsk", country: "Belarus" }
    // },
    // {
    //     id: 3, followed: true, fullName: "Kolya", status: "I am junior fn",
    //     location: { city: "Minsk", country: "Belarus" }
    // },
    // {
    //     id: 4, followed: false, fullName: "Petya", status: "I am junior fn",
    //     location: { city: "Minsk", country: "Belarus" }
    // },
    // {
    //     id: 5, followed: false, fullName: "Vasya", status: "I am junior fn",
    //     location: { city: "Minsk", country: "Belarus" }
    // },
    // {
    //     id: 6, followed: true, fullName: "Misha", status: "I am junior fn",
    //     location: { city: "Minsk", country: "Belarus" }
    // },
  ],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: true };
          }
          return users;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: false };
          }
          return users;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};
export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unFollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users };
};

export default UsersReducer;
