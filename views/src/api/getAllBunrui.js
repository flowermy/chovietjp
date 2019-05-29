import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from "axios/index";
let GetAllBunrui = {
  getAllBunrui() {
    return axios({
      method: 'get',
      url: apiUrls.INIT + apiUrls.GET_ALL_BUNRUI,
      withCredentials: true
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
export default GetAllBunrui;
