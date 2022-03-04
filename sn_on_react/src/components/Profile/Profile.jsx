import React from 'react'
import profile from'./Profile.module.css';
import avatar from '../Image/avatar.jpeg';
import MyPosts from './MyPosts/MyPosts';



function Profile() {
  return (
    <div className={profile.container}>Profile
    
    <img className={profile.avatar} src={avatar} alt="avatar" />
      
      <div className={profile.description}>
          <h2 className={profile.description_name_nickname}>Name</h2>
          
      </div>
     <MyPosts/>


    </div>
  )
}

export default Profile