import 'whatwg-fetch';
import { apiUrls } from '../common/url-configs/common-url';
import availableRoomApi from "./availableRoom";
import axios from 'axios';
import {LOAD_AVAILABLE_ROOMS_SUCCESS} from "../actions/availableRoomActions/actionName";

let PostGaihakuNyuinJokyoApi = {
  postGaihakuNyuinJokyo(nyutaishoJokyoId,
                        gaihakuNyuinFlag,
                        startDate,
                        startTime,
                        endDate,
                        endTime,
                        stateMonth,
                        stateYear,
                        stateRoomBedId,
                        stateStartDate,
                        stateEndDate) {
    const params = {
      nyutaishoJokyoId: nyutaishoJokyoId,
      gaihakuNyuinFlag: gaihakuNyuinFlag,
      startDate : startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
    };
    return axios.post(apiUrls.INIT + apiUrls.GAIHAKU_NYUIN_JOKYO,
      params,{
        'headers': {
          'x-token': localStorage.getItem('jwtToken')
        },
        withCredentials: true
      }).then((res) => {
      return (dispatch) => {
        availableRoomApi.loadAllAvailableRooms(stateMonth, stateYear, stateRoomBedId, stateStartDate, stateEndDate).then(
          (data) => dispatch({
            type: LOAD_AVAILABLE_ROOMS_SUCCESS,
            availableRooms: data
          })
        )
      }
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
export default PostGaihakuNyuinJokyoApi;
