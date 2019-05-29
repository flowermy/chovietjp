import 'whatwg-fetch';
import axios from "axios/index";
import {apiUrls} from "../common/url-configs/common-url";

let GetRiyousyaByTextSearch = {
  getRiyousyaByTextSearch (riyousyaName) {
    return axios.get(apiUrls.INIT + apiUrls.GET_RIYOUSYAID_BY_RIYOUSYANAME + '?textSearch=' + riyousyaName, {
      headers: {
        'x-token': localStorage.getItem('jwtToken')
      },
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

export default GetRiyousyaByTextSearch;
