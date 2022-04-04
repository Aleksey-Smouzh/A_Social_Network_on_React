 import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {

//   return (<StoreContext.Consumer>
//     {
//     (store) => {
//       let state = store.getState();
//       let addPost = () => {
//         store.dispatch(addPostActionCreator());
//       };

//       let onPostChange = (text) => {
//         let action = updateNewPostActionCreator(text)
//         store.dispatch(action);

//       };
//       return <MyPosts
//         updateNewPostActionCreator={onPostChange}
//         addPost={addPost}
//         postData={state.postData}
//         postItem={state.profilePage.postData.postItem}
//         newPostText={state.profilePage.newPostText}
//       //  profileItems={props.store.profileItems}
//       />
//     }}

//   </StoreContext.Consumer>

//   );

// }


const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostActionCreator: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const mapStateTpProps  = (state) => {
  return {
    postData: state.postData,
    postItem: state.profilePage.postData.postItem,
    newPostText: state.profilePage.newPostText,
  };
};




const MyPostsContainer = connect(mapDispatchToProps, mapStateTpProps)(MyPosts);

export default MyPostsContainer;
// postData={props.store.postData}
//       postItem={props.store.postData.postItem}
//       newPostText={props.store.newPostText}
