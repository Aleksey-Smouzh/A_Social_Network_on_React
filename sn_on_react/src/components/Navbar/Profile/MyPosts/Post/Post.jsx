import React from 'react';
import post from './Post.module.css';
import img from '../Avatar/avapost.jpeg'



function Post(props) {
 


  return (
    <div className={post.container}>
       <img className={post.avatar} src={img} alt="" /> 
        Post1
    {props.message}
    <span className={post.likes}>likes</span>{props.likes}
    </div>
  )
}

export default Post