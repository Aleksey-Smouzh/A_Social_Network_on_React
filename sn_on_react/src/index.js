
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './redux/redux-store'    //state,
import StoreContext from "./Store-Context";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <StoreContext.Provider value={store}>
      <App
        state={state} 
        dispatch={store.dispatch.bind(store)}  
        store={store}
          //  addMessage={store.addMessage.bind(store)}

      />
      </StoreContext.Provider>
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









