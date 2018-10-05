import axios from "axios";

const BASE_URL = "https://likemachine-api.nerdgeschoss.de";

// Testing Purpose

axios.defaults.headers = {
  accept: "*/*"
};
axios.defaults.headers.common = {
  Authorization: "Bearer 00000000-0000-0000-0000-000000000000"
};

function getLinks() {
  let url = `${BASE_URL}/links`;
  return axios.get(url).then(res => res.data);
}

function likeLink(facebookToken, id) {
  let url = `${BASE_URL}/links/${id}/like`;
  return axios.post(url, facebookToken).then(res => res.data);
}

function getSessionID(facebookToken) {
  let url = `${BASE_URL}/session`;
  return axios
    .post(url, { facebook_token: facebookToken })
    .then(res => res.data.id);
}

export default (getLinks, getSessionID);
