import axios from "axios";

export const api = axios.create({
    baseURL: "https://luninha.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})