import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=50'


export default {
    getDirectory: function () {
        return axios.get(URL);
    }

    //add addtl functions for specific searches?
};