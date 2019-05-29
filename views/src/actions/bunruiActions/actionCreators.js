import { LOAD_BUNRUI_SUCCESS } from './actionName.js';
import GetAllBunruiApi from "../../api/getAllBunrui";

export default function getAllRoomBed() {
  return (dispatch) => {
    GetAllBunruiApi.getAllBunrui().then(
      (data) => dispatch({
        type: LOAD_BUNRUI_SUCCESS,
        getAllBunrui: data
      })
    )
  }
}
