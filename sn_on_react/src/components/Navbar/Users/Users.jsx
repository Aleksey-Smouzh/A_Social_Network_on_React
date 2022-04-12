/* eslint-disable array-callback-return */
import React, { Component } from "react";
import * as axios from "axios";
import avatar from "../Image/avatar.jpeg";
import userss from "./Users.module.css";

export default class UsersC extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  getUsers = () => {};

  render() {
    let pageCount = this.props.totalUsersCount / this.props.pageSize;
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div className={userss.container}>
        <div>
          {pages.map((p) => {
            // eslint-disable-next-line no-undef
            return (
              <span
                className={this.props.currentPage}
                onClick={() => {
                  this.props.setCurrentPage(p);
                }}
              >
                {p}{" "}
              </span>
            );
          })}
        </div>
        {/* <button onClick={this.getUsers}>Get UserS</button> */}
        {this.props.users.map((users) => (
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
                    this.props.unfollow(users.id);
                  }}
                >
                  Следи
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(users.id);
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
    );
  }
}
