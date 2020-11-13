import {
        SET_LOGIN_DATA

} from '../Actions/ActionTypes'

const intialState = {

    userLoginData : []
}

const reducer = (state = intialState, action) => {
    
    switch (action.type) {
        
        case SET_LOGIN_DATA:
            console.log('--userLoginData--' ,action.payload)
            return {...state,
                userLoginData: action.payload,
               
            }
            

         default: return state
    }
    

}


export default reducer