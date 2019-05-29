import { POST_NYUTAISHO_JOKYO_SUCCESS } from './actionName.js';
import PostNyutaishoJokyoApi from "../../api/postNyutaishoJokyo";

export default function PostNyutaishoJokyo(roomBedId,
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
    PostNyutaishoJokyoApi.postNyutaishoJokyo(roomBedId,
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
        type: POST_NYUTAISHO_JOKYO_SUCCESS,
        postNyutaishoJokyo: data
      })
    )
  }
}
