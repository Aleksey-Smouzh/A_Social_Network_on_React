import React from "react";
import profileD from "./ProfileDescription.module.css";

const ProfileDescription = (props) => {
  return (
      <div>
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
