import 'whatwg-fetch';
import axios from 'axios';

let AccountApi = {
  login(username, password) {
    return axios('/api/v1/login', {
      method: 'POST',
      data: {
        username: username,
        password: password,
      }
    }).then((res) => {
      const token = res.data.token;

      localStorage.setItem('jwtToken', token);
      window.location.reload();
    }).catch((err) => {
      if (!err.response) {
        // network error
        window.location.reload();
      } else {
        return err;
      }
    });
  }
};
export default AccountApi;
