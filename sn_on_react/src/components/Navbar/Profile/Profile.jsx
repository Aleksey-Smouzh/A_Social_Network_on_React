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

let profileData = [
{id:1, name: "Pupkin", age: "23", country: "Gonduras ",city: "Chupacabra"},
{id:2, name: "Gonza", age: "34", country: "Gorza",city: "Chupxondric"},
{id:3, name: "Krukva", age: "73", country: "Nikaragua ",city: "Minskas"},
{id:4, name: "Pronya", age: "13", country: "Brazilia ",city: "Prazenbam"},
{id:5, name: "Patrik", age: "63", country: "Yotube",city: "Culima"},
]



  return (
    <div className={profile.container}>Profile
    
    <img className={profile.avatar} src={avatar} alt="avatar" />
      
      <div className={profile.description}>
          
          <ProfileName name={profileData[0].name} age={profileData[0].age}/>
      </div>
     <MyPosts/>


    </div>
  )
}

export default Profile