import React from "react";
import message from "./Messages.module.css";

const Messages = (props) => {
  return <div className={message.message}>{props.message}</div>;
};

export default Messages;