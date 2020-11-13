import {
    GET_SUBJECT_DATA
} from '../Constants/SubjectTypes'

const initialState = {

    subjectData:[]
}

const reducer = ( state = initialState ,action) => {

    switch(action.type) {

        case GET_SUBJECT_DATA:

        return {...state,
            subjectData:action.payload
        }

        default: return state


    }
}

export default reducer