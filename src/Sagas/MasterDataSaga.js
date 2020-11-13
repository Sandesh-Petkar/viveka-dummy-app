import { takeEvery , call } from 'redux-saga/effects'
import { GET_MASTER_DATA  } from '../Redux/Actions/ActionTypes'
import {getMasterBoardData , getMasterMediumData , getMasterClassData } from '..//../src/APICalls/MasterDataApi'
import {masterBoardStorage ,masterMediumStorage ,masterClassStorage } from '../../src/Utilities/LocalStorageUtility'


export function* getMasterData() {
    yield takeEvery (GET_MASTER_DATA , fetchMasterDatadetails)
}

function* fetchMasterDatadetails() {

    try{

        const masterBoardData = yield call (getMasterBoardData)
        const masterMediumData = yield call (getMasterMediumData)
        const masterClassData = yield call (getMasterClassData)

        console.log('---masterBoardData--' , masterBoardData)

        masterBoardStorage(masterBoardData)

        console.log('---masterMediumData--' , masterMediumData)

        masterMediumStorage(masterMediumData)

        console.log('---masterClassData--' , masterClassData)

        masterClassStorage(masterClassData)

    }

    catch(e) {
        console.log('err', e)
    }
}