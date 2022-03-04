import React from 'react';
import post from './Post.module.css';
import avatarPost from '../components/Image/avapost.jpeg'



function Post(props) {
 


  return (
    <div className={post.container}>
        
        Post1
    {props.message}
    
    <img src={avatarPost} alt="avapost" />
    </div>
  )
}

export default Post