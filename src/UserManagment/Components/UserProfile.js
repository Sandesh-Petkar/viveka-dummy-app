import React from 'react'

const Profile = (props) => {

    return(
        <div>
               <h1>Welcome to profile Page</h1>
               <h2> {props.name}</h2>
               <h2> {props.email}</h2>      
            
                
            
            
        </div>
    )
}

export default Profile