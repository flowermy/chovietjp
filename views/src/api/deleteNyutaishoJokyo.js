import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from 'axios';

let DeleteNyutaishoJokyoApi = {
  deleteNyutaishoJokyo(nyutaishoJokyoId) {
    return axios.delete(apiUrls.INIT + apiUrls.NYUTAISHO_JOKYO + '/' + nyutaishoJokyoId, {
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
export default DeleteNyutaishoJokyoApi;
