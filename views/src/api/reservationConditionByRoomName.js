import 'whatwg-fetch';
import axios from "axios/index";
import {apiUrls} from "../common/url-configs/common-url";
let ReservationConditionByRoomName = {
  loadReservationConditionByRoomName(month, year, roomName) {
    return axios.get(apiUrls.INIT + apiUrls.JOKYO + '?year=' + year + '&month=' + month + '&roomName=' + roomName, {
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
export default ReservationConditionByRoomName;
