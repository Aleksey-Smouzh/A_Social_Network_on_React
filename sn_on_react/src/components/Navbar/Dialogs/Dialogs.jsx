import React from "react";
import dialogs from "./Dialogs.module.css";
import Dialogslists from "./DialogsLists/DialogsLists";
import Messages from "./MessageData/Messages";

function Dialogs(props) {
  let dialogsItem = props.state.dialogsData.map((dialog) => (
    <Dialogslists name={dialog.name} id={dialog.id} />
  ));
  let messageItem = props.state.messageData.map((message) => (
    <Messages message={message.message} />
  ));

  let addMessage = () => {};
  return (
    <div className={dialogs.container}>
      <div className={dialogs.lists}>{dialogsItem}</div>
      <div className={dialogs.text_messages}>
        {messageItem}

        <textarea className={dialogs.addMessage} cols="60" rows="5"></textarea>
        <button onClick={addMessage}> Add message</button>
      </div>
    </div>
  );
}

export default Dialogs;
