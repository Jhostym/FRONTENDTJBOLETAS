import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backendtjboletas.onrender.com/api/',

  withCredentials: true,
})

export default instance;