import React, { Component } from 'react'
import Profile from './Profile'
import * as axios from "axios";
import { connect } from 'react-redux';
import {setUsersProfile} from '../../../redux/ProfileReducer'

 class ProfileContainer extends Component {
componentDidMount(){
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/profile?page/2`
    )
    .then((response) => {
        debugger
      
      this.props.setUsersProfile(response.data);
      
    });

}


  render() {
    return ( <Profile {...this.props} />
    
    )
  }
}
let mapStateToProps = (state) => ({}) 

export default connect (mapStateToProps, {setUsersProfile}) (ProfileContainer)