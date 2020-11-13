import { all } from "redux-saga/effects";
import { postUserLoginData } from ".//Sagas/UserLoginSaga";
import { getUserDetails } from ".//UserManagment/Sagas/UserProfileSaga";
import {getSubDetails } from '..//src/SubjectsManagement/Sagas/SubjectSaga'
import {getMasterData } from './/Sagas/MasterDataSaga'

export default function* rootSaga() {
  yield all([postUserLoginData() , getUserDetails() , getSubDetails(), getMasterData()]);
}