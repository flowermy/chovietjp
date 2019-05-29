import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from 'axios';

let DeleteGaihakuNyuinJokyoApi = {
  deleteGaihakuNyuinJokyo(nyutaishoJokyoId, gaihakuId, startDate, startTime, endDate, endTime) {
    const params = {
      nyutaishoJokyoId: nyutaishoJokyoId,
      gaihakuId: gaihakuId,
      startDate : startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
    };
    return axios.delete(apiUrls.INIT + apiUrls.GAIHAKU_NYUIN_JOKYO + '/' + gaihakuId,
      {
        data: params,
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
export default DeleteGaihakuNyuinJokyoApi;
