import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
   
    /// nen kbjvbbbj
  
  // console.log(state)
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
    
  };

  let onPostChange = (text) => {
      // оставлено для примера но можно написать как addPost
    props.store.dispatch(updateNewPostActionCreator(text));
    
  };
 
  return ( <MyPosts  updateNewPostActionCreator={onPostChange} 
    addPost={addPost} postData={props.store.postData}
     postItem={props.store.postData.postItem}
      newPostText={props.store.newPostText}
        // profileItems={props.store.profileItems}
      />

  );
  
}

export default MyPostsContainer;