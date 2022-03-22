
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  store  from './redux/State'    //state,

 let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App 
    state={state} addPost={store.addPost.bind(store)}
     updateNewPost={store.updateNewPost.bind(store)}
      addMessage={store.addMessage.bind(store)}
    
    />
  </React.StrictMode>,
  document.getElementById("root")
);
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)



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
// { addPost, updateNewPost, addMessage, subscribe});