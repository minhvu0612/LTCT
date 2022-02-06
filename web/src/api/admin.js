import axios from "axios";

export const get_allusers = () => axios.get("https://ltct-api.herokuapp.com/api/ltct/admin/all");
export const get_user = (data) => axios.post("https://ltct-api.herokuapp.com/api/ltct/admin/phone", data);