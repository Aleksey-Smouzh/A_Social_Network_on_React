import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  { addPost, updateNewPost, addMessage } from './redux/State'    //state,


export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App 
    state={state} addPost={addPost} updateNewPost={updateNewPost} addMessage={addMessage}
    
    />
  </React.StrictMode>,
  document.getElementById("root")
);
}
