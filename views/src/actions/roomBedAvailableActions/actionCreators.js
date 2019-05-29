import { LOAD_ROOM_BED_AVAILABLE_SUCCESS } from './actionName.js';
import GetAllRoomBedAvailableApi from "../../api/getAllRoomBedAvailable";

export default function getAllRoomBedAvailable(startDate, endDate) {
  return (dispatch) => {
    GetAllRoomBedAvailableApi.getAllRoomBedAvailable(startDate, endDate).then(
      (data) => dispatch({
        type: LOAD_ROOM_BED_AVAILABLE_SUCCESS,
        getAllRoomBedAvailable: data
      })
    )
  }
}
