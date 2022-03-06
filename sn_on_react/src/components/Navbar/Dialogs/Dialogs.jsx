import React from 'react'
import dialogs from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const Dialogslists = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={dialogs.list}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>

  )

}

const Messages = (props) => {
  return (
    <div className={dialogs.message}>{props.message}</div>


  )
}

function Dialogs(props) {
  return (
    <div className={dialogs.container}>

      <div className={dialogs.lists}>

        <Dialogslists name="Vasia " id="1" />
        <Dialogslists name="Peteya " id="2" />
        <Dialogslists name="Kolya " id="3" />
        <Dialogslists name="Marusay " id="4" />
        <Dialogslists name="Dima " id="5" />
        <Dialogslists name="Zorro " id="6" />

      </div>

      <div className={dialogs.text_messages}>

        <Messages message="hi" />
        <Messages message="Yo" />
        <Messages message="What's up?" />
        <Messages message="Hello" />
        <Messages message="Have are you?" />
        <Messages message="Nothing, never mind" />

      </div>

    </div>
  )
}

export default Dialogs