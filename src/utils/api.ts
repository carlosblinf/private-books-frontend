import axios from 'axios';

export const BASE_URL = 'https://api.itbook.store/1.0';
const API_TIMEOUT = 30000;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    Accept: 'application/json',
  },
});
