import {connect} from 'react-redux';
import loginAccountCreator from '../../actions/accountActions/actionCreators';
import LoginForm from "./LoginForm";

const mapStateToProps = (state) => {
  return {
    returnData: state.dataLogin.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataLogin: (username, password) => dispatch(loginAccountCreator(username, password))
  }
};

export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
