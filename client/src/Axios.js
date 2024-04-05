import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://api.kriate.co.in:8344/api",
    withCredentials: true,
});

