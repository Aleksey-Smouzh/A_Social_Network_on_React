import React from "react";
import profile from "./Profile.module.css";
import avatar from "../Image/avatar.jpeg";
//  import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./MyPosts/ProfileDescription/ProfileDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {
  
  let profileItems = props.store.profileData.map((p) => (
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
      <MyPostsContainer />

    </div>

  );

}

export default Profile;
//updateNewPost={props.updateNewPost}
//postData={props.state.postData} dispatch={props.dispatch} newPostText={props.state.newPostText}
//<MyPostsContainer store={props.store} />