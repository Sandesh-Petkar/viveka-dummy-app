import {takeEvery, put} from 'redux-saga/effects'
import { GET_USER_DATA } from '../Constants/UserProfileTypes'
// import userDetails from '../APIcalls/GetUserApi'
import {userProfileDetails} from '../Actions/UserAction'

export function* getUserDetails(){
    yield takeEvery (GET_USER_DATA, getProfileDetails)
}

function* getProfileDetails() {

    try{
        // const userData = yield call (userDetails)

        // console.log('---userData---',userData)

        yield put(userProfileDetails ({name:'sandesh',email:'petkar9@gmail.com'}))

    }

    catch (e) {
        console.log('err',e)
    }
}
