import React from 'react';
// import './App.css';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import {getLoginData} from '../src/UserManagment/Actions/UserAction'
import Profile from './UserManagment/Components/UserProfile'

class DashBoard extends React.Component  {



    componentDidMount ()  {
        this.props.getUser()
    }
   

    render(){
        console.log('--Dashprop',this.props)
        return (
            <div>
                <NavBar/>
               
                {
                    <div>
                        {/* <h1> Name--{this.props.profileState.userData.name}</h1>
                        <h3>Email--{this.props.profileState.userData.email}</h3> */}
                        <Profile
                            name={this.props.profileState.userData.name}
                            email={this.props.profileState.userData.email}
                        />
                    </div>
                    
                }

            </div>
          );
    }
  
}

const mapStateToProps = (state) => {
    return{
        profileState : state.profileData
    }
   
}

const mapDispatchToProps = dispatch => {
    
    return {

        getUser: () => dispatch(getLoginData()),

       }
  }

export default connect( mapStateToProps,mapDispatchToProps )(DashBoard)


