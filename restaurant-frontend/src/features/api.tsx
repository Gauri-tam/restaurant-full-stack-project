// Wrapper for HTTP requests with Axios
import axios from 'axios';

// help only on get method
export const restaurantApi = axios.create({
    baseURL: 'http://localhost:8080/restaurant',
})

// Add an interceptor for all Customer requests  
    restaurantApi.interceptors.request.use((config: any) => {

    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
});

// export const customerApi = axios.create({
//     baseURL: 'http://localhost:8080/customer',
// });

// // Add an interceptor for all Restaurant requests  
// customerApi.interceptors.request.use((config: any) => {

//     const accessToken = localStorage.getItem("token");
//     console.log(`Bearer ${accessToken}`);
    
//     config.headers.Authorization = `Bearer ${accessToken}`;

//     return config;
// });
