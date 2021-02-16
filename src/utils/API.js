import axios from 'axios';

const URL = 'https://randomuser.me/api/'


export default {
    getDirectory: function () {
        return axios.get(URL);
    }
};