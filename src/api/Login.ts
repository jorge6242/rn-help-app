import AXIOS from "../config/Axios";
import {Prefix} from "../config/ApiPrefix"

const API = {
  login(data: object) {
    console.log('Prefix.api', Prefix.api);
    return AXIOS.post(`${Prefix.api}/auth/signin`, {
      ...data
    });
  },
};

export default API;