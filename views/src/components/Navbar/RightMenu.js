import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl'
import { Menu, Icon } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  constructor(props) {
    super(props)

    // bin place
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLang = this.handleLang.bind(this)

  }

  handleLogout() {
    localStorage.clear();

  }

  handleLang(){
    this.props.handleLang()
  }


  render() {
    const { type } = this.props

    return (
      <Menu mode={type ? 'vertical' : 'horizontal'}>
        <Menu.Item key="1">
          <a href="/"><FormattedMessage id="Header.login" defaultMessage="Đăng Nhập"/></a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="/" onClick={this.handleLogout}><FormattedMessage id="Header.register" defaultMessage="Đăng Ký"/></a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#" onClick={this.handleLang}><Icon type="global" />lang</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
