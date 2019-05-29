import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from "axios/index";
let GetAllRoomBed = {
  getAllRoomBed() {
    return axios({
      method: 'get',
      url: apiUrls.INIT + apiUrls.GET_ALL_ROOM_BED,
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
export default GetAllRoomBed;
