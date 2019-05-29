import axios from 'axios';
import {apiUrls} from "../../common/url-configs/common-url";

export default function login(data) {
  return () => {
    return axios.post(apiUrls.INIT + apiUrls.LOGIN, data, {withCredentials: true}).then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      window.location.reload();
    }).catch((err) => {
      return err;
    });
  }
}
