import { PUT_GAIHAKU_NYUIN_JOKYO_SUCCESS } from './actionName.js';
import PutGaihakuNyuinJokyoApi from "../../api/putGaihakuNyuinJokyo";

export default function PutGaihakuNyuinJokyo(gaihakuNyuinJokyoId,
                                             nyutaishoJokyoId,
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
  return (dispatch) => {
    PutGaihakuNyuinJokyoApi.putGaihakuNyuinJokyo(
      gaihakuNyuinJokyoId,
      nyutaishoJokyoId,
      gaihakuNyuinFlag,
      startDate,
      startTime,
      endDate,
      endTime,
      stateMonth,
      stateYear,
      stateRoomBedId,
      stateStartDate,
      stateEndDate).then(
      (data) => dispatch({
        type: PUT_GAIHAKU_NYUIN_JOKYO_SUCCESS,
        putGaihakuNyuinJokyo: data
      })
    )
  }
}
