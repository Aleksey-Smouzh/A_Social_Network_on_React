import avatar from "../components/Navbar/Image/avatar.jpeg";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 150,
  isFetching: false
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
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
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
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

export default UsersReducer;
