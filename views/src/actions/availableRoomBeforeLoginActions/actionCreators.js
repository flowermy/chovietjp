import { LOAD_AVAILABLE_ROOMS_BEFORE_LOGIN_SUCCESS } from '../../actions/availableRoomBeforeLoginActions/actionName.js';
import AvailableRoomBeforeLoginApi from "../../api/availableRoomBeforeLogin";

export default function loadAvailableRoomsBeforeLogin(month, year, roomType, roomName, startDate, endDate) {
  return (dispatch) => {
    AvailableRoomBeforeLoginApi.loadAllAvailableRoomsBeforeLogin(month, year, roomType, roomName, startDate, endDate).then(
      (data) => dispatch({
        type: LOAD_AVAILABLE_ROOMS_BEFORE_LOGIN_SUCCESS,
        availableRoomsBeforeLogin: data
      })
    )
  }
}
