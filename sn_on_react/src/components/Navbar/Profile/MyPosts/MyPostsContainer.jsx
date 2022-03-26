import React from "react";

// import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  debugger
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());

  };

  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);   // оставлено для примера но можно написать как addPost
    props.store.dispatch(action);
  };
  
  return (<MyPosts updateNewPostActionCreator={onPostChange} 
    addPost={addPost}
     postItem={state.postData.postItem}
      newPostText={state.newPostText.newPostText}
       profileItems={state.profileData.profileItems}/>

  );
  
}

export default MyPostsContainer;