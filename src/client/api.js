import axios from 'axios';
const BASE_URL = process.env.VUE_APP_BASE_URL

export const API = {
    post: async(url, body) => axios.post(`${BASE_URL}/${url}`, body, {
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res => {
        return res;
    })).catch((error => {
        return error;
    })),
}