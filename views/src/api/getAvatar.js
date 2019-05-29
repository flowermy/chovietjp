import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from "axios/index";
let GetAvatar = {
  getAvatar() {
    return axios({
      method: 'get',
      url: apiUrls.GET_AVATAR,
      withCredentials: true
    }).then((res) => {
      return res;
    }).catch((err) => {
      if (!err.response) {
        // network error
        window.location.reload();
      } else {
        return err;
      }
    });
  }
};
export default GetAvatar;
