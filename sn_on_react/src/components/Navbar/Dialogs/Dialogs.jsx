import React from "react";
import dialogs from "./Dialogs.module.css";
import Dialogslists from "./DialogsLists/DialogsLists";
import Messages from "./MessageData/Messages";

function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Kolya" },
    { id: 1, name: "Marysya" },
    { id: 1, name: "Dima" },
    { id: 1, name: "Zorro" },
  ];

  let messageData = [
    { id: 1, message: " Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "What's up?" },
    { id: 4, message: "Hello" },
    { id: 5, message: "Have are you?" },
    { id: 5, message: "Nothing, never mind" },
  ];

  let dialogsItem = dialogsData.map((dialog) => (
    <Dialogslists name={dialog.name} id={dialog.id} />
  ));
  let messageItem = messageData.map((message) => (
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
