import React, { Component } from 'react'
import * as axios from "axios"
import avatar from "../Image/avatar.jpeg"
import userss from "./Users.module.css"


export default class UsersC extends Component {

 getUsers = () => {
    if (this.props.users.length === 0){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
         
       }

 }


  render() {
    return (
        <div className={userss.container}>
            <button onClick={this.getUsers}>Get UserS</button>
            {this.props.users.map(users => <div key={users.id}>
                <div>
                    <img  src={users.photos.small != null ? users.small: avatar} alt="avatar" />
                </div>
                <div>
                       
                    {users.followed ? <button onClick={() => {this.props.unfollow(users.id)}}>Следи</button> :
                     <button onClick={() => { this.props.follow(users.id)} }>Не следи</button>}
                      
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
}

