import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store"; //state,

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//store.getState()
//  store.subscribe(() => {
//    let state = store.getState()
//    rerenderEntireTree(state)
// rerenderEntireTree()
// let rerenderEntireTree = (state) => {}
//  })
