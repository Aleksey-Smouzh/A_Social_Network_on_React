import React from 'react'
import myPost from "./MyPosts.module.css"
import Post from './Post/Post'


function MyPosts(props) {

  let postData = [
    { id: 1, message: "Have are you?", likes: "200" },
    { id: 2, message: "Nothing, never mind", likes: "250" },
    { id: 3, message: "What's up?", likes: "300" },
    { id: 4, message: "Hello", likes: "90" },
    { id: 5, message: "Have are you?", likes: "2" },
    { id: 5, message: "Nothing, never mind", likes: '1' },
  ]
  let postItem = postData.map(post => <Post message={post.message} likes={post.likes} />)


  return (
    <div className={myPost.container}>
      <div>my posts</div>
      <div><textarea name="" id="" cols="0" rows="0"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      {postItem}
    </div>
  )
}

export default MyPosts