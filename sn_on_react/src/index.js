
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  state, { addPost, updateNewPost, addMessage, subscribe} from './redux/State'    //state,

 let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App 
    state={state} addPost={addPost} updateNewPost={updateNewPost} addMessage={addMessage}
    
    />
  </React.StrictMode>,
  document.getElementById("root")
);
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)



// // import React from "react";
// // import ReactDOM from "react-dom";
// import "./index.css";
// // import App from "./App";
//  import state from './redux/State'              //{ addPost } 
// import {rerenderEntireTree} from './render'



// rerenderEntireTree(state);

// ReactDOM.render(
//   <React.StrictMode>
//     <App 
//     state={state} addPost={addPost}
//     />
//   </React.StrictMode>,
//   document.getElementById("root")
// );