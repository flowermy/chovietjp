import { GET_AVATAR_SUCCESS } from '../../actions/getAvatarActions/actionName.js';
import GetAvatar from "../../api/getAvatar";

export default function getAvatar() {
  return (dispatch) => {
    GetAvatar.getAvatar().then(
      (data) => dispatch({
        type: GET_AVATAR_SUCCESS,
        getAvatar: data
      })
    )
  }
}
