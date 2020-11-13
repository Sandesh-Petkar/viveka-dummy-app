import Axios from 'axios'

const userDetails =async () => {

    const resp=await Axios.get('http://localhost:3001/api/users')

    console.log('---resData--',resp);

        return resp


}

export default userDetails