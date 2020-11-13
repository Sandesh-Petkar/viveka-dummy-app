import {
    SUB_DATA,
    GET_SUBJECT_DATA
} from '../Constants/SubjectTypes'

export const getSubjectData = (formData) => {
    console.log('---form---' , formData)
    return {

        type: SUB_DATA,
        payload: formData
    }
}

export const getSubjectDataAction = (subData) => {
    console.log('d' , subData)
    return {

        type:GET_SUBJECT_DATA,
        payload:subData

    }
}
