
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './redux/State'    //state,

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state} dispatch={store.dispatch.bind(store)}  store={store}
        addMessage={store.addMessage.bind(store)}

      />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)



