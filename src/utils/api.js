import axios from 'axios';

const BASE_URL = 'https://likemachine-api.nerdgeschoss.de';

axios.defaults.headers = {
    accept: '*/*'
};

function getLinks() {
    let url = `${BASE_URL}/links`;
    return axios.get(url).then(res => res.data);
}


export default getLinks 
