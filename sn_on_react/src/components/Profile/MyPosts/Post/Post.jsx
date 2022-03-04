import React from 'react'
import post from './Post.module.css'




function Post(props) {
 


  return (
    <div className={post.container}>
        Post1
    {props.message}
    
    
    </div>
  )
}

export default Post