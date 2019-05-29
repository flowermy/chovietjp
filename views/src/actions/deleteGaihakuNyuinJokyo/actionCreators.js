import { DELETE_GAIHAKU_NYUIN_JOKYO_SUCCESS } from './actionName.js';
import DeleteGaihakuNyuinJokyoApi from "../../api/deleteGaihakuNyuinJokyo";

export default function DeleteGaihakuNyuinJokyo(nyutaishoJokyoId, gaihakuId, startDate, startTime, endDate, endTime) {
  return (dispatch) => {
    DeleteGaihakuNyuinJokyoApi.deleteGaihakuNyuinJokyo(nyutaishoJokyoId, gaihakuId, startDate, startTime, endDate, endTime).then(
      (data) => dispatch({
        type: DELETE_GAIHAKU_NYUIN_JOKYO_SUCCESS,
        deleteGaihakuNyuinJokyo: data
      })
    )
  }
}
