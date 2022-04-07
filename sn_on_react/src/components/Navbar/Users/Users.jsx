import React from 'react'
import users from "./Users.module.css"
// import avatar from "../Image/avatar.jpeg"
function Users(props) {
//     if (props.users.length === 0){
//     props.setUsers([  
//         {
//         id: 1, fotoUser: avatar, followed: true, fullName: " Tarapunka", status: "I am junior fn",
//         location: { city: "Minsk", country: "Belarus" }
//     },
//     {
//         id: 2, fotoUser: avatar, followed: false, fullName: "Molya", status: "I am junior fn",
//         location: { city: "Minsk", country: "Belarus" }
//     },
//     {
//         id: 3, fotoUser: avatar, followed: true, fullName: "Kolya", status: "I am junior fn",
//         location: { city: "Minsk", country: "Belarus" }
//     },
//     {
//         id: 4, fotoUser: avatar, followed: true, fullName: "Petya", status: "I am junior fn",
//         location: { city: "Minsk", country: "Belarus" }
//     },
//     {
//         id: 5, fotoUser: avatar, followed: false, fullName: "Vasya", status: "I am junior fn",
//         location: { city: "Minsk", country: "Belarus" }
//     },
//     {
//         id: 6, fotoUser: avatar, followed: true, fullName: "Misha", status: "I am junior fn",
//         location: { city: "Minsk", country: "Belarus" }
//     } ]
//     )
// }
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