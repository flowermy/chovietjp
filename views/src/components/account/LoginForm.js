import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import TextFieldGroup from '../../ui-elements/TextFieldGroup';
import validateInput from './validateLogin';
import Logo from './media/logo.png';
import { convertMessageByCode } from '../../common/function_common/functionCommon';
import './Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorsValidate: {},
      errorLogin: {},
      loginForm: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  isValid() {
    const {errorsValidate, isValid} = validateInput(this.state);
    if (!isValid) {
      this.setState({errorsValidate});
    }
    return isValid;
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value, errorLogin: {}
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value, errorLogin: {}
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errorsValidate: {}, res: {}, errorLogin: {} });
      this.props.dataLogin(this.state.username, this.state.password);
    }
  }

  render() {
    document.body.classList.add('login-page');
    const {errorsValidate, username, password } = this.state;
    const { returnData } = this.props;
    let errorLogin = '';
    if (returnData) {
      if (returnData.response) {
        if (returnData.response.data) {
          if (returnData.response.data.error) {
            if (returnData.response.data.error.code) {
              errorLogin = returnData.response.data.error.code;
            }
          }
        }
      }
    }
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return (
        <div className="hbm-login">
          <div id="login-container" className="login-form text-center">
            <div className="form formLogin">
              <img src={Logo} alt="Aibolit"/>
              <h1>空床管理</h1>
              <h2>ユーザ管理</h2>
              <form onSubmit={this.onSubmit} id="pages-login">
                <TextFieldGroup
                  field="ログインIDを入力してください"
                  label="ログインIDを入力してください"
                  value={username}
                  error={errorsValidate.username}
                  onChange={this.onUsernameChange}
                  textSpan="ログインID"
                />
                <TextFieldGroup
                  field="パスワードを入力してください"
                  label="パスワードを入力してください"
                  value={password}
                  type="password"
                  onChange={this.onPasswordChange}
                  error={errorsValidate.password}
                  textSpan="パスワード"
                />
                {(errorLogin === 'LOGIN_FAIL' && (!errorsValidate.username && !errorsValidate.password)) ? <span>{convertMessageByCode('LOGIN_FAIL')}</span> : null}
                <button id="btn-pages-login">ログイン</button>
                {/*<Link to="/">プラスワン介護施設空き状況一覧</Link>*/}
              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        //pathname: "/login", state: { from: props.location }
        <Redirect to={{pathname: "/available-room"}}/>
      )
    }
  }
}

export default LoginForm;

