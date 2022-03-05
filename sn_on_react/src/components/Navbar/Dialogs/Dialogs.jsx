import React from 'react'
import dialogs from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';



function Dialogs(props) {
  return (
    <div className={dialogs.container}>

      <div className={dialogs.lists}>

        <div className={dialogs.list}>
          <NavLink to="/dialogs/1">Vasia 1</NavLink>
        </div>

        <div className={dialogs.list}>
          <NavLink to="/dialogs/2">Vasia 2</NavLink>
        </div>

        <div className={dialogs.list}>
          <NavLink to="/dialogs/3">Vasia 3</NavLink>
        </div>

        <div className={dialogs.list}>
          <NavLink to="/dialogs/4">Vasia 4</NavLink>
        </div>

        <div className={dialogs.list}>
          <NavLink to="/dialogs/5">Vasia 5</NavLink>
        </div>

        <div className={dialogs.list}>
          <NavLink to="/dialogs/6">Vasia 6</NavLink>
        </div>


      </div>

      <div className={dialogs.text_messages}>

        <div className={dialogs.message}>Hi how are Your 1</div>
        <div className={dialogs.message}>Hi how are Your 2</div>
        <div className={dialogs.message}>Hi how are Your 3</div>
        <div className={dialogs.message}>Hi how are Your 4</div>
        <div className={dialogs.message}>Hi how are Your 5</div>
        <div className={dialogs.message}>Hi how are Your 6</div>

      </div>

    </div>
  )
}

export default Dialogs