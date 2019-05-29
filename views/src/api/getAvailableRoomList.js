import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import axios from "axios/index";
let GetAvailableRoomListApi = {
  getAvailableRoomList() {
    return axios({
      method: 'get',
      url: apiUrls.GET_AVAILABLE_ROOM_LIST,
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
export default GetAvailableRoomListApi;
