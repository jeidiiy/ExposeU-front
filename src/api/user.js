import axios from 'axios';

export const logout =
  () => axios.post('http://localhost:8080/logout', {}, { withCredentials: true });

export const login =
  (email, password) => axios.post('http://localhost:8080/api/login', {
    email,
    password,
  }, {
    withCredentials: true,
  });

export const signup = (email, password, name, image) => axios.post('http://localhost:8080/api/users', {
  email,
  password,
  name,
  image,
}, { withCredentials: true });