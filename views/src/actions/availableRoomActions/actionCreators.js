import { LOAD_AVAILABLE_ROOMS_SUCCESS } from '../../actions/availableRoomActions/actionName.js';
import availableRoomApi from "../../api/availableRoom";

export default function loadAvailableRooms(month, year, roomType, roomName, startDate, endDate) {
  return (dispatch) => {
    availableRoomApi.loadAllAvailableRooms(month, year, roomType, roomName, startDate, endDate).then(
      (data) => dispatch({
        type: LOAD_AVAILABLE_ROOMS_SUCCESS,
        availableRooms: data
      })
    )
  }
}
