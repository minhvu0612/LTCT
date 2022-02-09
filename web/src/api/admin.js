import axios from "axios";

export const get_allusers = () => axios.get("https://ltct-api.herokuapp.com/api/ltct/admin/all");
export const get_user = (data) => axios.post("https://ltct-api.herokuapp.com/api/ltct/admin/phone", data);
export const active = (id) => axios.put("https://ltct-api.herokuapp.com/api/ltct/admin/active?id=" + id);
export const inactive = (id) => axios.put("https://ltct-api.herokuapp.com/api/ltct/admin/inactive?id=" + id);
export const block = (id) => axios.put("https://ltct-api.herokuapp.com/api/ltct/admin/blocked?id=" + id);