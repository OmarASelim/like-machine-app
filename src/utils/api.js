import axios from "axios";

const BASE_URL = "https://likemachine-api.nerdgeschoss.de";

axios.defaults.headers = {
  accept: "*/*"
};
axios.defaults.headers.common = {
  Authorization: "Bearer " + localStorage.getItem("token")
};

// GET REQUESTS

export function getLinks() {
  let url = `${BASE_URL}/links`;
  return axios.get(url).then(res => res.data);
}

// POST REQUESTS

export function postLink(postedLink) {
  let url = `${BASE_URL}/links`;
  return axios
    .post(url, {
      url: postedLink
    })
    .then(res => res.data);
}

export function likeLink(id) {
  let url = `${BASE_URL}/links/${id}/like`;
  return axios.post(url).then(res => res.data);
}

export function responseFacebook(response, cb) {
  let url = `${BASE_URL}/session`;
  axios
    .post(url, {
      facebook_token: response.accessToken
    })
    .then(res => {
      localStorage.setItem("token", res.data.id);
    })
    .then(() => {
      if (cb) {
        cb();
      }
    });
}

// DELETE REQUESTS

export function unLikeLink(id) {
  let url = `${BASE_URL}/links/${id}/like`;
  return axios.delete(url).then(res => res.data);
}

export function deleteLink(id) {
  let url = `${BASE_URL}/links/${id}`;
  return axios.delete(url).then(res => res.data);
}

export function deleteSession(cb) {
  let url = `${BASE_URL}/session`;
  return axios.delete(url).then(res => res.data);
}
