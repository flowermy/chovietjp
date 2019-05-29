import { POST_GAIHAKU_NYUIN_JOKYO_SUCCESS } from './actionName.js';
import PostGaihakuNyuinJokyoApi from "../../api/postGaihakuNuyinJokyo";

export default function PostGaihakuNyuinJokyo(nyutaishoJokyoId,
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
    PostGaihakuNyuinJokyoApi.postGaihakuNyuinJokyo(nyutaishoJokyoId,
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
        type: POST_GAIHAKU_NYUIN_JOKYO_SUCCESS,
        postGaihakuNyuinJokyo: data
      })
    )
  }
}
