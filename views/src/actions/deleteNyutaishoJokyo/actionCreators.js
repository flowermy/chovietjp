import { DELETE_NYUTAISHO_JOKYO_SUCCESS } from './actionName.js';
import DeleteNyutaishoJokyoApi from "../../api/deleteNyutaishoJokyo";

export default function DeleteNyutaishoJokyo(nyutaishoJokyoId) {
  return (dispatch) => {
    DeleteNyutaishoJokyoApi.deleteNyutaishoJokyo(nyutaishoJokyoId).then(
      (data) => dispatch({
        type: DELETE_NYUTAISHO_JOKYO_SUCCESS,
        deleteNyutaishoJokyo: data
      })
    )
  }
}
