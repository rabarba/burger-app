import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-afc2b.firebaseio.com/'
});

export default instance;