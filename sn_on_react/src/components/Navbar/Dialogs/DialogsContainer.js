// import React from "react";
import { connect } from "react-redux";
import {
  updateNewMessageTextCreator,
  sendMessageCreator,
} from "../../../redux/MessageReducer";
import Dialogs from "./Dialogs";

// function DialogsContainer() {
//   //   let dialogsItem = state.dialogsData.map((dialog) => (
//   //     <Dialogslists name={dialog.name} id={dialog.id} />
//   //   ));

//   //   let messageItem = state.messageData.map((message) => (
//   //     <Messages message={message.message} />
//   //   ));

//   //   let newMessageText = state.newMessageText;
//   //   // let newMessageElement = React.createRef();

//   return (
//     <StoreContext.Consumer>

//       {(store) => {
//         let state = store.getState().messagesPage;
//         let onNewMessageChange = (newTexts) => {
//           store.dispatch(updateNewMessageTextCreator(newTexts));
//         };

//         let addMessage = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         return (
//           <Dialogs
//             updateNewMessageText={onNewMessageChange} // callback
//             sendMessage={addMessage} // callback
//             messagesPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }
let mapStateTpProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (newTexts) => { dispatch(updateNewMessageTextCreator(newTexts)) },
    sendMessage: () => { dispatch(sendMessageCreator()) }
  }
}

const DialogsContainer = connect(mapStateTpProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
