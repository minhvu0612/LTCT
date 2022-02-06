import axios from 'axios';

export const login_user = (data) => axios.post("https://ltct-api.herokuapp.com/api/ltct/user/login", data);