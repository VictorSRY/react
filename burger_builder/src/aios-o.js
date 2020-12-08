
import axios from 'axios'

const oHttp=axios.create({
    baseURL:'https://react-burger-app-e051f-default-rtdb.firebaseio.com'
})

export default oHttp