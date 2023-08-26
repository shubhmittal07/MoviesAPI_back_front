import axios from 'axios';

export default axios.create({
    baseURL: 'https://aed3-106-202-135-105.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"} 
});