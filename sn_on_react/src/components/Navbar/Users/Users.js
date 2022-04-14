import React from 'react'

function Users(props) {
  return (
    <div>
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
                onClick={(e) => {
                  this.onPageChanged(p);
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












    </div>
  )
}

export default Users