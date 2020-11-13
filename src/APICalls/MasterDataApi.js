import Axios from 'axios'

const getMasterBoardData = async () => {

    const response = await Axios.get('http://localhost:3001/api/masters/boards')

      return response.data
}

const getMasterMediumData = async () => {

    const response =await Axios.get('http://localhost:3001/api/masters/mediums')
    
    return response.data
    
}


const getMasterClassData = async () => {

    const response =await Axios.get('http://localhost:3001/api/masters/classes')
    
    return response.data
}

export {getMasterBoardData , getMasterMediumData , getMasterClassData }