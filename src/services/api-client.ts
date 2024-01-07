import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: { 
        key: '79ae3052ff8d4daa950064b1a1cfe63f'
    }
})