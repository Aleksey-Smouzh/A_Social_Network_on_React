import React from "react";
import Preloader from "../../../../Preloader/Preloader";
import profileD from "./ProfileDescription.module.css";

const ProfileDescription = (props) => {
if (!props.profile) {
  return <Preloader/>
}
  return (
      <div>
      {/* <img alt="photo" src={props.profile.photo.large}/>  */}
        
    <h2 className={profileD.description_name_nickname}>{props.name}</h2>
    <nav>
        <li className={profileD.description_age}>age: {props.age} </li>
        <li className={profileD.description_country}>country: {props.country} </li>
        <li className={profileD.description_city}>city: {props.city} </li>
    </nav>
   
   
    </div>

  );
};

export default ProfileDescription;
