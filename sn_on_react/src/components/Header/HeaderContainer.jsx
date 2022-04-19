import React, { Component } from 'react'
import Header from './Header'
import * as axios from "axios";
import { connect } from "react-redux"
import setAuthUserData from "../../redux/AuthReducer"

class HeaderContainer extends Component {
componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
      )
      .then((response) => {
      
       if (response.data.resultCode === 0){
           let {id, login, email}= response.data.data
             this.props.setAuthUserData(id, email, login);
       }
       else  (alert ("You are not authorized"))
      });
}


  render() {
    return ( <div>
        <Header  {...this.props}/>
    
    </div> 
    )
  }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
     login: state.auth.login,
})
export default  connect(mapStateToProps, {setAuthUserData}) (HeaderContainer) 