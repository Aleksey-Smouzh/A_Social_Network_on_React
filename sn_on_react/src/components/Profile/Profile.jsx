import React from 'react'
import './Profile.css';
import avatar from '../Image/avatar.jpeg';



function Profile() {
  return (
    <div className='container_profile'>Profile
    
    <img className='profile_avatar' src={avatar} alt="avatar" />
      
      <div className='profile_description'>
          <h2 className="description_name_nickname">Name</h2>
          
      </div>
     <div>my posts</div>
     <div>New post</div>
     <div>post 1</div>
     <div>post 2</div>


    </div>
  )
}

export default Profile