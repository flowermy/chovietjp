import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from 'axios';

let PostNyutaishoJokyoApi = {
  postNyutaishoJokyo(roomBedId,
        riyousyaId,
        riyousyaName,
        nyushoDate,
        nyushoTime,
        nyushoKubunFlag,
        tempBookFlag,
        comment,
        shortFlag,
        taishoDate,
        taishoTime,
        taishoKubunFlag) {
    const params = {
      roomBedId: roomBedId,
      riyousyaId: riyousyaId,
      riyousyaName : riyousyaName,
      nyushoDate: nyushoDate,
      nyushoTime: nyushoTime,
      nyushoKubunFlag: nyushoKubunFlag,
      tempBookFlag: tempBookFlag,
      comment: comment,
      shortFlag: shortFlag,
      taishoDate: taishoDate,
      taishoTime: taishoTime,
      taishoKubunFlag: taishoKubunFlag
    };
    return axios.post(apiUrls.INIT + apiUrls.NYUTAISHO_JOKYO,
      params,
      {
        'headers': {
          'x-token': localStorage.getItem('jwtToken')
        },
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
export default PostNyutaishoJokyoApi;
