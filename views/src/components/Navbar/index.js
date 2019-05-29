import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button, Icon } from 'antd';

import Logo from '../../common/images/logo_chovietjp.jpg';

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			current: 'mail',
			visible: false
		}

		// bind place
		this.showDrawer = this.showDrawer.bind(this)
		this.onClose = this.onClose.bind(this)

		this.handleLang = this.handleLang.bind(this)

	}

	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	handleLang = () => {
		this.props.handleLang()
	}

	render() {
		return (
			<nav className="menuBar">
				<div className="logo">
					<a href='/' style={{padding: '0px'}}><img src={Logo} style={{maxHeight: '60px'}}/></a>
				</div>
				<div className="menuCon">
					<div className="leftMenu">
						<LeftMenu />
					</div>
					<div className="rightMenu">
						<RightMenu
							handleLang={this.handleLang}
						/>
					</div>
					<Button className="barsMenu" type="primary" onClick={this.showDrawer}>
					<Icon type="menu" />
					</Button>
					<Drawer
						title="Menu"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						<LeftMenu type={true} />
						<RightMenu
							type={true}
							handleLang={this.handleLang}
						/>
					</Drawer>

				</div>
			</nav>
		);
	}
}

export default Navbar;
