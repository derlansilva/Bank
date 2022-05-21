import axios from "axios";

console.log('estou no axios')
export const api = axios.create({
    baseURL: 'http://localhost:3333'
})