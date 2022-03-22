import React from "react";
import myPost from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postItem = props.postData.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
  
    let text = newPostElement.current.value;
    props.dispatch({type: "ADD-POST", text: text});
    newPostElement.current.value = " ";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE-NEW-POST", newText:  text });
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
