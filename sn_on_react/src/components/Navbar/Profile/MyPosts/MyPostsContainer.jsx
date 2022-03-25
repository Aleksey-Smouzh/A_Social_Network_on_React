import React from "react";
import myPost from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/ProfileReducer";

function MyPosts(props) {
  let postItem = props.postData.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost()
    let text = newPostElement.current.value;
     let action = addPostActionCreator(text);
     props.dispatch(action);
    newPostElement.current.value = " ";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostActionCreator(text)
     let action = updateNewPostActionCreator(text);
     props.dispatch(action);
  };
  return (
    <div className={myPost.container}>
      <div>my posts</div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
        <button onClick={addPost}>Remove</button>
      </div>
      {postItem}
    </div>
  );
}

export default MyPosts;