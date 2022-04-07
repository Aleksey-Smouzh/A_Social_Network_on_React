import React from 'react'
import users from "./Users.module.css"
 import avatar from "../Image/avatar.jpeg"
import * as axios from "axios"
function Users(props) {
    if (props.users.length === 0){

  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    
      props.setUsers(response.data.items)
  });
   
 }
    return (
        <div className={users.container}>Users
            {props.users.map(users => <div key={users.id}>
                <div>
                    <img src={users.photos.small != null ? users.small: avatar} alt="avatar" />
                </div>
                <div>
                       
                    {users.followed ? <button onClick={() => {props.unfollow(users.id)}}>Следи</button> :
                     <button onClick={() => { props.follow(users.id)} }>Не следи</button>}
                      
                </div>
                <div>
                    {users.name}
                </div>
                <div>
                    {users.status}
                </div >
                <div>
                    {"users.location.country"}
                </div>
                <div> 
                    {"users.location.city"}
                </div>

            </div>)}

        </div>
    )
}

export default Users