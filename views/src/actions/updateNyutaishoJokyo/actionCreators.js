import { UPDATE_NYUTAISHO_JOKYO_SUCCESS } from './actionName.js';
import UpdateNyutaishoJokyoApi from "../../api/updateNuitaishoJokyo";

export default function UpdateNyutaishoJokyo(nyutaishoJokyoId,
                                             roomBedId,
                                             riyousyaId,
                                             riyousyaName,
                                             nyushoDate,
                                             nyushoTime,
                                             nyushoKubunFlag,
                                             tempBookFlag,
                                             comment,
                                             shortFlag,
                                             taishoDate,
                                             taishoTime,
                                             taishoKubunFlag) {
  return (dispatch) => {
    UpdateNyutaishoJokyoApi.updateNyutaishoJokyo(nyutaishoJokyoId,
      roomBedId,
      riyousyaId,
      riyousyaName,
      nyushoDate,
      nyushoTime,
      nyushoKubunFlag,
      tempBookFlag,
      comment,
      shortFlag,
      taishoDate,
      taishoTime,
      taishoKubunFlag).then(
      (data) => dispatch({
        type: UPDATE_NYUTAISHO_JOKYO_SUCCESS,
        updateNyutaishoJokyo: data
      })
    )
  }
}
