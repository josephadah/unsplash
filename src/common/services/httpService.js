import axios from 'axios'

const apiEndpoint = 'https://api.unsplash.com/search/photos/?client_id=6d34843fa02579e788f8b6975ba6ea72926c81e88183cdf823374b8192f9579a&page=1&per_page=8&query=';

export const get = (query = 'African') => {
  return axios.get(`${apiEndpoint}${query}`);
}
