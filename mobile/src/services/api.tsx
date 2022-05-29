import axios from "axios";

console.log('estou no axios')

export const api = axios.create({
    baseURL: 'http://192.168.100.3:3333'
})