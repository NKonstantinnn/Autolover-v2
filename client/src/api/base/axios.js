import axios from 'axios';

export const baseUrl = '/api';

export default axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('autoloverToken')}`
    }
});