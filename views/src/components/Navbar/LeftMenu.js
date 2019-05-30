import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl'
import { Menu } from 'antd';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    const { type } = this.props
    return (
      <Menu mode={type ? 'vertical' : 'horizontal'}>
        <Menu.Item key="0">
          <a href="/dat-hang"><FormattedMessage id="Header.order" defaultMessage="Đặt Hàng" /></a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/">
            <FormattedMessage id="Header.shippFee" defaultMessage="Phí Ship" />
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="/about"><FormattedMessage id="Header.getting" defaultMessage="Giới Thiệu" /></a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="/"><FormattedMessage id="Header.contact" defaultMessage="Liên Hệ" /></a>
        </Menu.Item>
        {/* <SubMenu title={<span>Blogs</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu> */}
        {/* <Menu.Item key="4">
          <a href="/">Contact Us</a>
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default LeftMenu;
