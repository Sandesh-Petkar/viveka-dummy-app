import Axios from 'axios'

 const SubApi =async (apiInput) => {

    console.log('--api-' ,apiInput)

    const apiPath=`http://localhost:3001/api/masters/subjects?boardId=${apiInput.board}&classId=${apiInput.class}&mediumId=${apiInput.medium}&academicId=e0351cb0-d741-42d6-adc5-2e4f15ed522e`;

        console.log('---apiPath---' ,apiPath)

    const resp = await Axios.get(`http://localhost:3001/api/masters/subjects?boardId=${apiInput.board}&classId=${apiInput.class}&mediumId=${apiInput.medium}&academicId=e0351cb0-d741-42d6-adc5-2e4f15ed522e`)

     console.log('--resp',resp)

     return resp.data

}

export default SubApi