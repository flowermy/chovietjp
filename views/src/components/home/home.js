import React, { Component } from 'react';

import {
  Row,
  Modal,
  List,
  Typography,
  notification,
  Badge,
  Icon,
  Divider
} from 'antd'

import { setValueLocalstorage, getValueLocalstorage } from '../../common/function_common/functionCommon'

import Navbar from '../Navbar'
import SectionHomeCate from './components/SectionHomeCate'
import SectionOrder from './components/SectionOrder'
import Footer from '../Footer/Footer'

import Lang from '../Lang/lang'

import banner from '../../common/images/cover.jpg';

import vietlogo from '../../common/images/vietnam.png'
import americalogo from '../../common/images/united-states.png'
import japanlogo from '../../common/images/japan.png'
import thailogo from '../../common/images/thailand.png'

const data = [
  {
    id: 1,
    name: 'Tiếng Việt',
    code: 'vi',
    logo: vietlogo
  },
  {
    id: 2,
    name: '日本語',
    code: 'ja',
    logo: japanlogo
  },
  {
    id: 3,
    name: 'English',
    code: 'en',
    logo: americalogo
  },
  {
    id: 4,
    name: 'ภาษาไทย',
    code: 'th',
    logo: thailogo
  },
];


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visibleSelectLang: getValueLocalstorage('locale') ? false : true,

      ordered: getValueLocalstorage('ordered') ? JSON.parse(getValueLocalstorage('ordered')) : [],
      displayCart: true,
    }

    // bind place
    this.handleCancelMlang = this.handleCancelMlang.bind(this)
    this.handleChooseLang = this.handleChooseLang.bind(this)
    this.handleLang = this.handleLang.bind(this)
    this.order = this.order.bind(this)

  }

  componentDidMount() {
    // if (this.state.displayCart) {
    //   this.openCartIcon();

    //   this.setState({
    //     displayCart: false,
    //   })
    // }

  }
  componentDidUpdate() {

  }

  handleOkMlang() {

  }

  handleCancelMlang() {
    this.setState({
      visibleSelectLang: false
    })
  }

  handleChooseLang(code) {
    this.setState({
      visibleSelectLang: false
    })

    // Save value to localstorage
    setValueLocalstorage('locale', code)

    //
    document.location.reload()

  }

  handleLang = () => {
    this.setState({
      visibleSelectLang: true
    })
  }

  order(record) {
    let preData = this.state.ordered;

    // Check if product is exist
    let check = true;
    if (preData.length > 0) {
      for (let i in preData) {
        if (preData[i].index === record.index) {
          preData[i].number === record.number;
          check = false;
          break;
        }
      }
    }

    if (check) {
      preData.push(record)
    }

    this.setState({
      ordered: preData
    })

    setValueLocalstorage('ordered', JSON.stringify(preData))
  }


  render() {
    return (
      <div>
        <Navbar
          handleLang={this.handleLang}
        />
        <Row className='content-jp'>
          <div id='content-jp-slide'>
            <img src={banner} style={{ width: '100%' }} />
          </div>
        </Row>
        <SectionHomeCate />
        <SectionOrder
          order={this.order}
        />
        <Footer />

        <Lang
          visible={this.state.visibleSelectLang}
          onOk={this.handleOkMlang}
          onCancel={this.handleCancelMlang}
          title={null}
          footer={null}
          closable={false}

          handleChooseLang={this.handleChooseLang}
        />
        {/* <Modal
          visible={this.state.visibleSelectLang}
          onOk={this.handleOkMlang}
          onCancel={this.handleCancelMlang}
          title={null}
          footer={null}
          closable={false}
        >
          <List
            header={null}
            footer={null}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.id} onClick={this.handleChooseLang.bind(this, item.code)}>
                <img src={item.logo} alt="logo-coutry" style={{ marginRight: '24px' }} />{item.name}
              </List.Item>
            )}
          />
        </Modal> */}

        <div className="badgeCart">
          <Badge count={this.state.ordered.length}>
            <a href="/dat-hang"><Icon type="shopping-cart" style={{ color: 'rgb(252, 95, 16)', fontSize: '35px' }} /></a>
          </Badge>
        </div>
      </div >
    )
  }
}
