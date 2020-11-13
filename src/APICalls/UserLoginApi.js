import Axios from 'axios'

const LoginDetails = async (apiInput) => {
    
    console.log('--api-ip',apiInput)
    const response=await Axios.post('http://localhost:3001/api/users/signin', apiInput)

    console.log('---resData--',response.data);

        return response.data

}

export default LoginDetails


  

