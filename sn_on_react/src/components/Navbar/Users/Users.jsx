import React from 'react'
import users from "./Users.module.css"

function Users(props) {
    
    return (
        <div className={users.container}>Users
            {props.users.map(users => <div key={users.id}>
                <div>
                    <img src={users.fotoUser} alt="avatar" />
                </div>
                <div>
                       
                    {users.followed ? <button onClick={() => {props.unfollow(users.id)}}>Follow</button> :
                     <button onClick={() => { props.follow(users.id)} }>unfollow</button>}
                      
                </div>
                <div>
                    {users.fullName}
                </div>
                <div>
                    {users.status}
                </div >
                <div>
                    {users.location.country}
                </div>
                <div> 
                    {users.location.city}
                </div>

            </div>)}

        </div>
    )
}

export default Users