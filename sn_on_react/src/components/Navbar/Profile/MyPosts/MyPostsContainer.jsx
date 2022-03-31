import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/ProfileReducer";
import StoreContext from "../../../../Store-Context";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  return (<StoreContext.Consumer>  
    {
    (store) => {
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());
      };

      let onPostChange = (text) => {
        store.dispatch(updateNewPostActionCreator(text));
      };
      return <MyPosts
        updateNewPostActionCreator={onPostChange}
        addPost={addPost}
        postData={state.postData}
        postItem={state.profilePage.postData.postItem}
        newPostText={state.profilePage.newPostText}
      //  profileItems={props.store.profileItems}
      />
    }}

  </StoreContext.Consumer>

  );

}

export default MyPostsContainer;
// postData={props.store.postData}
//       postItem={props.store.postData.postItem}
//       newPostText={props.store.newPostText}