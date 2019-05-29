import 'whatwg-fetch';
import {apiUrls} from "../common/url-configs/common-url";
import axios from "axios/index";
let AvailableRoomApi = {
  loadAllAvailableRooms(month, year, roomBedId, startDate, endDate) {
    let params = apiUrls.INIT + apiUrls.JOKYO + '?year=' + year + '&month=' + month;
    if (roomBedId) {
      params = params + '&roomBedId=' + roomBedId;
    }
    if (startDate && endDate) {
      const startDateConverted = new Date(startDate);
      const endDateConverted = new Date(endDate);
      const startDateParam = (startDateConverted.getFullYear()
        + '-' + (startDateConverted.getMonth() + 1)
        + '-' + startDateConverted.getDate());
      const endDateParam = (endDateConverted.getFullYear()
        + '-' + (endDateConverted.getMonth() + 1)
        + '-' + endDateConverted.getDate());
      params = params + '&startDate=' + startDateParam + '&endDate=' + endDateParam
    }
    return axios({
      method: 'get',
      url: params,
      headers: {
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
export default AvailableRoomApi;
