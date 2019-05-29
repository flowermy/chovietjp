import { GET_RIYOUSYA_BY_TEXT_SEARCH_SUCCESS } from './actionName.js';
import getRiyousyaByTextSearchApi from "../../api/getRiyousyaByTextSearch";

export default function getRiyousyaByTextSearchSuccess(roomChangeInput) {
  return (dispatch) => {
    getRiyousyaByTextSearchApi.getRiyousyaByTextSearch(roomChangeInput).then(
      (data) => dispatch({
        type: GET_RIYOUSYA_BY_TEXT_SEARCH_SUCCESS,
        getRiyousyaByTextSearch: data
      })
    )
  }
}
