import React from "react";
import myPost from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postItem = props.postData.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  return (
    <div className={myPost.container}>
      <div>my posts</div>
      <div>
        <textarea name="" id="" cols="0" rows="0"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      {postItem}
    </div>
  );
}

export default MyPosts;
