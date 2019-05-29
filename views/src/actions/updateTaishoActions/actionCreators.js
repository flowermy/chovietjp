import { UPDATE_TAISHO_SUCCESS } from './actionName.js';
import updateTaishoApi from "../../api/updateTaisho";

export default function UpdateTaisho(dateTaisho,
                                     timeTaisho,
                                     kubun,
                                     nyutaishoJokyoId) {
  return (dispatch) => {
    updateTaishoApi.updateTaisho(dateTaisho,
      timeTaisho,
      kubun,
      nyutaishoJokyoId).then(
      (data) => dispatch({
        type: UPDATE_TAISHO_SUCCESS,
        updateTaisho: data
      })
    )
  }
}
