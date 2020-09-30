import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://burger-app-builder.firebaseio.com/'
});

export default instance;