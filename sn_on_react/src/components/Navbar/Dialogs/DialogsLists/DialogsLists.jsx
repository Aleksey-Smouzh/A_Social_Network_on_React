import React from "react";
import dialogsL from "./DialogsLists.module.css";
import { NavLink } from "react-router-dom";

const Dialogslists = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={dialogsL.list}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialogslists;
