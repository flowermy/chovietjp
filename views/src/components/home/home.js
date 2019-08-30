import React, { Component } from 'react';

import {
  Row,
  Badge,
  Icon,
  Col,
  Carousel,
  Divider
} from 'antd'

import { setValueLocalstorage, getValueLocalstorage } from '../../common/function_common/functionCommon'

import Navbar from '../Navbar'
import SectionHomeCate from './components/SectionHomeCate'
import SectionOrder from './components/SectionOrder'
import Footer from '../footer/footer'

import Lang from '../Lang/lang'

import banner from '../../common/images/cover.jpg';

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
        if (preData[i].key === record.key) {
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
        {/* <Row className='content-jp'>
          <Divider orientation="left">Sản Phẩm Hot</Divider>
          <Carousel autoplay>
            <div>
              <Row className="home-hot-product">
                <Col span={12}>
                  <div className="home-hot-product-item">
                    <img src="https://sc02.alicdn.com/kf/UTB8TcLwuqrFXKJk43Ovq6ybnpXaA/100264683/UTB8TcLwuqrFXKJk43Ovq6ybnpXaA.jpg" />
                    <div>
                      <h3>Mì Hảo Hảo Thùng</h3>
                      <p><strong>2150y</strong> / 01 Thùng</p>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-hot-product-item">
                    <img src="https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/H%E1%BA%A1t%20gi%E1%BB%91ng%20rau%20c%E1%BB%A7%20qu%E1%BA%A3/hat-giong-rau-muong-can-1.1.jpg" />
                    <div>
                      <h3>Rau Muống Tươi</h3>
                      <p><strong>290y</strong> / 01 Bó</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="home-hot-product">
                <Col span={12}>
                  <div className="home-hot-product-item">
                    <img src="https://bizweb.dktcdn.net/100/115/861/products/bap-bo-uc-png.png?" />
                    <div>
                      <h3>Bắp Bò Úc</h3>
                      <p><strong>1350y</strong> / 01 kg</p>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-hot-product-item">
                    <img src="https://www.huongnghiepaau.com/wp-content/uploads/2019/01/vit-nuong-chao.jpg" />
                    <div>
                      <h3>Vịt Xiêm ~1.7kg</h3>
                      <p><strong>1480y</strong> / 01 Con</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="home-hot-product">
                <Col span={12}>
                  <div className="home-hot-product-item">
                    <img src="http://thucphamdongnai.com/assets/images/4/thit-ba-roi-86c58c34.jpg" />
                    <div>
                      <h3>Ba Chỉ Có Da</h3>
                      <p><strong>1150y</strong> / 01 kg</p>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="home-hot-product-item">
                    <img src="https://afamilycdn.com/2019/1/27/photo-4-1548563578409282431357-crop-15485658255651572324121.jpg" />
                    <div>
                      <h3>Gà Dai TO</h3>
                      <p><strong>680y</strong> / 01 Con</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel>
        </Row> */}

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
