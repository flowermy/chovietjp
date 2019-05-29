import { GET_AVAILABLE_ROOM_LIST } from './actionName.js';
import GetAvailableRoomListApi from "../../api/getAvailableRoomList";

export default function getAvailableRoomList() {
  return (dispatch) => {
    GetAvailableRoomListApi.getAvailableRoomList().then(
      (data) => dispatch({
        type: GET_AVAILABLE_ROOM_LIST,
        getAvailableRoomList: data
      })
    )
  }
}
