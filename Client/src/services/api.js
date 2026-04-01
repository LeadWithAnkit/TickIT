import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // MANDATORY: Allows cookies to be sent/received
});

export default API;