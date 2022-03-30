import React from "react";
// import dialogs from "./Dialogs.module.css";
// import Dialogslists from "./DialogsLists/DialogsLists";
// import Messages from "./MessageData/Messages";
import {
  updateNewMessageTextCreator,
  sendMessageCreator,
} from "../../../redux/MessageReducer";
import Dialogs from "./Dialogs";


function DialogsContainer(props) {
  let state = props.store.getState().messagesPage;

//   let dialogsItem = state.dialogsData.map((dialog) => (
//     <Dialogslists name={dialog.name} id={dialog.id} />
//   ));

//   let messageItem = state.messageData.map((message) => (
//     <Messages message={message.message} />
//   ));

//   let newMessageText = state.newMessageText;
//   // let newMessageElement = React.createRef();

  let onNewMessageChange = (newTexts) => {
    props.store.dispatch(updateNewMessageTextCreator(newTexts));
  };

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  return ( <Dialogs updateNewMessageText={onNewMessageChange}
     sendMessage={addMessage} messagesPage={state} />
    
  );
}

export default DialogsContainer;
