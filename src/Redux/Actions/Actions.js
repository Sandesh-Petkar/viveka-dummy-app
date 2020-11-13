import {POST_LOGIN_DATA,
    SET_LOGIN_DATA

} from './ActionTypes'

export const postLoginData = (formData) => {

    return {
        type:POST_LOGIN_DATA,
        payload:formData
    }
}

export const setUserDetails = (userData) => {
    console.log('--data--',userData)

    if(userData){

        return {
            type: SET_LOGIN_DATA,
            payload: userData,
            
          };
    }
}