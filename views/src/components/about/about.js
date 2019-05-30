import React, { Component } from 'react';

import {
  Row,
  Timeline,
  Icon
} from 'antd'

import { setValueLocalstorage, getValueLocalstorage } from '../../common/function_common/functionCommon'

import Navbar from '../Navbar'
import Footer from '../footer/footer'

import Lang from '../Lang/lang'


export default class About extends Component {
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

  render() {
    return (
      <div>
        <Navbar
          handleLang={this.handleLang}
        />
        <Row className='about-banner content-jp'>
          <div id='content-jp-slide'>
            {/* <img src={banner} style={{ width: '100%' }} /> */}
          </div>
        </Row>
        {/* <SectionHomeCate /> */}
        <Row className='content-jp about-content'>
          <Timeline mode="left">
            <Timeline.Item color="green">Xuất phát từ những khó khăn trong quá trình sống, học tập và sinh hoạt tại Nhật, </Timeline.Item>
            <Timeline.Item color="green">CHỢ VIỆT JP</Timeline.Item>
            <Timeline.Item>
              Với những con người thực sự đam mê, nhiệt huyết xây dựng một cộng đồng thực phẩm Cho người Việt tại Nhật. 
            </Timeline.Item>
            <Timeline.Item>Chợ Việt JP (Chợ Việt Hiroshima)
              ra đời với sứ mệnh xây dựng môi trường mà tại đó, Quý Khách Hàng có thể lựa chọn những mặt hàng tươi ngon nhất,
              đảm bảo chất lượng, chi phí hợp lý và phù hợp nhất với thói quen người Việt!
            </Timeline.Item>
            <Timeline.Item>VÀ ĐẶC BIỆT: Đặt hàng, nhận hàng TẠI NHÀ vô cùng đơn giản, nhanh chóng và thuận tiện!</Timeline.Item>
            <Timeline.Item>Với những nỗ lực và quyết tâm cao nhất, Chợ Việt JP sẽ không ngừng hoàn thiện, để góp một phần nhỏ trong con đường trường thành tại 
              đất nước Mặt Trời Mọc của Quý Khách Hàng!
            </Timeline.Item>
            <Timeline.Item>Chợ Việt JP Xin Chân Thành Cám Ơn Quý khách hàng!
            </Timeline.Item>
          </Timeline>
        </Row>
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
