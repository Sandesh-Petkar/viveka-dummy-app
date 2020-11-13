
import {takeEvery, call} from 'redux-saga/effects'
import {POST_LOGIN_DATA } from '../Redux/Actions/ActionTypes'
import LoginDetails from '..//../src/APICalls/UserLoginApi'


export function* postUserLoginData(){
    yield takeEvery (POST_LOGIN_DATA,postUserDetails)
}

function* postUserDetails(action){
  

    try{
        const userData = yield call (LoginDetails,action.payload)

        console.log('----userdata---',userData)

        // yield put(setUserDetails(userData));

            if(userData.status){
                // push('/dashBoard')
                window.location = '/dashBoard'
                
             }
        }


    catch (e) {
         console.log('err')
    }
}