import React from "react";
import profile from "./Profile.module.css";
import avatar from "../Image/avatar.jpeg";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./MyPosts/ProfileDescription/ProfileDescription";


function Profile(props) {
  let profileItems = props.profileData.map((p) => (
    <ProfileDescription
      name={p.name}
      age={p.age}
      country={p.country}
      city={p.city}
    />
  ));

  return (
    <div className={profile.container}>
      Profile
      <img className={profile.avatar} src={avatar} alt="avatar" />
      <div className={profile.description}>{profileItems}</div>
      <MyPosts postData={props.postData} addPost={props.addPost}/>
    </div>
  );
}

export default Profile;
