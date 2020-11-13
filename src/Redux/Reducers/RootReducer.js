import { combineReducers } from 'redux'


import userLoginReducer from './userLoginReducer'
import getUserReducer from '../../UserManagment/Reducers/ProfileReducer'
import subjectReducer from '../../SubjectsManagement/Reducers/SubjectReducer'

const rootReducer = combineReducers({
    
    userData: userLoginReducer,
    profileData: getUserReducer,
    subjectData:subjectReducer
})

export default rootReducer