import axios from 'axios';

const getUrl = relativeUrl => `http://localhost:8001${relativeUrl}`;

export const performGetRequest = ({ url, params = {} }) => axios.get(getUrl(url), { params });

export const performPostRequest = ({ url, payload = {}, params = {} }) => axios.post(getUrl(url), payload, { params });

export const performPutRequest = (url, payload = {}, params = {}) => axios.put(getUrl(url), payload, { params });

export const performPatchRequest = (url, payload = {}, params = {}) => axios.patch(getUrl(url), payload, { params });

export const performDeleteRequest = (url, payload = {}, params = {}) =>
  axios.delete(getUrl(url), { params: params, payload });
