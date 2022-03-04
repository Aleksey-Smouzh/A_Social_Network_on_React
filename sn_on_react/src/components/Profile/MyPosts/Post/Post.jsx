import React from 'react';
import post from './Post.module.css';
import img from '../Avatar/avapost.jpeg'



function Post(props) {
 


  return (
    <div className={post.container}>
        
        Post1
    {props.message}
    <dir><img className={post.avatar} src={img} alt="" /></dir>
    
    </div>
  )
}

export default Post