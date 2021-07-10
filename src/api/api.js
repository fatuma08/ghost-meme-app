import axios from 'axios';

const instance = axios.create({
    baseURL:' https://ghostmeme.api.hscc.bdpa.org/v1',
    headers: {
        'key': 'tc159313-1fa1-4cee-9fdd-984b925628bf',
    },
});

export default {
    getAllMemes: () => 
    instance({
        'method':'GET',
        'url':'/memes',
        transformResponse: [function (data) {
            const json = JSON.parse(data);
            return json;
        }],
    })
}