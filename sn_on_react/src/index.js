
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './redux/redux-store'    //state,

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
      <App
        // state={state} 
        // dispatch={store.dispatch.bind(store)}  
        // store={store}
          //  addMessage={store.addMessage.bind(store)}

      />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

rerenderEntireTree(store.getState())
 store.subscribe(() => {
   let state = store.getState()
   rerenderEntireTree(state)

 })









