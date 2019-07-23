import axios from 'axios';

const clientId = process.env.VUE_APP_UNSPLASH_CLIENT_ID;
const unsplashApiUrl = `https://api.unsplash.com/search/photos/?client_id=${clientId}&page=1&per_page=9&query=`;

export const get = (query = 'African') => {
  return axios.get(`${unsplashApiUrl}${query}`);
}
