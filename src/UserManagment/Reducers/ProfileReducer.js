import {
    SET_USER_DATA

} from '../Constants/UserProfileTypes'

const intialState = {

userData : []

}

const reducer = (state = intialState, action) => {

switch (action.type) {
    
    case SET_USER_DATA:
        console.log('--userLoginData--' ,action.payload)

        return {...state,
            userData: action.payload,
           
        }
        

     default: return state
}


}


export default reducer