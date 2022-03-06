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
  
  
  let dialogsData = [

    {id: 1, name: "Vasya"},
    {id: 2, name: "Petya"},
    {id: 3, name: "Kolya"},
    {id: 1, name: "Marysya"},
    {id: 1, name: "Dima"},
    {id: 1, name: "Zorro"},
  ]
   let messageData = [
     {id:1, message: " Hi"},
     {id:2, message: "Yo"},
     {id:3, message: "What's up?"},
     {id:4, message: "Hello" },
     {id:5, message: "Have are you?" },
     {id:5, message: "Nothing, never mind" },
   ]




  return (
    <div className={dialogs.container}>

      <div className={dialogs.lists}>

        <Dialogslists name={dialogsData[0].name} id={dialogsData[0].id}/>
        <Dialogslists name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialogslists name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialogslists name={dialogsData[3].name} id={dialogsData[3].id} />
        <Dialogslists name={dialogsData[4].name} id={dialogsData[4].id} />
        <Dialogslists name={dialogsData[5].name} id={dialogsData[5].id} />

      </div>

      <div className={dialogs.text_messages}>

        <Messages message={messageData[0].message} />
        <Messages message={messageData[1].message} />
        <Messages message={messageData[2].message} />
        <Messages message={messageData[3].message}/>
        <Messages message={messageData[4].message}/>
        <Messages message={messageData[5].message}/>

      </div>

    </div>
  )
}

export default Dialogs