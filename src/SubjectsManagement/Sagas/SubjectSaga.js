import {takeEvery, call ,put} from 'redux-saga/effects'
import {SUB_DATA } from '../Constants/SubjectTypes'
import SubApi from '../APIcall/SubjectApi'
import { getSubjectDataAction } from '../Actions/SubjectAction'


export function* getSubDetails() {

    yield takeEvery (SUB_DATA , getSubjectDetails)

}

function* getSubjectDetails(action) {

    console.log('***act',action.payload)
    try {

        const subData= yield call(SubApi,action.payload)

        console.log('---subData--' , subData)

        yield put(getSubjectDataAction(subData))
    }

    catch(e) {
        console.log('error' ,e)
    }

}