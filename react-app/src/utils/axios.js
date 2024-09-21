import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    const configurations = {
        ...config,
    }

    return configurations;
})


axiosInstance.interceptors.response.use((response) => {
    if([200, 201, 204].indexOf(response.status) === -1){
        return {
            ...response,
            error:response.data,
        }
    }

    return response;
})

export default axiosInstance;