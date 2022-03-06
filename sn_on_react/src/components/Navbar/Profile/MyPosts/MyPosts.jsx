import React from 'react'
import myPost from "./MyPosts.module.css"
import Post from './Post/Post'


function MyPosts(props) {

  let postData = [
    {id:1, message: "Have are you?", likes: "200"},
    {id:2, message: "Nothing, never mind", likes: "250"},
    {id:3, message: "What's up?"},
    {id:4, message: "Hello" },
    {id:5, message: "Have are you?" },
    {id:5, message: "Nothing, never mind" },
  ]



  return (
    <div className={myPost.container}>
    <div>my posts</div>
     <div><textarea name="" id="" cols="0" rows="0"></textarea>
     <button>Add post</button>
      <button>Remove</button> 
     </div>
     <Post message ={postData[0].message} likes={postData[0].likes}/>
     <Post message ={postData[1].message} likes={postData[1].likes} />
     <Post message ={postData[2].message} likes={postData[2].likes} />
    </div>
  )
}

export default MyPosts