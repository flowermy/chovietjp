import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from "axios/index";
let GetAllRoomBedTempBook = {
  getAllRoomBedTempBook(startDate, endDate) {
    return axios.get(apiUrls.INIT + apiUrls.GET_ALL_ROOM_BED_TEMPBOOK + '?startDate=' + startDate + '&endDate=' + endDate, {
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
export default GetAllRoomBedTempBook;
