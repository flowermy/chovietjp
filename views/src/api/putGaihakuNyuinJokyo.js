import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from 'axios';

let putGaihakuNyuinJokyoApi = {
  putGaihakuNyuinJokyo(nyutaishoJokyoId,
                       gaihakuNyuinJokyoId,
                       gaihakuNyuinFlag,
                       startDate,
                       startTime,
                       endDate,
                       endTime) {
    const params = {
      nyutaishoJokyoId: nyutaishoJokyoId,
      gaihakuNyuinFlag: gaihakuNyuinFlag,
      startDate : startDate,
      startTime : startTime,
      endDate : endDate,
      endTime : endTime,
    };
    return axios.put(apiUrls.INIT + apiUrls.GAIHAKU_NYUIN_JOKYO + '/' + gaihakuNyuinJokyoId,
      params,{
        'headers': {
          'x-token': localStorage.getItem('jwtToken')
        },
        withCredentials: true
      }).then().catch((err) => {
      if (!err.response) {
        // network error
        window.location.reload();
      } else {
        return err;
      }
    });
  }
};
export default putGaihakuNyuinJokyoApi;
