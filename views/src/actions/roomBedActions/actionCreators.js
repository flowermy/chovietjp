import { LOAD_ROOM_BED_SUCCESS } from './actionName.js';
import GetAllRoomBedApi from "../../api/getAllRoomBed";

export default function getAllRoomBed() {
  return (dispatch) => {
    GetAllRoomBedApi.getAllRoomBed().then(
      (data) => dispatch({
        type: LOAD_ROOM_BED_SUCCESS,
        getAllRoomBed: data
      })
    )
  }
}
