import React from 'react'
import myPost from "./MyPosts.module.css"
import Post from './Post/Post'


function MyPosts() {
  return (
    <div className={myPost.container}>my posts
    <div>my posts</div>
     <div><textarea name="" id="" cols="0" rows="0"></textarea>
     <button>Add post</button>
      <button>Remove</button> 
     </div>
     <Post message = "Hi, are you "/>
     <Post message = 'it is my first post'/>
    
    </div>
  )
}

export default MyPosts