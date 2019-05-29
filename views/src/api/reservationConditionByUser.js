import 'whatwg-fetch';
import axios from "axios/index";
import {apiUrls} from "../common/url-configs/common-url";
import {GET_RIYOUSYAID_BY_RIYOUSYANAME_SUCCESS} from "../actions/reservationConditionByUserActions/actionName";
let ReservationConditionByUser = {
  loadRiyousyaIdByRiyousyaName (month, year, riyousyaId, dispatch) {
    return this.loadReservationConditionByUser(month, year, riyousyaId).then(
      (data) => dispatch({
        type: GET_RIYOUSYAID_BY_RIYOUSYANAME_SUCCESS,
        riyousyaIdByRiyousyaName: data
      }));
  },

  loadReservationConditionByUser(month, year, riyousyaId) {
    return axios.get(apiUrls.INIT + apiUrls.JOKYO + '?year=' + year + '&month=' + month + '&riyousyaId=' + riyousyaId, {
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
  },

  loadNyutaishoJokyoByRiyousyaId(riyousyaId) {
    return axios.get(apiUrls.INIT + apiUrls.NYUTAISHO_JOKYO + '/' + riyousyaId, {
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
  },

  loadGaihakuNyuinByRiyousyaId(riyousyaId) {
    return axios.get(apiUrls.INIT + apiUrls.GAIHAKU_NYUIN_JOKYO + '/' + riyousyaId, {
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
export default ReservationConditionByUser;
