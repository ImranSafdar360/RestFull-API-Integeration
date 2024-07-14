// src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;

// const API_BASE_URL = "https://fakestoreapi.com/products";