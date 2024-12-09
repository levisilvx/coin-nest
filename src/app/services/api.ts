import axios from "axios";

export const api = axios.create({
     baseURL:"https://coin-nest.vercel.app/api"
})