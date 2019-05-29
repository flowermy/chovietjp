import { LOAD_RESERVATION_CONDITION_BY_ROOM_NAME_SUCCESS } from './actionName.js';
import ReservationConditionByRoomNameApi from "../../api/reservationConditionByRoomName";

export default function loadReservationConditionByRoomName(month, year, roomName) {
  return (dispatch) => {
    ReservationConditionByRoomNameApi.loadReservationConditionByRoomName(month, year, roomName).then(
      (data) => dispatch({
        type: LOAD_RESERVATION_CONDITION_BY_ROOM_NAME_SUCCESS,
        reservationConditionByRoomName: data
      })
    )
  }
}
