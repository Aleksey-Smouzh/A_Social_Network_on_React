import React from 'react'
import users from "./Users.module.css"

function Users(props) {
  return (
    <div className={users.container}>Users 
    {props.users.map(users => <div key={users.id}> 
     <div>
        <img src={users.fotoUser} alt="avatar"  />
     </div>
     <div> 
         <button>Follow</button>
     </div>
     <div>
         {users.fullName}
     </div>
     <div>
         {users.status}
     </div>
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