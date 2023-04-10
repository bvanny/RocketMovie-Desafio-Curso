import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-03d1.onrender.com'
});
