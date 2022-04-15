import React from "react";
import avatar from "../Image/avatar.jpeg";
import userss from "./Users.module.css";

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
              <img
                src={users.photos.small != null ? users.small : avatar}
                alt="avatar"
              />
            </div>
            <div>
              {users.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(users.id);
                  }}
                >
                  Следи
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(users.id);
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
