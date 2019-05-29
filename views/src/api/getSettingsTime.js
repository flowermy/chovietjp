import 'whatwg-fetch';
import axios from "axios/index";
import {apiUrls} from "../common/url-configs/common-url";

let GetSettingsTime = {
  getSettingsTime () {
    return axios.get(apiUrls.GET_SETTINGS_TIME, {
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

export default GetSettingsTime;
