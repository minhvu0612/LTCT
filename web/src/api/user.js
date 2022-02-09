import axios from "axios";

export const update_infor = (data) => axios.put("https://ltct-api.herokuapp.com/api/ltct/user/updateuserinfo", data);
export const get_user_infor = (id) => axios.get("https://ltct-api.herokuapp.com/api/ltct/user/user_info/" + id);