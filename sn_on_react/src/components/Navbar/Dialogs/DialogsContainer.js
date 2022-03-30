import React from "react";
// import dialogs from "./Dialogs.module.css";
// import Dialogslists from "./DialogsLists/DialogsLists";
// import Messages from "./MessageData/Messages";
import {
  updateNewMessageTextCreator,
  sendMessageCreator,
} from "../../../redux/MessageReducer";
import StoreContext from "../../../Store-Context";
import Dialogs from "./Dialogs";

function DialogsContainer() {
  //   let dialogsItem = state.dialogsData.map((dialog) => (
  //     <Dialogslists name={dialog.name} id={dialog.id} />
  //   ));

  //   let messageItem = state.messageData.map((message) => (
  //     <Messages message={message.message} />
  //   ));

  //   let newMessageText = state.newMessageText;
  //   // let newMessageElement = React.createRef();

  return (
    <StoreContext.Consumer>
     
      {(store) => {
        let state = store.getState().messagesPage;
        let onNewMessageChange = (newTexts) => {
          store.dispatch(updateNewMessageTextCreator(newTexts));
        };

        let addMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        return (
          <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendMessage={addMessage}
            messagesPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
