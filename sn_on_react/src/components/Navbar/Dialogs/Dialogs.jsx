import React from "react";
import dialogs from "./Dialogs.module.css";
import Dialogslists from "./DialogsLists/DialogsLists";
import Messages from "./MessageData/Messages";

function Dialogs(props) {
  let dialogsItem = props.dialogsData.map((dialog) => (
    <Dialogslists name={dialog.name} id={dialog.id} />
  ));
  let messageItem = props.messageData.map((message) => (
    <Messages message={message.message} />
  ));

  return (
    <div className={dialogs.container}>
      <div className={dialogs.lists}>{dialogsItem}</div>
      <div className={dialogs.text_messages}>{messageItem}</div>
    </div>
  );
}

export default Dialogs;
