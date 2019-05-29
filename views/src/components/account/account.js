import React, { Component } from 'react';

import LoginForm from './LoginForm';

export default class Account extends React.Component {
  componentDidMount() {
    document.title = "空床管理";
  }

  render() {
    return (
      <div className="row">
        <LoginForm />
      </div>
    );
  }
}
