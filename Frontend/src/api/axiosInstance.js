import axios from 'axios'

const axiosInstance= axios.create({
    baseURL: "http://localhost:5600/",
    timeout: 5000,
    withCredentials: true
})

export default axiosInstance;