import axios from "axios"

// https://viacep.com.br/ws/21870280/json

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
})

export default api