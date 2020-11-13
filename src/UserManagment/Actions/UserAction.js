import {
    GET_USER_DATA,
    SET_USER_DATA

} from '../Constants/UserProfileTypes'

export const getLoginData = () => {

    return {
        type:GET_USER_DATA,

    }

}

export const userProfileDetails = (userData) => {
    console.log('--data--',userData)

    if(userData){

        return {
            type: SET_USER_DATA,
            payload: userData,
            
          };
    }
}