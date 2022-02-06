import axios from "axios";


export const signup_user = (data) => axios.post("https://ltct-api.herokuapp.com/api/ltct/user/register", data);