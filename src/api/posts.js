import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.gravatar.com/v3'
});