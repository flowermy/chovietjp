import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from 'axios';

let UpdateTaishoApi = {
  updateTaisho(dateTaisho,
               timeTaisho,
               kubun,
               nyutaishoJokyoId) {
    const params = {
      dateTaisho: dateTaisho,
      timeTaisho: timeTaisho,
      kubun : kubun,
    };
    return axios.patch(apiUrls.INIT + apiUrls.NYUTAISHO_JOKYO + '/' + nyutaishoJokyoId,
      params,{
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
export default UpdateTaishoApi;
