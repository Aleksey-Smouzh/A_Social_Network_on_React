import React from "react";
import myPost from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postItem = props.postData.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

let newPostElement = React.createRef();

let addPost = (props) => {
  
let text = newPostElement.current.value
addPost(text)
}
  return (
    <div className={myPost.container}>
      <div>my posts</div>
      <div>
        <textarea name="" id="" cols="0" rows="0"  ref={newPostElement}    ></textarea>
        <button onClick={addPost}>Add post</button>
        <button onClick={addPost} >Remove</button>
      </div>
      {postItem}
    </div>
  );
}

export default MyPosts;
