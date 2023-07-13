import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

instance.defaults.headers.common['Authorization'] = `Bearer {1781147e1e53e3ff54bd89e87c75faea}`; 

export default instance;
