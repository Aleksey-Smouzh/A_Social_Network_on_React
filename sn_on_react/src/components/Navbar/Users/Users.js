import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../Image/avatar.jpeg";
import userss from "./Users.module.css";
import * as axios from "axios";

let Users = (props) => {
  let pageCount = props.totalUsersCount / props.pageSize;
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={userss.container}>
        <div>
          {pages.map((p) => {
            // eslint-disable-next-line no-undef
            return (
              <span
                className={props.currentPage}
                onClick={(e) => {
                  props.onPageChanged(p);
                }}
              >
                {p}{" "}
              </span>
            );
          })}
        </div>

        {props.users.map((users) => (
          <div key={users.id}>
            <div>
                <NavLink to={'/profile/' + users.id}>
              <img
                src={users.photos.small != null ? users.small : avatar}
                alt="avatar"
              /></NavLink>
            </div>
            <div>
              {users.followed ? (
                <button
                  onClick={() => {
                    axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {},{withCredentials: true, headers: {"API-KEY": "aa000cc3-fda1-40f5-8750-749fdea93ea7"}},
                      
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0 ){
                        props.unfollow(users.id);
                      }
                     
                    });

                   


                  }}
                >
                  Следи
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {},{withCredentials: true, headers: {"API-KEY": "aa000cc3-fda1-40f5-8750-749fdea93ea7"}}
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0 ){
                        props.follow(users.id);
                      }
                     
                    });

                   


                  }}
                >
                  Не следи
                </button>
              )}
            </div>
            <div>{users.name}</div>
            <div>{users.status}</div>
            <div>{"users.location.country"}</div>
            <div>{"users.location.city"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
