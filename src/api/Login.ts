import AXIOS from "../config/Axios";
import {Prefix} from "../config/ApiPrefix"

const API = {
  login(data: object) {
    return AXIOS.post(`${Prefix.api}/auth/signin`, {
      ...data
    });
  },
};

export default API;