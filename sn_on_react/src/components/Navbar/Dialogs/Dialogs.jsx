import React from "react";
import dialogs from "./Dialogs.module.css";
import Dialogslists from "./DialogsLists/DialogsLists";
import Messages from "./MessageData/Messages";
import {
  updateNewMessageTextCreator,
  sendMessageCreator,
} from "../../../redux/MessageReducer";

function Dialogs(props) {
  let state = props.store.getState().messagesPage;

  let dialogsItem = state.dialogsData.map((dialog) => (
    <Dialogslists name={dialog.name} id={dialog.id} />
  ));

  let messageItem = state.messageData.map((message) => (
    <Messages message={message.message} />
  ));

  let newMessageText = state.newMessageText;
  // let newMessageElement = React.createRef();

  let onNewMessageChange = (event) => {
    let newTexts = event.target.value;
    props.store.dispatch(updateNewMessageTextCreator(newTexts));
  };

  let addMessage = (event) => {
    let text = event.target.value;
    props.store.dispatch(sendMessageCreator(text));
  };

  return (
    <div className={dialogs.container}>
      <div className={dialogs.lists}>{dialogsItem}</div>
      <div className={dialogs.text_messages}>
        {messageItem}

        <textarea
          className={dialogs.addMessage}
          onChange={onNewMessageChange}
          cols="60"
          rows="5"
          value={newMessageText}
        ></textarea>
        <button onClick={addMessage}> send message</button>
      </div>
    </div>
  );
}

export default Dialogs;
