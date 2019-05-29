import { LOAD_RESERVATION_CONDITION_BY_USER_SUCCESS } from './actionName.js';
import ReservationConditionByUserApi from "../../api/reservationConditionByUser";

function loadReservationConditionByUser(month, year, riyousyaId) {
  return (dispatch) => {
    ReservationConditionByUserApi.loadReservationConditionByUser(month, year, riyousyaId).then(
      (data) => dispatch({
        type: LOAD_RESERVATION_CONDITION_BY_USER_SUCCESS,
        reservationConditionByUser: data
      })
    )
  }
}

function loadRiyousyaIdByRiyousyaName(month, year, riyousyaId) {
  return (dispatch) => {
    ReservationConditionByUserApi.loadRiyousyaIdByRiyousyaName(month, year, riyousyaId, dispatch);
  }
}

function loadNyutaishoJokyoByRiyousyaId(riyousyaId) {
  return (dispatch) => {
    ReservationConditionByUserApi.loadNyutaishoJokyoByRiyousyaId(riyousyaId, dispatch)
  }
}

function loadGaihakuNyuinByRiyousyaId(riyousyaId) {
  return (dispatch) => {
    ReservationConditionByUserApi.loadGaihakuNyuinByRiyousyaId(riyousyaId, dispatch)
  }
}


export { loadReservationConditionByUser, loadRiyousyaIdByRiyousyaName, loadNyutaishoJokyoByRiyousyaId, loadGaihakuNyuinByRiyousyaId }
