import axios from "axios"


const axiosClient = axios.create({
   // baseURL:'https://codeit-pq8x.onrender.com/',
   baseURL: 'https://codeit-8shj.onrender.com',
    withCredentials: true,
    headers:{
        'Content-Type': 'application/json'
    }
});


export default axiosClient;


