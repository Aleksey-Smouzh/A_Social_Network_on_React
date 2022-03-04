import React from 'react'
import profile from'./Profile.module.css';
import avatar from '../Image/avatar.jpeg';



function Profile() {
  return (
    <div className={profile.container}>Profile
    
    <img className={profile.avatar} src={avatar} alt="avatar" />
      
      <div className={profile.description}>
          <h2 className={profile.description_name_nickname}>Name</h2>
          
      </div>
     <div>my posts</div>
     <div>New post</div>
     <div>post 1</div>
     <div>post 2</div>


    </div>
  )
}

export default Profile