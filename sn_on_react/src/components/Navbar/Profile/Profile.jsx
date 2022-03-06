import React from 'react'
import profile from'./Profile.module.css';
import avatar from '../Image/avatar.jpeg';
import MyPosts from './MyPosts/MyPosts';


const ProfileName = (props) =>{
return(
<h2 className={profile.description_name_nickname}>{props.name}</h2>
  
)
}





function Profile(props) {
  return (
    <div className={profile.container}>Profile
    
    <img className={profile.avatar} src={avatar} alt="avatar" />
      
      <div className={profile.description}>
          
          <ProfileName name="Pupkin"/>
      </div>
     <MyPosts/>


    </div>
  )
}

export default Profile