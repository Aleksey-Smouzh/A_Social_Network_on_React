import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/ProfileReducer";
import StoreContext from "../../../../Store-Context";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
    
  };

  let onPostChange = (text) => {
      // оставлено для примера но можно написать как addPost
    props.store.dispatch(updateNewPostActionCreator(text));
    
  };
 
  return (<StoreContext.Consumer>  {
    (store) => (
      <MyPosts updateNewPostActionCreator={onPostChange}
        addPost={addPost} postData={props.store.postData}
        postItem={props.store.postData.postItem}
        newPostText={props.store.newPostText}
      //  profileItems={props.store.profileItems}
      />
    )}

  </StoreContext.Consumer>

  );

}

export default MyPostsContainer;