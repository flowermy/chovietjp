import React, { Component } from 'react';

import {
  Row,
} from 'antd'

import { setValueLocalstorage, getValueLocalstorage } from '../../common/function_common/functionCommon'

import Navbar from '../Navbar'
import SectionOrder from './components/SectionOrder'
import Footer from '../footer/footer'

import Lang from '../Lang/lang'


export default class Order extends Component {
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
            {/* <img src={banner} style={{ width: '100%' }} /> */}
          </div>
        </Row>
        {/* <SectionHomeCate /> */}
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

        {/* <div className="badgeCart">
          <Badge count={this.state.ordered.length}>
            <Icon type="shopping-cart" style={{ color: 'rgb(252, 95, 16)', fontSize: '35px' }} />
          </Badge>
        </div> */}
      </div >
    )
  }
}
