import { LOAD_ROOM_BED_TEMP_BOOK_SUCCESS } from './actionName.js';
import GetAllRoomBedTempBook from "../../api/getAllRoomBedTempBook";

export default function getAllRoomBedAvailable(startDate, endDate) {
  return (dispatch) => {
    GetAllRoomBedTempBook.getAllRoomBedTempBook(startDate, endDate).then(
      (data) => dispatch({
        type: LOAD_ROOM_BED_TEMP_BOOK_SUCCESS,
        getAllRoomBedTempBook: data
      })
    )
  }
}
