// import React from "react";
import { connect } from "react-redux";
import {
  updateNewMessageTextCreator,
  sendMessageCreator,
} from "../../../redux/MessageReducer";
import Dialogs from "./Dialogs";


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
