import { GET_SETTINGS_TIME_SUCCESS } from '../../actions/getSettingsTimeActions/actionName.js';
import GetSettingsTime from "../../api/getSettingsTime";

export default function getSettingsTime() {
  return (dispatch) => {
    GetSettingsTime.getSettingsTime().then(
      (data) => dispatch({
        type: GET_SETTINGS_TIME_SUCCESS,
        getSettingsTime: data
      })
    )
  }
}
