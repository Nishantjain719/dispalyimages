import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZLUdqGrS803YRgS7aZgrAw3M14Ywupg7UiczSpik_ks'
       }


});