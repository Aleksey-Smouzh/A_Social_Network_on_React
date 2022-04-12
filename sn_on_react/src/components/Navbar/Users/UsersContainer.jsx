// import React from "react"
import { connect } from "react-redux"
import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from "../../../redux/UsersReducer"
import Users from "./Users"


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
    let mapDispatchToProps = (dispatch) => {
        return {
            follow: (userId) => {
                dispatch(followActionCreator(userId))
            },
            unfollow: (userId) => {
                dispatch(unFollowActionCreator(userId))
            },
            setUsers: (users) => {
                dispatch(setUsersActionCreator(users))
            }
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Users)